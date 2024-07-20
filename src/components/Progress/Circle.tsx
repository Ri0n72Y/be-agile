import styled from "styled-components";

interface Props {
  style?: React.CSSProperties;
  progress: number;
  label?: React.ReactNode;
  /** @unit px */
  size?: number;
}
// reference: https://nikitahl.github.io/svg-circle-progress-generator/
export function Circle({ style, progress, label, size = 50 }: Props) {
  const realSize = size + 2;
  const y = size * Math.PI;
  const prog = y * (1 - progress);
  return (
    <Wrapper $size={realSize} style={style}>
      <svg
        width={size + 20}
        height={size + 20}
        style={{ position: "absolute", transition: "all 0.3s ease-out" }}
      >
        <circle
          cx={size / 2 + 10}
          cy={size / 2 + 10}
          r={size / 2}
          fill="transparent"
          stroke="white"
          style={{
            transition: "all 0.3s ease-out",
          }}
          opacity={0.6}
          strokeWidth="3"
        />
        <circle
          cx={size / 2 + 10}
          cy={size / 2 + 10}
          r={size / 2}
          fill="transparent"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          style={{
            transformOrigin: "center",
            transform: `rotate(${-90}deg)`,
            transition: "all 0.3s ease-out",
          }}
          strokeDasharray={`${y}px`}
          strokeDashoffset={`${prog}px`}
        />
      </svg>
      {label ?? `${(progress * 100).toFixed(0)}%`}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $size?: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $size: size = 4 }) => `${size}`}px;
  height: ${({ $size: size = 4 }) => `${size}`}px;
  transition: all 0.3s ease-out;
`;
