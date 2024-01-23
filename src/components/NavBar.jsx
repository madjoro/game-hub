import { HStack, Image, Text } from "@chakra-ui/react";
import activity from "../assets/activity.svg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={activity} boxSize="60px"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
