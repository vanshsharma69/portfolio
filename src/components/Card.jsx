function Card({ icon, title, color, text }) {
  const shadowColor = {
    blue: "hover:shadow-blue-400/30",
    cyan: "hover:shadow-cyan-400/30",
    purple: "hover:shadow-purple-400/30",
    green: "hover:shadow-green-400/30",
  };

  return (
    <div
      className={`flex flex-col items-center bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md transition transform hover:-translate-y-2 ${shadowColor[color]} w-full h-full`}
    >
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold text-center mb-2">{title}</h4>
      <p className="text-center text-sm">{text}</p>
    </div>
  );
}
export default Card;