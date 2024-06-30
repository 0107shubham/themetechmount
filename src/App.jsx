import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage";

// Lazy load components
const Navigation = lazy(() => import("./components/Navigation"));
const Home = lazy(() => import("./components/Home"));
const Welcome = lazy(() => import("./components/Welcome"));
const Events = lazy(() => import("./components/Events"));
const Review = lazy(() => import("./components/Review"));
const TicketBooking = lazy(() => import("./components/TicketBooking"));
const Blogs = lazy(() => import("./components/Blogs"));
const Instagram = lazy(() => import("./components/Instagram"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Services = lazy(() => import("./components/Services"));
const ServiceDetails = lazy(() => import("./components/ServiceDetails"));
const TeamDetails = lazy(() => import("./components/TeamDetails"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const BlogClassic = lazy(() => import("./components/BlogClassic"));
const BlogDetails = lazy(() => import("./components/BlogDetails"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Shop = lazy(() => import("./components/Shop"));
const Search = lazy(() => import("./components/Search"));
const Flowbite = lazy(() => import("./components/Flowbite"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));
const EventsDetails = lazy(() => import("./components/EventsDetails"));
const AllEvents = lazy(() => import("./components/AllEvents"));
import CustomerSupport from "./components/CustomerSupport";
import ScrollToTopButton from "./components/ScrollToTopButton";
const Layout = () => (
  <>
    <ScrollToTop />
    <Suspense
      fallback={
        <div>
          <LoadingPage />
        </div>
      }
    >
      <Outlet />
    </Suspense>{" "}
    <CustomerSupport />
    <ScrollToTopButton />
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
      { path: "/shop", element: <Shop /> },
      { path: "/search", element: <Search /> },
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
