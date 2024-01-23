/* eslint-disable react/prop-types */
import { Heading, Card, Image, CardBody } from "@chakra-ui/react";

const GameCard = ({ game }) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
