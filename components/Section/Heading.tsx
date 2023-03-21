import { useContext } from 'react'; 
import tw, { styled } from 'twin.macro'
import { SectionHeaderContext } from '../../containers/SectionHeaderContainer';

const baseTitleStyle = tw`
    font-bebasNeue
    font-normal
    text-[45px]
    leading-[58px]
    text-center
    text-dark
    mb-[6px]
`

const headerTitleStyle = tw`text-[60px] leading-[68px] max-w-[663px] mb-[17px] md:px-[40px]`;

const Heading = styled.div(() => {
    const header = useContext(SectionHeaderContext);
    return !header ? [baseTitleStyle] : [baseTitleStyle, headerTitleStyle]
})

export default Heading;