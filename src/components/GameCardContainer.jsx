import { Box } from "@chakra-ui/react";

const GameCardContainer = ({ children }) => {
  return (
    <Box borderRadius={10} overflow="hidden" width={"300px"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
