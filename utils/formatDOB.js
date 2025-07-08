export const formatDOB = (dateString) => {
  const dob = new Date(dateString);
  const day = String(dob.getDate()).padStart(2, '0');
  const month = String(dob.getMonth() + 1).padStart(2, '0');
  const year = dob.getFullYear();

  const formatted = `${day}/${month}/${year}`;
  return formatted;
};
