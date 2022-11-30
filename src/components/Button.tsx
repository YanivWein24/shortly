interface ButtonProps {
  text: string;
  borderRadius: "0.4rem" | "2rem";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button = ({ text, borderRadius, onClick, className }: ButtonProps) => (
  <button
    type="button"
    className={`clean-btn ${className}`}
    style={{ borderRadius }}
    onClick={onClick}
  >
    {text}
  </button>
);
export default Button;
