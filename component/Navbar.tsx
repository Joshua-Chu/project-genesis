import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
    Flex,
    Link,
    useColorMode,
    Stack,
    IconButton,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Section from "./Section";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [yPos, setYPos] = useState<null | number>(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setYPos(window.scrollY);
        });
    }, []);

    return (
        <Box
            position="fixed"
            zIndex={1000}
            left="0"
            top="0"
            w="100%"
            bg={
                colorMode === "light"
                    ? !yPos || yPos === 0
                        ? "transparent"
                        : "brand.600"
                    : !yPos || yPos === 0
                    ? "transparent"
                    : "brand.700"
            }
            transition="all 300ms ease"
        >
            <Section>
                <Flex justifyContent="space-between" py={4}>
                    <NextLink href="/" passHref>
                        <Link
                            textDecoration="none"
                            _hover={{ textDecoration: "none" }}
                        >
                            <Logo />
                        </Link>
                    </NextLink>

                    <Flex>
                        <Stack
                            direction="row"
                            align="center"
                            spacing="32px"
                            pr="32px"
                            display={{ base: "none", md: "flex" }}
                        >
                            <NextLink href="/" passHref>
                                <Link>blogs</Link>
                            </NextLink>

                            <NextLink href="/" passHref>
                                <Link>projects</Link>
                            </NextLink>

                            <NextLink href="/" passHref>
                                <Link>about</Link>
                            </NextLink>

                            <NextLink href="/" passHref>
                                <Link color="brand.500">resume</Link>
                            </NextLink>
                        </Stack>
                        <IconButton
                            aria-label="Toggle theme"
                            onClick={toggleColorMode}
                        >
                            {colorMode === "light" ? (
                                <MoonIcon boxSize="4" />
                            ) : (
                                <SunIcon boxSize="4" />
                            )}
                        </IconButton>
                        <Box
                            ml={2}
                            display={{ base: "inline-block", md: "none" }}
                        >
                            <Menu isLazy>
                                <MenuButton
                                    as={IconButton}
                                    icon={<HamburgerIcon boxSize="4" />}
                                    variant="outline"
                                    aria-label="Options"
                                />
                                <MenuList>
                                    <NextLink href="/" passHref>
                                        <MenuItem as={Link}>blogs</MenuItem>
                                    </NextLink>
                                    <NextLink href="/works" passHref>
                                        <MenuItem as={Link}>projects</MenuItem>
                                    </NextLink>
                                    <NextLink href="/posts" passHref>
                                        <MenuItem as={Link}>about</MenuItem>
                                    </NextLink>
                                    <NextLink href="/posts" passHref>
                                        <MenuItem as={Link} color="brand.500">
                                            resume
                                        </MenuItem>
                                    </NextLink>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Flex>
                </Flex>
            </Section>
        </Box>
    );
};

export default Navbar;
