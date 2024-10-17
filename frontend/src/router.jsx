import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

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
              path: "/sign-up",
              element: <SignUp />
            },
            {
              path: "/sign-in",
              element: <SignIn />
            },
        ]
    },
  ]);

export default router;