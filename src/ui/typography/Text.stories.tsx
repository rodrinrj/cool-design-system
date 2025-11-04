import type { Meta, StoryObj } from "@storybook/react-native-web-vite";
import { View } from "react-native";
import { Text } from "./Text";

const CONTENT = "The quick brown fox jumps over the lazy dog";

const meta = {
  title: "Design System/Typography/Text",
  tags: ["autodocs"],
  component: Text,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
  render: (args) => <Text {...args}>{CONTENT}</Text>,
  argTypes: {
    color: {
      type: "string",
      control: { type: "select" },
      options: ["primary", "secondary", "accent"],
      description: "Standarized colors",
      table: {
        defaultValue: {
          summary: "primary",
        },
      },
    },
    fontSize: {
      type: "string",
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Standarized sizes",
      table: {
        defaultValue: {
          summary: "md",
        },
      },
    },
    fontWeight: {
      type: "string",
      control: { type: "select" },
      options: ["regular", "medium", "bold"],
      description: "Standarized weights",
      table: {
        defaultValue: {
          summary: "regular",
        },
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Examples: Story = {
  args: {},
  render: (args) => (
    <>
      <Text {...args} fontSize="lg">
        {CONTENT}
      </Text>
      <Text {...args} fontSize="md">
        {CONTENT}
      </Text>
      <Text {...args} fontSize="sm">
        {CONTENT}
      </Text>
      <br />
      <Text {...args}>{CONTENT}</Text>
    </>
  ),
};

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
};

export const Accent: Story = {
  args: {
    color: "accent",
  },
};
