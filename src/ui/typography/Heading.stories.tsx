import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";

import { Heading } from "./Heading";
import { Text } from "./Text";

const CONTENT = "The quick brown fox jumps over the lazy dog";

const meta = {
  title: "Design System/Typography/Headings",
  component: Heading,
  subcomponents: { Text },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
  render: (args) => <Heading {...args}>{CONTENT}</Heading>,
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Examples: Story = {
  args: {},
  render: () => (
    <>
      <Heading level="h1">{CONTENT}</Heading>
      <Heading level="h2">{CONTENT}</Heading>
      <Heading level="h3">{CONTENT}</Heading>
      <br />
      <Heading level="h2">
        This is a title with{" "}
        <Text color="accent" fontSize="2xl" fontWeight="bold">
          an accent
        </Text>{" "}
        inside
      </Heading>
    </>
  ),
};

export const Heading1: Story = {
  args: {
    level: "h1",
  },
};

export const Heading2: Story = {
  args: {
    level: "h2",
  },
};

export const Heading3: Story = {
  args: {
    level: "h3",
  },
};
