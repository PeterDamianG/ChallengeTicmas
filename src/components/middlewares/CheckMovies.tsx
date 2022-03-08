import useGetMovies from 'hooks/useGetMovies';
import { Container, Spinner, Heading } from '@chakra-ui/react';
import ContainerGenre from 'components/movieslist/container/ContainerGenre';
/**
 * Declare type/interface for this component.
 */
type CheckMoviesProps = {
  search: string;
};
/**
 * Component middleware for show feedback to user about proccess of get movies.
 * @param {string} search - String to use in request for searching.
 * @example
 * import CheckMovies from 'components/middlewares/CheckMovies';
 * ...
 *   <CheckMovies search={search} />
 * ...
 */
export default function CheckMovies({ search }: CheckMoviesProps) {
  const { movies, isLoading, isError } = useGetMovies(search);
  // If search is loading.
  if (isLoading) {
    return (
      <Container centerContent mt={24} maxW='container.xl'>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Container>
    );
  }
  // If we have a error.
  if (isError) {
    return (
      <Heading as='h3'>
        We are having a problem. Please contact support. We are sorry.
      </Heading>
    );
  }
  // If all is good give info to next component.
  return <ContainerGenre data={movies.results} />;
}
