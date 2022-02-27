import { Heading, Text } from "@chakra-ui/react";

function Home() {
    const name = "joshua";
    return (
        <div>
            <Heading>This is a heading</Heading>
            <Text color="brand.100" bg="brand.400">
                Hello {name}!
            </Text>
            <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/profile-pic.png`}
                alt="profile"
            />
            <p>Hello</p>
        </div>
    );
}

export default Home;
