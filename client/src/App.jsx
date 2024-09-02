import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import Book from "./pages/Book";


const Router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/book", element: <Book/>  },
]);


function App() {
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
}

export default App;
