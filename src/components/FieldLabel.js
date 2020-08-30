import React from 'react'

import { FieldLabel } from '@contentstack/venus-components'

const Default = () => <FieldLabel htmlFor="someInput">Input label</FieldLabel>

const WithRequired = () => (
  <FieldLabel htmlFor="someInput" required>
    Input label
  </FieldLabel>
)

const FieldLabelComponents = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h5>Default</h5>
        <Default />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>WithRequired</h5>
        <WithRequired />
      </div>
    </div>
  )
}

export default FieldLabelComponents
