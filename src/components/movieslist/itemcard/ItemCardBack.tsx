import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react';
import { API_IMG } from 'constants/enviroment';
/**
 * Declare type/interface for this component.
 */
type ItemCardProps = {
  imagenUrlBack: string;
  originalTitle: string;
  average: number;
  imageAlt?: string;
};
/**
 * Component to render back card movies.
 * @example
 * import ItemCardBack from './ItemCardBack';
 * ...
 *   <ItemCardBack
 *      imagenUrlBack={imagenUrlBack}
 *      originalTitle={originalTitle}
 *      average={average}
 *      imageAlt={imageAlt}
 *   />
 * ...
 */
export default function ItemCardBack({
  imagenUrlBack,
  originalTitle,
  average,
  imageAlt = 'The image is not working. We are sorry.',
}: ItemCardProps) {
  return (
    <Box
      p={6}
      maxW='350px'
      w='full'
      bg='blue.500'
      boxShadow='2xl'
      rounded='lg'
      pos='relative'
      zIndex={1}
      _hover={{
        background: 'blue.700',
        transition: 'background 0.4s linear',
      }}
    >
      <Box
        rounded='lg'
        mt={-12}
        pos='relative'
        height='230px'
        _after={{
          transition: 'all .3s ease',
          content: '""',
          w: 'full',
          h: 'full',
          pos: 'absolute',
          top: 5,
          left: 0,
          backgroundImage: `url(${API_IMG}${imagenUrlBack})`,
          filter: 'blur(15px)',
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: 'blur(20px)',
          },
        }}
      >
        <Image
          rounded='lg'
          height={230}
          width={282}
          objectFit='cover'
          src={`${API_IMG}${imagenUrlBack}`}
          alt={imageAlt}
          fallbackSrc='https://i.ytimg.com/vi/q41AIk3gPKQ/hqdefault.jpg'
        />
      </Box>
      <Stack pt={10} align='center'>
        <Text
          color={Number(average) >= 7 ? 'green.300' : 'red'}
          fontSize='sm'
          textTransform='uppercase'
        >
          Average: &bull; {average} &bull;
        </Text>
        <Heading
          color='white'
          fontSize='2xl'
          fontFamily='body'
          fontWeight={500}
        >
          {originalTitle}
        </Heading>
      </Stack>
    </Box>
  );
}
