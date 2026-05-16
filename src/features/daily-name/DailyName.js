import { renderNameActions } from "../../shared/components/NameActions.js";
import { formatDisplayDate, getDailyName } from "../../shared/utils/dates.js";

export function renderDailyName({ names, reference, store }) {
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
        <p class="explanation">${dailyName.explanation}</p>
        <p class="reflection">${dailyName.reflection}</p>
        ${renderNameActions(dailyName, isMastered)}
      </article>

      <div class="insight-grid">
        <article class="info-panel">
          <p class="eyebrow">${dailyName.root ? "Root" : "Meaning"}</p>
          <h3>${dailyName.root || dailyName.transliteration}</h3>
          <p>${dailyName.rootNote || dailyName.explanation}</p>
        </article>

        <article class="info-panel dark">
          <p class="eyebrow">Practice</p>
          <h3>${reference?.overview.title || "Carry the meaning today"}</h3>
          <p>${reference?.memorization.approach || "Pause once during the day and make du'a using this Name with presence and gratitude."}</p>
        </article>
      </div>
    </section>
  `;
}
