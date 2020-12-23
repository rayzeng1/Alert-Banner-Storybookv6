# Alert Banner Component 

This was created to demonstrate the new features of Storybook v6. These include the introduction of args (arguments), controls, and docs. This was done by using the Alert component that has already been written and creating storybook files of the component.
The new features of storybook enable you to dynamically control UI within the storybook platform. This allows you to test additions or modifications to props without having to re-render the component.


## Example
		

The Alert banner itself was already created. For information on it's use, access its README.md in the component library.

        <Meta title = "Component/Alert Banner MDX"
        argTypes = {{
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
            type: 'text',
            },
        },
        action: {
            description: 'A boolean where if true, the action button will appear on the banner.'
         }


        We create a Template function that destructures the arguments (props) within the Alert component and assign them to the inputs, which are in the Template.args definition.

        export const Template = (args) => { 
            
        actionbutton(args.action); 
        return <Alert{...args} action = {actionbutton(args.action)} /> }

        StoryName.args = { 
            title: 'Your order was processed', 
            severity: 'success', 
            action: boolean('action', true) }

This is just a template, but you can use the Template.bind({}) function to copy the format and change.


### Props Structure
		

		| Prop | Type | Required | Default |
		| ----- | ----------------------- | -------- | ------- |
		| title | 'string' | Y |  |
		| severity | 'select' | Y | |
		| action | 'boolean' | Y | |
		

		
### This was created using create-react-app and storybook version 6. To run storybook, use npm run storybook. 