import useFetch from "../assets/hooks/useFetch";
import Button from "./Button";

interface ShortenUrlsProps {
  longUrl: string;
  shortUrl: string;
}

interface InputProps {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  shortenUrls: ShortenUrlsProps[];
  setShortenUrls: React.Dispatch<React.SetStateAction<ShortenUrlsProps[]>>;
}

const Input = ({ url, setUrl, shortenUrls, setShortenUrls }: InputProps) => {
  const shortLink = async () => {
    const data = await useFetch(url);
    const newUrl: ShortenUrlsProps = {
      longUrl: data.result.original_link,
      shortUrl: data.result.full_short_link,
    };
    setShortenUrls([...shortenUrls, newUrl]);
    setUrl("");
  };

  return (
    <div className="inputContainer flex">
      <input
        type="text"
        placeholder="Shorten a link here..."
        value={url}
        onChange={(event) => setUrl(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" && shortLink()}
      />
      <Button
        onClick={() => shortLink()}
        borderRadius="0.4rem"
        text="Shorten it!"
      />
    </div>
  );
};

export default Input;
