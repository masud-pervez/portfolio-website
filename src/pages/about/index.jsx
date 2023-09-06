import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { meta, socialprofils } from "../../content_option";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const About = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title> About | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-12">
          <div className="sm:col-span-6 col-span-12  min-h-[80vh] flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-serif font-bold">{meta.title}</h1>
              <p className="text-xl my-2 font-normal dark:text-slate-200 text-slate-800">
                {meta.designation}
              </p>
              <p className="text-lg my-2 font-normal dark:text-slate-300 text-slate-800">
                I build accessible, inclusive products <br /> and digital
                experiences for the web.
              </p>
            </div>
            <div>
              <ul className="sm:inline-block hidden">
                {socialprofils.twitter && (
                  <li className="inline-block ms-5">
                    <a target="blank" href={socialprofils.twitter}>
                      <FaTwitter
                        size={30}
                        className="hover:fill-indigo-500 stroke-violet-600 hover:-translate-y-1 transition-all ease-in"
                      />
                    </a>
                  </li>
                )}
                {socialprofils.github && (
                  <li className="inline-block ms-5">
                    <a target="blank" href={socialprofils.github}>
                      <FaGithub
                        size={30}
                        className="hover:fill-indigo-500 stroke-violet-600 hover:-translate-y-1 transition-all ease-in"
                      />
                    </a>
                  </li>
                )}
                {socialprofils.facebook && (
                  <li className="inline-block ms-5">
                    <a target="blank" href={socialprofils.facebook}>
                      <FaFacebookF
                        size={30}
                        className="hover:fill-indigo-500 stroke-violet-600 hover:-translate-y-1 transition-all ease-in"
                      />
                    </a>
                  </li>
                )}
                {socialprofils.linkedin && (
                  <li className="inline-block ms-5">
                    <a target="blank" href={socialprofils.linkedin}>
                      <FaLinkedin
                        size={30}
                        className="hover:fill-indigo-500 stroke-violet-600 hover:-translate-y-1 transition-all ease-in"
                      />
                    </a>
                  </li>
                )}
                {socialprofils.youtube && (
                  <li className="inline-block ms-5">
                    <a target="blank" href={socialprofils.youtube}>
                      <FaYoutube
                        size={30}
                        className="hover:fill-indigo-500 stroke-violet-600 hover:-translate-y-1 transition-all ease-in"
                      />
                    </a>
                  </li>
                )}
                {socialprofils.twitch && (
                  <li className="inline-block ms-5">
                    <a target="blank" href={socialprofils.twitch}>
                      <FaTwitch
                        size={30}
                        className="hover:fill-indigo-500 stroke-violet-600 hover:-translate-y-1 transition-all ease-in"
                      />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="sm:col-span-6 col-span-12"></div>
        </div>
      </div>
    </HelmetProvider>
  );
};
