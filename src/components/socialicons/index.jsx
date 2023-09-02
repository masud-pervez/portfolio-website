import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a target="blank" href={socialprofils.twitter}>
              <FaTwitter className="hover:fill-[#20ec53] hover:-translate-y-1 transition-all ease-in" />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a target="blank" href={socialprofils.github}>
              <FaGithub className="hover:fill-[#20ec53] hover:-translate-y-1 transition-all ease-in" />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a target="blank" href={socialprofils.facebook}>
              <FaFacebookF className="hover:fill-[#20ec53] hover:-translate-y-1 transition-all ease-in" />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a target="blank" href={socialprofils.linkedin}>
              <FaLinkedin className="hover:fill-[#20ec53] hover:-translate-y-1 transition-all ease-in" />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a target="blank" href={socialprofils.youtube}>
              <FaYoutube className="hover:fill-[#20ec53] hover:-translate-y-1 transition-all ease-in" />
            </a>
          </li>
        )}
        {socialprofils.twitch && (
          <li>
            <a target="blank" href={socialprofils.twitch}>
              <FaTwitch className="hover:fill-[#20ec53] hover:-translate-y-1 transition-all ease-in" />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
