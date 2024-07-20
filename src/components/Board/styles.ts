import styled from "styled-components";

export const BoardComponentStyle = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 2rem;
  background-color: #fafaf9;
  width: fit-content;
  flex-wrap: wrap;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    min-width: 560px;
    margin: 2rem 2rem;
  }
`;
