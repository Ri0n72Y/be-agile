import styled from "styled-components";

interface Props {
  style?: React.CSSProperties;
  progress: number;
  label?: React.ReactNode;
}
export function Circle({ style, progress, label }: Props) {
  const angle = 360 - progress * 208;
  return (
    <Wrapper style={style}>
      <svg width="4rem" height="4rem" style={{ position: "absolute" }}>
        <circle
          cx="2rem"
          cy="2rem"
          r="1.8rem"
          fill="transparent"
          stroke="white"
          opacity={0.6}
          strokeWidth="4"
        />
        <circle
          cx="2rem"
          cy="2rem"
          r="1.8rem"
          fill="transparent"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          style={{
            transformOrigin: "center",
            transform: `rotate(${-90}deg)`,
          }}
          strokeDasharray={100 * Math.PI}
          strokeDashoffset={((100 * Math.PI) / 360) * angle}
        />
      </svg>
      {label ?? `${(progress * 100).toFixed(0)}%`}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
`;
