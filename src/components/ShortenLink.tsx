import { useState } from "react";
import { ShortenUrlsProps } from "../layout/LinksSection";
import Button from "./Button";

interface ShortenLinksProps {
  shortenLink: ShortenUrlsProps;
  deleteLink: (id: number) => void;
}

const ShortenLink = ({ shortenLink, deleteLink }: ShortenLinksProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleClick = () => {
    navigator.clipboard.writeText(shortenLink.shortUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 500);
  };

  const [deleted, setDeleted] = useState<boolean>(false);

  const handleDelete = () => {
    setDeleted(true);
    setTimeout(() => {
      setDeleted(false);
      deleteLink(shortenLink.id);
    }, 1000);
  };

  return (
    <div
      className={`shortenLink flex ${
        deleted ? "slide-out-right" : "slide-in-bottom"
      }`}
    >
      <div>
        <p>{shortenLink.longUrl}</p>
      </div>
      <div className="bottomLink">
        <p>{shortenLink.shortUrl}</p>
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
