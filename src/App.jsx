import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/mainLayout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

const router = createBrowserRouter([
  {
     path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "movie", Component: Movie},
    ]
  },
]);
function App() {
  

  return (
   <RouterProvider router={router} />
  )
}

export default App
