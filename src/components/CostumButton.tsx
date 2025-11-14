interface CustomButtonProps {
  text: string[];
  onClick?: () => {};
  backgroundColor?: string;
  color?: string;
  url?: string;
}

const CostumButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  backgroundColor,
  color,
  url,
}) => {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    } else if (onClick) {
      onClick();
    }
  };
  return (
    <button className="customBtn"
      onClick={handleClick}
      style={{
        backgroundColor: backgroundColor || "#ff652d",
        color: color || "fefcf7",
      }}
    >
      {text.map((word, index) => (
        <span key={index}>{word} </span>
      ))}
    </button>
  );
};

export default CostumButton;
