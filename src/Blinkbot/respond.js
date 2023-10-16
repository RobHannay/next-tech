import { asyncTimeout } from "../utils/asyncTimeout";

export async function respond(inputMessage) {
  await asyncTimeout(800);

  const lowercaseMessage = inputMessage.trim().toLowerCase();

  if (lowercaseMessage === "hi") {
    return "Hello there";
  }

  return "Sorry, I don't know how to respond to that yet";
}

export function getInitialMessage() {
  return "Hi, I'm Blinkbot. Please help me learn by opening 'src/Blinkbot/respond.js' to get started.";
}
