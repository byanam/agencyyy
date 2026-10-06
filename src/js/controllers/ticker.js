const TZ_OPTS = { timeZone: 'Asia/Kolkata' };

export function formatKolkataTime(date = new Date()) {
  const timeStr = date.toLocaleTimeString('en-US', Object.assign({}, TZ_OPTS, {
    hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true
  }));
  const dateStr = date.toLocaleDateString('en-US', Object.assign({}, TZ_OPTS, {
    month: 'short', day: 'numeric', year: 'numeric'
  }));
  return { timeStr, dateStr };
}
