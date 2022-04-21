import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icons, { IconTypes } from "@/components/Icons";

export default {
  title: "Icons",
  component: Icons
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = (args) => (
  <>
    {IconTypes.map((icon) => (
      <Icons name={icon} {...args} />
    ))}
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Icons"
};
