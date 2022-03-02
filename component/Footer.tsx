import { Text } from "@chakra-ui/react";
import { BiCoffeeTogo } from "react-icons/bi";

const Footer = () => {
    return (
        <div className="spacer wave-3 " id="footer">
            <Text
                as="p"
                pb="16px"
                fontStyle="italic"
                color="white"
                display="flex"
                alignItems="center"
            >
                made with passion and love
                <BiCoffeeTogo
                    style={{ display: "inline", marginLeft: "5px" }}
                />
            </Text>
        </div>
    );
};

export default Footer;
