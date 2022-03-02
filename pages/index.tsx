import { Box, Flex, Heading, Link, Text, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import NextLink from "next/link";
import About from "../component/About/About";
import Hero from "../component/Hero/Hero";
import Section from "../component/Section/Section";

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

function Home() {
    const { colorMode } = useColorMode();
    return (
        <>
            <Flex alignItems="center" direction="column">
                <Hero colorMode={colorMode} />
            </Flex>

            <div className="spacer wave-1">
                <Box
                    mx="auto"
                    textAlign="center"
                    mt="48px"
                    sx={{
                        img: {
                            borderRadius: "15px",
                            zIndex: 100,
                        },
                    }}
                    maxW={[360, 500, 790]}
                    maxH={[250, 450]}
                    h={[335, 335, 450]}
                    position="relative"
                >
                    <Image src="/banner.jpg" alt="banner" layout="fill" />
                </Box>
            </div>

            <div style={{ background: "#2E3440" }}>
                <About />
            </div>

            <div className="spacer wave-2">
                <Box textAlign="center">
                    <Heading
                        pt="32px"
                        as="h3"
                        color="brand.500"
                        // fontSize={["1.1rem", "40.5px"]}
                        fontSize={["2.5rem", "md"]}
                    >
                        projects.
                    </Heading>

                    <Flex justifyContent="center" mt="32px">
                        <Image
                            src="/wip.png"
                            alt="profile"
                            width={180}
                            height={250}
                            className="hero-image"
                        />
                    </Flex>
                    <Heading
                        as="h3"
                        color={colorMode === "light" ? "brand.300" : "white"}
                        fontSize={["1.1rem", "40.5px"]}
                    >
                        coming soon...
                    </Heading>
                </Box>
            </div>

            <Section>
                <Flex mb={500} maxW={826} justifyContent="flex-end">
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
                            color={
                                colorMode === "light" ? "brand.200" : "white"
                            }
                        >
                            I once heard that - Ideas are only as good as the
                            actions that follow the communication of those
                            ideas.
                        </Text>
                        <Heading
                            className="contact-subheading"
                            as="h4"
                            color={
                                colorMode === "light" ? "brand.200" : "white"
                            }
                            fontSize={["1.1rem", "40.5px"]}
                        >
                            Let&apos;s make it happen.
                        </Heading>

                        <NextLink href="/" passHref>
                            <Link className="contact-link">@heyjoshchu</Link>
                        </NextLink>
                    </ContactFlex>
                </Flex>
            </Section>
        </>
    );
}

export default Home;
