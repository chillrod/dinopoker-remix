import {
  Box,
  createStandaloneToast,
  Flex,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import theme from "../../../config/theme/theme-config";

const toast = createStandaloneToast({ theme: theme });

export const emitCharacterToast = ({
  message,
  characterSrc,
}: {
  message: string;
  characterSrc?: string;
}) =>
  toast({
    position: "top-right",
    render: () => (
      <SimpleGrid bg="dino.secondary" borderRadius="md" p={2}>
        <Flex>
          <Box
            mb={1}
            bg="dino.primary"
            borderRadius="full"
            height="3em  "
            width="3em  "
          >
            <Img width="100%" src={characterSrc} />
          </Box>
          <Box p={2.5}>
            <Text as="span">{message}</Text>
          </Box>
        </Flex>
        <Box width="100%" height="3px" bg="dino.primary"></Box>
      </SimpleGrid>
    ),
    duration: 3000,
    status: "success",
  });
