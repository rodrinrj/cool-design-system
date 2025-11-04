import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { View } from 'react-native';
import { Button } from './Button';

const meta = {
  title: 'Design System/Atoms/Button',
  component: Button,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Story />
      </View>
    ),
  ],
  render: (args) => (
    <Text>
      {args.text}
    </Text>
  ),
  args: { label: 'The quick brown fox jumps over the lazy dog' },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    type: 'primary'
  },
};

export const Disabled: Story = {
  args: {
    disabled: true
  },
};

export const Danger: Story = {
  args: {
    type: 'danger'
  },
};

