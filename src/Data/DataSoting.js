import {Articles} from './'
const sortArticles = {
    date: () => {
      return [...Articles].sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    upvotes: () => {
      return [...Articles].sort((a, b) => b.upvotes - a.upvotes);
    },
  };

  export default sortArticles