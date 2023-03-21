import React from 'react';
import tw from 'twin.macro'
import Image from 'next/image';
import { ILogo } from '../../types/images'

export interface IIconListProps {
    logos: Array<ILogo>
    title?: string
}

export default function IconList ({ logos, title }: IIconListProps) {
  return (
    <ListWrapper>
      <ListTitle>
        { title }
      </ListTitle>
      <AllItems>
        { logos &&
            logos.map((logo, i) => <Logo key={i}><Image src={logo.src} alt={logo.alt} width={logo.size.width} height={logo.size.height} /></Logo>)
        }
      </AllItems>
    </ListWrapper>
  );
}

const ListWrapper = tw.div`
    flex
    flex-col
    mx-auto
    px-3
    max-w-[560px]
    md:px-0
`

const ListTitle = tw.div`
    font-interExtraBold
    font-extrabold
    text-btnBlack
    text-center
    uppercase
    mb-2
    text-[13px]
    leading-[26px]
    tracking-[0.14em]
`

const AllItems = tw.div`
    flex
    flex-col
    justify-between
    items-center
    md:gap-[35px]
    md:flex-row
`

const Logo = tw.div`
    flex
    justify-evenly
    items-center
`