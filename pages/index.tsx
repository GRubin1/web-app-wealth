import React from 'react'
import Image from 'next/image'
import tw from 'twin.macro'
import siteContent from '../siteContent'
import SectionHeaderContainer from '../containers/SectionHeaderContainer'
import GridContainer from '../containers/GridContainer'
import NavBar from '../components/Navbar/Navbar'
import IconList from '../components/IconList/IconList'
import SearchFrom from '../components/Form/SearchForm'
import { Button, Spacer } from '../components'

const IndexPage = () => (
  <PageWrapper>
    <Header>
      <NavBar logo={siteContent.header.siteLogo} />
      <SectionHeaderContainer 
        title={siteContent.sectionHeader.title}
        heading={siteContent.sectionHeader.heading}
        subHeading={siteContent.sectionHeader.subHeading}
        header={true}
      />
      <SearchFrom placeholder={siteContent.forms.searchNow.placeholder} buttonText={'Go'} />
      <IconList title={siteContent.iconList.asSeen.title} logos={siteContent.iconList.asSeen.logos} />
      <HeaderBg>
        <Image 
          src={siteContent.header.headerBg}
          alt=""
          fill={true}
        />
      </HeaderBg>
    </Header>
    <Main>
      <SectionHeaderContainer 
        title={siteContent.sectionFocus.title}
        heading={siteContent.sectionFocus.heading}
        subHeading={siteContent.sectionFocus.subHeading}
        header={false}
      />
      <GridContainer 
        gridColumnTitles={siteContent.gridFocus.columnTitles}
        gridItems={siteContent.gridFocus.gridItemsFocus}
      />
      <Button variant='primary' position='center' isWide={true}>{siteContent.Cta.ViewAll}</Button>
      <Spacer />
    </Main>
  </PageWrapper>
)

const PageWrapper = tw.div`
  relative
`
const Header = tw.header`
  relative
  z-0
  min-h-[1065px]

  [& > *]:(relative z-10)
`
const HeaderBg = tw.div`
  absolute
  z-0
  h-full
  w-full
  top-0
`

const Main = tw.main`
  relative
  z-10
  md:mt-[-250px]
`

export default IndexPage
