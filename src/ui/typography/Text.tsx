import * as React from "react";
import { Text as RNText, type TextProps as RNTextProps } from "react-native";

import { colors, typography } from "../tokens";

interface TextProps extends RNTextProps {
  color?: keyof typeof colors;
  fontSize?: keyof (typeof typography)["fontSize"];
  fontWeight?: keyof (typeof typography)["fontWeight"];
}

export const Text = React.forwardRef<RNText, TextProps>(
  (
    {
      color = "primary",
      fontSize = "md",
      fontWeight = "regular",
      children,
      ...rest
    },
    ref
  ) => {
    const style = {
      color: colors[color],
      fontSize: typography.fontSize[fontSize],
      fontFamily: typography.fontFamily.primary,
      fontWeight: typography.fontWeight[fontWeight],
    };

    return (
      <RNText ref={ref} style={style} {...rest}>
        {children}
      </RNText>
    );
  }
);
