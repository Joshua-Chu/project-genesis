import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Link,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import Section from "../component/Section/Section";

function Home() {
    const { colorMode } = useColorMode();
    return (
        <>
            <Flex alignItems="center" direction="column">
                <Section>
                    <Flex justifyContent="center">
                        <Image
                            src="/hero.png"
                            alt="profile"
                            width={180}
                            height={250}
                            className="hero-image"
                        />
                    </Flex>

                    <Flex
                        mt="32px"
                        direction="column"
                        textAlign="center"
                        gap="16px"
                    >
                        <Heading
                            as="h2"
                            fontSize={["1.8rem", "md"]}
                            color={
                                colorMode === "light" ? "brand.300" : "white"
                            }
                        >
                            Hi, I&apos;m Josh —
                        </Heading>
                        <Heading
                            as="h2"
                            fontSize={["2.5rem", "lg"]}
                            color="brand.500"
                        >
                            your front-end <br /> developer.
                        </Heading>

                        <Text
                            as="p"
                            fontSize={[".8rem", "sm"]}
                            color={
                                colorMode === "light" ? "brand.200" : "white"
                            }
                        >
                            I love to work on accessible products with people
                            <br />
                            that champion the same ideas that I hold.
                        </Text>

                        <Flex gap="48px" justifyContent="center" mt="16px">
                            <NextLink href="/" passHref>
                                <Link>projects</Link>
                            </NextLink>

                            <NextLink href="/" passHref>
                                <Link color="brand.500" fontWeight="bold">
                                    resume
                                </Link>
                            </NextLink>
                        </Flex>
                    </Flex>
                </Section>
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
                <Section>
                    <Box bg="brand.400" pb="64px">
                        <Heading
                            as="h3"
                            textAlign="center"
                            fontStyle="italic"
                            fontWeight="bold"
                            color="white"
                            pt="48px"
                            fontSize={["1.1rem", "40.5px"]}
                        >
                            “Growth means being comfortable <br /> with being
                            uncomfortable”
                        </Heading>
                        <Grid
                            color="white"
                            mt="32px"
                            maxW="790px"
                            templateColumns={["1fr", "repeat(2, 1fr)"]}
                            gap={7}
                            px={["0px", "4"]}
                            mx="auto"
                        >
                            <GridItem>
                                I&apos;m a 21 year old web-taught developer
                                currently based in the Philippines. I came
                                across web development in 2020, at the height of
                                the pandemic. It was a challenge trying to learn
                                technical concepts while trying to survive, but
                                the sense of satisfaction and the newly found
                                passion of creating, sharing, and connecting
                                with people through tech has empowered me to
                                venture into the great unknown.
                            </GridItem>
                            <GridItem>
                                I hope that through coding I&apos;m gonna be
                                able to help make education accessible and
                                equitable for learners - giving back to the
                                community that helped mold who I am today would
                                be the ultimate dream. I&apos;m interested in
                                working in a startup environment and creating
                                products that I truly care for, especially if it
                                means a better world for my dogs. I love to
                                listen to jazz when coding and chug coffee.
                            </GridItem>
                        </Grid>
                    </Box>
                </Section>
            </div>

            <div className="spacer wave-2">
                <Box textAlign="center">
                    <Heading
                        pt="48px"
                        as="h3"
                        color="brand.500"
                        fontSize={["1.1rem", "40.5px"]}
                    >
                        projects.
                    </Heading>

                    <Flex justifyContent="center">
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
        </>
    );
}

export default Home;
