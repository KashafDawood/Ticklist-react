import router from "./routes/reactRouter";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return <RouterProvider router={router} />;
}
