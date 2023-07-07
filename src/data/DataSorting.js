import { Articles } from "./";
const sortArticles = {
    upvotes: () => {
      return [...Articles].sort((a, b) => b.upvotes - a.upvotes);
    },
};

export default sortArticles;
