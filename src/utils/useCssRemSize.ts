import { useEffect, useState } from "react";

export const useCssRemSize = () => {
  const [px, setPx] = useState(
    parseFloat(getComputedStyle(document.documentElement).fontSize)
  );
  useEffect(() => {
    setPx(parseFloat(getComputedStyle(document.documentElement).fontSize));
  }, []);

  return px;
};
