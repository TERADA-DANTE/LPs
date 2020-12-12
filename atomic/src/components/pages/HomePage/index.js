import React from 'react'
import GenericTemplate from 'components/templates/GenericTemplate/index'
import Header from 'components/organisms/Header/index'
import Main from 'components/organisms/Hero/index'
import Hero from 'components/organisms/Main/index'
import Footer from 'components/organisms/Footer/index'
import FeatureList from 'components/organisms/FeatureList/index'
const HomePage = () => {
  return (
    <GenericTemplate
      header={<Header />}
      main={<Main />}
      hero={<Hero />}
      footer={<Footer />}
    >
      <FeatureList />
    </GenericTemplate>
  )
}

export default HomePage
