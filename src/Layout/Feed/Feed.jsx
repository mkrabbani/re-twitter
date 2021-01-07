import React from 'react'
import {ChakraProvider, Container} from '@chakra-ui/react'
import Header from './Components/Header/Header'
import NewTweet from './Components/Header/NewTweet'
import Tweet from './Components/Header/Tweet'

const Feed = () => {
    const tl_border = {
        borderLeft: "1px solid #38444D",
        borderRight: "1px solid #38444D",
        borderTop: "1px solid #38444D"
      };

    return (
        <ChakraProvider>
            <Container style={tl_border}  maxW="600px" minH="100vh">
                <Header />
                <NewTweet />
                <Tweet />
            </Container>
        </ChakraProvider>
    )
}

export default Feed
