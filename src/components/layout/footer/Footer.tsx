import { Box, Text } from '@chakra-ui/react';
/**
 * Declare type/interface for this component.
 */
type FooterProps = {
  content?: string;
};
/**
 * Footer is a component to render a footer in your app.
 * @param {String} [props.content="Defaul Copyright"] - Text content in footer.
 * @example
 * <Footer />
 * <Footer content="My new text of copyright."/>
 */
export default function Footer({
  content = `Copyright ${new Date().getFullYear()} Peter DG, Inc. All rights reserved. Ticmas.`,
}: FooterProps) {
  return (
    <Box
      as='footer'
      role='contentinfo'
      width='100%'
      position='fixed'
      bottom='0'
      height='25px'
      bg='blue.500'
    >
      <Text color='white' fontSize='sm' textAlign='center'>
        {content}
      </Text>
    </Box>
  );
}
