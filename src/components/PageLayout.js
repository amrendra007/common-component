import React from 'react'

import { PageLayout, PageHeader } from '@contentstack/venus-components'

const ListPageDefault = () => {
  const pageActions = [
    {
      label: 'Cancel',
      onClick: () => alert('Cancel button clicked'),
      type: 'primary',
    },
  ]

  const header = {
    component: (
      <PageHeader
        title={{ label: 'Asset' }}
        content={'This the Assets page'}
        actions={pageActions}
      />
    ),
  }
  const leftNav = {
    component: <div className="left-content">Asset left Content</div>,
  }
  const mainContent = {
    component: <div className="center">Asset Main content</div>,
  }
  return <PageLayout header={header} leftNav={leftNav} mainContent={mainContent} type={'list'} />
}

const ListPageNoLeftNav = () => {
  const MockHeader = () => {
    const pageActions = [
      {
        label: 'Cancel',
        onClick: () => alert('Cancel button clicked'),
        type: 'primary',
      },
    ]
    return (
      <>
        <PageHeader title={{ label: 'Page header title' }} actions={pageActions} />
      </>
    )
  }

  const header = {
    component: <MockHeader />,
  }
  const mainContent = {
    component: <div className="center">AssetMain content</div>,
  }
  return <PageLayout header={header} mainContent={mainContent} type={'list'} />
}

const EditPageDefault = () => {
  const header = {
    title: 'Entry Edit',
    backNavigation: (event: any) => alert('Redirecting Main Page'),
  }
  const leftNav = {
    title: 'Entry edit LeftNav',
  }
  const mainContent = {
    title: 'Entry edit MainContent',
  }
  const rigthNav = {
    title: 'Entry edit RigthtNav',
  }

  return (
    <PageLayout
      header={header}
      leftNav={leftNav}
      mainContent={mainContent}
      rightNav={rigthNav}
      type={'edit'}
    />
  )
}

const PageLayoutComponents = () => {
  return (
    <div>
      <h3>ListPageDefault</h3>
      <div style={{ marginBottom: '60px', boxShadow: '0 1px 1px #999' }}>
        <ListPageDefault />
      </div>
      <h3>ListPageNoLeftNav</h3>
      <div style={{ marginBottom: '60px', boxShadow: '0 1px 1px #999' }}>
        <ListPageNoLeftNav />
      </div>
      <h3>EditPageDefault</h3>
      <div style={{ marginBottom: '60px', boxShadow: '0 1px 1px #999' }}>
        <EditPageDefault />
      </div>
    </div>
  )
}

export default PageLayoutComponents
