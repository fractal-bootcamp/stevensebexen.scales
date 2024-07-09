function callbackHell() {
  setTimeout(() => {
    console.log('First');
    setTimeout(() => {
      console.log('Second');
      setTimeout(() => {
        console.log('Third');
      }, 1000);
    }, 1000);
  }, 1000);
}

function promiseChain() {
  return new Promise(res => {
    setTimeout(() => {
      res(null);
      console.log('First');
    }, 1000)
  })
    .then(() => {
      return new Promise(res => {
        setTimeout(() => {
          res(null);
          console.log('Second');
        }, 1000)
      })
    })
    .then(() => {
      return new Promise(res => {
        setTimeout(() => {
          res(null);
          console.log('Third');
        }, 1000)
      })
    });
}

function main() {
  callbackHell();
  setTimeout(() => promiseChain(), 3000);
}

main();