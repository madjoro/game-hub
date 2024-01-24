import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown></BsChevronDown>} as={Button}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((plat) => (
          <MenuItem key={plat.id}>{plat.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
