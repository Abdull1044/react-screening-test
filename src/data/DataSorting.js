import { Articles } from "./";
const sortArticles = {
    upvotes: () => {
      return [...Articles].sort((a, b) => b.upvotes - a.upvotes);
    },
  date: () => {
    return [...Articles].sort((a, b) => new Date(b.date) - new Date(a.date));
  },

};

export default sortArticles;
