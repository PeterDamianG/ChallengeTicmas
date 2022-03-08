import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import ItemCard from 'components/movieslist/itemcard/ItemCard';
/**
 * Declare type/interface for this component.
 */
type ItemListProps = {
  genre: string;
};
/**
 *
 * @param param0
 * @returns
 */
export default function ItemList({ genre }: ItemListProps) {
  return (
    <AccordionItem>
      <AccordionButton _expanded={{ bg: 'blue', color: 'white' }}>
        <Box flex='1' textAlign='left'>
          <Heading as='h3'>{genre}:</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Wrap spacing='4%' align='center' justify='center'>
          {[0, 1, 2].map((value) => (
            <WrapItem>
              <ItemCard key={value} />
            </WrapItem>
          ))}
        </Wrap>
      </AccordionPanel>
    </AccordionItem>
  );
}
