import { FaFacebook, FaYoutube, FaFlickr, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function SocialLinks({ facebook, twitter, youtube, flickr, instagram }) {
  return (
    <ul className="gw-text-2xl gw-flex gw-flex-row gw-flex-wrap gw-gap-2 gw-list-none gw-mb-6">
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
      {instagram && (
        <li>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FaInstagram />
          </a>
        </li>
      )}
    </ul>
  );
}

export default SocialLinks;
export { SocialLinks };
