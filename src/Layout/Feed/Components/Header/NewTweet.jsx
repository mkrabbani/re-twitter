import React from 'react'
import {ChakraProvider, Box, Stack, Text, Textarea, Image, Center} from '@chakra-ui/react'

const NewTweet = () => {
    const new_border = {
        borderBottom: "1px solid #38444D",
      };

    return (
        <ChakraProvider>
            <Box w="600px" minH="120px" style={new_border} ml="-17px" mb="10px">
                <Stack direction="column" ml="17px">
                    <Box>
                        <Stack direction="row" spacing="20px" mt="10px">
                            <Box>
                                <Image  w="50px" h="50px" borderRadius="100%" src="https://pbs.twimg.com/profile_images/1030229583835160576/d2sMN8ai_400x400.jpg" />
                            </Box>
                            <Box w="85%">
                                <Textarea variant="unstyled" placeholder="What's happening ?" fontSize="19px" mt="10px" color="#8899A6"/>
                            </Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction="row"  ml="60px" mb="10px" spacing="200px">
                            <Box>
                                <Stack direction="row">
                                    <Box w="40px" h="40px" _hover={{ bg: "#2C3640" }} borderRadius="100%" style={{cursor: "pointer"}}>
                                        <Center>
                                            <Image src="./Img NT/Pict T.png" w="20px" h="20px" mt="10px"/>
                                        </Center>
                                    </Box>
                                    <Box w="40px" h="40px" _hover={{ bg: "#2C3640" }} borderRadius="100%" style={{cursor: "pointer"}}>
                                        <Center>
                                            <Image src="./Img NT/GIF T.png" w="20px" h="20px" mt="10px"/>
                                        </Center>
                                    </Box>
                                    <Box w="40px" h="40px" _hover={{ bg: "#2C3640" }} borderRadius="100%" style={{cursor: "pointer"}}>
                                        <Center>
                                            <Image src="./Img NT/Pol T.png" w="20px" h="20px" mt="10px"/>
                                        </Center>
                                    </Box>
                                    <Box w="40px" h="40px" _hover={{ bg: "#2C3640" }} borderRadius="100%" style={{cursor: "pointer"}}>
                                        <Center>
                                            <Image src="./Img NT/Post Timer T.png" w="20px" h="20px" mt="10px"/>
                                        </Center>
                                    </Box>
                                    <Box w="40px" h="40px" _hover={{ bg: "#2C3640" }} borderRadius="100%" style={{cursor: "pointer"}}>
                                        <Center>
                                            <Image src="./Img NT/smile.png" w="20px" h="20px" mt="10px"/>
                                        </Center>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box as="button" w="75px" h="40px" bg="#1DA1F2" borderRadius="20px" style={{opacity: "0.5"}}>
                                <Text fontSize="15px" fontWeight="bold" color="white" p="2">Tweet</Text>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </ChakraProvider>
    )
}

export default NewTweet
