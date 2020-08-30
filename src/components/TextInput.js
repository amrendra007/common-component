import React from 'react'

import { TextInput } from '@contentstack/venus-components'

const Default = () => <TextInput type="text" placeholder="Type Something..." />

const DefaultWithValue = () => (
  <TextInput type="text" placeholder="Type Something..." value="Pre Existing Value" />
)

const Disabled = () => (
  <TextInput type="text" placeholder="Type Something..." disabled value="Disabled" />
)

const Error = () => <TextInput type="text" placeholder="Error message" error />

const Password = () => <TextInput type="password" placeholder="Enter password" />

const Number = () => <TextInput type="number" placeholder="Enter Number" />

const TextInputComponents = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h4>Default</h4>
        <Default />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>DefaultWithValue</h4>
        <DefaultWithValue />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>Disabled</h4>
        <Disabled />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>Error</h4>
        <Error />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>Password</h4>
        <Password />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>Number</h4>
        <Number />
      </div>
    </div>
  )
}

export default TextInputComponents
