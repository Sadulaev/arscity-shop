'use client';
import React, { ReactNode } from 'react'

type Props = {
    text: string;
    icon?: ReactNode;
    backgroundColor: string;
    colorText: string;
    className: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onClickCapture?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Button: React.FC<Props> = ({text, backgroundColor, colorText, className, icon, onClick, onClickCapture}) => {

  return (
    <>
      <div
      onClick={onClick}
      onClickCapture={onClickCapture}
      className={`flex gap-4 "w-[302px]" : "w-[150px]" h-[70px] items-center justify-center ${backgroundColor} ${colorText} ${className}`}>
          <span>{text}</span>
          {icon && icon}     
      </div>
    </>
    
  )
}

export default Button