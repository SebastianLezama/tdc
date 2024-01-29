import { ButtonProps, FlexProps, HeadingProps } from "@chakra-ui/react";

export const bannerProps: FlexProps = {
  // justifyItems: "center",
  // align: "center",
  gap: "4",
  flexDir: {base: "column", md: "column"},
  w: {base: "100%", md: "60%"},
  mx: "auto",
  p: "2rem",
  maxW: {base: "100%", md: "1000px", lg: "1500px"},
}

export const bannerHeadingProps: HeadingProps = {
  size: {base: "xl", lg: "3xl"},
  lineHeight: "4rem",
  color: "primary"

}

export const bannerButtonProps: ButtonProps = {
  rounded: "sm",
  bgColor: "primary",
  color: "white",
  _hover: {bgColor: "secondary.300"},
  maxW: "200px"
}