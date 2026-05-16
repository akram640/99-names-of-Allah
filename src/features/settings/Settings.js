export function renderSettings({ store }) {
  const weeklyTarget = store.getPreference("weeklyTarget");

  return `
    <section class="settings-screen" aria-labelledby="settings-title">
      <div class="section-heading">
        <p class="eyebrow">Preferences</p>
        <h2 id="settings-title">Settings</h2>
      </div>

      <div class="settings-grid">
        <article class="settings-panel">
          <h3>Daily Reminders</h3>

          <div class="setting-row">
            <div>
              <p>Morning reflection</p>
              <span>Receive a gentle prompt at your chosen time.</span>
            </div>
            <input data-pref="morningTime" type="time" value="${store.getPreference("morningTime")}" />
            <input data-pref="morningReminder" type="checkbox" ${store.getPreference("morningReminder") ? "checked" : ""} />
          </div>

          <div class="setting-row">
            <div>
              <p>Evening review</p>
              <span>Close the day with a short memorization check.</span>
            </div>
            <input data-pref="eveningTime" type="time" value="${store.getPreference("eveningTime")}" />
            <input data-pref="eveningReminder" type="checkbox" ${store.getPreference("eveningReminder") ? "checked" : ""} />
          </div>
        </article>

        <article class="settings-panel accent">
          <h3>Weekly Target</h3>
          <p class="target-value" data-weekly-target-value>${weeklyTarget} names</p>
          <input data-weekly-target type="range" min="1" max="21" value="${weeklyTarget}" />
        </article>
      </div>
    </section>
  `;
}
