import { MessageText } from "./MessageText";
import { MessageImage } from "./MessageImage";

export function Message({ message }) {

  const messageTypes = {
    text: <MessageText message={message} />,
    image: <MessageImage message={message} />
  }

  return messageTypes[ message?.type ];
}