import React from 'react'
import { Container, Flex } from '@chakra-ui/react'
import {Box, Image } from '@chakra-ui/react'
import {VStack} from '@chakra-ui/react'

const AuthPage = () => {
    return (
        <Flex minW={"100vh"} justifyContent={"Center"}  alignItems={"center"} px={4}>
            <Container maxW={"container.md"} padding={0}>
                {/* left side - Image should not display on small screen sizes */}
                <Box display={{ base: "none", md: "block"}}>
                <Image src='../public/auth.png' h={650} alt='Phone img'/>
                </Box>

                {/* right side -Vertical Stack puts items on top of each other */}
                <VStack spacing={4} align={"stretch"}>
                   <AuthForm/> 
                </VStack>
            </Container>
        </Flex>
    )
}
export default AuthPage