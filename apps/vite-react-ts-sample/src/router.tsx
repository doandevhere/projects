import { createBrowserRouter } from "react-router-dom";
import { BaseApp, ContextProviderApp } from "./apps";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseApp />,
  },
  {
    path: "/context-provider",
    element: <ContextProviderApp />,
  },
]);
