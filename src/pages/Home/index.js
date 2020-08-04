import React, { useState } from 'react';

import { Container } from './styles';

export default function Home() {
  const [userStorage] = useState(JSON.parse(sessionStorage.getItem('user')));

  return (
    <Container>
      <p>Welcome {userStorage.username}</p>
    </Container>
  );
}
