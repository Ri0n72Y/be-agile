import styled from "styled-components";
import { Portal } from "./Portal";

export function DialogWrapper({ children }: React.PropsWithChildren) {
  return (
    <Portal>
      <Wrapper>{children}</Wrapper>
    </Portal>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
