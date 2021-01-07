import React from 'react'
import {ChakraProvider,Box, Stack, Text, Center, Image} from '@chakra-ui/react'

const Header = () => {
    const header_border = {
        borderBottom: "1px solid #38444D",
      };
    return (
        <ChakraProvider>
            <Box w="600px" h="52px" style={header_border} ml="-17px">
                <Stack direction="row" spacing="480px" ml="17px">
                    <Box>
                        <Text fontSize="19px" fontWeight="800" color="#FFFFFF" mt="10px">Home</Text>
                    </Box>
                    <Box>
                        <Box w="46px" h="46px" borderRadius="100%" _hover={{ bg: "#2C3640" }} style={{cursor: "pointer"}}> 
                            <Center>
                                <Image src="./bintang.svg" w="23px" h="23px" mt="15px"/>
                            </Center>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </ChakraProvider>
    )
}


export default Header
