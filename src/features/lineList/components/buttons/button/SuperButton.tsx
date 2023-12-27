import React from 'react';
import s from './SuperButton.module.scss';

interface IconButtonProps {
    iconSrc: string;
    alt: 'add' | 'delete' | 'addParent'
    onClickAdd: () => Promise<void>
    isDisabled: boolean;
}

export const SuperButton: React.FC<IconButtonProps> = ({
  iconSrc,
  alt,
  onClickAdd,
  isDisabled,
}) => {

  return (
    <>
      <img
        src={iconSrc}
        alt={alt}
        onClick={onClickAdd}
        className={`${s.img} ${isDisabled ? s.disabled : ''}`}
      />
    </>
  );
};
