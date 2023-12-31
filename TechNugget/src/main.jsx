import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import AddProduct from "./components/AddProduct/AddProduct";
import BrandProducts from "./components/BrandProducts/BrandProducts";
import Error from "./components/Error/Error";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./Providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import Cart from "./components/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart/:id",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b8a10-brandshop-server-side-tanvir0908.vercel.app/carts/${params.id}`
          ),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:id",
        element: <BrandProducts />,
        loader: ({ params }) =>
          fetch(
            `https://b8a10-brandshop-server-side-tanvir0908.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b8a10-brandshop-server-side-tanvir0908.vercel.app/productDetails/${params.id}`
          ),
      },
      {
        path: "productUpdate/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b8a10-brandshop-server-side-tanvir0908.vercel.app/productDetails/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
