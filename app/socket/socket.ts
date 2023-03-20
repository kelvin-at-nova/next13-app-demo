import { Message } from "@/models/Message";

//same data structure as hello api route, socket sends every 3 seconds
let ws: WebSocket;
let init = false;
let listening = false;
let ticking = false;
let timer: ReturnType<typeof setInterval>;
export const getSocket = () => ws;
export const openSocket = () => {
  if (init) return ws;
  ws = new WebSocket("wss://ws.postman-echo.com/raw"); //just echo messages
  init = true;
  return ws;
};
export const addListener = (callback: (messasge: Message) => void) => {
  if (listening) return;
  ws.addEventListener("message", (event: MessageEvent) => {
    const msg = JSON.parse(event.data) as Message;
    callback(msg);
  });
  listening = true;
};
//pretending the socketing is sending message to us every 2 seconds
export const startTicking = () => {
  if (ticking) return;
  timer = setInterval(
    () => ws.send('{"message": "' + new Date().toLocaleTimeString() + ' (SOCKET)"}'),
    2000
  );
  ticking = true;
};
export const closeSocket = () => {
  if (timer) clearInterval(timer);
  if (ws) ws.close();
  init = false;
  ticking = false;
  listening = false;
};
