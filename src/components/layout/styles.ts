import styled from 'styled-components';

// SL server list
// SN server name
// CI chanel info
// Cl chanel list
// CD chanel data
// UI user info

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;
  
  grid-template-areas: 
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';

    height: 100vh;
`;
