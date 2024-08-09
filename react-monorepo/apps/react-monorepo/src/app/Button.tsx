import React from 'react';
import './Button.css';

export interface ButtonProps {
  title?: string;
  color?: string;
  bgColor?: string;
  borderRadius?: string;
  fontStyle?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  title = "Register",
  color = 'white',
  bgColor = 'blue',
  borderRadius = '4px',
  fontStyle = 'normal',
  onClick,
}) => {
  const buttonStyle: React.CSSProperties = {
    color,
    backgroundColor: bgColor,
    borderRadius,
    fontStyle,
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {title}
    </button>
  );
};
