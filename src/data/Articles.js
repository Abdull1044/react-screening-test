const Articles = [];

const getRandomDate = () => {
  const start = new Date(1900, 0, 1);
  const end = new Date();

  const randomTime =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  const randomDate = new Date(randomTime);

  // Format the date as "YYYY-MM-DD"
  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, "0");
  const day = String(randomDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

for (let i = 1; i < 25; i++) {
  Articles.push({
    title: `Article ${i}`,
    upvotes: Math.floor(Math.random() * (100 - 1)) + 1,
    date: getRandomDate(),
  });
}
export default Articles;
