import { addListener, closeSocket, getSocket, openSocket, startTicking } from "@/app/socket/socket";
import { useAppDispatch } from "./useStore";
import { helloApi } from "@/store/HelloApi";
import { Message } from "@/models/Message";
import { useEffect, useRef } from "react";

//let's use socket to update hellp api rtkq here
const useHelloSocket = () => {
  const init = useRef(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (getSocket()) return;
    openSocket();
    const handler = (message: Message) =>
      dispatch(
        helloApi.util.updateQueryData("hello", undefined, (draft) => {
          return draft ? { ...draft, ...message } : { ...message };
        })
      );
    addListener(handler);
    startTicking();
    return () => closeSocket();
  }, []);
};

export default useHelloSocket;
