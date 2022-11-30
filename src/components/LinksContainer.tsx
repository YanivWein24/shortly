import { useState } from "react";
import Input from "./Input";

interface ShortenUrlsProps {
  longUrl: string;
  shortUrl: string;
}

const LinksContainer = () => {
  const [url, setUrl] = useState<string>("");
  const [shortenUrls, setShortenUrls] = useState<ShortenUrlsProps[]>([]);

  return (
    <div className="linksContainer">
      <Input
        url={url}
        setUrl={setUrl}
        shortenUrls={shortenUrls}
        setShortenUrls={setShortenUrls}
      />
    </div>
  );
};

export default LinksContainer;
