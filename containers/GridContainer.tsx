import React from 'react'
import tw from 'twin.macro'
import GridColumnTitles from '../components/Grid/GridColumnTitles'
import GridItems, { IGridItem } from '../components/Grid/GridItems'

export interface IGridContainerProps {
    gridColumnTitles: Array<string>
    gridItems: Array<IGridItem>
}

export default function GridContainer ({gridColumnTitles, gridItems}: IGridContainerProps) {
  return (
    <GridWrapper>
        <GridColumnTitles items={gridColumnTitles} />
        <GridItems items={gridItems} />
    </GridWrapper>
  );
}

const GridWrapper = tw.div`
    flex
    flex-col
    justify-between
`