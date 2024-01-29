import useGenres from "../hooks/useGenres";
import {
  List,
  ListItem,
  HStack,
  Image,
  Button,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = ({ onSelectGenre, selectedGenre }) => {
  const { data, loading, error } = useGenres();

  if (error) return null;
  if (loading) return <Spinner></Spinner>;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((g) => (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(g.image_background)}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  selectedGenre === null
                    ? "normal"
                    : g.id === selectedGenre.id
                    ? "bold"
                    : "normal"
                }
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
    </>
  );
};

export default GenreList;
