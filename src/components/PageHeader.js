import React from 'react'

import { PageHeader, Button, Icon } from '@contentstack/venus-components'

export const Default = () => {
  const pageActions = [
    {
      label: 'Cancel',
      onClick: () => alert('Cancel button clicked'),
      type: 'primary',
    },
  ]
  return <PageHeader title={{ label: 'Page Title 1' }} actions={pageActions} />
}

export const HeaderWithInformation = () => {
  const pageActions = [
    {
      label: 'Cancel',
      onClick: () => alert('Cancel button clicked'),
      type: 'primary',
    },
  ]
  return <PageHeader title={{ label: 'Page Title 1', info: '#' }} actions={pageActions} />
}

export const MultipleActions = () => {
  const pageActions = [
    {
      label: (
        <Button buttonType="tertiary" className="ml-10" onClick={() => alert('Button clicked')}>
          Tertiary
        </Button>
      ),
    },
    {
      label: (
        <Button buttonType="secondary" className="ml-10" onClick={() => alert('Button clicked')}>
          Secondary
        </Button>
      ),
    },
    {
      label: (
        <Button buttonType="primary" className="ml-10" onClick={() => alert('Button clicked')}>
          Primary
        </Button>
      ),
    },
  ]
  return <PageHeader title={{ label: 'Page Title 1' }} actions={pageActions} />
}

export const CustomComponentInHeader = () => {
  const pageActions = [
    {
      label: 'Cancel',
      onClick: () => alert('Cancel button clicked'),
      type: 'primary',
    },
  ]
  const AnyComponent = (
    <a className="PageHeaderIcon">
      <Icon icon="Settings" size="small" />
    </a>
  )
  return (
    <PageHeader title={{ label: 'Page Title 1', component: AnyComponent }} actions={pageActions} />
  )
}

const PageHeaderComponents = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h3>Default</h3>
        <Default />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h3>HeaderWithInformation</h3>
        <HeaderWithInformation />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h3>MultipleActions</h3>
        <MultipleActions />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h3>CustomComponentInHeader</h3>
        <CustomComponentInHeader />
      </div>
    </div>
  )
}

export default PageHeaderComponents
