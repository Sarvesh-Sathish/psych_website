import React, {Component} from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";


export class TabCard extends Component {
    render() {
        return (
            <HStack
            justify="center" 
            spacing={10}
            >
                <a href="https://www.google.com">Home</a>
                <a href="https://www.google.com">Features</a>
                <a href="https://www.google.com">Connect</a>
            </HStack>
            
        )
    }
}