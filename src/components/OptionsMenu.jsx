import backArrow from "../assets/backArrow.png";

export function OptionsMenu({ setScreen }) {
  return (
    <>
      <img
        src={backArrow}
        onClick={() => setScreen("Home")}
        className="w-5 h-auto absolute left-7 top-7 select-none"
      ></img>
    </>
  );
}
