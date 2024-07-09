import { apiCall } from "./api.js";

async function sequentialFetch() {
  const start = Date.now();
  const response1 = await apiCall();
  const response2 = await apiCall();
  const response3 = await apiCall();
  const response4 = await apiCall();
  const response5 = await apiCall();
  console.log(`Sequential fetch took ${Date.now() - start} ms.`);
}

async function parallelFetch() {
  const start = Date.now();
  const promise1 = apiCall();
  const promise2 = apiCall();
  const promise3 = apiCall();
  const promise4 = apiCall();
  const promise5 = apiCall();
  await Promise.all([promise1, promise2, promise3, promise4, promise5]);
  console.log(`Parallel fetch took ${Date.now() - start} ms.`);
}

function main() {
  sequentialFetch();
  parallelFetch();
}

main();