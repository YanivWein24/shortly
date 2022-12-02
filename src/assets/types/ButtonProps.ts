export interface ButtonProps {
  text: string;
  borderRadius: "0.4rem" | "2rem";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}
