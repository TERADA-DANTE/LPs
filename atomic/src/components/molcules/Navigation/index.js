import React from 'react'
import { PageHeader, Button, message } from 'antd'
import Avatar from 'components/atoms/Avatar/index'

const Navigation = () => {
  return (
    <PageHeader
      className='site-page-header'
      title='Atomic'
      subTitle='Desirable style for React.js'
      extra={[<Avatar />]}
    />
  )
}

export default Navigation
