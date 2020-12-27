import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Field, { FieldProps } from './Field';

export default {
  title: 'Example/Field',
  component: Field,
} as Meta;

const Template: Story<FieldProps> = (args) => <Field {...args} />;

export const FieldInput = Template.bind({});
FieldInput.args = {
  formik: false,
  type: 'text',
  name: 'input',
  placeholder: 'Placeholder Text',
};
