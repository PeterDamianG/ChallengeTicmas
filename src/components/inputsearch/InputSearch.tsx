import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  Input,
  InputRightElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { LIMIT_SEARCH } from 'constants/enviroment';
/**
 * Declare type/interface for this component.
 */
type InputSearchProps = {
  valueSearch: string;
  isError: boolean;
  // eslint-disable-next-line no-unused-vars
  fnSearch: (e: any) => void;
};
/**
 * Component to make an input type search for movies.
 * @param {string} props.valueSearch - Set a string pass to component. Use for search.
 * @param {boolean} props.isError - Boolean to check field input.
 * @param {Function} props.fnSearch - Callback to set value field in you want.
 * @example
 * import InputSearch from 'components/inputsearch/InputSearch';
 * export default function App() {
 *  ...
 *    <InputSearch
 *      valueSearch={search}
 *      isError={search.length < 4}
 *      fnSearch={handleInputChange}
 *    />
 *  ...
 * }
 */
export default function InputSearch({
  valueSearch = '',
  isError,
  fnSearch,
}: InputSearchProps) {
  return (
    <FormControl isRequired isInvalid={isError}>
      <FormLabel htmlFor='search'>Search Movie</FormLabel>
      <InputGroup>
        <Input
          size='lg'
          placeholder='Avengers: Endgame'
          id='search'
          value={valueSearch}
          onChange={fnSearch}
        />
        {/* eslint-disable-next-line react/no-children-prop */}
        <InputRightElement children={<SearchIcon />} />
      </InputGroup>
      {!isError ? (
        <FormHelperText>Find the movie you want.</FormHelperText>
      ) : (
        <FormErrorMessage>
          A minimum of { LIMIT_SEARCH } characters is required.
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
