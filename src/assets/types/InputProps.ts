import { ShortenUrlsProps } from "./ShortenUrlProps";

export interface InputProps {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  shortenUrls: ShortenUrlsProps[];
  setShortenUrls: React.Dispatch<React.SetStateAction<ShortenUrlsProps[]>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
