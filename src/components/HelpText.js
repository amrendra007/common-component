import React from 'react'

import { HelpText } from '@contentstack/venus-components'

export const Default = () => <HelpText> Helptext text here </HelpText>

const HelpTextComponents = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h5>Default</h5>
        <Default />
      </div>
    </div>
  )
}

export default HelpTextComponents
