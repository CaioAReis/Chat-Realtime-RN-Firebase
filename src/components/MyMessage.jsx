import { MyMessageText } from "./MyMessageText";
import { MyMessageImage } from "./MyMessageImage";

export function MyMessage({ message }) {

  const messageTypes = {
    text: <MyMessageText message={message} />,
    image: <MyMessageImage message={message} />
  }

  return messageTypes[ message?.type ];
}