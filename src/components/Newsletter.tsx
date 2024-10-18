import { FormEvent, useState } from "react";

import IconError from "../assets/images/icon-error.svg";

// NOTE: I would of course use real validation on a live site.
function isValidEmail(email: string) {
  if (email.trim().length === 0 || !email.includes("@")) return false;
  return true;
}

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);

    if (isValidEmail(email)) {
      setEmail("");
      setSubmitted(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div
          className={`flex grow flex-col rounded-md ${submitted && !isValidEmail(email) ? "bg-red ring-2 ring-red" : ""}`}
        >
          <div className="relative flex grow flex-col">
            <input
              className={`h-full min-h-12 rounded-md px-5 text-xs text-blue-900 transition duration-300 placeholder:text-xs placeholder:text-blue-900/25 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              aria-label="Enter your email address"
              required
            />
            {submitted && !isValidEmail(email) && (
              <img
                className="absolute right-4 top-1/2 size-5 -translate-y-1/2"
                src={IconError}
                alt="Error icon"
              />
            )}
          </div>

          {submitted && !isValidEmail(email) && (
            <p className="px-3 text-left text-[0.625rem] font-medium italic tracking-wider">
              Whoops, make sure it's an email
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <button className="inline-flex min-h-12 min-w-32 items-center justify-center rounded-md border border-red bg-red px-4 text-center text-xs font-medium text-white shadow-md shadow-transparentBlue transition duration-300 hover:bg-white hover:text-red focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2">
            Contact Us
          </button>
        </div>
      </div>
    </form>
  );
}
