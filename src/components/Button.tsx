interface ButtonProps {
  text: string;
  borderRadius: "0.4rem" | "2rem";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, borderRadius, onClick }: ButtonProps) => (
  <button
    type="button"
    className="clean-btn"
    style={{ borderRadius }}
    onClick={onClick}
  >
    {text}
  </button>
);
export default Button;
