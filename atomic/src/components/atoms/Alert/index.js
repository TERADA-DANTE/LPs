import { Alert } from 'antd'

export default function ({ message, type, showIcon }) {
  return <Alert message={message} type={type} showIcon={showIcon} />
}
