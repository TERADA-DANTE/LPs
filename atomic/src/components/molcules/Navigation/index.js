import React from 'react'
import { PageHeader, Button, message } from 'antd'

const Navigation = () => {
  return (
    <PageHeader
      className='site-page-header'
      title='Atomic'
      subTitle='Desirable style for React.js'
      extra={[
        <Button
          key='1'
          type='default'
          onClick={() => message.success('hello!')}
        >
          Click here
        </Button>
      ]}
    />
  )
}

export default Navigation
