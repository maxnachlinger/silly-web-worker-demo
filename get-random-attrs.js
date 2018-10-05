const letters = '0123456789ABCDEF';

const getRandomColor = () => {
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomAttrs = ({ width, height }) => ({
  x: getRandomInt(0, width),
  y: getRandomInt(0, height),
  size: getRandomInt(0, 15),
  color: `rgba(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${Math.random()})`,
});
