import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Footer } from "./components/footer/Footer";
import AuthorPage from "./pages/authorpage/AuthorPage";
import { Blog } from "./pages/bloglist/Blog";
import Home from "./pages/home/Home";
import { SinglePost } from "./pages/singlepost/SinglePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/singlepost",
        element: <SinglePost />,
      },
      {
        path: "/author",
        element: <AuthorPage />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
