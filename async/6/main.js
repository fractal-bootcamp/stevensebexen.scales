async function operation(ms) {
  return new Promise(res => setTimeout(() => res(ms), ms));
}

async function main() {
  const promises = [operation(500), operation(2000), operation(1000), operation(250)];
  const result = await Promise.race(promises);
  console.log(result);
}

main();