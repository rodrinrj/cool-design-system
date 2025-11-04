import * as React from "react";
import { Text as RNText, type TextProps } from "react-native";

export function Text({ children }: TextProps) {
  return (
    <RNText>
      {children}
    </RNText>
  )
}

