import { Box, Button, Container, useColorMode } from "@chakra-ui/react";
import React from "react";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const { toggleColorMode } = useColorMode();
    return (
        <Box>
            <Button onClick={toggleColorMode} />

            <Container
                maxW={{
                    base: "container.sm",
                    lg: "container.lg",
                    xl: "container.xl",
                }}
            >
                {children}
            </Container>
        </Box>
    );
};

export default Layout;
