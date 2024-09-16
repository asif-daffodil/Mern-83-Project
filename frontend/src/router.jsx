import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Blog from "./Pages/Blog";

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
              path: "/contact",
              element: <Contact />
            },
            {
              path: "/about-us",
              element: <About />
            },
            {
              path: "/blog",
              element: <Blog/>
            }
        ]
    },
  ]);

export default router;