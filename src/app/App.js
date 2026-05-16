import { contentReference, namesOfAllah } from "../data/names.js";
import { renderDailyName } from "../features/daily-name/DailyName.js";
import { renderNamesLibrary } from "../features/names-library/NamesLibrary.js";
import { renderSettings } from "../features/settings/Settings.js";
import { renderAppLayout } from "../shared/components/AppLayout.js";
import { renderLearnMoreModal } from "../shared/components/LearnMoreModal.js";
import { playNameAudio } from "../shared/utils/audio.js";
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

function openLearnMoreModal(name) {
  const modalHost = document.createElement("div");
  modalHost.innerHTML = renderLearnMoreModal(name);
  document.body.append(modalHost);

  const close = () => {
    modalHost.remove();
    document.removeEventListener("keydown", closeOnEscape);
  };

  const closeOnEscape = (event) => {
    if (event.key === "Escape") {
      close();
    }
  };

  modalHost
    .querySelector("[data-action='close-learn-more']")
    .addEventListener("click", close);
  modalHost
    .querySelector("[data-modal-backdrop]")
    .addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        close();
      }
    });
  document.addEventListener("keydown", closeOnEscape);
}

export function createApp(root) {
  const store = getStore();

  const render = () => {
    const theme = store.getTheme();
    const route = getCurrentRoute();
    const activeRoute = routes[route];

    document.documentElement.dataset.theme = theme;

    const content = activeRoute.render({
      names: namesOfAllah,
      reference: contentReference,
      render,
      store,
    });

    root.innerHTML = renderAppLayout({
      routes,
      activeRoute: route,
      masteredCount: store.getMastered().length,
      theme,
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
      .querySelectorAll("[data-action='toggle-theme']")
      .forEach((button) => {
        button.addEventListener("click", () => {
          const nextTheme = store.toggleTheme();
          document.documentElement.dataset.theme = nextTheme;
          render();
        });
      });

    root
      .querySelectorAll("[data-action='speak-name']")
      .forEach((button) => {
        button.addEventListener("click", async () => {
          const name = namesOfAllah.find((item) => item.id === Number(button.dataset.id));
          if (!name) return;

          button.disabled = true;
          await playNameAudio(name);
          button.disabled = false;
        });
      });

    root
      .querySelectorAll("[data-action='learn-more']")
      .forEach((button) => {
        button.addEventListener("click", () => {
          const name = namesOfAllah.find((item) => item.id === Number(button.dataset.id));
          if (!name) return;

          openLearnMoreModal(name);
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
