import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar/Navbar";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box>
            <Container
                maxW={{
                    base: "container.sm",
                    lg: "container.md",
                    xl: "container.lg",
                }}
            >
                <Navbar />
                <Box mt="64px">{children}</Box>
            </Container>
        </Box>
    );
};

export default Layout;
