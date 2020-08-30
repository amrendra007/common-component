import React from 'react'

import { ValidationMessage } from '@contentstack/venus-components'

const Default = () => <ValidationMessage>This field is required</ValidationMessage>
const ValidationMessageComponents = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h5>Default</h5>
        <Default />
      </div>
    </div>
  )
}

export default ValidationMessageComponents
