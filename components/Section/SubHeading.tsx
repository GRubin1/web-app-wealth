import tw, { styled } from 'twin.macro'

const baseSubStyle = tw`
    font-inter
    max-w-[497px]
    font-normal
    text-[18px]
    leading-[32px]
    text-center
    text-dark
    mb-[6px]
`

const SubHeading = styled.div(() => [baseSubStyle])
    
export default SubHeading;