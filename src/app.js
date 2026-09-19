import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body.jsx";
import Footer from "./component/Footer.jsx";
// import { resList } from "./utils/constant.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Restraunt from "./component/Restraunt";
import { lazy, Suspense } from "react";

const Grocery = lazy(()=>import ('./component/Grocery'));

const AppComponent = () => {
  return (
    <div id="app">
      <Header />
      <div className="body">
        {" "}
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restraunt/:id",
        element: <Restraunt />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<div>Loading...</div>}><Grocery /> </Suspense>,
      }
    ],
  },
]);

const renderComponent = ReactDOM.createRoot(document.getElementById("root"));
renderComponent.render(<RouterProvider router={appRouter} />);

// const react = <h1>test react</h1>;

// const oldReact = React.createElement("div", {}, [
//   React.createElement("h1", { id: "tag1", key: "tag1" }, "test old react"),
//   React.createElement("h1", { id: "tag2", key: "tag2" }, "test old react"),
// ]);
// const renderOldReact = ReactDOM.createRoot(document.getElementById("oldReact"));
// renderOldReact.render(oldReact);

// function test() {
//   return 1000;
// }
// const FunctionHeading = () => {
//   return <h1>function heading</h1>;
// };

// const FunctionBody = () => {
//   return <h1>function body</h1>;
// };

// const FunctionFooter = () => {
//   return <h1>function footer</h1>;
// };

// const FunctionComponent = () => {
//   return (
//     <div>
//       <h1>{test()}</h1>
//       {react}
//       {FunctionHeading()}
//       <FunctionHeading />
//       <FunctionBody />
//       <FunctionFooter />
//     </div>
//   );
// };

// const component = ReactDOM.createRoot(document.getElementById("body"));
// component.render(<FunctionComponent />);
