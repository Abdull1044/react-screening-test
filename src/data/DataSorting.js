import { Articles } from "./";
const sortArticles = {
  // Soring On Bases of upVoetes
  upvotes: () => [...Articles].sort((a, b) => b.upvotes - a.upvotes),
  // soring data accoring to most recent date
  date: () => [...Articles].sort((a, b) => new Date(b.date) - new Date(a.date)),
  // return orignal data
  reset: () => Articles,
};

export default sortArticles;
