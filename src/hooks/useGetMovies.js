import useSWR from 'swr';
import { API_KEY, API_URL } from 'constants/enviroment';
/**
 * Use native fetch.
 */
const fetcher = (...args) => fetch(...args).then((res) => res.json());
/**
 * Hook to obtain json with movies data by string.
 * @param {string} str - String to make a search.
 * @example
 * import useGetMovies from 'hooks/useGetMovies';
 *
 * export default function MyComponent({ str }: {str: String}) {
 *   const { movies, isLoading, isError } = useGetMovies(str);
 *
 *   if (isLoading) return <Spinner />;
 *   if (isError) return <Error />;
 *   return <NextComponent data={movies} />;
 * }
 */
export default function useGetMovies(str) {
  const { data, error } = useSWR(`${API_URL}${API_KEY}&query=${str}`, fetcher);

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
  };
}
