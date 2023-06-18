export function TimeDisplay({ currentTime }) {
  //Current time is given in tenths of a second for greater precision

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
    <p className="select-none">{`${getMinutes()}:${getTwoDigitSeconds()}`}</p>
  );
}