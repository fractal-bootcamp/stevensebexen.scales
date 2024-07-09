async function awaitExample() {
  console.log('Start await');
  await new Promise(res => setTimeout(res, 1000));
  console.log('1');
  await new Promise(res => setTimeout(res, 1000));
  console.log('2');
  await new Promise(res => setTimeout(res, 1000));
  console.log('3');
  console.log('End await');
}

function main() {
  console.log('Start main');
  awaitExample();
  console.log('End main');
}

main();