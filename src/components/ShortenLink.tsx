import { useState } from "react";
import Button from "./Button";

interface ShortenUrlsProps {
  longUrl: string;
  shortUrl: string;
  deleteLink: (shortUrl: string) => void;
}

const ShortenLink = ({ longUrl, shortUrl, deleteLink }: ShortenUrlsProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleClick = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const [deleted, setDeleted] = useState<boolean>(false);

  const handleDelete = () => {
    setDeleted(true);
    setTimeout(() => {
      setDeleted(false);
      deleteLink(shortUrl);
    }, 1000);
  };

  return (
    <div
      className={`shortenLink flex ${
        deleted ? "slide-out-right" : "slide-in-bottom"
      }`}
    >
      <div>
        <p>{longUrl}</p>
      </div>
      <div className="bottomLink">
        <p>{shortUrl}</p>
        <Button
          borderRadius="0.4rem"
          text={copied ? "Copied!" : "Copy"}
          className={copied ? "copied" : ""}
          onClick={() => handleClick()}
        />
        <Button
          borderRadius="0.4rem"
          text={deleted ? "Deleted!" : "Delete"}
          className="deleteButton"
          onClick={() => handleDelete()}
        />
      </div>
    </div>
  );
};

export default ShortenLink;
