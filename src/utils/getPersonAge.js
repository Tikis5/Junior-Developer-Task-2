export default function getPersonAge(person) {
  const birth = new Date(person.Birth);
  const livingAge = person.Death ? new Date(person.Death) : new Date();
  const diff = livingAge.getTime() - birth.getTime();
  const msInYear = 1000 * 3600 * 24 * 365;
  const result = diff / msInYear;
  return Math.floor(result);
}
