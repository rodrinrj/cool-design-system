import * as React from "react";
import { Text, type TextProps } from "react-native";
import { colors, typography } from "../tokens";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: keyof typeof colors;
  level?: "h1" | "h2" | "h3";
}

export const Heading = React.forwardRef<Text, HeadingProps>(
  ({ color = "primary", level = "h3", children, ...rest }, ref) => {
    const style: React.CSSProperties = {
      color: colors[color],
      fontSize:
        level === "h1"
          ? typography.fontSize["3xl"]
          : level === "h2"
          ? typography.fontSize["2xl"]
          : typography.fontSize.lg,
    };

    const Tag = `${level}` as const;

    return (
      <Text>
        <Tag style={style}>{children}</Tag>
      </Text>
    );
  }
);
