import essayons from "../../img/essayonscrest.png";

function Essayons() {
  return (
    <img
      aria-label="USACE Castle"
      alt="USACE Castle"
      src={essayons}
      className={`gw-absolute gw-bottom-[56px] gw-left-[50%] gw-h-[125px] gw-w-[112px] gw-ml-[-56px]`}
      role="presentation"
    />
  );
}

export default Essayons;
export { Essayons };
