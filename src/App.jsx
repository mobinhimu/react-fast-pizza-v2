import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import "./index.css";
import Cart from "./features/cart/Cart";
import Menu from "./features/menu/Menu";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/order",
          element: <CreateOrder />,
        },
        {
          path: "/order/orderId",
          element: <Order />,
        },
      ],
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/react-fast-pizza-v2/" }
);

function App() {
  console.log(import.meta.env.DEV);
  return <RouterProvider router={router} />;
}

export default App;
