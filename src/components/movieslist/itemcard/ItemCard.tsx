import { Box, Container, Image } from '@chakra-ui/react';
import { API_IMG } from 'constants/enviroment';
/**
 * Declare type/interface for this component.
 */
type ItemCardProps = {
  imageUrlPoster: string;
  title: string;
  year: string;
  imageAlt?: string;
};
// Sample card from Airbnb
export default function ItemCard({
  imageUrlPoster,
  title,
  year,
  imageAlt = 'The image is not working. We are sorry.',
}: ItemCardProps) {
  return (
    <Box maxW='md' borderWidth='6px' borderRadius='lg'>
      <Image
        src={`${API_IMG}${imageUrlPoster}`}
        alt={imageAlt}
        fit='cover'
        align='center'
        w='100%'
        fallbackSrc='https://i.ytimg.com/vi/q41AIk3gPKQ/hqdefault.jpg'
      />
      <Container centerContent p={4} isTruncated>
        <Box fontWeight='semibold' as='h4' lineHeight='tight'>
          {title}
        </Box>
        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
        >
          &bull; {year} &bull;
        </Box>
      </Container>
    </Box>
  );
}
