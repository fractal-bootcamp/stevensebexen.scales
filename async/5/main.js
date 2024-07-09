import { apiCall } from "./api.js";

function tryWrapper(func) {
  return async function() {
    try {
      await func();
      console.log('Success');
    } catch (e) {
      console.error('Failure:', e);
    }
  };
}

function main() {
  const succeed = tryWrapper(() => apiCall(true));
  const fail = tryWrapper(() => apiCall(false));

  succeed();
  fail();
}

main();