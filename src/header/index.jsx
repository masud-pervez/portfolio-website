import { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import logoDark from "../assets/logo-dark.png";
import logoLight from "../assets/logo-light.png";

const Headermain = () => {
  const [isActive, setActive] = useState("false");
  const [theme] = useState(localStorage.getItem("theme"));

  const { pathname } = useLocation();

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed top-0 w-full z-10">
        <div className="flex items-center nav_ac justify-between">
          <Link className="navbar-brand nav_ac" to="/">
            <img
              className="logo"
              src={theme !== "dark" ? logoDark : logoLight}
              alt="logo"
            />
          </Link>
          <div className="flex items-center">
            <Themetoggle />
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div
          className={`site__navigation dark:bg-slate-800 bg-slate-800 ${
            !isActive ? "menu__opend" : ""
          }`}
        >
          <div className="bg__menu h-screen">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="my-10">
                    <Link
                      onClick={handleToggle}
                      to="/"
                      className={`my-10 ${
                        pathname === "/"
                          ? "text-rose-400 hover:text-rose-400"
                          : "hover:text-rose-400"
                      } text-8xl`}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="my-10">
                    <Link
                      onClick={handleToggle}
                      to="/about"
                      className={`my-10 ${
                        pathname === "/about"
                          ? "text-rose-400 hover:text-rose-400"
                          : "hover:text-rose-400"
                      } text-8xl`}
                    >
                      About
                    </Link>
                  </li>
                  <li className="my-10">
                    <Link
                      onClick={handleToggle}
                      to="/portfolio"
                      className={`my-10 ${
                        pathname === "/portfolio"
                          ? "text-rose-400 hover:text-rose-400"
                          : "hover:text-rose-400"
                      } text-8xl`}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="my-10">
                    <Link
                      onClick={handleToggle}
                      to="/contact"
                      className={`my-10 ${
                        pathname === "/contact"
                          ? "text-rose-400 hover:text-rose-400"
                          : "hover:text-rose-400"
                      } text-8xl`}
                    >
                      {" "}
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer flex flex-column md:flex-row justify-between md:items-md-center absolute w-100 p-3">
            <div className="flex">
              <a target="blank" href={socialprofils.linkedin}>
                LinkedIn
              </a>
              <a target="blank" href={socialprofils.github}>
                Github
              </a>
            </div>
            {/* <p className="copyright m-0">copyright {logotext}</p> */}
          </div>
        </div>
      </header>
      {/* <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div> */}
    </>
  );
};

export default Headermain;
