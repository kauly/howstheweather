"use client";

import { Toaster, resolveValue } from "react-hot-toast";

function Toast() {
  return (
    <Toaster position="bottom-center">
      {(t) => (
        <div className="text-zinc-800 font-inter border border-red-400 bg-red-600/80 rounded-lg p-4">
          {resolveValue(t.message, t)}
        </div>
      )}
    </Toaster>
  );
}

export { Toast };
