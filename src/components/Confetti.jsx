import confetti from "canvas-confetti";

export default function Confetti() {
  return (
    <div class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300">
      <button onClick={() => confetti()}>🎉</button>
    </div>
  );
}
