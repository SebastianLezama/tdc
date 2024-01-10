import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { searchProps } from './style'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <Box>
      <InputGroup size={"sm"}>
        <InputLeftElement pointerEvents={"none"}>
          <SearchIcon color={"gray.500"} display={{ base: "none", xs: "flex", sm: "flex", md: "flex", lg: "flex" }}
          />
        </InputLeftElement>
        <Input {...searchProps} />
      </InputGroup>
    </Box>
  )
}

export default SearchBar