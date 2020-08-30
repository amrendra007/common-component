import React, { useState, useEffect } from 'react'

import { Icon, Tabs } from '@contentstack/venus-components'

export const Default = () => {
  const TabInfo = [
    {
      id: 'title1',
      title: 'Title 1',
      data: 'This is title 1 data',
    },
    {
      id: 'title2',
      title: 'Title 2',
      data: 'This is title 2 data',
    },
    {
      id: 'title3',
      title: 'Title 3',
      data: 'This is title 3 data',
    },
  ]
  return (
    <>
      <Tabs tabInfo={TabInfo} />
    </>
  )
}

export const TabTypes = () => {
  const TabInfo = [
    {
      id: 'title1',
      title: 'content types',
      data: 'This is title 1 data',
    },
    {
      id: 'title2',
      title: 'labels',
      data: 'This is title 2 data',
    },
    {
      id: 'title2',
      title: 'content types',
      data: 'This is title 3 data',
    },
    {
      id: 'title2',
      title: 'labels',
      data: 'This is title 4 data',
    },
    {
      id: 'title2',
      title: 'content types',
      data: 'This is title 5 data',
    },
    {
      id: 'title2',
      title: 'labels',
      data: 'This is title 6 data',
    },
  ]

  const options: any = {
    primary: 'primary',
    secondary: 'secondary',
  }

  return (
    <>
      <Tabs tabInfo={TabInfo} type={'primary'} />
    </>
  )
}

export const TabWithIcon = () => {
  const TabInfo = [
    {
      componentTitle: (
        <>
          <div>All</div>
        </>
      ),
      id: 'all',
    },
    {
      componentTitle: (
        <>
          <Icon icon="AssetImage" className="mr-5" />
          <div>Image</div>
        </>
      ),
      id: 'images',
    },
    {
      componentTitle: (
        <>
          <Icon icon="AssetVideo" className="mr-5" />
          <div>Video</div>
        </>
      ),
      id: 'videos',
    },
    {
      componentTitle: (
        <>
          <Icon icon="AssetAudio" className="mr-5" />
          <div>Audio</div>
        </>
      ),
      id: 'audio',
    },
    {
      componentTitle: (
        <>
          <Icon icon="AssetDocument" className="mr-5" />
          <div>Document</div>
        </>
      ),
      id: 'documents',
    },
    {
      componentTitle: (
        <>
          <Icon icon="AssetCode" className="mr-5" />
          <div>Code</div>
        </>
      ),
      id: 'code',
    },
    {
      componentTitle: (
        <>
          <Icon icon="AssetExecutable" className="mr-5" />
          <div>Executable</div>
        </>
      ),
      id: 'executable',
    },
    {
      componentTitle: (
        <>
          <Icon icon="AssetArchive" className="mr-5" />
          <div>Archive</div>
        </>
      ),
      id: 'archive',
    },
  ]
  return (
    <>
      <Tabs tabInfo={TabInfo} type="secondary" />
    </>
  )
}

export const SpecificIndex = () => {
  const [activeTab, setActiveTab] = useState('title2')

  const TabInfo = [
    {
      id: 'title1',
      title: 'Title 1',
      data: 'This is title 1 data',
    },
    {
      id: 'title2',
      title: 'Title 2',
      data: 'This is title 2 data',
    },
    {
      id: 'title3',
      title: 'Title 3',
      data: 'This is title 3 data',
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setActiveTab('title1')
    }, 5000)
  })
  return (
    <>
      <Tabs tabInfo={TabInfo} activeTab={activeTab} />
    </>
  )
}

export const DataAsComponent = () => {
  const MockComponent = () => {
    return <h3>This is Mock Component</h3>
  }
  const TabInfo = [
    {
      id: 'title1',
      title: 'Title 1',
      data: 'This is title 1 data',
    },
    {
      id: 'component',
      title: 'Component',
      componentData: <MockComponent />,
    },
  ]
  return (
    <>
      <Tabs tabInfo={TabInfo} />
    </>
  )
}

export const HeaderAsComponent = () => {
  const MockComponent = () => {
    return (
      <span>
        <span>Mock Header</span>
      </span>
    )
  }
  const MockComponent1 = () => {
    return <h3>This is Mock Component</h3>
  }
  const TabInfo = [
    {
      id: 'headerComponent',
      componentTitle: <MockComponent />,
      data: 'This is title 1 data',
    },
    {
      id: 'Component',
      title: 'Component',
      componentData: <MockComponent1 />,
    },
  ]
  return (
    <>
      <Tabs tabInfo={TabInfo} />
    </>
  )
}

export const AddCallback = () => {
  const TabInfo = [
    {
      id: 'title1',
      title: 'Title 1',
      data: 'This is title 1 data',
      callBack: () => alert('This is Title 1'),
    },
    {
      id: 'title2',
      title: 'Title 2',
      data: 'This is title 2 data',
      callBack: () => alert('This is Title 2'),
    },
    {
      id: 'title3',
      title: 'Title 3',
      data: 'This is title 3 data',
      callBack: () => alert('This is Title 3'),
    },
  ]
  return (
    <>
      <Tabs tabInfo={TabInfo} />
    </>
  )
}

export const Disabled = () => {
  const TabInfo = [
    {
      id: 'title1',
      title: 'Title 1',
      data: 'This is title 1 data',
    },
    {
      id: 'title2',
      title: 'Title 2',
      data: 'This is title 2 data',
    },
    {
      id: 'title3',
      title: 'Title 3',
      data: 'This is title 3 data',
      disabled: true,
    },
  ]
  return (
    <>
      <Tabs tabInfo={TabInfo} />
    </>
  )
}

const TabsComponents = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h4>Default</h4>
        <Default />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>TabTypes</h4>
        <TabTypes />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>TabWithIcon</h4>
        <TabWithIcon />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>SpecificIndex</h4>
        <SpecificIndex />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>DataAsComponent</h4>
        <DataAsComponent />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>HeaderAsComponent</h4>
        <HeaderAsComponent />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>AddCallback</h4>
        <AddCallback />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>Disabled</h4>
        <Disabled />
      </div>
    </div>
  )
}

export default TabsComponents
