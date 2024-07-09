export async function apiCall() {
  const randomNumber = Math.floor(Math.random() * 100);
  return new Promise(res => setTimeout(() => res(randomNumber), 250));
}