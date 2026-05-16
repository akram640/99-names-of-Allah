function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function renderLearnMoreModal(name) {
  const detail = name.detail;
  const paragraphs = detail.paragraphs
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
  const sources = detail.sources
    .map((source) => `<li>${escapeHtml(source.label)}</li>`)
    .join("");

  return `
    <div class="modal-backdrop" data-modal-backdrop>
      <section class="learn-modal" role="dialog" aria-modal="true" aria-labelledby="learn-more-title">
        <button class="icon-close" data-action="close-learn-more" aria-label="Close">×</button>
        <p class="eyebrow">Learn More</p>
        <h2 id="learn-more-title">${escapeHtml(detail.title)}</h2>
        <div class="modal-name-line">
          <span class="modal-arabic" dir="rtl">${escapeHtml(name.arabic)}</span>
          <span>${escapeHtml(name.transliteration)}</span>
        </div>
        <p class="modal-summary">${escapeHtml(detail.summary)}</p>
        <div class="modal-body">
          ${paragraphs}
        </div>
        <div class="modal-practice">
          <h3>Practice</h3>
          <p>${escapeHtml(detail.practice)}</p>
        </div>
        <div class="modal-sources">
          <h3>Sources Used</h3>
          <ul>${sources}</ul>
        </div>
      </section>
    </div>
  `;
}
