import { ButtonProps } from "../assets/types/ButtonProps";

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
