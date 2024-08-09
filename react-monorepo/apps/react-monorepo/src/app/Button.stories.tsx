import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';


const meta: Meta<typeof Button> = {
    component: Button,
  };

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
      title: "Primary",
      color:"white",
      bgColor:"blue",
      borderRadius:"4px",
      fontStyle:"normal"
    },
  };

  export const Secondary: Story = {
    args: {
      title: "Secondary",
      color:"white",
      bgColor:"black",
      borderRadius:"10px",
      fontStyle:"italic"
    },
  };

  export const Custom: Story = {
    args: {
      title: "Custom",
      color:"black",
      bgColor:"yellow",
      borderRadius:"20px",
      fontStyle:"oblique"
    },
  };
