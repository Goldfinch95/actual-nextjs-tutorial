import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bebas } from "../ui/fonts";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Logo = () => {
  return (
    <div
      className={`${bebas.className} flex flex-row items-center loading-none text-white`}
    >
      <FontAwesomeIcon icon={faReact} className="h-20 w-20 rotate-[15deg]" />
      <p className="text-[30px] nl-3">Goldfinch</p>
    </div>
  );
};

export default Logo;
