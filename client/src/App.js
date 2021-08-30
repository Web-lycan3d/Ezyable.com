/** @format */
import { lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import AdminDashboard from "./components/pages/Admin/Admin.component";

const Home = lazy(() => import("./components/pages/Home"));
const Services = lazy(() => import("./components/pages/Services"));
const Contact = lazy(() => import("./components/pages/Contact"));
const About = lazy(() => import("./components/pages/About"));
const Register = lazy(() => import("./components/pages/Auth/Register"));
const Account = lazy(() => import("./components/pages/Account/Account"));
const Faq = lazy(() => import("./components/pages/faq/Faq"));
const Login = lazy(() => import("./components/pages/Auth/Login"));
const ErrorPage = lazy(() => import("./components/pages/error/ErrorPage"));
const FaqSelected = lazy(() => import("./components/pages/faq/FaqSelected"));
const MyOrders = lazy(() => import("./components/pages/myOrders/MyOrders"));
const Privacy = lazy(() => import("./components/pages/privacy/Privacy"));
const OrderPlaced = lazy(() => import("./components/pages/OrderPlaced"));
const UserProfile = lazy(() =>
  import("./components/pages/Account/UserProfile")
);
const Terms = lazy(() => import("./components/pages/privacy/Terms"));
const Admin = lazy(() => import("./components/pages/Admin/Admin.component"))


function App() {
  const location = useLocation();

  const Loader = () => {
    return <div className="cssload-spin-box"></div>;
  };
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/services/:id" exact>
              <Services />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>

            <Route path="/user/register" exact>
              <Register />
            </Route>
            <Route path="/user/login" exact>
              <Login />
            </Route>
            <Route path="/account" exact>
              <Account />
            </Route>
            <Route path="/profile/:id" exact>
              <UserProfile />
            </Route>
            <Route path="/myorders" exact>
              <MyOrders />
            </Route>
            <Route path="/final" exact>
              <OrderPlaced />
            </Route>
            <Route path="/faq" exact>
              <Faq />
            </Route>
            <Route path="/faq/payment" exact>
              <FaqSelected />
            </Route>
            <Route path="/privacy" exact>
              <Privacy />
            </Route>
            <Route path="/termsofservice" exact>
              <Terms />
            </Route>
            <Route path="/admin_dashboard" exact>
              <Admin />
            </Route>
            <Route path="*" exact>
              <ErrorPage />
            </Route>
          </Switch>
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default App;
