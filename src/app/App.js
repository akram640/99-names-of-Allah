import { namesOfAllah } from "../data/names.js";
import { renderDailyName } from "../features/daily-name/DailyName.js";
import { renderNamesLibrary } from "../features/names-library/NamesLibrary.js";
import { renderSettings } from "../features/settings/Settings.js";
import { renderAppLayout } from "../shared/components/AppLayout.js";
import { getStore } from "../shared/utils/storage.js";

const routes = {
  daily: {
    label: "Daily Name",
    icon: "✦",
    render: renderDailyName,
  },
  library: {
    label: "All Names",
    icon: "☰",
    render: renderNamesLibrary,
  },
  settings: {
    label: "Settings",
    icon: "⚙",
    render: renderSettings,
  },
};

const getCurrentRoute = () => {
  const route = window.location.hash.replace("#", "");
  return routes[route] ? route : "daily";
};

export function createApp(root) {
  const store = getStore();

  const render = () => {
    const route = getCurrentRoute();
    const activeRoute = routes[route];
    const content = activeRoute.render({ names: namesOfAllah, store, render });

    root.innerHTML = renderAppLayout({
      routes,
      activeRoute: route,
      masteredCount: store.getMastered().length,
      content,
    });

    root
      .querySelectorAll("[data-route]")
      .forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          window.location.hash = link.dataset.route;
        });
      });

    root
      .querySelectorAll("[data-action='toggle-mastered']")
      .forEach((button) => {
        button.addEventListener("click", () => {
          store.toggleMastered(Number(button.dataset.id));
          render();
        });
      });

    root
      .querySelectorAll("[data-action='speak-name']")
      .forEach((button) => {
        button.addEventListener("click", () => {
          const name = namesOfAllah.find((item) => item.id === Number(button.dataset.id));
          if (!name || !window.speechSynthesis) return;

          const utterance = new SpeechSynthesisUtterance(name.transliteration);
          utterance.rate = 0.78;
          utterance.pitch = 0.9;
          window.speechSynthesis.cancel();
          window.speechSynthesis.speak(utterance);
        });
      });

    const searchInput = root.querySelector("[data-search]");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        const cards = root.querySelectorAll("[data-name-card]");
        const query = searchInput.value.trim().toLowerCase();

        cards.forEach((card) => {
          card.hidden = !card.dataset.search.includes(query);
        });
      });
    }

    const weeklyTarget = root.querySelector("[data-weekly-target]");
    if (weeklyTarget) {
      weeklyTarget.addEventListener("input", () => {
        store.setPreference("weeklyTarget", weeklyTarget.value);
        root.querySelector("[data-weekly-target-value]").textContent =
          `${weeklyTarget.value} names`;
      });
    }

    root.querySelectorAll("[data-pref]").forEach((control) => {
      control.addEventListener("change", () => {
        store.setPreference(control.dataset.pref, control.type === "checkbox" ? control.checked : control.value);
      });
    });
  };

  window.addEventListener("hashchange", render);
  render();
}
