import React from 'react';
import tw from 'twin.macro';
import Image from 'next/image';

export interface INavBarProps {
    logo: string
}

export default function NavBar ({ logo }: INavBarProps) {
  return (
    <NavBarWrapper>
      <Image
        src={logo}
        width={142}
        height={29}
        alt={'Wealth app'}
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
