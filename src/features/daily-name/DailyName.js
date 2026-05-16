import { renderNameActions } from "../../shared/components/NameActions.js";
import { formatDisplayDate, getDailyName } from "../../shared/utils/dates.js";

export function renderDailyName({ names, store }) {
  const dailyName = getDailyName(names);
  const isMastered = store.isMastered(dailyName.id);

  return `
    <section class="daily-screen" aria-labelledby="daily-title">
      <div class="section-heading">
        <p class="eyebrow">${formatDisplayDate()}</p>
        <h2 id="daily-title">Name of the Day</h2>
      </div>

      <article class="daily-card">
        <div class="ornament" aria-hidden="true"></div>
        <p class="name-number">${String(dailyName.id).padStart(2, "0")}</p>
        <h3 class="arabic-name">${dailyName.arabic}</h3>
        <p class="transliteration">${dailyName.transliteration}</p>
        <p class="meaning">${dailyName.meaning}</p>
        <p class="reflection">${dailyName.reflection}</p>
        ${renderNameActions(dailyName, isMastered)}
      </article>

      <div class="insight-grid">
        <article class="info-panel">
          <p class="eyebrow">Root</p>
          <h3>${dailyName.root || "Review source"}</h3>
          <p>${dailyName.rootNote || "A short root note can be added after scholarly review."}</p>
        </article>

        <article class="info-panel dark">
          <p class="eyebrow">Practice</p>
          <h3>Carry the meaning today</h3>
          <p>Pause once during the day and make du'a using this Name with presence and gratitude.</p>
        </article>
      </div>
    </section>
  `;
}
