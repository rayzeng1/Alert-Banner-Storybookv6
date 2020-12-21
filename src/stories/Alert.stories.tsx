import React from 'react';
import {text, select, boolean} from '@storybook/addon-knobs';
import {Button} from '@material-ui/core';
import {Story, Meta} from '@storybook/react/types-6-0';
import {DESCRIPTION_Content, ACTION_CONTENT} from '../Component/constants';
import {Alert} from '../Component/Alert';
import { AlertProps } from '../Component/types';


const actionbutton = (actionval) => {
  if (actionval === true) return (
    <a href="http://www.google.com" target="_blank"><Button color="primary" variant="contained"> {ACTION_CONTENT} </Button></a>
  )
  else return (null)
}
 export default {
  title: 'Component/Alert Banner TSX',
  component: Alert,
  argTypes: {
   severity: {
      description: 'The severity of the alert. Either success, warning, or error.',
      control: {
          type: 'select',
          options: [
              'success',
              'warning',
              'error',
          ],
      },
  },
   title: {
     description: 'The heading of the alert.',
    control: {
      disable: false,
      type: 'text',
    },
  },
   action: {
    control: {
      disable: false,
    },
   },
    onClick: { 
      action: 'clicked',
      table: {
        disable: true,
      }},
    testId: {
      control: {
        disable: true,
      },
      table: {
        disable: true
      }
    },
    decorativeIcon: {
      control: {
        disable: true,
      },
      table: {
        disable: false,
      }
    },
    iconProps: {
      control: {
        disable: true,
      },
      table: {
        disable: false,
      }
    },
    titleVariant: {
      control: {
        disable: true,
      },
      table: {
        disable: false,
      }
    },
    bodyVariant: {
      control: {
        disable: true,
      },
      table: {
        disable: false,
      }
    },
    componentTitleVariant: {
      control: {
        disable: true,
      },
      table: {
        disable: false,
      }
    },
    componentVariant: {
      control: {
        disable: true,
      },
      table: {
        disable: false,
      }
    },
    alertTitleProps: {
      control: {
        disable: true,
      },
      table: {
        disable: false,
      }
    },
    ref: {
      control: {
        disable: true,
      },
      table: {
        disable: true
      }
    }
    },
    parameters: {
    docs: { 
        description: { 
            component: DESCRIPTION_Content
        } 
    },
  }
}


export const AlertStatusStory = (args) => {

actionbutton(args.action);
return <Alert{...args} action = {actionbutton(args.action)} />
}


AlertStatusStory.args = {
title: 'Your order was processed',
severity: 'success',
action: boolean('action', true)
}





