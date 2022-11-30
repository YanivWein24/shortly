interface ButtonProps {
  text: string;
  borderRadius: "0.4rem" | "2rem";
}

const Button = ({ text, borderRadius }: ButtonProps) => (
  <button type="button" className="clean-btn" style={{ borderRadius }}>
    {text}
  </button>
);
export default Button;
