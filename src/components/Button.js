import React, { Component, useState } from 'react'

import { Button } from '@contentstack/venus-components'

const ButtonComponents = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '600px',
        height: '100px',
        alignContent: 'space-between',
        color: '#010101',
      }}
    >
      <div>
        <Button buttonType="primary">
          <span>Default</span>
        </Button>
      </div>
      <div>
        <Button disabled={true}>
          <span>Disabled</span>
        </Button>
      </div>

      <div>
        <Button buttonType="primary">
          <span>Primary</span>
        </Button>
      </div>
      <div>
        <Button buttonType="secondary">
          <span>Secondary</span>
        </Button>
      </div>
      <div>
        <Button buttonType="tertiary">
          <span>Tertiary</span>
        </Button>
      </div>
      <div>
        <Button buttonType="outline">
          <span>Outline</span>
        </Button>
      </div>
      <div>
        <Button buttonType="success">
          <span>View Publish Queue</span>
        </Button>
      </div>
      <div>
        <Button buttonType="danger">
          <span>View Publish Queue</span>
        </Button>
      </div>
      <div>
        <Button buttonType="warning">
          <span>View Publish Queue</span>
        </Button>
      </div>
    </div>
  )
}

export default ButtonComponents
