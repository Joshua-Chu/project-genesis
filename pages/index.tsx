import { Box, Flex, Heading, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import About from "../component/About";
import Contact from "../component/Contact";
import Hero from "../component/Hero";
import Section from "../component/Section";

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
                    <Contact colorMode={colorMode} />
                </Flex>
            </Section>
        </>
    );
}

export default Home;
