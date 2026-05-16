import { renderNameActions } from "../../shared/components/NameActions.js";

export function renderNamesLibrary({ names, store }) {
  const cards = names
    .map((name) => {
      const isMastered = store.isMastered(name.id);
      const search = [
        name.id,
        name.arabic,
        name.transliteration,
        name.meaning,
        name.explanation,
      ].join(" ").toLowerCase();

      return `
        <article class="name-card" data-name-card data-search="${search}">
          <div class="card-topline">
            <span>${String(name.id).padStart(2, "0")}</span>
            <span class="status-dot ${isMastered ? "is-mastered" : ""}" title="${isMastered ? "Mastered" : "Learning"}"></span>
          </div>
          <h3 class="arabic-name small">${name.arabic}</h3>
          <p class="transliteration small">${name.transliteration}</p>
          <p class="meaning small">${name.meaning}</p>
          <p class="card-explanation">${name.explanation}</p>
          ${renderNameActions(name, isMastered)}
        </article>
      `;
    })
    .join("");

  return `
    <section class="library-screen" aria-labelledby="library-title">
      <div class="section-heading split">
        <div>
          <p class="eyebrow">Library</p>
          <h2 id="library-title">The 99 Names</h2>
        </div>
        <label class="search-field">
          <span>Search</span>
          <input data-search type="search" placeholder="Name, meaning, or number" />
        </label>
      </div>

      <div class="names-grid">
        ${cards}
      </div>
    </section>
  `;
}
