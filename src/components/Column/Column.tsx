import styled from "styled-components";

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}
export function ColumnComponent({ title, children, ...rest }: ColumnProps) {
  return (
    <Container {...rest}>
      <Header>{title}</Header>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
}

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  @media screen and (max-width: 960px) {
    flex-direction: row;
    flex-flow: wrap;
    gap: 1rem;
  }
`;

const Container = styled.div`
  position: relative;
  height: fit-content;
  background-color: #f5f6f7;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  color: #58647a;
  font-size: 0.6rem;
  font-weight: 600;
`;
