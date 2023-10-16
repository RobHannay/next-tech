export function respond(input) {
  if (input === "Hi") {
    return "Hello there";
  }

  return "Sorry, I don't know how to response to that yet";
}

export function getInitialMessage() {
  return "Hi, I'm Blinkbot. Please help me learn by opening 'src/Blinkbot/respond.js' to get started."
}