import { useEffect, useRef } from "react";

export const useSkipInitialEffect = (func, deps) => {
    const didMount = useRef(false);
  
    useEffect(() => {
      if (didMount.current) {
        func();
      } else {
        didMount.current = true;
      }
    }, deps);
};

export const useInitialOnlyEffect = (func, deps) => {
  const didMount = useRef(true);
  console.log("CustomHook didMount :", didMount);
  useEffect(() => {
    console.log("CustomHook didMount inside :", didMount.current);
    if (didMount.current) {
      func();
    } else {
      didMount.current = false;
    }
  }, deps);
};