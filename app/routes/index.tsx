import { Globe } from "react-feather";
import { Box } from "@chakra-ui/react";
import { CardPoints } from "~/components/atoms/card-points/card-points";
import { CharacterVote } from "~/components/atoms/character-vote/character-vote";
import { IconButton } from "~/components/atoms/icon-button/icon-button";

export default function Index() {
  return (
    <Box maxW={24} h={32}>
      <IconButton icon={<Globe />} ariaLabel="hey" />
    </Box>
  );
}
