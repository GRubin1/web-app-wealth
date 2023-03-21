import React from 'react';
import Navbar, { INavBarProps } from '../components/Navbar/Navbar';

export interface IProps extends INavBarProps {
}

export function HeaderHomeContainer ({ logo }: IProps) {
  return (
    <Navbar logo={logo} />
  );
}



