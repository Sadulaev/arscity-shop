'use client';
import { LucideIcon } from 'lucide-react';
import React, { ReactNode } from 'react'
import CatalogModal from '../shared/catalog-modal';

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
      className={`flex gap-4 w-[302px] h-[70px] items-center justify-center ${backgroundColor} ${colorText} ${className}`}>
          <span>{text}</span>
          {icon && icon}     
      </div>
    </>
    
  )
}

export default Button