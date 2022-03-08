import { Container } from '@chakra-ui/react';
import InputSearch from 'components/inputsearch/InputSearch';
import ContainerGenre from 'components/movieslist/container/ContainerGenre';
/**
 *
 * @returns
 */
export default function App() {
  return (
    <>
      <Container centerContent p={8} maxW='container.md'>
        <InputSearch />
      </Container>
      <ContainerGenre />
    </>
  );
}
