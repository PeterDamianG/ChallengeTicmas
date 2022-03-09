import { movie } from 'types/movie';
/**
 * Make a fuction reduce to get movies separate by group.
 * @param {movie} data - Filter data type movie getting for request.
 * @example
 * import groupByGenres from 'utils/groupByGenres';
 * const setGroupByGenres = groupByGenres(data);
 * @returns Object {[number],[arr[X]}
 */
export default function groupByGenres(data: movie[]) {
  return data.reduce((genres, actualMovie) => {
    actualMovie.genre_ids.forEach((genreID) => {
      // eslint-disable-next-line no-param-reassign
      genres[genreID] = genres[genreID] || [];

      if (!genres[genreID].includes(actualMovie)) {
        genres[genreID].push(actualMovie);
      }
    });
    return genres;
  }, {});
}
