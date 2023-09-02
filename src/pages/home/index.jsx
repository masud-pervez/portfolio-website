import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="flex-1 relative transition-all">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec block lg:flex items-center">
          <div className="h_bg-image order-1 lg:order-2 h-screen flex justify-center items-center z-0">
            <div className="group  relative rounded-3xl bg-rose-200 z-50 overflow-hidden">
              <img
                className="object-contain group-hover:scale-125 object-center transition-all ease-in-out delay-75 duration-300 w-full rounded-md z-10 h-[55vh]"
                src={introdata.your_img_url}
                alt=""
              />
              <div className="absolute bg-slate-900 opacity-25 group-hover:opacity-0 transition-all ease-in-out delay-75 duration-300 w-full py-5 blur-xl h-[55vh] bottom-0 left-0"></div>
            </div>
          </div>
          <div className="text order-2 lg:order-1 h-100 lg:flex justify-center">
            <div className="self-center">
              <div className="intro mx-auto">
                <h2 className="text-3xl font-extrabold">{introdata.title}</h2>
                <h1 className="fluidz-48 typewriter-text">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.four,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="">{introdata.description}</p>

                <div className="intro_btn-action flex justify-start items-center gap-0 py-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_h" className="ac_btn btn ">
                      Projects
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div id="button_h" className="ac_btn btn">
                      About
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
