import { Accordion } from '@chakra-ui/react';
import ItemList from 'components/movieslist/itemlist/ItemList';
/**
 * Declare type/interface for this component.
 */
type ContainerGenreProps = {
  genre?: string;
};
/**
 *
 * @param param0
 * @returns
 */
export default function ContainerGenre({
  genre = 'Unknown',
}: ContainerGenreProps) {
  return (
    <Accordion
      allowMultiple
      m={6}
      borderWidth='4px'
      borderRadius='lg'
      overflow='hidden'
    >
      {[0, 1, 2].map((value) => (
        <ItemList key={value} genre={genre + value} />
      ))}
    </Accordion>
  );
}
