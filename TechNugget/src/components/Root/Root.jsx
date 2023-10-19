import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NewNavbar from "../NewNavbar/NewNavbar";

export default function Root() {
  return (
    <div>
      {/* <Navbar /> */}
      <NewNavbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
