export function TimeDisplay({ currentTime }) {
  const getTwoDigitSeconds = () => {
    const seconds = Math.ceil(currentTime / 10) % 60;
    const twoDigitSeconds = seconds.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    return twoDigitSeconds;
  };

  const getMinutes = () => {
    const minutes = Math.floor(Math.ceil(currentTime / 10) / 60);
    return minutes;
  };

  return (
    <label className="select-none">{`${getMinutes()}:${getTwoDigitSeconds()}`}</label>
  );
}
