import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <form action="">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex grow flex-col">
          <input
            className="h-full min-h-12 rounded-md px-5 text-black focus:outline-none focus:ring focus:ring-blue-900 focus:ring-offset-2"
            type="text"
            name=""
            id=""
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="flex flex-col">
          <button className="inline-block min-h-12 min-w-32 rounded-md border border-red bg-red px-4 py-3 text-center text-sm text-white shadow-md transition duration-300 hover:bg-white hover:text-red focus:outline-none focus:ring focus:ring-blue-900 focus:ring-offset-2">
            Contact Us
          </button>
        </div>
      </div>
    </form>
  );
}
