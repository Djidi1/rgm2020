import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Image, { ImageProps } from './Image';
import Logo from '../img/logo.png';

export default {
  title: 'Example/Image',
  component: Image,
} as Meta;

const Template: Story<ImageProps> = (args) => <Image url={Logo} {...args} />;

export const ImageTemplate = Template.bind({});
ImageTemplate.args = {
  width: '150px',
};
