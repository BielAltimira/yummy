export default function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
  const day = String(today.getDate()).padStart(2, '0'); // Add leading zero for single-digit days

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}