import React from 'react';
import styled from 'styled-components';

const Text = styled.div({
  width: '100%',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1rem',
  color: '#fafafa',
  backgroundColor: '#377aaf',
  position: 'absolute',
  bottom: 0,
});

const Footer: React.SFC<{}> = () => {
  return (
    <Text>
      © 2020 ihch.
    </Text>
  )
}

export default Footer;
