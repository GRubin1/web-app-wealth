import React from 'react';
import tw from 'twin.macro';
import Image from 'next/image';

export interface IGridAllItemsProps {
    items: Array<IGridItem>
}

export interface IGridItem {
    icon: string,
    title: string,
    desc: string
}

export default function GridItems({ items }: IGridAllItemsProps) {
  return (
    <GridItemsWrapper>
        { items && items.map((item, key) => <GridItem key={key} icon={item.icon} title={item.title} desc={item.desc} />) }
    </GridItemsWrapper>
  );
}

const GridItem = ({ icon, title, desc }: IGridItem) => {
    return (
        <GridItemWrapper>
            <GridItemIcon><Image src={icon} alt={title} width={240} height={151} loading="lazy" /></GridItemIcon>
            <GridItemTitle>{title}</GridItemTitle>
            <GridItemDesc>{desc}</GridItemDesc>
        </GridItemWrapper>
    )
}

const GridItemsWrapper = tw.div`
    grid
    w-full
    mx-auto
    overflow-hidden
    max-w-[1160px]
    mt-[32px]
    mb-[64px]

    md:my-[64px]
    md:grid-cols-2
    lg:grid-cols-4	
`

const GridItemWrapper = tw.div`
    flex
    flex-col
    justify-center
    text-center
    outline
    outline-1
    outline-lightGray
    p-[32.25px 32px]
`

const GridItemTitle = tw.div`
    font-interExtraBold
    font-extrabold
    text-defDark
    uppercase
    text-[14px]
    leading-[26px]
    tracking-[0.14em]
    mb-[9px]
`

const GridItemDesc = tw.div`
    font-inter
    font-normal
    text-defDark
    px-4
    text-[14px]
    leading-[26px]
`

const GridItemIcon = tw.div`
    flex
    justify-center
`