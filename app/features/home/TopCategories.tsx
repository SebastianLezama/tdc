'use client'
import SectionHeading from '@/app/components/SectionHeading'
import { Box, Card, CardBody, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {

}
type Category = {
  category: string
}

const CategoryCard = ({ category }: Category) => {
  return (
    <Card direction={"row"} align={"center"} overflow={"hidden"} variant={"outline"} w={"100%"} h={"100%"} p={"10px"}>
      <Image alt='top-categories' src={'https://robohash.org/mail@ashallendesign.co.uk'} width={100} height={100} />
      <CardBody>
        <Heading size={"sm"}>{category}</Heading>
      </CardBody>
    </Card>
  )
}

const TopCategories = (props: Props) => {
  return (
    <Box w={{ base: "100%", lg: "90%" }} mx={"auto"} px={"3rem"} py={"2rem"}>
      <SectionHeading title='Top Categories' />
      <Grid maxW={"90%"} gridTemplateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }} gap={4}>
        <GridItem maxW={"300px"} h={"200px"}>
          <CategoryCard category='Robotitos' />
        </GridItem >
        <GridItem maxW={"300px"} h={"200px"}>
          <CategoryCard category='Robotitos' />
        </GridItem>
        <GridItem maxW={"300px"} h={"200px"}>
          <CategoryCard category='Robotitos' />
        </GridItem>
        <GridItem maxW={"300px"} h={"200px"}>
          <CategoryCard category='Robotitos' />
        </GridItem>
        <GridItem maxW={"300px"} h={"200px"}>
          <CategoryCard category='Robotitos' />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default TopCategories