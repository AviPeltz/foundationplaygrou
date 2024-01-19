


export default function Clock() {
    const time = new Date();
    let hours = time.getHours();
    let colorName;
    if (hours >= 0 && hours <= 6) {
      colorName = 'text-red-500 font-bold text-xl p-2 border-2 rounded-md border-gray-500';
    } else {
      colorName = 'text-green-500 font-thin text-xl p-2 border-2 rounded-md border-gray-500';
    }
    return (
      <h1 className={colorName}>
        {time.toLocaleTimeString()}
      </h1>
    );
  }