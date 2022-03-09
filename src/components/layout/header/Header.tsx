import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react';
/**
 * Declare type/interface for this component.
 */
type HeaderProps = {
  title?: string;
};
/**
 * Header to show title and button to code source.
 * @param {string?} title - Optional string title, set a title for app bar.
 * @example
 * import Header from 'components/layout/header/Header';
 * <Header />;
 */
export default function Header({
  title = 'Vi-Datec Frontend Dev Challenge',
}: HeaderProps) {
  return (
    <Flex bg='blue.500'>
      <Box p='2'>
        <Heading color='white' size='md'>
          {title}
        </Heading>
      </Box>
      <Spacer />
      <Box m={1}>
        <a
          href='https://github.com/PeterDamianG/ChallengeTicmas'
          target='_blank'
          rel='noreferrer'
        >
          <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal'>
            Go to source.
          </Button>
        </a>
      </Box>
    </Flex>
  );
}
