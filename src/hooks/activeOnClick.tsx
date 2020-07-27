import * as React from "react";

export const useActiveClick = () => {
  const [show, setShow] = React.useState(false);
  const onClick = () => {
    setShow(!show);
  };
  return { show, onClick };
};
