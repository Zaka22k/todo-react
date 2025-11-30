import { useRef } from "react";

const useIncomleteTaskScroll = ({ tasks }) => {
  const firstIncompleteTaskRef = useRef(null);
  const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id;

  return {
    firstIncompleteTaskId,
    firstIncompleteTaskRef,
  };
};
export default useIncomleteTaskScroll;
