import { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import logoDark from "../assets/logo-dark.png";
import logoLight from "../assets/logo-light.png";

const Headermain = () => {
  const [isActive, setActive] = useState("false");
  const [theme] = useState(localStorage.getItem("theme"));

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="sticky top-0 bg-indigo-300 py-2 z-10">
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
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item active">
                    <Link onClick={handleToggle} to="/" className="my-3">
                      Home
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="/portfolio"
                      className="my-3"
                    >
                      {" "}
                      Portfolio
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      About
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">
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
            <p className="copyright m-0">copyright {logotext}</p>
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
