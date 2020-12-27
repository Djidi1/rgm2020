import React from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [withKnobs],
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} disabled={boolean('Disabled', false)}>{text('Label', 'Button')}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  withBorder: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  withBorder: true,
};
