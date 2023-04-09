import React from 'react';
import type {CSSProperties} from 'react';
import {Button} from "@mui/material";
import './index.css';

interface SampleButtonProps {
  /**
   * 버튼에 어떤 컬러 테마를 사용하시겠습니까?
   */
  color?: 'primary' | 'secondary';
  /**
   * What background color to use
   */
  backgroundColor?: CSSProperties['backgroundColor'];
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const SampleButton = ({
  color = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  onClick
}: SampleButtonProps) => {
  return (
    <Button
      variant="contained"
      color={color}
      size={size}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
