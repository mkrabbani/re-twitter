import React from 'react'
import {ChakraProvider, Box, Text, Stack, Spacer, Center, Image } from '@chakra-ui/react'

const Menu = () => {
    const sticky = {
        position: "sticky",
        top: "0",
    };

    const hover= {
        bg: "black"  
    };

    const menuProfile = {
        position: "fixed",
        bottom: "0%",
        opacity: "1",
        cursor: "pointer",
        marginBottom: "10px"
    }

    return (
        <ChakraProvider>
            <Box w="300px" h="100vh" style={sticky}>
                <Stack direction="column" spacing="35px" mt="5px">
                    <Box h="50px">
                        <Box w="50px" h="50px" borderRadius="100%" _hover={{ bg: "#2C3640" }} style={{cursor: "pointer"}}> 
                            <Center>
                                <Box w="25px" h="25px" mt="12px">
                                    <Image src="./Img Menu/Twitter.png" />
                                </Box>
                            </Center>
                        </Box>
                    </Box>
                    <Box h="35px" className={hover}>
                        <Box w="150px" h="50px" borderRadius="20px" _hover={{ bg: "#2C3640" }} style={{cursor: "pointer"}}>
                            <Stack direction="row" ml="15px">
                                <Center>
                                    <Box w="25px" h="25px" mt="12px">
                                        <Image src="./Img Menu/HomeBlue.svg" />
                                    </Box>
                                    <Box>
                                        <Text ml="25px" mt="10px" fontSize="19px" fontWeight="bold" color="#1DA1F2">Home</Text>
                                    </Box>
                                </Center>
                            </Stack>
                        </Box>
                    </Box>
                    <Box h="35px" >
                        <Box w="150px" h="50px" borderRadius="20px" _hover={{ bg: "#2C3640" }} style={{cursor: "pointer"}}>
                            <Stack direction="row" ml="15px">
                                <Center>
                                    <Box w="25px" h="25px" mt="-15px">
                                        <Image src="./Img Menu/Explore.png" />
                                    </Box>
                                    <Box>
                                        <Text ml="25px" mt="10px" fontSize="19px" fontWeight="bold" color="white">Explore</Text>
                                    </Box>
                                </Center>
                            </Stack>
                        </Box>
                    </Box>
                    <Box h="35px" >
                        <Box w="200px" h="50px" borderRadius="20px" _hover={{ bg: "#2C3640" }} style={{cursor: "pointer"}}>
                            <Stack direction="row" ml="15px">
                                <Center>
                                    <Box w="25px" h="25px" mt="12px">
                                        <Image src="./Img Menu/Notifications.png" />
                                    </Box>
                                    <Box>
                                        <Text ml="25px" mt="10px" fontSize="19px" fontWeight="bold" color="white">Notifications</Text>
                                    </Box>
                                </Center>
                            </Stack>
                        </Box>
                    </Box>
                    <Box h="35px" >
                        <Box w="170px" h="50px" borderRadius="20px" _hover={{ bg: "#2C3640" }} style={{cursor: "pointer"}}>
                            <Stack direction="row" ml="15px">
                                <Center>
                                    <Box w="25px" h="25px" mt="12px">
                                        <Image src="./Img Menu/Messages.png" />
                                    </Box>
                                    <Box>
                                        <Text ml="25px" mt="10px" fontSize="19px" fontWeight="bold" color="white">Messages</Text>
                                    </Box>
                                </Center>
                            </Stack>
                        </Box>
                    </Box>
                    <Box h="35px" >
                        <Box w="180px" h="50px" borderRadius="20px" _hover={{ bg: "#2C3640" }} style={{cursor: "pointer"}}>
                            <Stack direction="row" ml="15px">
                                <Center>
                                    <Box w="25px" h="25px" mt="12px">
                                        <Image src="./Img Menu/Bookmarks.png" />
                                    </Box>
                                    <Box>
                                        <Text ml="25px" mt="10px" fontSize="19px" fontWeight="bold" color="white">Bookmarks</Text>
                                    </Box>
                                </Center>
                            </Stack>
                        </Box>
                    </Box>
                    <Box h="35px" >
                        <Box w="120px" h="50px" borderRadius="20px" _hover={{ bg: "#2C3640" }} style={{cursor: "pointer"}}>
                            <Stack direction="row" ml="15px">
                                <Center>
                                    <Box w="25px" h="25px" mt="12px">
                                        <Image src="./Img Menu/List.png" />
                                    </Box>
                                    <Box>
                                        <Text ml="25px" mt="10px" fontSize="19px" fontWeight="bold" color="white">List</Text>
                                    </Box>
                                </Center>
                            </Stack>
                        </Box>
                    </Box>
                    <Box h="35px" >
                        <Box w="140px" h="50px" borderRadius="20px" _hover={{ bg: "#2C3640" }} style={{cursor: "pointer"}}>
                            <Stack direction="row" ml="15px">
                                <Center>
                                    <Box w="25px" h="25px" mt="12px">
                                        <Image src="./Img Menu/Profile.png" />
                                    </Box>
                                    <Box>
                                        <Text ml="25px" mt="10px" fontSize="19px" fontWeight="bold" color="white">Profile</Text>
                                    </Box>
                                </Center>
                            </Stack>
                        </Box>
                    </Box>
                    <Box h="35px" >
                        <Box w="130px" h="50px" borderRadius="20px" _hover={{ bg: "#2C3640" }} style={{cursor: "pointer"}}>
                            <Stack direction="row" ml="15px">
                                <Center>
                                    <Box w="25px" h="25px" mt="12px">
                                        <Image src="./Img Menu/More.png" />
                                    </Box>
                                    <Box>
                                        <Text ml="25px" mt="10px" fontSize="19px" fontWeight="bold" color="white">More</Text>
                                    </Box>
                                </Center>
                            </Stack>
                        </Box>
                    </Box>
                    <Box h="50px">
                        <Box as="button" w="230px" h="50px" bg="#1DA1F2" borderRadius="22px" _hover={{ bg: "#1A90D9" }}>
                            <Text fontSize="15px" fontWeight="bold" color="white">Tweet</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Box h="50px">
                            <Box w="300px" h="50px" borderRadius="20px" _hover={{ bg: "#2C3640" }} style={menuProfile}>
                                <Stack direction="row">
                                    <Center>
                                    <Box>
                                        <Image w="40px" h="40px" bg="gray.50" borderRadius="100%" ml="10px" mt="4px" src="https://pbs.twimg.com/profile_images/1030229583835160576/d2sMN8ai_400x400.jpg" />
                                    </Box>
                                    <Box>
                                        <Stack direction="row" spacing="55px" ml="10px">
                                            <Box>
                                                <Stack direction="column" spacing="-5px">
                                                    <Text fontSize="15px" fontWeight="bold" color="white">MK Rabbani</Text>
                                                    <Text fontSize="15px" color="#8899A6">@mkrabbani97</Text>
                                                </Stack>
                                            </Box>
                                            <Spacer />
                                            <Box>
                                                <Box w="20px" h="10px"  mt="20px" mr="10px">
                                                    <Stack direction="row" spacing="2px">
                                                        <Box w="5px" h="5px" borderRadius="100%" style={{border :"1px solid #8899A6"}}/>
                                                        <Box w="5px" h="5px" borderRadius="100%" style={{border :"1px solid #8899A6"}}/>
                                                        <Box w="5px" h="5px" borderRadius="100%" style={{border :"1px solid #8899A6"}}/>
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    </Center>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </ChakraProvider>
    )
}

export default Menu
