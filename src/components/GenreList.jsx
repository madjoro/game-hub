import useGenres from "../hooks/useGenres";
import {
  List,
  ListItem,
  HStack,
  Image,
  Button,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = ({ onSelectGenre }) => {
  const { data, loading, error } = useGenres();

  if (error) return null;
  if (loading) return <Spinner></Spinner>;

  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
            ></Image>
            <Button
              onClick={() => onSelectGenre(g)}
              variant="link"
              fontSize={"lg"}
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
