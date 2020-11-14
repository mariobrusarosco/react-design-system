import { Meta, Story } from "@storybook/react/types-6-0";
import * as React from "react";
import PrimaryButton, { PrimaryButtonProps } from "./PrimaryButton";

const Template: Story<PrimaryButtonProps> = (args) => (
  <PrimaryButton {...args} />
);

export const DefaultButton = Template.bind({});

DefaultButton.args = {
  text: "Lorem ipsum",
};

export default {
  component: PrimaryButton,
  title: "Buttons/Primary Button",
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;
