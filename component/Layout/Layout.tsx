import { Box, Container } from "@chakra-ui/react";
import React from "react";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box>
            <h1>Hello</h1>
            <h1>Hello</h1>
            <Container>{children}</Container>
        </Box>
    );
};

export default Layout;
