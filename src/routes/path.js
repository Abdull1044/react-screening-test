function path(root, subLink) {
  return `${root}${subLink}`;
}

const ROOTS_DASHBOARD = "/dashboard";
export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  articles:path(ROOTS_DASHBOARD, "/articles")
};

