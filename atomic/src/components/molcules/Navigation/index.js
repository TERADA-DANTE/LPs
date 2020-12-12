import React from 'react'
import styled from 'styled-components'
import { PageHeader, Button } from 'antd'

const Navigation = () => {
  return (
    <PageHeader
      className='site-page-header'
      title='Atomic'
      subTitle='desirable style for react'
      extra={[
        <Button key='1' type='default'>
          Click here
        </Button>
      ]}
    />
  )
}

export default Navigation
