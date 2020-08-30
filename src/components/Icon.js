import React from 'react'

import { Icon } from '@contentstack/venus-components'

const Default = () => (
  <div>
    <span className="icon-spacing">
      <Icon icon="Search" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Settings" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Logo" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Left" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Leftmost" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Right" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Rightmost" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Filter" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Dropdown" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="GridView" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Intercom" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="OrgSettings" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="ChevronDown" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Star" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="YellowStar" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Publish" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Unpublish" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="DownArrowDisabled" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="DownArrowEnabled" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="IconCopy" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Layout" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="HelpDocs" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Warning" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Error" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Success" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Info" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="CheckboxActive" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="CheckboxInactive" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Checked" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="ActiveRectangle" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Cancel" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Delete" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="GroupField" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="PageNotFoundError" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="PageConstructionError" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="LoginError" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Staging" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Production" size="small" />
      <Icon icon="Hamburger" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="NewFolder" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="ChangeView" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="DeleteAsset" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="AssetZoom" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Save" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="PublishAsset" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="UnpublishAsset" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="FullScreen" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Version" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="AssetImage" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="AssetVideo" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="AssetAudio" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="AssetExecutable" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="AssetCode" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="AssetArchive" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="AssetDocument" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="SingleCopyIcon" size="small" />
    </span>
    <span className="icon-spacing">
      <Icon icon="Refresh" size="small" />
    </span>
  </div>
)

const IconColors = () => (
  <div>
    <div>
      <Icon icon="Search" color="primary" /> Primary
    </div>
    <div>
      <Icon icon="Search" color="secondary" /> Secondary
    </div>
    <div>
      <Icon icon="Search" color="white" /> White
    </div>
  </div>
)

const IconSizes = () => (
  <div>
    <div>
      <Icon icon="Search" size="tiny" /> Tiny
    </div>
    <div>
      <Icon icon="Search" size="small" /> Small
    </div>
    <div>
      <Icon icon="Search" size="large" /> Large
    </div>
  </div>
)

const IconComponents = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h4>Default</h4>
        <Default />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>IconColors</h4>
        <IconColors />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h4>IconSizes</h4>
        <IconSizes />
      </div>
    </div>
  )
}

export default IconComponents
