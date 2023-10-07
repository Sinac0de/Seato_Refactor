import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/HomePage/Home";
import Salons from "./pages/Salons/Salons";
import Salon from "./pages/SalonView/Salon";
import About from "./pages/About/About";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="salons" element={<Salons />} />
        <Route path="salons/:salonid" element={<Salon />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
