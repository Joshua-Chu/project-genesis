import { Box, Container } from "@chakra-ui/react";
import React from "react";

type SectionProps = {
    children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
    return (
        <Container
            maxW={{
                base: "container.sm",
                lg: "container.md",
                xl: "container.lg",
            }}
        >
            <Box>{children}</Box>
        </Container>
    );
};

export default Section;
