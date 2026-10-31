/** Shared between the contact form (client) and /api/contact (server). */

export const LIMITS = {
  name: 100,
  email: 254,
  message: 5000,
  minMessage: 10,
  /** Submissions faster than this are almost certainly bots. */
  minFillMs: 3000,
} as const;

export type ContactInput = {
  name: string;
  email: string;
  message: string;
};

export type FieldErrors = Partial<Record<keyof ContactInput, string>>;

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/;

export function validateContact(input: ContactInput): FieldErrors {
  const errors: FieldErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();

  if (!name) errors.name = "Please enter your name.";
  else if (name.length > LIMITS.name) errors.name = `Please keep your name under ${LIMITS.name} characters.`;

  if (!email) errors.email = "Please enter your email address.";
  else if (email.length > LIMITS.email || !EMAIL_RE.test(email))
    errors.email = "That email address doesn't look right.";

  if (message.length < LIMITS.minMessage) errors.message = "Please write a little more so I can reply properly.";
  else if (message.length > LIMITS.message)
    errors.message = `Please keep your message under ${LIMITS.message} characters.`;

  return errors;
}

export function mailtoHref(to: string, input: ContactInput) {
  const subject = `Portfolio enquiry from ${input.name.trim() || "a visitor"}`;
  const body = `${input.message.trim()}\n\n— ${input.name.trim()}${input.email.trim() ? ` (${input.email.trim()})` : ""}`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
