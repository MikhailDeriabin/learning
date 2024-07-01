import React from 'react';
import { LoadingButton as MUIButton, LoadingButtonProps as MUIButtonProps } from '@mui/lab';

export type ButtonProps = {
  /**
   * The value of the button.
   */
  value: string;
} & MUIButtonProps;

export function Button({ value, ...rest }: ButtonProps) {
  return (
    <MUIButton
      {...rest}
    >
      {value}
    </MUIButton>
  );
}
