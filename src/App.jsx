
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import PropTypes from "prop-types";
import { Provider, useSelector } from 'react-redux'
import Layout from './pages/Layout';
import store from '../Store/store';
import { lazy, Suspense } from 'react';
import Loder from './components/Loder';

// import Login from './pages/Login'
// import Register from './pages/Register'
// import Mandapam from './components/wedding-venue/Wedding-Venue';
// import Photos from './components/wedding-vendors/Photographers';
// import Videos from './components/wedding-vendors/Videography';
// import Caterers from './components/wedding-vendors/Caterers';
// import Makeup from './components/brides/MakeupArtists';
// import Mehndi from './components/brides/MehndiArtists';
// import Jewellery from './components/brides/Jewellery';
// import Cart from "./pages/Cart"
// import EventInfo from './pages/EventInfo';
// import Resorts from './components/wedding-venue/Wedding-Resorts';
// import Hotels from './components/wedding-venue/Hotels';

// Lazy Loading Import
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Mandapam = lazy(() => import("./components/wedding-venue/Wedding-Venue"));
const Resorts = lazy(() => import("./components/wedding-venue/Wedding-Resorts"));
const Hotels = lazy(() => import("./components/wedding-venue/Hotels"));
const Photos = lazy(() => import("./components/wedding-vendors/Photographers"));
const Videos = lazy(() => import("./components/wedding-vendors/Videography"));
const Caterers = lazy(() => import("./components/wedding-vendors/Caterers"));
const Makeup = lazy(() => import("./components/brides/MakeupArtists"));
const Mehndi = lazy(() => import("./components/brides/MehndiArtists"));
const Jewellery = lazy(() => import("./components/brides/Jewellery"));
const EventInfo = lazy(() => import("./pages/EventInfo"));
const Cart = lazy(() => import("./pages/Cart"));


const BookingSuccess = lazy(() => import("./pages/BookingSuccess"));

const ProtectedComponent = ({ component }) => {

  const { authenticated } = useSelector((state) => state.account);

  if (authenticated) {
    return component;
  } else {
    return <Navigate to="/login" />
  }
};

ProtectedComponent.propTypes = {
  component: PropTypes.node.isRequired,
};

function App() {

  return (
    <Suspense fallback={<Loder />}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path="/wedding-venue" element={<ProtectedComponent component={<Mandapam />} />} />
              <Route path="/wedding-resorts" element={<ProtectedComponent component={<Resorts />} />} />
              <Route path="/hotels" element={<ProtectedComponent component={<Hotels />} />} />
              <Route path="/wedding-photos" element={<ProtectedComponent component={<Photos />} />} />
              <Route path="/wedding-videos" element={<ProtectedComponent component={<Videos />} />} />
              <Route path="/wedding-caterers" element={<ProtectedComponent component={<Caterers />} />} />
              <Route path="/makeup-artists" element={<ProtectedComponent component={<Makeup />} />} />
              <Route path="/mehndi-artists" element={<ProtectedComponent component={<Mehndi />} />} />
              <Route path="/jewellerys" element={<ProtectedComponent component={<Jewellery />} />} />
              <Route path="/cart" element={<ProtectedComponent component={<Cart />} />} />
              <Route path="/bookingSuccess" element={<ProtectedComponent component={<BookingSuccess />} />} />
              <Route path="/bookings" element={<ProtectedComponent component={<EventInfo />} />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Provider>
    </Suspense>


  )
}

export default App
