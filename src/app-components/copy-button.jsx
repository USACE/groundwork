import { Button } from "../../lib";
import { BsCopy } from "react-icons/bs";
import { GoThumbsup } from "react-icons/go";
import { useState } from "react";
import clsx from "clsx";

function CopyButton({ className, text, ignoreComments=false }) {
  const [copying, setCopying] = useState(false);
  const handleCopy = () => {
    text = text.replace(/\\`/gi, "`").replace(/\\$/gi, "$");
    navigator.clipboard.writeText(
      ignoreComments
        ? text
            .split("\n") // Split string by lines
            .map((line) => line.replace(/\/\/.*/g, "")) // Remove Commented Line
            .filter((line) => line.trim() !== "") // Remove Empty Lines
            .join("\n") // Join lines back into string
        : text
    );
  };
  const btnClass = clsx("", className);
  return (
    <Button
      className={btnClass}
      outline={!copying}
      color={copying ? "green" : undefined}
      onClick={() => {
        handleCopy();
        setCopying(true);
        setTimeout(() => {
          setCopying(false);
        }, 1000);
      }}
    >
      {copying ? <GoThumbsup /> : <BsCopy />}
    </Button>
  );
}

export default CopyButton;
export { CopyButton };
