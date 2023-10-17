import { asyncTimeout } from "../utils/asyncTimeout";

export async function respond(inputMessage) {
  console.log("Blinkbot responding to ", inputMessage);

  const lowercaseMessage = inputMessage.trim().toLowerCase();

  if (lowercaseMessage === "hi") {
    return "Hello there";
  }

  console.log("No response matched");

  return "Sorry, I don't know how to respond to that yet";
}

export function getInitialMessage() {
  return "Hi, I'm Blinkbot. Please help me learn by opening 'src/Blinkbot/respond.js' to get started.";
}
