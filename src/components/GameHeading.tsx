import {Heading} from "@chakra-ui/react";
import type {GameQuery} from "../App.tsx";

interface Props {
  gameQuery:GameQuery
}

export const GameHeading = ({gameQuery}:Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''}`
  return (
      <Heading paddingLeft={2} marginBottom={2} as="h1">
        {heading}
      </Heading>
  );
}
export default GameHeading;