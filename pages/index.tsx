import { Box, Flex, Heading, Link, Text, useColorMode } from "@chakra-ui/react";
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

                <Text as="p" color="brand.200">
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
        </Flex>
    );
}

export default Home;
