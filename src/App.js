import React from "react";
import Graph from "./components/Graph";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import store from "./redux/Store";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <div className="">
      <Provider store={store}>
        {/* <Header /> */}
        <Sidebar />
        <Outlet />
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Contact />,
      },
      {
        path: "/maps",
        element: <Graph />,
      },
    ],
  },
]);
export default appRouter;
