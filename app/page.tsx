import { Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';


const Home: React.FC = () => {
  return (
    <div>
      <Heading>
      jelou
      </Heading>
      <Link href={"/products"}>Productos</Link>


    </div>
  );
}

export default Home