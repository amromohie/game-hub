import type {Game} from "../hooks/useGames.ts";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import GetCroppedImageUrl from "../services/image-url.ts";

interface Prop{
  game:Game
}
const GameCard = ({game}:Prop) => {
  return (
      <Card key={game.id}>
        <Image src={GetCroppedImageUrl(game.background_image)}/>
        <CardBody>
          <HStack justifyContent='space-between' marginBottom={3}>
            <PlatformIconList platforms={game.parent_platforms.map(platform => platform.platform)}/>
            <CriticScore score={game.metacritic}/>
          </HStack>
          <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
      </Card>
  )
}
export default GameCard