import { Flex, Heading, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

function Home() {
    const { colorMode } = useColorMode();
    return (
        <Flex alignItems="center" direction="column">
            <Image src="/hero-2.png" alt="profile" width={250} height={350} />

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
            </Flex>
        </Flex>
    );
}

export default Home;
