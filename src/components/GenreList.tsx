import useGenres, {type Genre} from "../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import GetCroppedImageUrl from "../services/image-url.ts";

interface Props {
  onSelectGenre: (genre: Genre) => void,
  selectedGenre: Genre | null
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {

  const {data, isLoading, error} = useGenres()

  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;

  return (
      <>
        <Heading fontSize='2xl' marginBottom={2}>Genres</Heading>
        <List>
          {data.map(genre =>
              <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                  <Image objectFit='cover' borderRadius={5} src={GetCroppedImageUrl(genre.image_background)}
                         boxSize="32px"/>
                  <Button
                      whiteSpace='normal'
                      textAlign='left'
                      fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                      onClick={() => onSelectGenre(genre)} variant="link" fontSize='lg'>{genre.name}</Button>
                </HStack>
              </ListItem>
          )}
        </List>
      </>
  );
}
export default GenreList;