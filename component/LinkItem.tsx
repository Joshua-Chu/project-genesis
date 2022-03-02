import { Link, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import React from "react";

interface StyledLinkProps {
    colormode?: "light" | "dark";
    type?: "primary" | "secondary";
}

const StyledLinks = styled<StyledLinkProps & typeof Link>(Link)`
    position: relative;

    &:hover {
        text-decoration: none;
    }

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        border-radius: 4px;
        background: ${({ colormode, type }) =>
            colormode === "light"
                ? type
                    ? "#5e81ac"
                    : "#2e3440"
                : type
                ? "#5e81ac"
                : "white"};
        bottom: -5px;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
    }

    &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }
`;

type LinkItemProps = {
    href: string;
    children: React.ReactNode;
    type: "primary" | "secondary";
    isDownload?: boolean;
};

const LinkItem = ({ href, children, type, isDownload }: LinkItemProps) => {
    const { colorMode } = useColorMode();

    return (
        <NextLink href={href} passHref>
            <StyledLinks
                colormode={colorMode}
                type={type}
                download={isDownload}
            >
                {children}
            </StyledLinks>
        </NextLink>
    );
};

export default LinkItem;

LinkItem.defaultProps = {
    isDownload: false,
};
