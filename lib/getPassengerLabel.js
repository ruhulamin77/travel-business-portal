export function getPassengerLabel(type, fields, currentIndex) {
  let count = 0;
  for (let i = 0; i <= currentIndex; i++) {
    if (fields[i].type === type) count++;
  }
  return `${type.toUpperCase()} ${count}`;
}
