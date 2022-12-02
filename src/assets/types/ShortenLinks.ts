import { ShortenUrlsProps } from "./ShortenUrlProps";

export interface ShortenLinksProps {
  shortenLink: ShortenUrlsProps;
  deleteLink: (id: number) => void;
}
