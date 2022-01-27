import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OuterContainer } from '../../components/OuterContainer';

import bgImage from '../../images/background/steven-cordes-8Hy3GWnHoBM-unsplash.jpg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Demo/OuterContainer',
  component: OuterContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof OuterContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OuterContainer> = (args) => (
  <OuterContainer {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = { children: 'Some Text' };

export const ThemeOverride = Template.bind({});
ThemeOverride.args = {
  children: 'Some Text',
  themeOverride: { bgImg: bgImage, fg: '#ffffff' },
};
