import React from 'react';
import tw from 'twin.macro';
import Image from 'next/image';
import { ILogo } from '../../types/images'

export interface INavBarProps {
  logo: ILogo
}

export default function NavBar ({ logo }: INavBarProps) {
  return (
    <NavBarWrapper>
      <Image
        src={logo.src}
        width={logo.size.width}
        height={logo.size.height}
        alt={logo.alt}
        loading="eager"
      />
    </NavBarWrapper>
  );
}

const NavBarWrapper = tw.div`
    flex
    justify-center
    items-center
    py-[33px]
`
