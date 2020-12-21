# This program was created to demonstrate the new features of Storybook v6. These include the introduction of args (arguments), controls, and docs. This was done by using the Alert component that has already been written and creating storybook files of the component. 

# The new features of storybook enable you to dynamically control UI within the storybook platform. This allows you to test additions or modifications to props without having to re-render the component. 

We can customize the argument types (props) to enable us to the controls feature. Storybook will automatically enable this for booleans. 

This can be seen below, in the export default section. The 'title' is what the component will be called within Storybook. The 'component' is what the story is based off of, which storybook automatically pulls proptypes and descriptions from if they are defined within the component. The argtypes, in this case severity, is followed by a helpful description for testers to see, and the 'control' parameter, which allows the user to select the varying severities, in this case 'success', 'warning', and 'error', and have them dynamically render within Storybook. 

# Example Usage
export default {
  title: 'Alert Banner',
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

We create a Template function that destructures the arguments (props) within the Alert component and assign them to the inputs, which are in the Template.args definition.

export const Template = (args) => {
actionbutton(args.action);
return <Alert{...args} action = {actionbutton(args.action)} />
}
 
Template.args = {
title: 'Your order was processed',
severity: 'success',
action: boolean('action', true)
}

# This is just a template, but you can use the Template.bind({}) function to copy the format and change the args based on what you want to display (different severities, title, etc).

# To run storybook, use npm run storybook command. 