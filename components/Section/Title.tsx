import tw, { styled } from 'twin.macro'
import { SectionHeaderContext } from '../../containers/SectionHeaderContainer';
import { useContext } from 'react';

const baseTitleStyle = tw`
    font-interExtraBold
    font-extrabold
    text-[13px]
    leading-[26px]
    tracking-[0.14em]
    text-primary
    drop-shadow-sectionTitle
    mb-[9px]
    uppercase
`

const headerTitleStyle = tw`text-black mb-[25px] drop-shadow-none`;

const Title = styled.div(() => {
    const header = useContext(SectionHeaderContext);
    return !header ? [baseTitleStyle] : [baseTitleStyle, headerTitleStyle]
})

export default Title;