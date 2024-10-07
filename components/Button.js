import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Define button variants as style objects
const buttonVariants = StyleSheet.create({
  default: {
    backgroundColor: "#9b52e0", // Equivalent to "bg-primary"
    color: "#ffffff", // Equivalent to "text-primary-foreground"
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  destructive: {
    backgroundColor: "#d9534f", // Equivalent to "bg-destructive"
    color: "#ffffff",
  },
  outline: {
    borderWidth: 1,
    borderColor: "#ccc", // Equivalent to "border-input"
    backgroundColor: "#fff", // Equivalent to "bg-background"
  },
  secondary: {
    backgroundColor: "#6c757d", // Equivalent to "bg-secondary"
    color: "#ffffff",
  },
  ghost: {
    backgroundColor: "transparent",
  },
  link: {
    backgroundColor: "transparent",
    textDecorationLine: "underline", // Equivalent to "underline-offset-4 hover:underline"
  },
});

// Define button sizes as style objects
const buttonSizes = StyleSheet.create({
  default: {
    height: 40, // Equivalent to "h-10"
    paddingHorizontal: 16, // Equivalent to "px-4"
    paddingVertical: 10, // Equivalent to "py-2"
  },
  sm: {
    height: 36, // Equivalent to "h-9"
    paddingHorizontal: 12, // Equivalent to "px-3"
  },
  lg: {
    height: 48, // Equivalent to "h-11"
    paddingHorizontal: 32, // Equivalent to "px-8"
  },
  icon: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const Button = React.forwardRef(
  ({ variant = "default", size = "default", style, children, onPress, ...props }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        style={[buttonVariants[variant], buttonSizes[size], style]}
        onPress={onPress}
        {...props}
      >
        <Text style={{ color: buttonVariants[variant].color }}>{children}</Text>
      </TouchableOpacity>
    );
  }
);

Button.displayName = "Button";
