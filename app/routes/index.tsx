import { Box } from "@chakra-ui/react";
import { CardPoints } from "~/components/atoms/card-points/card-points";
import { CharacterVote } from "~/components/atoms/character-vote/character-vote";

export default function Index() {
  return (
    <Box maxW={24} h={32}>
      <CharacterVote character={2} />
    </Box>
  );
}
