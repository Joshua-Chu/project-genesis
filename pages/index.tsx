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

function Home() {
    const { colorMode } = useColorMode();
    return (
        <Flex alignItems="center" direction="column">
            <Image src="/hero-2.png" alt="profile" width={180} height={250} />

            <Flex mt="32px" direction="column" textAlign="center" gap="16px">
                <Heading
                    as="h2"
                    fontSize="md"
                    color={colorMode === "light" ? "brand.300" : "white"}
                >
                    Hi, I&apos;m Josh —
                </Heading>
                <Heading as="h2" fontSize="lg" color="brand.500">
                    your front-end <br /> developer
                </Heading>

                <Text
                    as="p"
                    color={colorMode === "light" ? "brand.200" : "white"}
                >
                    I love to work on accessible products with people
                    <br />
                    that champion the same ideas that I hold.
                </Text>

                <Flex gap="48px" justifyContent="center" mt="32px">
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

            <Box
                mt="48px"
                width={790}
                height={335}
                position="relative"
                sx={{
                    img: {
                        borderRadius: "15px",
                    },
                }}
            >
                <Image src="/banner.jpg" alt="banner" layout="fill" />
            </Box>

            <Heading
                as="h3"
                textAlign="center"
                fontStyle="italic"
                fontWeight="bold"
                color={colorMode === "light" ? "brand.300" : "white"}
                mt="48px"
            >
                “Growth means being comfortable <br /> with being uncomfortable”
            </Heading>
            <Grid
                color={colorMode === "light" ? "brand.200" : "white"}
                mt="32px"
                w="80%"
                maxW="790px"
                templateColumns="repeat(2, 1fr)"
                gap={7}
                px="4"
            >
                <GridItem>
                    I&apos;m a 21 year old web-taught developer currently based
                    in the Philippines. I came across web development in 2020,
                    at the height of the pandemic. It was a challenge trying to
                    learn technical concepts while trying to survive, but the
                    sense of satisfaction and the newly found passion of
                    creating, sharing, and connecting with people through tech
                    has empowered me to venture into the great unknown.
                </GridItem>
                <GridItem>
                    I hope that through coding I&apos;m gonna be able to help
                    make education accessible and equitable for learners -
                    giving back to the community that helped mold who I am today
                    would be the ultimate dream. I&apos;m interested in working
                    in a startup environment and creating products that I truly
                    care for, especially if it means a better world for my dogs.
                    I love to listen to jazz when coding and chug coffee.
                </GridItem>
            </Grid>
        </Flex>
    );
}

export default Home;
