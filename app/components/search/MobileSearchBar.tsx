import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { mobileSearchProps } from './style'

type Props = {}

const MobileSearchBar = (props: Props) => {
  return (
    <Box>
      <InputGroup size={"sm"}>
        <InputLeftElement pointerEvents={"none"}>
          <SearchIcon color={"gray.500"} />
        </InputLeftElement>
        <Input {...mobileSearchProps} />
      </InputGroup>
    </Box>
  )
}

export default MobileSearchBar