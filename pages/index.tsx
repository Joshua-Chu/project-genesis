import { Text } from "@chakra-ui/react";

function Home() {
    const name = "joshua";
    return (
        <div>
            <Text color="brand.100" bg="brand.400">
                Hello {name}!
            </Text>
            <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/profile-pic.png`}
                alt="profile"
            />
        </div>
    );
}

export default Home;
