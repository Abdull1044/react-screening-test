import { CommonLayout } from "../Layout";
import { Navigate, useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Spin } from "antd";
import { PATH_DASHBOARD } from "./path";

const Wrapper = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <Spin size="large" />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

const Articles = Wrapper(lazy(() => import("../components/Articles")));

const Error = Wrapper(lazy(() => import("../components/ErrorPage")));

export default function Router() {
  return useRoutes([
    {
      path: PATH_DASHBOARD.root,
      element: <CommonLayout />,
      children: [
        { path: PATH_DASHBOARD.articles, element: <Articles /> },
      ],
    },
    {
      path: "/",
      element: <CommonLayout />,
      children: [
        { path: "/", element: <Navigate to="/dashboard/articles" replace /> },
        { path: "404", element: <Error /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
