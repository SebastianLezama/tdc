import { InputProps } from "@chakra-ui/react";

export const searchProps: InputProps = {
  type: "text",
  placeholder: "Buscar...",
  focusBorderColor: "primary",
  borderWidth: "1px",
  borderColor: "gray.400",
  width: {base: "100%", sm:"200px", md: "280px", lg:"400px"},
  display: {base: "none", lg: "flex"}

}

export const mobileSearchProps: InputProps = {
  type: "text",
  placeholder: "Buscar...",
  focusBorderColor: "primary",
  borderWidth: "1px",
  borderColor: "gray.400",
  width: {base: "100%", sm:"200px", md: "280px", lg:"400px"},
  display: {base: "flex", md: "none", lg: "none"}

}