import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout";
import About from "./Components/About";
import BlogPost from "./Components/BlogPost";
import Contact from "./Components/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
              path: "/about",
              element: <About />
            },
            {
              path: "/blog",
              element: <BlogPost />
            },
            {
              path: "/contact",
              element: <Contact />
            }
        ]
    },
  ]);

export default router;