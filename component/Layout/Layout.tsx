import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar/Navbar";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box>
            <Navbar />
            <Box mt="64px">{children}</Box>
        </Box>
    );
};

export default Layout;
