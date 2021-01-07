import React from 'react'
import {ChakraProvider, Box, Text, Stack, Input, InputGroup, InputLeftElement, Spacer, Center, Image } from '@chakra-ui/react'


const Sidebar = () => {
    const sticky = {
        position: "sticky",
        top: "0"
    };

    const sidebarBorder = {
        borderBottom: "1px solid #38444D",
        cursor: "pointer"
    };

    const ngetest = {
        backgroundImage: "url("+"https://svgshare.com/i/Ss0.svg"+")",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: "20px",
        width: "20x",
        marginTop: "10px",
        marginLeft: "5px",
    }

    return (
            <ChakraProvider>
                <Box w="350px" h="80vh" style={sticky}>
                    <Stack direction="column" mt="5px" spacing="15px">
                        <Box>
                            <InputGroup>
                            <InputLeftElement
                            pointerEvents="none"
                            style={ngetest}
                            color="white"
                            />
                            <Input type="tel" placeholder="Search Twitter" fontSize="15px" h="42px" borderRadius="20px" color="white" bg="#253341" style={{borderColor: "#253341"}}/>
                            </InputGroup>
                        </Box>
                        <Box w="350px" h="438px" bg="#192734" borderRadius="15px">
                            <Box h="45px" style={sidebarBorder}> {/* Rapih */}
                                <Stack direction="row" p="2">
                                    <Box>
                                        <Text fontSize="19px" fontWeight="800" color="white" ml="10px">Trends for you</Text>
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <Box w="20px" h="20px" mt="5px" mr="10px">
                                            <Image src="./Img Sidebar/settings.png" />
                                        </Box>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box h="85px" style={sidebarBorder} p="2" _hover={{ bg: "#303C48" }}>
                                <Stack direction="row">
                                    <Box>
                                        <Stack direction="column" spacing="0px" ml="10px">
                                            <Text fontSize="13px" color="#8899A6">Trending in Indonesia</Text>
                                            <Text fontSize="15px" color="white" fontWeight="bold">#ILHAM</Text>
                                            <Text fontSize="13px" color="#8899A6" pt="5px">15.7K Tweets</Text>
                                        </Stack>
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <Box w="20px" h="10px"  mt="5px" mr="10px">
                                            <Stack direction="row" spacing="2px">
                                                <Box w="5px" h="5px" borderRadius="100%" style={{border :"1px solid #8899A6"}}/>
                                                <Box w="5px" h="5px" borderRadius="100%" style={{border :"1px solid #8899A6"}}/>
                                                <Box w="5px" h="5px" borderRadius="100%" style={{border :"1px solid #8899A6"}}/>
                                            </Stack>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box h="85px" style={sidebarBorder} p="2" _hover={{ bg: "#303C48" }}>
                                <Stack direction="row">
                                    <Box>
                                        <Stack direction="column" spacing="0px" ml="10px">
                                            <Text fontSize="13px" color="#8899A6">Trending in Indonesia</Text>
                                            <Text fontSize="15px" color="white" fontWeight="bold">#PL</Text>
                                            <Text fontSize="13px" color="#8899A6" pt="5px">8K Tweets</Text>
                                        </Stack>
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <Box w="20px" h="10px"  mt="5px" mr="10px">
                                            <Stack direction="row" spacing="2px">
                                                <Box w="5px" h="5px" borderRadius="100%" style={{border :"1px solid #8899A6"}}/>
                                                <Box w="5px" h="5px" borderRadius="100%" style={{border :"1px solid #8899A6"}}/>
                                                <Box w="5px" h="5px" borderRadius="100%" style={{border :"1px solid #8899A6"}}/>
                                            </Stack>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box h="85px" style={sidebarBorder} p="2" _hover={{ bg: "#303C48" }}>
                                <Stack direction="row">
                                    <Box>
                                        <Stack direction="column" spacing="0px" ml="10px">
                                            <Text fontSize="13px" color="#8899A6">Trending in Indonesia</Text>
                                            <Text fontSize="15px" color="white" fontWeight="bold">#UCL</Text>
                                            <Text fontSize="13px" color="#8899A6" pt="5px">57K Tweets</Text>
                                        </Stack>
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <Box w="20px" h="10px"  mt="5px" mr="10px">
                                            <Stack direction="row" spacing="2px">
                                                <Box w="5px" h="5px" borderRadius="100%" style={{border :"1px solid #8899A6"}}/>
                                                <Box w="5px" h="5px" borderRadius="100%" style={{border :"1px solid #8899A6"}}/>
                                                <Box w="5px" h="5px" borderRadius="100%" style={{border :"1px solid #8899A6"}}/>
                                            </Stack>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box h="85px" style={sidebarBorder} p="2" _hover={{ bg: "#303C48" }}>
                                <Stack direction="row">
                                    <Box>
                                        <Stack direction="column" spacing="0px" ml="10px">
                                            <Text fontSize="13px" color="#8899A6">Trending in Indonesia</Text>
                                            <Text fontSize="15px" color="white" fontWeight="bold">#Chelsea</Text>
                                            <Text fontSize="13px" color="#8899A6" pt="5px">123K Tweets</Text>
                                        </Stack>
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <Box w="20px" h="10px"  mt="5px" mr="10px">
                                            <Stack direction="row" spacing="2px">
                                                <Box w="5px" h="5px" borderRadius="100%" style={{border :"1px solid #8899A6"}}/>
                                                <Box w="5px" h="5px" borderRadius="100%" style={{border :"1px solid #8899A6"}}/>
                                                <Box w="5px" h="5px" borderRadius="100%" style={{border :"1px solid #8899A6"}}/>
                                            </Stack>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box h="52px" p="2" _hover={{ bg: "#303C48" }} style={{cursor: "pointer"}}>
                                <Text fontSize="15px" color="#1DA1F2" ml="10px" mt="5px">Show more</Text>
                            </Box>
                        </Box>

                        <Box w="350px" h="236px" bg="#192734" borderRadius="15px">
                            <Box h="45px" style={sidebarBorder}>
                                <Stack direction="row" p="2">
                                    <Box>
                                        <Text fontSize="19px" fontWeight="800" color="white" ml="10px">Who to follow</Text>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box h="70px" style={sidebarBorder} p="2" _hover={{ bg: "#303C48" }}>
                                <Stack direction="row" ml="10px">
                                    <Box>
                                        <Stack direction="row">
                                            <Box>
                                                <Image src="https://pbs.twimg.com/profile_images/1339762511298535425/LWsQTBbQ_400x400.jpg" w="50px" h="50px" borderRadius="100%" />
                                            </Box>
                                            <Box>
                                                <Stack direction="column" spacing="-5px" mt="5px">
                                                    <Text fontSize="15px" fontWeight="bold" color="white">100 Thieves</Text>
                                                    <Text fontSize="15px" color="#8899A6">@100Thieves</Text>
                                                </Stack>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <Box w="80px" h="30px" mt="5px" mr="10px" borderRadius="15px" style={{border: "1px solid #1DA1F2"}}>
                                            <Center>
                                                <Text mt="3px" color="#1DA1F2" fontSize="15px" fontWeight="bold">Follow</Text>
                                            </Center>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box h="70px" style={sidebarBorder} p="2" _hover={{ bg: "#303C48" }}>
                                <Stack direction="row" ml="10px">
                                    <Box>
                                        <Stack direction="row">
                                            <Box>
                                                <Image src="https://pbs.twimg.com/profile_images/1345153423868653570/KfT702X8_400x400.jpg" w="50px" h="50px" borderRadius="100%" />
                                            </Box>
                                            <Box>
                                                <Stack direction="column" spacing="-5px" mt="5px">
                                                    <Text fontSize="15px" fontWeight="bold" color="white">Faze Clan</Text>
                                                    <Text fontSize="15px" color="#8899A6">@FaZeClan</Text>
                                                </Stack>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <Box w="80px" h="30px" mt="5px" mr="10px" borderRadius="15px" style={{border: "1px solid #1DA1F2"}}>
                                            <Center>
                                                <Text mt="3px" color="#1DA1F2" fontSize="15px" fontWeight="bold">Follow</Text>
                                            </Center>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box h="52px" p="2" _hover={{ bg: "#303C48" }} style={{cursor: "pointer"}}>
                                <Text fontSize="15px" color="#1DA1F2" ml="10px" mt="5px">Show more</Text>
                            </Box>
                        </Box>

                        <Box>
                            <Stack direction="row" ml="10px">
                                <Text fontSize="13px" color="#8899A6">Terms of Service</Text>
                                <Text fontSize="13px" color="#8899A6">Privacy Policy</Text>
                                <Text fontSize="13px" color="#8899A6">Cookie Policy</Text>
                            </Stack>
                            <Stack direction="row" ml="10px">
                                <Text fontSize="13px" color="#8899A6">Ads info</Text>
                                <Text fontSize="13px" color="#8899A6">More</Text>
                                <Text fontSize="13px" color="#8899A6">© 2021 Twitter, Inc.</Text>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </ChakraProvider>
    )
}

export default Sidebar
