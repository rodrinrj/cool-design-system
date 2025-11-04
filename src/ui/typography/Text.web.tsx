import * as React from "react";

import { colors, typography } from "../tokens";

interface TextProps extends React.HTMLProps<HTMLSpanElement> {
  color?: keyof typeof colors;
  fontSize?: keyof (typeof typography)["fontSize"];
  fontWeight?: keyof (typeof typography)["fontWeight"];
}

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
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
      <span ref={ref} style={style} {...rest}>
        {children}
      </span>
    );
  }
);
