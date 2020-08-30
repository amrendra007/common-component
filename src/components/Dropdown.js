import React from 'react'

import { Dropdown, Button, Icon } from '@contentstack/venus-components'

const CustomComponent = () => {
  return (
    <>
      <span> custom component</span>
      <span className="icon-spacing">
        <Icon icon="Logo" size="tiny" />
      </span>
    </>
  )
}
const list = [
  {
    label: 'first stack',
    action: () => {
      console.log('selected first')
      alert('selected first stack')
    },
    default: true,
  },
  {
    label: 'second stack',
    action: () => {
      console.log('selected second')
      alert('selected second stack')
    },
  },
  {
    label: 'third stack',
    action: () => {
      console.log('selected third')
      alert('selected third stack')
    },
  },
  {
    label: 'fourth stack',
    action: () => {
      console.log('selected fourth')
      alert('selected fourth stack')
    },
  },
  {
    label: 'fifth stack',
    action: () => {
      console.log('selected fifth')
      alert('selected fifth stack')
    },
  },
  {
    label: 'sixth stack',
    action: () => {
      console.log('selected sixth')
      alert('selected sixth stack')
    },
  },
  {
    label: <CustomComponent />,
    action: () => {
      console.log('selected Example')
      alert('selected custom component')
    },
    searchKey: 'custom component',
  },
]

export const Default = () => {
  let typeList = {
    click: 'click',
    select: 'select',
    hover: 'hover',
  }
  return (
    <Dropdown list={list} type="click" className="ml-40">
      <Icon icon="Settings" size="original" />
    </Dropdown>
  )
}

export const PrimarySelect = () => {
  return (
    <Dropdown
      list={list}
      type="select"
      dropDownType="primary"
      className="ml-40"
      withSearch={true}
    />
  )
}

export const PrimarySelectWithSearch = () => {
  return (
    <Dropdown
      list={list}
      type="select"
      dropDownType="primary"
      withSearch={true}
      className="ml-40"
    />
  )
}

export const SecondarySelect = () => {
  return (
    <Dropdown
      list={list}
      type="select"
      dropDownType="secondary"
      withSearch={true}
      className="ml-40"
    />
  )
}

export const SecondarySelectWithSearch = () => {
  return (
    <Dropdown
      list={list}
      type="select"
      dropDownType="secondary"
      withSearch={true}
      className="ml-40"
    />
  )
}

const DropdownComponents = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h5>Default</h5>
        <Default />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>PrimarySelect</h5>
        <PrimarySelect />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>PrimarySelectWithSearch</h5>
        <PrimarySelectWithSearch />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>SecondarySelect</h5>
        <SecondarySelect />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>SecondarySelectWithSearch</h5>
        <SecondarySelectWithSearch />
      </div>
    </div>
  )
}

export default DropdownComponents
