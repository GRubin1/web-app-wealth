import React from 'react';
import tw from 'twin.macro';

export interface IGridColumnTitlesProps {
    items: Array<string>
}

export interface IGridColumnTitleItemProps {
    title: string
}

export default function GridColumnTitles ({ items }: IGridColumnTitlesProps) {
  return (
    <GridColumnWrapper>
        { items && items.map((item, key) => <GridColumnTitle key={key} title={item} />) }
    </GridColumnWrapper>
  );
}

const GridColumnTitle = ({ title }: IGridColumnTitleItemProps) => 
    <GridColumnTitleWrapper>{title}</GridColumnTitleWrapper>

const GridColumnWrapper = tw.div`
    flex
    flex-col
    justify-center
    max-w-[1167px]
    pl-0
    gap-3
    w-full
    mx-auto

    md:flex-row
    md:flex-wrap
    md:justify-around
    md:gap-0
    lg:pr-[45px]
`

const GridColumnTitleWrapper = tw.div`
    font-interExtraBold
    font-extrabold
    text-[14px]
    leading-[26px]
    text-defDark
    tracking-[0.14em]
    uppercase
    text-center
`