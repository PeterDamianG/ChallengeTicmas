import { Box, Container, Image } from '@chakra-ui/react';

// Sample card from Airbnb
export default function ItemCard() {
  const property = {
    imageUrlPoster:
      'https://image.tmdb.org/t/p/w200/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
    imageUrlBackdrop:
      'https://image.tmdb.org/t/p/w200/nNmJRkg8wWnRmzQDe2FwKbPIsJV.jpg',
    imageAlt: 'The image is not working. We are sorry.',
    title: 'The Avengers',
    year: '2012-04-25',
  };

  return (
    <Box maxW='lg' borderWidth='4px' borderRadius='lg' overflow='hidden'>
      <Image src={property.imageUrlPoster} alt={property.imageAlt} />
      <Container centerContent p={4} maxW='container.md'>
        <Box fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
          {property.title}
        </Box>
        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
        >
          &bull; {property.year} &bull;
        </Box>
      </Container>
    </Box>
  );
}
