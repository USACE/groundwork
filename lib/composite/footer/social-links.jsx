import { FaFacebook, FaYoutube, FaFlickr } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function SocialLinks({ facebook, twitter, youtube, flickr }) {
  return (
    <ul className="text-2xl flex flex-row flex-wrap gap-2 list-none mb-3">
      {facebook && (
        <li>
          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FaFacebook />
          </a>
        </li>
      )}
      {twitter && (
        <li>
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <FaXTwitter />
          </a>
        </li>
      )}
      {youtube && (
        <li>
          <a
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <FaYoutube />
          </a>
        </li>
      )}
      {flickr && (
        <li>
          <a
            href={flickr}
            target="_blank"
            rel="noopener noreferrer"
            title="Flickr"
          >
            <FaFlickr />
          </a>
        </li>
      )}
    </ul>
  );
}

export default SocialLinks;
export { SocialLinks };
