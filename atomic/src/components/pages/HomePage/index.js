import React from 'react'
import GenericTemplate from 'components/templates/GenericTemplate/index'
import Header from 'components/organisms/Header/index'
import Hero from 'components/organisms/Hero/index'
import Footer from 'components/organisms/Footer/index'
import FeatureList from 'components/organisms/FeatureList/index'
const HomePage = () => {
  return (
    <GenericTemplate header={<Header />} hero={<Hero />} footer={<Footer />}>
      <FeatureList />
    </GenericTemplate>
  )
}

export default HomePage
