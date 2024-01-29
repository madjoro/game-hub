import { Heading } from "@chakra-ui/react";

const GameHeading = ({ gameQuery }) => {
  const platform =
    gameQuery.platform === null ? "" : " " + gameQuery.platform.name;
  const genre = gameQuery.genre === null ? "" : " " + gameQuery.genre.name;
  const heading = platform + genre + " Games";

  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
