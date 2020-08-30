import React from 'react'

import { Heading, Paragraph } from '@contentstack/venus-components'

const HeadingComponent = () => {
  const H1 = () => <Heading tagName="h1" text="Heading 1" />

  const H2 = () => <Heading tagName="h2" text="Heading 2" />

  const H3 = () => <Heading tagName="h3" text="Heading 3" />

  const H4 = () => <Heading tagName="h4" text="Heading 4" />

  const H5 = () => <Heading tagName="h5" text="Heading 5" />

  const H6 = () => <Heading tagName="h6" text="Heading 6" />

  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h5>H1</h5>
        <H1 />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>H2</h5>
        <H2 />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>H3</h5>
        <H3 />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>H4</h5>
        <H4 />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>H5</h5>
        <H5 />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>H6</h5>
        <H6 />
      </div>
    </div>
  )
}

const ParagraphComponent = () => {
  const Text = () => <Paragraph tagName="p" text="Paragraph" />

  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h5>Text</h5>
        <Text />
      </div>
    </div>
  )
}

const Typography = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ marginBottom: '40px', color: '#6760c3' }}>HeadingComponent</h3>
        <HeadingComponent />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ marginBottom: '40px', color: '#6760c3' }}>ParagraphComponent</h3>
        <ParagraphComponent />
      </div>
    </div>
  )
}

export default Typography
