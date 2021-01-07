import React from 'react'
import { ChakraProvider, Box, Stack, Text, Image} from '@chakra-ui/react'
import IsiTweet,{Name, UserID, ProfileP} from './IsiTweet';
import TweetInfo from './TweetInfo';



const Tweet = () => {
    const tweetBorderFirst = {
        borderTop: "1px solid #38444D",
    };

    const tweetBorder = {
        borderBottom: "1px solid #38444D",
        cursor: "pointer"
    };

    return (
        <ChakraProvider>
            <Box w="600px"style={tweetBorderFirst} ml="-17px" />
                {TweetInfo.map(Twitter => {
                const {id, name, tweet, pp} = Twitter;
                return(
                    <Box w="600px" minH="110px" style={tweetBorder} ml="-17px" p="2" _hover={{ bg: "#2C3640" }} key={Twitter.id}>
                        <Stack direction="row">
                            <Box>
                                <ProfileP pp={pp} w="50px" h="50px" mt="10px"  ml="10px" borderRadius="100%"/>
                            </Box>
                            <Box  minH="90px">
                                <Stack direction="column" mt="10px">
                                    <Box>
                                        <Stack direction="row">
                                            <Box>
                                                <Name name={name} />
                                            </Box>
                                            <Box>
                                                <UserID  id={id}/>
                                            </Box>
                                            <Box>
                                                <Text fontSize="15px" color="#8899A6">15m</Text>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Box>
                                        <IsiTweet tweet={tweet} />
                                    </Box>
                                    <Box>
                                        <Stack direction="row" spacing="70px" mt="10px" mb="10px">
                                            <Box>
                                                <Stack direction="row" spacing="15px">
                                                    <Box w="20px" h="20px">
                                                        <Image src="./Img Tweet/Comment.png" />
                                                    </Box>
                                                    <Box w="20px" h="20px">
                                                        <Text fontSize="13px" color="#8899A6">10</Text>
                                                    </Box>
                                                </Stack>
                                            </Box>
                                            <Box>
                                                <Stack direction="row" spacing="15px">
                                                    <Box >
                                                        <Image src="./Img Tweet/Retweet.png" h="16px"/>
                                                    </Box>
                                                    <Box w="20px" h="20px">
                                                        <Text fontSize="13px" color="#8899A6">10</Text>
                                                    </Box>
                                                </Stack>
                                            </Box>
                                            <Box>
                                                <Stack direction="row" spacing="15px">
                                                    <Box w="20px" h="20px">
                                                        <Image src="./Img Tweet/Like.png" />
                                                    </Box>
                                                    <Box w="20px" h="20px">
                                                        <Text fontSize="13px" color="#8899A6">10</Text>
                                                    </Box>
                                                </Stack>
                                            </Box>
                                            <Box>
                                                <Stack direction="row" spacing="15px">
                                                    <Box w="20px" h="20px">
                                                        <Image src="./Img Tweet/Share.png" />
                                                    </Box>
                                                </Stack>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                )
            })}

        </ChakraProvider>
    )
}

export default Tweet
