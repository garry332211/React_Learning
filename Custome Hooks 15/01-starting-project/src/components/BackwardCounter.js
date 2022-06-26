import useCounter from "../custom_hooks/use-counter";

import Card from "./Card";

const BackwardCounter = () => {
  const counter = useCounter(0);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
