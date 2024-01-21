import useResizeObserver from "@react-hook/resize-observer";
import { RefObject, useLayoutEffect, useState } from "react";

const useSize = (target: RefObject<HTMLDivElement>) => {
  const [size, setSize] = useState<DOMRectReadOnly>();

  useLayoutEffect(() => {
    if (target?.current) {
      setSize(target.current.getBoundingClientRect());
    }
  }, [target]);

  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};

export { useSize };
