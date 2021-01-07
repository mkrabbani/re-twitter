import React from 'react'
import {Box, Center, ChakraProvider, Stack} from '@chakra-ui/react'
import Feed from './Layout/Feed/Feed'
import Menu from './Layout/Menu/Menu'
import Sidebar from './Layout/Sidebar/Sidebar'
import { HelmetProvider, Helmet } from 'react-helmet-async'

const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Home / Twitter</title>
            </Helmet>
            <ChakraProvider>
                <Box bg="#15202B">
                    <Center>
                        <Stack direction="row" spacing="16px">
                            <Menu  />
                            <Feed />
                            <Sidebar />
                        </Stack>
                    </Center>
                </Box>
            </ChakraProvider>
        </HelmetProvider>
    )
}

export default Home
