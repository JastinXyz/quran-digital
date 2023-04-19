import localFont from 'next/font/local';
const outfit = localFont({
  src: [
    {
      path: "../fonts/Outfit/Outfit-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/Outfit/Outfit-Bold.ttf",
      weight: "700"
    }
  ],
});

const philosopher = localFont({
  src: [
    {
      path: "../fonts/Philosopher/Philosopher-Regular.ttf",
      weight: "400",
    },
    {
      path: "../fonts/Philosopher/Philosopher-Bold.ttf",
      weight: "700"
    }
  ],
});


module.exports = {
    outfit,
    philosopher
}