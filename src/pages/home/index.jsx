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
          <div
            className="h_bg-image order-1 lg:order-2 h-screen flex justify-center items-center z-0"
            // style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          >
            <div className="rounded-tl-full cursor-zoom-in rounded-br-3xl overflow-hidden">
              <img
                className="object-contain w-full rounded-md h-[70vh]"
                src={introdata.your_img_url}
                alt=""
              />
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
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="">{introdata.description}</p>

                <div className="intro_btn-action flex py-5">
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
                      About Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
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
