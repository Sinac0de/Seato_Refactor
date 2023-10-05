import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import seatoLogoImg from "src/assets/images/seatoLogo.png";

const Header = () => {
  return (
    <header className="p-8 px-14 relative bg-[#FDDDD780] font-medium text-[15px]">
      <nav className=" w-full flex lg:justify-between justify-end items-center">
        {/* nav links */}
        <ul className="lg:flex gap-6 hidden text-[15px]">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold" : ""
              }
            >
              صفحه اصلی
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/salons"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold" : ""
              }
            >
              سالن&zwnj;های زیبایی
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold" : ""
              }
            >
              درباره ما
            </NavLink>
          </li>
        </ul>
        {/* logo */}
        <Link to="/" className="absolute right-0 left-0 mx-auto w-fit">
          <img src={seatoLogoImg} />
        </Link>
        {/* user actions */}
        <div className="flex items-center gap-5">
          <Link to="/" className="text-[#4B4B4B] text-[15px]">
            ورود
          </Link>
          <button className="text-[#222222] text-base bg-white rounded-full p-3 px-8 shadow-sm">
            ثبت نام
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
