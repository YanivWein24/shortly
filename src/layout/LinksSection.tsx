import { useState, useEffect } from "react";
import Input from "../components/Input";
import ShortenLink from "../components/ShortenLink";

interface ShortenUrlsProps {
  longUrl: string;
  shortUrl: string;
}

const LinksSection = () => {
  const initialState = localStorage.getItem("shortenUrls");
  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
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
          error={error}
          setError={setError}
          setIsLoading={setIsLoading}
        />
      </div>
      {isLoading && <div className="loading fade-in">{"Loading..."}</div>}
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
