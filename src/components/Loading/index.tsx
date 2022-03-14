import React from 'react';

import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container className='loading'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
}

export default Loading;