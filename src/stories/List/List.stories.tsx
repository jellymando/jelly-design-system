import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import List from "@/components/List";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default {
  title: "List",
  component: List,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => (
  <>
    <List>
      <h1>Title</h1>
      <p>Content</p>
      <Input />
      <Button>Button</Button>
    </List>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "List"
};
