import { useState } from 'react';
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
/**
 *
 * @returns
 */
export default function InputSearch() {
  const [input, setInput] = useState('');
  const handleInputChange = (e: any) => setInput(e.target.value);
  const isError = input.length < 4;

  return (
    <FormControl isRequired isInvalid={isError}>
      <FormLabel htmlFor='search'>Search Movie</FormLabel>
      <InputGroup>
        <Input
          size='lg'
          placeholder='Avengers: Endgame'
          id='search'
          value={input}
          onChange={handleInputChange}
        />
        {/* eslint-disable-next-line react/no-children-prop */}
        <InputRightElement children={<SearchIcon />} />
      </InputGroup>
      {!isError ? (
        <FormHelperText>Find the movie you want.</FormHelperText>
      ) : (
        <FormErrorMessage>
          A minimum of 4 characters is required.
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
