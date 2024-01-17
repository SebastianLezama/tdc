import { BoxProps, FlexProps, StackProps } from "@chakra-ui/react";


export const NavStyles: BoxProps = {
  top: 0,
  pos: "fixed",
  w: "100%",
  bgColor: "white",
  mb: "1rem",
  zIndex: 8,
}

export const desktopNavStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "2rem",
  py: "1.4rem",
  // mb: "1rem",
  borderBottom: "1px",
  borderColor: "gray.200",
  display: {base: "none", sm: "flex"}

}

export const mobileNavStyles: FlexProps = {
  align: "center",
  px: "2em",
  py: "1em",
  display: {base: "flex", sm: "none" }

}

export const navBarStack: StackProps = {
  gap: 4,
  flex: 1,
  align: "center"
}