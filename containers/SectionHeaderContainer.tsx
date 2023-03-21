import React from 'react'
import tw, { styled } from 'twin.macro'
import { Title, Heading, SubHeading } from '../components/Section/index'

interface ISectionHeaderContainerProps {
    title?: string
    heading?: string
    subHeading?: string
    header?: boolean
}

export const SectionHeaderContext = React.createContext(false);
export const SectionHeaderContextProvider = SectionHeaderContext.Provider;

export default function SectionHeaderContainer({ title, heading, subHeading, header }: ISectionHeaderContainerProps) {
  const contextValue = header ? header : false;
  return (
    <SectionHeaderContainerWrapper>
        <SectionHeaderContextProvider value={contextValue}>
            {title && <Title>{title}</Title>}
            {heading && <Heading>{heading}</Heading>}
            {subHeading && <SubHeading>{subHeading}</SubHeading>}
        </SectionHeaderContextProvider>
    </SectionHeaderContainerWrapper>
  )
}

const SectionHeaderContainerWrapper = styled.div(() => [
tw`
    flex
    flex-col
    justify-center
    items-center
    pt-[60px]
    pb-[42px]
    px-[20px]
    md:px-0
`,
])
