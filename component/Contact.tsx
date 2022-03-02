import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextLink from "next/link";

interface ContactFlexProps {
    islightmode?: "light" | "dark";
}

const ContactFlex = styled<ContactFlexProps & typeof Flex>(Flex)`
    position: relative;

    .contact-overlay {
        border-radius: 16px;
        border: 1px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 49;
        width: 100%;
        height: 100%;
        clip-path: circle(10% at 50% 50%);
        transition: all 250ms ease-in;
    }

    &:hover .contact-overlay {
        background: ${({ islightmode }) =>
            islightmode === "light" ? "#2e3440" : "#5e81ac"};
        clip-path: circle(75%);
    }

    &:hover * {
        /* color: #2e3440; */
        color: white;
    }

    &:hover a {
        text-decoration: underline;
    }

    * {
        z-index: 50;
    }
`;

type ContactProps = {
    colorMode: string;
};

const Contact = ({ colorMode }: ContactProps) => {
    return (
        <ContactFlex
            direction="column"
            gap="16px"
            p={8}
            rounded="lg"
            alignItems={["center", "center", "flex-end"]}
            className="contact-container"
            islightmode={colorMode}
        >
            <div className="contact-overlay" />
            <Text
                className="contact-heading"
                maxW={450}
                fontSize={[".8rem", "sm"]}
                textAlign={["center", "center", "left"]}
                as="p"
                color={colorMode === "light" ? "brand.200" : "white"}
            >
                I once heard that - Ideas are only as good as the actions that
                follow the communication of those ideas.
            </Text>
            <Heading
                className="contact-subheading"
                as="h4"
                color={colorMode === "light" ? "brand.200" : "white"}
                fontSize={["1.1rem", "40.5px"]}
            >
                Let&apos;s make it happen.
            </Heading>

            <NextLink href="/" passHref>
                <Link className="contact-link">@heyjoshchu</Link>
            </NextLink>
        </ContactFlex>
    );
};

export default Contact;
