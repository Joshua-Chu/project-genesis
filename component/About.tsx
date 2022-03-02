import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import Section from "./Section";

const About = () => {
    return (
        <Section>
            <Box bg="brand.400" pb="64px" id="about-section">
                <Heading
                    as="h3"
                    textAlign="center"
                    fontStyle="italic"
                    fontWeight="bold"
                    color="white"
                    pt="48px"
                    fontSize={["1.1rem", "1.5rem", "2rem"]}
                >
                    “Growth means being comfortable <br /> with being
                    uncomfortable”
                </Heading>
                <Grid
                    color="white"
                    mt="32px"
                    maxW="790px"
                    templateColumns={{
                        base: "1fr",
                        lg: "repeat(2, 1fr)",
                    }}
                    gap={7}
                    px={["0px", "4"]}
                    mx="auto"
                >
                    <GridItem>
                        I&apos;m a 21 year old web-taught developer currently
                        based in the Philippines. I came across web development
                        in 2020, at the height of the pandemic. It was a
                        challenge trying to learn technical concepts while
                        trying to survive, but the sense of satisfaction and the
                        newly found passion of creating, sharing, and connecting
                        with people through tech has empowered me to venture
                        into the great unknown.
                    </GridItem>
                    <GridItem>
                        I hope that through coding I&apos;m gonna be able to
                        help make education accessible and equitable for
                        learners - giving back to the community that helped mold
                        who I am today would be the ultimate dream. I&apos;m
                        interested in working in a startup environment and
                        creating products that I truly care for, especially if
                        it means a better world for my dogs. I love to listen to
                        jazz when coding and chug coffee.
                    </GridItem>
                </Grid>
            </Box>
        </Section>
    );
};

export default About;
