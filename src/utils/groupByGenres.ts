import { movie } from 'types/movie';
/**
 * Make a fuction reduce to get movies separate by group.
 * @param {movie} data - Filter data type movie getting for request.
 * @example
 *
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
