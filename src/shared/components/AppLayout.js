export function renderAppLayout({ routes, activeRoute, masteredCount, theme, content }) {
  const navItems = Object.entries(routes)
    .map(([key, route]) => {
      const isActive = activeRoute === key;
      return `
        <a class="nav-link ${isActive ? "is-active" : ""}" href="#${key}" data-route="${key}">
          <span class="nav-icon" aria-hidden="true">${route.icon}</span>
          <span>${route.label}</span>
        </a>
      `;
    })
    .join("");

  return `
    <div class="app-shell">
      <button class="theme-toggle" data-action="toggle-theme" type="button" aria-label="Switch to ${theme === "dark" ? "light" : "dark"} theme" aria-pressed="${theme === "dark"}">
        <span class="theme-toggle-icon" aria-hidden="true">${theme === "dark" ? "☾" : "☼"}</span>
        <span>${theme === "dark" ? "Dark" : "Light"}</span>
      </button>

      <aside class="sidebar">
        <div class="brand-block">
          <p class="eyebrow">Al-Asma-ul-Husna</p>
          <h1>99 Names of Allah</h1>
        </div>

        <div class="progress-panel">
          <span>${masteredCount}</span>
          <p>of 99 names marked as mastered</p>
        </div>

        <nav class="side-nav" aria-label="Primary navigation">
          ${navItems}
        </nav>
      </aside>

      <div class="main-column">
        <header class="topbar">
          <a class="mobile-brand" href="#daily" data-route="daily">99 Names of Allah</a>
          <nav class="mobile-nav" aria-label="Mobile navigation">
            ${navItems}
          </nav>
        </header>

        <main class="content-area">
          ${content}
        </main>
      </div>
    </div>
  `;
}
