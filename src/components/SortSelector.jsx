import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = ({ onSelectSortOrder, selectedSorting }) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSorting = sortOrders.find(
    (order) => order.value === selectedSorting
  );

  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown></BsChevronDown>} as={Button}>
        Order by: {selectedSorting ? currentSorting.label : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem
            onClick={() => onSelectSortOrder(sort.value)}
            key={sort.value}
            value={sort.value}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
