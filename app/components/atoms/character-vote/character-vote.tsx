import {
  Badge,
  Box,
  Button,
  Grid,
  GridItem,
  Img,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { IPlayerData } from "~/models/player";

import { characters } from "../../../models/characters";

type IVoteStatus = {
  [voteStatus: string]: string;
  SECRET: string;
  THINKING: string;
  REVEAL: string;
};

type IVoteShow = {
  [voteStatus: string]: string | number;
  SECRET: string;
  THINKING: string;
  REVEAL: number;
};

export const CharacterVote = ({
  character,
  name,
  vote,
  voteStatus,
}: IPlayerData) => {
  const parseToolTip = (voteStatus?: string, vote?: number | null) => {
    if (voteStatus === "REVEAL") return `${vote}`;

    if (voteStatus === "THINKING") return "Not voted yet";

    if (voteStatus === "SECRET") return "Voted but is a secret";
  };

  const parseVoteStatusBackground = (voteStatus: string) => {
    const state: IVoteStatus = {
      SECRET: "dino.primary",
      THINKING: "dino.base2",
      REVEAL: "dino.base2",
    };

    return state[voteStatus];
  };

  const parseVoteText = (voteStatus: string, vote: number) => {
    const state: IVoteShow = {
      SECRET: "?",
      THINKING: "-",
      REVEAL: vote,
    };

    return state[voteStatus];
  };

  return (
    <Button
      role="@dino-charactevote"
      size="xs"
      title={parseVoteStatusBackground(voteStatus ? voteStatus : "THINKING")}
      bg={parseVoteStatusBackground(voteStatus ? voteStatus : "THINKING")}
      width="100%"
      height="100%"
    >
      <Grid gap={2} templateColumns="1fr 1fr" templateRows="auto 1fr">
        <GridItem justifySelf="center" gridColumn="1 / -1" gridRow={1}>
          <Box>
            <Tooltip label={name}>
              <Text maxWidth={16} isTruncated fontSize="md">
                {name}
              </Text>
            </Tooltip>
          </Box>
        </GridItem>
        <GridItem gridColumn="1 / -1" gridRow={2} order={0}>
          <Box bg="dino.text" width="100%" h="100%" borderRadius="full">
            <Img src={characters[character].src} boxSize="100%" p={2} />
          </Box>
        </GridItem>
        <GridItem
          gridColumn={2}
          gridRow={2}
          order={2}
          justifySelf="end"
          alignSelf="end"
        >
          <Badge
            width="2.5em"
            height="2.5em"
            bg="dino.primary"
            size="md"
            borderRadius="full"
          >
            <Tooltip label={parseToolTip(voteStatus, vote)}>
              <Text
                textAlign="center"
                sx={{
                  position: "relative",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                title={parseToolTip(voteStatus, vote)}
                fontSize="lg"
              >
                {voteStatus && vote ? (
                  <>{parseVoteText(voteStatus, vote)}</>
                ) : (
                  <>...</>
                )}
              </Text>
            </Tooltip>
          </Badge>
        </GridItem>
      </Grid>
    </Button>
  );
};
