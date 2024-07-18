import styled from "styled-components";

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children?: React.ReactNode;
}
export function ColumnComponent({ title, children }: ColumnProps) {
  return (
    <Container>
      <Header>{title}</Header>
      {children}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  background-color: #f5f6f7;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1rem;
  border-radius: 1rem;
`;

const Header = styled.div`
  display: flex;
  color: #58647a;
  font-size: 0.6rem;
`;
