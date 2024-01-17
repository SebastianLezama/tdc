import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { searchProps, searchWrapperProps } from './style'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <Box {...searchWrapperProps}>
      <InputGroup size={"sm"}>
        <InputLeftElement pointerEvents={"none"}>
          <SearchIcon color={"gray.500"}
          />
        </InputLeftElement>
        <Input {...searchProps} />
      </InputGroup>
    </Box>
  )
}

export default SearchBar