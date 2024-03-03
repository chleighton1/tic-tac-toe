import React from "react";

export default function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <button onClick={onClose}>Close</button>
    </div>
  );
}
