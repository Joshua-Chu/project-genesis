import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import LinkItem from "./LinkItem";
import Section from "./Section";

type HeroProps = {
    colorMode: string;
};

const Hero = ({ colorMode }: HeroProps) => {
    return (
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

            <Flex mt="32px" direction="column" textAlign="center" gap="16px">
                <Heading
                    as="h2"
                    fontSize={["1.8rem", "md"]}
                    color={colorMode === "light" ? "brand.300" : "white"}
                >
                    Hi, I&apos;m Josh —
                </Heading>
                <Heading as="h2" fontSize={["2.5rem", "lg"]} color="brand.500">
                    your front-end <br /> developer.
                </Heading>

                <Text
                    as="p"
                    fontSize={[".8rem", "sm"]}
                    color={colorMode === "light" ? "brand.200" : "white"}
                >
                    I love to work on accessible products with people
                    <br />
                    that champion the same ideas that I hold.
                </Text>

                <Flex gap="48px" justifyContent="center" mt="16px">
                    <LinkItem type="secondary" href="/projects">
                        projects
                    </LinkItem>

                    <LinkItem type="primary" href="/about">
                        <Text color="brand.500" fontWeight="bold">
                            resume
                        </Text>
                    </LinkItem>
                </Flex>
            </Flex>
        </Section>
    );
};

export default Hero;
