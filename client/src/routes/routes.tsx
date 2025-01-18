import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "@/components/home/Home";
import BuyCredit from "@/pages/BuyCredit";
import Result from "@/pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/buyCredit",
        element: <BuyCredit />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);

export default router;
