import useFetch from "../assets/hooks/useFetch";
import { InputProps } from "../assets/types/InputProps";
import { ShortenUrlsProps } from "../assets/types/ShortenUrlProps";
import Button from "./Button";

const Input = ({
  url,
  setUrl,
  shortenUrls,
  setShortenUrls,
  setError,
  setIsLoading,
  error,
}: InputProps) => {
  const addShortLink = async () => {
    if (url === "") {
      setError("Please add a link");
      return;
    }
    setIsLoading(true);
    const data = await useFetch(url);
    setIsLoading(false);
    data.error ? setError(data.error) : setError("");
    const newUrl: ShortenUrlsProps = {
      longUrl: data.result.original_link,
      shortUrl: data.result.full_short_link,
      id: data.result.code,
    };
    setShortenUrls([...shortenUrls, newUrl]);
    setUrl("");
  };

  return (
    <div className="inputContainer flex">
      <input
        className={error && "isError"}
        type="text"
        placeholder="Shorten a link here..."
        value={url}
        onChange={(event) => setUrl(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" && addShortLink()}
      />
      <Button
        onClick={() => addShortLink()}
        borderRadius="0.4rem"
        text="Shorten it!"
      />
      {error !== "" && <div className="error fade-in">{error}</div>}
    </div>
  );
};

export default Input;
