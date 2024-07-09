export async function apiCall(shouldSucceed) {
  return new Promise((res, rej) => {
    setTimeout(() => shouldSucceed ? res(null) : rej(null), 500);
  });
}