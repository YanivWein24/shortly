import { useState, useEffect } from "react";
import { ShortenUrlsProps } from "../assets/types/ShortenUrlProps";
import Input from "../components/Input";
import ShortenLink from "../components/ShortenLink";

const LinksSection = () => {
  const initialState: string | null = localStorage.getItem("shortenUrls");
  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [shortenUrls, setShortenUrls] = useState<ShortenUrlsProps[]>(
    initialState ? JSON.parse(initialState) : []
  );

  const deleteLink = (id: number) => {
    const newArray = shortenUrls.filter((shortenUrl) => shortenUrl.id !== id);
    setShortenUrls(newArray);
  };

  useEffect(() => {
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
      {isLoading && (
        <div className="loadingContainer fade-in">
          <div className="loading">Loading...</div>
        </div>
      )}
      {shortenUrls[0] && (
        <div className="shortenUrlsContainer">
          {shortenUrls.map((shortenLink) => (
            <ShortenLink
              key={shortenLink.id}
              shortenLink={shortenLink}
              deleteLink={deleteLink}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LinksSection;
