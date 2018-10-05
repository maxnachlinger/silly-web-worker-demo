self.addEventListener('message', (event) => {
  const { width, height, amountPoints } = event.data;

  importScripts('get-random-attrs.js');
  // now everything in the script above is globally accessible - ugh

  let currentAmtPoints = 0;

  const intervalId = setInterval(() => {
    if (++currentAmtPoints >= amountPoints) {
      clearInterval(intervalId);
    }

    const result = getRandomAttrs({ width, height });
    self.postMessage(result);
  }, 24);
});
