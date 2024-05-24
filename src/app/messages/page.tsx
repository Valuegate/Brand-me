import Messages from "@/components/messages/Messages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages",
};

export default function MessagesPage() {
  return <Messages />;
}
