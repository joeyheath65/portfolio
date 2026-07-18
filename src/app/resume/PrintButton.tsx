"use client";

export default function PrintButton() {
  return (
    <button onClick={() => window.print()} className="btn-signal px-5 py-2.5 font-mono text-xs">
      Download / Print PDF
    </button>
  );
}
