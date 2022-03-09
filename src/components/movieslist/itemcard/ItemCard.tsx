import { useState } from 'react';
import { Center } from '@chakra-ui/react';
import ItemCardFront from './ItemCardFront';
import ItemCardBack from './ItemCardBack';
/**
 * Declare type/interface for this component.
 */
type ItemCardProps = {
  imageUrlPoster: string;
  title: string;
  year: string;
  imageAlt?: string;
  imagenUrlBack: string;
  originalTitle: string;
  average: string;
};
/**
 * Logic card component to setting front/back card.
 * @example
 * import ItemCard from 'components/movieslist/itemcard/ItemCard';
 * ...
 *   <WrapItem key={m.id}>
 *     <ItemCard
 *       imageUrlPoster={m.poster_path}
 *       title={m.title}
 *       year={m.release_date}
 *       imagenUrlBack={m.backdrop_path}
 *       originalTitle={m.original_title}
 *       average={m.vote_average}
 *     />
 * ...
 */
export default function ItemCard({
  imageUrlPoster,
  title,
  year,
  imageAlt = 'The image is not working. We are sorry.',
  imagenUrlBack,
  originalTitle,
  average,
}: ItemCardProps) {
  // State true = card front, false = card back.
  const [state, setState] = useState(true);
  const handleStateChange = () => setState(!state);
  // Return back card.
  return (
    <Center py={12} onClick={handleStateChange} cursor='pointer'>
      {state ? (
        <ItemCardFront
          imageUrlPoster={imageUrlPoster}
          title={title}
          year={year}
          imageAlt={imageAlt}
        />
      ) : (
        <ItemCardBack
          imagenUrlBack={imagenUrlBack}
          originalTitle={originalTitle}
          average={average}
          imageAlt={imageAlt}
        />
      )}
    </Center>
  );
}
