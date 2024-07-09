function syncFunction() {
  console.log('Sync function');
}

async function asyncFunction() {
  return new Promise(res => setTimeout(() => {res(null); console.log('Async function')}, 1000));
}

function main() {
  asyncFunction();
  syncFunction();
  console.log('After function calls');
  // Expected:
  // Sync function
  // After function calls
  // Async function
}

main();