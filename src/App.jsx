import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Events from "./components/Events";
import Review from "./components/Review";
import TicketBooking from "./components/TicketBooking";
import Blogs from "./components/Blogs";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ServiceDetails from "./components/ServiceDetails";
import TeamDetails from "./components/TeamDetails";
import Portfolio from "./components/Portfolio";
import BlogClassic from "./components/BlogClassic";
import BlogDetails from "./components/BlogDetails";
import ContactUs from "./components/ContactUs";
import Shop from "./components/Shop";
import Search from "./components/Search";
import Flowbite from "./components/Flowbite";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ScrollToTop from "./components/ScrollToTop";
import EventsDetails from "./components/EventsDetails";
import AllEvents from "./components/AllEvents";

const Layout = () => (
  <>
    <ScrollToTop />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",

    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/welcome", element: <Welcome /> },
      { path: "/events", element: <Events /> },
      { path: "/review", element: <Review /> },
      { path: "/ticket-booking", element: <TicketBooking /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/instagram", element: <Instagram /> },
      { path: "aboutUs", element: <AboutUs /> },
      { path: "/services", element: <Services /> },
      { path: "/serviceDetails", element: <ServiceDetails /> },
      { path: "/teamDetails", element: <TeamDetails /> },
      { path: "/portfolio/:id", element: <Portfolio /> },
      { path: "/allEvents", element: <AllEvents /> },
      { path: "/eventsDetails/:id", element: <EventsDetails /> },
      { path: "/blogClassic", element: <BlogClassic /> },
      { path: "/contactUs", element: <ContactUs /> },

      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      { path: "/flowbite", element: <Flowbite /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/blogs_details/:id", element: <BlogDetails /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  );
}

export default App;

// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navigation from "./components/Navigation";
// import Home from "./components/Home";
// import Welcome from "./components/Welcome";
// import Events from "./components/Events";
// import Review from "./components/Review";
// import TicketBooking from "./components/TicketBooking";
// import Blogs from "./components/Blogs";
// import Instagram from "./components/Instagram";
// import Footer from "./components/Footer";
// import AboutUs from "./components/AboutUs";
// import Services from "./components/Services";
// import ServiceDetails from "./components/ServiceDetails";
// import TeamDetails from "./components/TeamDetails";
// import Portfolio from "./components/Portfolio";
// import BlogClassic from "./components/BlogClassic";
// import BlogDetails from "./components/BlogDetails";
// import ContactUs from "./components/ContactUs";
// import Shop from "./components/Shop";
// import Search from "./components/Search";
// import Flowbite from "./components/Flowbite";
// import Cart from "./components/Cart";
// import Checkout from "./components/Checkout";
// import ScrollToTop from "./components/ScrollToTop";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/welcome",
//     element: (
//       <>
//         <Navigation />
//         <Welcome />
//       </>
//     ),
//   },
//   {
//     path: "/events",
//     element: (
//       <>
//         <Navigation />
//         <Events />
//       </>
//     ),
//   },
//   {
//     path: "/review",
//     element: (
//       <>
//         <Navigation />
//         <Review />
//       </>
//     ),
//   },
//   {
//     path: "/ticket-booking",
//     element: (
//       <>
//         <Navigation />
//         <TicketBooking />
//       </>
//     ),
//   },
//   {
//     path: "/blogs",
//     element: (
//       <>
//         <Navigation />
//         <Blogs />
//       </>
//     ),
//   },
//   {
//     path: "/instagram",
//     element: (
//       <>
//         <Navigation />
//         <Instagram />
//       </>
//     ),
//   },
//   {
//     path: "/aboutUs",
//     element: (
//       <>
//         <Navigation />
//         <AboutUs />
//       </>
//     ),
//   },
//   {
//     path: "/services",
//     element: (
//       <>
//         <Navigation />
//         <Services />
//       </>
//     ),
//   },
//   {
//     path: "/serviceDetails",
//     element: (
//       <>
//         <Navigation />
//         <ServiceDetails />
//       </>
//     ),
//   },
//   {
//     path: "/teamDetails",
//     element: (
//       <>
//         <Navigation />
//         <TeamDetails />
//       </>
//     ),
//   },
//   {
//     path: "/portfolio",
//     element: (
//       <>
//         <Navigation />
//         <Portfolio />
//       </>
//     ),
//   },
//   {
//     path: "/blogClassic",
//     element: (
//       <>
//         <Navigation />
//         <BlogClassic />
//       </>
//     ),
//   },
//   {
//     path: "/blogs_details/:id",
//     element: (
//       <>
//         <ScrollToTop />
//         <Navigation />
//         <BlogDetails />
//       </>
//     ),
//   },
//   {
//     path: "/contactUs",
//     element: (
//       <>
//         <Navigation />
//         <ContactUs />
//       </>
//     ),
//   },
//   {
//     path: "/shop",
//     element: (
//       <>
//         <Navigation />
//         <Shop />
//       </>
//     ),
//   },
//   {
//     path: "/search",
//     element: (
//       <>
//         <Navigation />
//         <Search />
//       </>
//     ),
//   },
//   {
//     path: "/flowbite",
//     element: (
//       <>
//         <Navigation />
//         <Flowbite />
//       </>
//     ),
//   },
//   {
//     path: "/cart",
//     element: (
//       <>
//         <Navigation />
//         <Cart />
//       </>
//     ),
//   },
//   {
//     path: "/cart/checkout",
//     element: (
//       <>
//         <Navigation />
//         <Checkout />
//       </>
//     ),
//   },
// ]);

// function App() {
//   return (
//     <div className="">
//       <RouterProvider router={router} />
//       <Footer />
//     </div>
//   );
// }

// export default App;
