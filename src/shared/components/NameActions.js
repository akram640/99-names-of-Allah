export function renderNameActions(name, isMastered) {
  return `
    <div class="action-row">
      <button class="button primary" data-action="toggle-mastered" data-id="${name.id}">
        ${isMastered ? "Mastered" : "Mark as Mastered"}
      </button>
      <button class="button secondary" data-action="speak-name" data-id="${name.id}">
        Listen
      </button>
      <button class="button tertiary" data-action="learn-more" data-id="${name.id}">
        Learn More
      </button>
    </div>
  `;
}
