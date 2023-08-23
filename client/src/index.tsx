import ReactDOM from "react-dom/client";
import "./style/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./pages/App";
import { Resume } from "./pages/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "resume",
    element: <Resume />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
