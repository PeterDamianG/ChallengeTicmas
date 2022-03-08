import { useState } from 'react';
import { Container, Heading } from '@chakra-ui/react';
import InputSearch from 'components/inputsearch/InputSearch';
import CheckMovies from 'components/middlewares/CheckMovies';
import { LIMIT_SEARCH } from 'constants/enviroment';
/**
 * Component main to invoke all app.
 * @example
 * import App from './App';
 * ReactDOM.render(<App />, document.getElementById('root'));
 */
export default function App() {
  // Set a global state only used one useState.
  const [search, setSearch] = useState('');
  const handleSearchChange = (e: any) => setSearch(e.target.value);
  const MINIMUM_LENGTH = search.length < LIMIT_SEARCH;
  // Return component.
  return (
    <>
      <Container centerContent p={8} maxW='container.md'>
        <InputSearch
          valueSearch={search}
          isError={MINIMUM_LENGTH}
          fnSearch={handleSearchChange}
        />
      </Container>
      {MINIMUM_LENGTH ? (
        <Container centerContent mt={24} maxW='container.xl'>
          <Heading as='h3'>
            You need complete the text field with a minimum of {LIMIT_SEARCH}{' '}
            characters.
          </Heading>
        </Container>
      ) : (
        <CheckMovies search={search} />
      )}
    </>
  );
}
