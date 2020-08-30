import React from 'react'
import { Notification, Button, Icon } from '@contentstack/venus-components'

export const Success = () => {
  return (
    <div>
      <Button
        onClick={() =>
          Notification({
            displayContent: { text: 'Yay!Page published succesfully' },
            notifyProps: { hideProgressBar: true },
            type: 'success',
          })
        }
      >
        Success
      </Button>
    </div>
  )
}

export const Message = () => {
  return (
    <div>
      <Button
        onClick={() =>
          Notification({
            displayContent: { text: 'You have a new notification' },
            notifyProps: { hideProgressBar: true },
            type: 'message',
          })
        }
      >
        Message
      </Button>
    </div>
  )
}

export const Warning = () => {
  return (
    <div>
      <Button
        onClick={() =>
          Notification({
            displayContent: { text: 'Please check your internet connection' },
            notifyProps: { hideProgressBar: true },
            type: 'warning',
          })
        }
      >
        Warning
      </Button>
    </div>
  )
}

export const Error = () => {
  return (
    <div>
      <Button
        onClick={() =>
          Notification({
            displayContent: { text: 'There is an error in your page' },
            notifyProps: { hideProgressBar: true },
            type: 'error',
          })
        }
      >
        Error
      </Button>
    </div>
  )
}

export const ProTip = () => {
  return (
    <div>
      <Button
        onClick={() =>
          Notification({
            displayContent: {
              component: (
                <span className="flex-v-center">
                  <span>Pro Tip : Press</span>
                  <span className="Key-Shortcut">
                    <Icon icon="NewFolder" />
                  </span>{' '}
                  <span>+</span>
                  <span className="Key-Shortcut">m</span> <span>to show / hide menu bar</span>
                </span>
              ),
            },
            type: 'shortcut',
            notifyProps: { hideProgressBar: true },
          })
        }
      >
        Pro Tip
      </Button>
    </div>
  )
}

export const WithCTA = () => {
  const SuccessCta = () => {
    return <Button buttonType="success">View Publish Queue</Button>
  }
  const WarningCta = () => {
    return <Button buttonType="warning">View Publish Queue</Button>
  }
  const ErrorCta = () => {
    return <Button buttonType="danger">View Publish Queue</Button>
  }

  const DisplayText =
    'Your bulk publish request is in progress. Please check Publish Queue for more details.'

  return (
    <>
      <div className="pb-10">
        <Button
          onClick={() =>
            Notification({
              displayContent: { text: DisplayText },
              notifyProps: { hideProgressBar: true },
              type: 'success',
              cta: <SuccessCta />,
            })
          }
        >
          Success CTA
        </Button>
      </div>
      <div className="pb-10">
        <Button
          onClick={() =>
            Notification({
              displayContent: { text: DisplayText },
              notifyProps: { hideProgressBar: true },
              type: 'warning',
              cta: <WarningCta />,
            })
          }
        >
          Warning CTA
        </Button>
      </div>
      <div className="pb-10">
        <Button
          onClick={() =>
            Notification({
              displayContent: { text: DisplayText },
              notifyProps: { hideProgressBar: true },
              type: 'error',
              cta: <ErrorCta />,
            })
          }
        >
          Error CTA
        </Button>
      </div>
    </>
  )
}

const NotificationComponents = () => {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h5>Success</h5>
        <Success />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>Message</h5>
        <Message />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>Warning</h5>
        <Warning />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>Error</h5>
        <Error />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>ProTip</h5>
        <ProTip />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h5>WithCTA</h5>
        <WithCTA />
      </div>
    </div>
  )
}

export default NotificationComponents
