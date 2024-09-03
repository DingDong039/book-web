import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import RootLayout from "./layouts/RootLayout";
import BookDetail from "./pages/BookDetail";
import PageNotFound from "./pages/PageNotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <PageNotFound/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/book", element: <Book /> },
      { path: "/book/:bookId", element: <BookDetail /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
}

export default App;
