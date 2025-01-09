import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import FavoriteMovies from "./pages/FavoriteMovies";
import { RouterProvider } from "react-router";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/favorite-movies" element={<FavoriteMovies />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
