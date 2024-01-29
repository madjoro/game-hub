import { HStack, Image } from "@chakra-ui/react";
import activity from "../assets/activity.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = ({ onSearch }) => {
  return (
    <HStack padding="10px">
      <Image src={activity} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
