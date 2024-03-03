export default function Square({ value, onSquareClick }) {
  const textColor = value == "x" ? "text-light-yellow" : "text-light-blue";
  return (
    <button
      onClick={onSquareClick}
      className={`rounded shadow-box font-black text-5xl bg-semi-dark-navy h-20 w-20 ${textColor}`}
    >
      {value?.toUpperCase()}
    </button>
  );
}
