import React from 'react'
import {Text, Image, Box} from '@chakra-ui/react'

const IsiTweet = ({tweet})  => {
    return (
        <Box w="500px">
            <Text fontSize="15px" color="white" mt="-8px">{tweet}</Text>
        </Box>
    )
}

export const Name = ({name})  => {
    return (
        <Text fontSize="15px" fontWeight="bold" color="white">{name}</Text>
    )
}

export const UserID = ({id})  => {
    return (
        <Text fontSize="15px" color="#8899A6">{id}</Text>
    )
}

export const ProfileP = ({pp})  => {
    return (
        <Image w="50px" h="50px" mt="10px"  ml="10px" borderRadius="100%" src={pp} />
    )
}

export const Time = ({time})  => {
    return (
        <Text fontSize="15px" color="#8899A6">{time}</Text>
    )
}

export default IsiTweet
