import React from "react";
import styled from "styled-components";
const Title = styled.div`
  font-size: 2em;
  color: red;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 2em;
`;

const test = () => {
  return (
    <Box>
      <Title>test</Title>
    </Box>
  );
};

export default test;
