import "./commands";

// Next.js's RSC performance instrumentation occasionally throws
// "cannot have a negative time stamp" in this headless environment — a
// framework-level timing glitch, not an app bug. Don't fail tests on it.
Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("cannot have a negative time stamp")) return false;
});
