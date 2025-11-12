import React from "react";

interface CustomButtonProps {
  text: string[];
  onClick?: () => {};
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text.map((word, index) => (
        <span key={index}>{word} </span>
      ))}
    </button>
  );
};

export default CustomButton;
