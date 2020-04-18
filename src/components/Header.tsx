import React from 'react';
import styled from 'styled-components';

const Title = styled.div({
  width: '100%',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.8rem',
  color: '#fafafa',
  backgroundColor: '#377aaf',
});

const Header: React.SFC<{}> = () => {
  return (
    <Title>
      QR Code Reader
    </Title>
  )
}

export default Header;
