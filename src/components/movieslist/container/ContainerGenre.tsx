import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { movie } from 'types/movie';
import groupByGenres from 'utils/groupByGenres';
import ItemCard from 'components/movieslist/itemcard/ItemCard';
import listGenre from './listGenre';
/**
 * Declare type/interface for this component.
 */
type ContainerGenreProps = {
  data: movie[];
};
/**
 * Container component to render accordion list.
 * @param {movie[]} data - List of movies getting by request.
 * @example
 * import ContainerGenre from 'components/movieslist/container/ContainerGenre';
 * ...
 *   return <ContainerGenre data={movies.results} />;
 * ...
 */
export default function ContainerGenre({ data }: ContainerGenreProps) {
  // Run a reducer to order by group.
  const setGroupByGenres = groupByGenres(data);
  // Make arrays to renders.
  const arrGroup = Object.keys(setGroupByGenres).map((key) => [
    listGenre[key],
    setGroupByGenres[key],
  ]);
  // Return component.
  return (
    <Accordion
      allowMultiple
      ml={16}
      mr={16}
      borderWidth='6px'
      borderRadius='lg'
      overflow='hidden'
    >
      {/* Render items/categories/genres groups. */}
      {arrGroup.map((value: [string, movie[]]) => (
        <AccordionItem key={value[0]}>
          <AccordionButton _expanded={{ bg: 'blue.500', color: 'white' }}>
            <Box flex='1' textAlign='left'>
              <Heading as='h3'>{value[0]}</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Wrap spacing='4%' justify='space-around'>
              {/* Render card movies. */}
              {value[1].map((m: movie) => (
                <WrapItem key={m.id}>
                  <ItemCard
                    imageUrlPoster={m.poster_path}
                    title={m.title}
                    year={m.release_date}
                  />
                </WrapItem>
              ))}
            </Wrap>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
