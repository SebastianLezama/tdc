import { BoxProps, InputProps } from "@chakra-ui/react";

export const searchProps: InputProps = {
  type: "text",
  placeholder: "Buscar...",
  focusBorderColor: "primary",
  borderWidth: "1px",
  borderColor: "gray.300",
  width: {base: "100%", sm:"200px", md: "280px", lg:"400px"},
  display: {base: "none", sm: "flex"}

}

export const mobileSearchProps: InputProps = {
  type: "text",
  placeholder: "Buscar...",
  focusBorderColor: "primary",
  borderWidth: "1px",
  borderColor: "gray.300",
  width: {base: "100%", sm:"200px", md: "280px", lg:"400px"},
  // display: {base: "flex", xs: "none", sm: "none", md: "none", lg: "none" }
  display: {base: "flex", sm: "none" }

}

export const searchWrapperProps: BoxProps = {
  // px: "2rem",
  // py: "0.5rem",
  // mb: "1rem",
  display: {base: "none", sm: "flex" }

}
export const mobileSearchWrapperProps: BoxProps = {
  px: "2rem",
  py: "0.5rem",
  mb: "1rem",
  // display: {base: "flex", xs: "none", sm: "none", md: "none", lg: "none" }
  display: {base: "flex", sm: "none" }

}

