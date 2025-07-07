const typeCounters = {};
export const getPassengerLabel = (type) => {
  typeCounters[type] = (typeCounters[type] || 0) + 1;
  return `${type.toUpperCase()} ${typeCounters[type]}`;
};
