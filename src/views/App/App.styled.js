import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 4fr 4fr 1fr;
  min-height: 100vh;
  min-width: 100vw;
  padding: 20px 20px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    31deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 27%,
    rgba(0, 212, 255, 1) 100%
  );
`;
