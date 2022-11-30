import { useState, useEffect } from "react";
import Input from "./Input";
import ShortenLink from "./ShortenLink";

interface ShortenUrlsProps {
  longUrl: string;
  shortUrl: string;
}

const LinksSection = () => {
  const initialState = localStorage.getItem("shortenUrls");
  const [url, setUrl] = useState<string>("");
  const [shortenUrls, setShortenUrls] = useState<ShortenUrlsProps[]>(
    initialState ? JSON.parse(initialState) : []
  );

  const deleteLink = (shortUrl: string) => {
    const newArray = shortenUrls.filter(
      (shortenUrl) => shortenUrl.shortUrl !== shortUrl
    );
    setShortenUrls(newArray);
  };

  useEffect(() => {
    shortenUrls[0] &&
      localStorage.setItem("shortenUrls", JSON.stringify(shortenUrls));
  }, [shortenUrls]);

  return (
    <div className="linksSection">
      <div className="linksContainer">
        <Input
          url={url}
          setUrl={setUrl}
          shortenUrls={shortenUrls}
          setShortenUrls={setShortenUrls}
        />
      </div>
      {shortenUrls[0] && (
        <div className="shortenUrlsContainer">
          {shortenUrls.map((shortUrl, index) => (
            <ShortenLink
              key={index}
              longUrl={shortUrl.longUrl}
              shortUrl={shortUrl.shortUrl}
              deleteLink={deleteLink}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LinksSection;
