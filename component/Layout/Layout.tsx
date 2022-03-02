import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <Flex pt={50} minH="100vh" direction="column" position="relative">
            <Navbar />
            <Box mt="64px" flexGrow="1">
                {children}
            </Box>
            <Footer />
        </Flex>
    );
};

export default Layout;
