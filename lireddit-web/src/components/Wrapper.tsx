import React from "react";
import { Box } from "@chakra-ui/core";

interface WrapperProps {
  variant?: "small" | "regular";
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box mt={8} maxW={variant == "regular" ? "800px" : "400px"} w="100%">
      {children}
    </Box>
  );
};
