import React from 'react'
import tw, {styled} from 'twin.macro'
import { Title, Heading, SubHeading } from '../components/Section/index'

interface Header {
    header?: boolean
}

interface Props extends Header {
    title?: string
    heading?: string
    subHeading?: string
}

export const SectionHeaderContext = React.createContext(false);
export const SectionHeaderContextProvider = SectionHeaderContext.Provider;

export default function SectionHeaderContainer({ title, heading, subHeading, header }: Props) {
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

const SectionHeaderContainerWrapper = styled.div(({header}: Header) => [
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
