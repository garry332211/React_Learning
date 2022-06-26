import useCounter from "../custom_hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  const counter = useCounter();



  return <Card>{counter}</Card>;
};

export default ForwardCounter;
