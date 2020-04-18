import React from 'react';
import styled from 'styled-components';

const ButtonWrap = styled.button((props: {enable: boolean}) => ({
  display: 'flex',
  justifyContent: 'center',
  margin: '30px auto',
  width: '40%',
  height: '30px',
  borderRadius: '10px',
  backgroundColor: props.enable ? '#5cc1b3' : '#757882',
}));

const Button: React.SFC<{url: string, enable: boolean}> = ({url, enable}) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  }
  return (
    <a href={url} style={{ textDecoration: 'none', pointerEvents: enable ? 'auto' : 'none' }}>
      <ButtonWrap enable={enable}>
        <button style={{ color: '#fafafa', fontSize: '1.2rem' }} onClick={onClick}>Open Link</button>
      </ButtonWrap>
    </a>
  )
}

const Result: React.SFC<{url: string}> = ({url}) => {
  return (
    <Button url={url} enable={url ? true : false} />
  )
}

export default Result;
