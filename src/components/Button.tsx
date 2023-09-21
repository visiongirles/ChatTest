interface ButtonProps {
  type: string;
  text: string;
}

function Button({ type, text }: ButtonProps) {
  const buttonStyle = 'btn ' + type;
  return <button className={buttonStyle}>{text}</button>;
}

export default Button;
