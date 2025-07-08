export function getTwoDaysAheadISO() {
  const date = new Date();
  date.setDate(date.getDate() + 2);
  return date.toISOString().split('T')[0];
}
