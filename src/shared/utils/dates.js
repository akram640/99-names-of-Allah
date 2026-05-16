const rotationStart = new Date(2026, 0, 1);
const millisecondsPerDay = 24 * 60 * 60 * 1000;

export function getDailyName(names, date = new Date()) {
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const elapsedDays = Math.floor((today - rotationStart) / millisecondsPerDay);
  const index = ((elapsedDays % names.length) + names.length) % names.length;

  return names[index];
}

export function formatDisplayDate(date = new Date()) {
  return new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(date);
}
