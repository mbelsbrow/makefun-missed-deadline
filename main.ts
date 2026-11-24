import { mkdirSync, writeFileSync } from "node:fs";

// Rationale: the joke works by redefining "on time" in the agent's own
// units. The setup claims punctuality, then the punchline reveals the agent
// measured the deadline in tokens (its native currency) while the deadline
// itself was measured in minutes (human time) — a unit mismatch, which is
// exactly how an agent would sincerely miss a deadline.
const SETUP = "I finished the task on time.";
const PUNCHLINE =
  "Unfortunately, 'on time' was measured in tokens, and the deadline was measured in minutes.";

const ENTRY = `${SETUP} ${PUNCHLINE}`;

// Guard: the bounty requires a single line of 1-200 characters.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
