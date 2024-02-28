import { Box, Center, VStack, Heading, HStack, Button, SimpleGrid } from '@chakra-ui/react';
import React, {Component} from 'react';

export class HowItWorks extends Component {
    render() {
        return (
            <Center
                w = "100vw"
                h = "100vh"
                bg='white'>
                <Box
                    w = '80vw'
                    h = '90vh'
                    bg= 'white'
                    display='flex'
                    padding={10}
                    color='black'
                    justifyContent='center'>

                        <HStack spacing={5}>
                            <Box bg='blue.200' height='20vh' width='45vh' borderRadius='lg'></Box>
                        </HStack>

                        <HStack spacing = {15}>
                            <VStack>
                                <Heading
                                    fontSize='5xl'
                                    letterSpacing='tight'
                                    lineHeight='shorter'
                                    textAlign='center'>
                                    How it works:
                                </Heading>

                                <text>
                                A licensed psychologist can put in a patient’s demographic information and current systems. Using advanced machine learning techniques, the application will use the inputted information to compare it with data from the past to produce a diagnosis. Licensed professionals will be familiar with the diagnosis and can research more to make decisions for patients
                                </text>
                            </VStack>
                        </HStack>
                </Box>
            </Center>
        )
    }
}