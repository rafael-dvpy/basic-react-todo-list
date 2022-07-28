import React, { useState } from "react";
import Item from "./Item";

function App() {
  const [item, setItem] = useState("What will I do?");
  const [array, setArray] = useState<string[]>([]);
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setItem(event.currentTarget.value);
  };
  let newelement = 1;
  const handleSubmit = () => {
    setArray([...array, item]);
    setItem("What will I do?");
  };
  const handleFocus = () => {
    setItem("");
  };
  const listMap = array.map((env) => <Item name={env} />);
  return (
    <>
      <div className="bg-slate-800 h-screen">
        <div className="flex justify-center shadow-xl">
          <h1 className="text-8xl m-16 font-bold text-gray-400">To do List</h1>
        </div>
        <div className="grid columns-1 m-8 justify-center">
          <input
            className="rounded-lg text-gray-400 text-3xl font-bold text-center bg-slate-700 border-gray-800 border-solid border focus-within:border-gray-900"
            type="text"
            onFocus={handleFocus}
            onChange={handleChange}
            value={item}
          />
          <input
            className="text-gray-300 font-bold mx-auto my-2 rounded-xl bg-slate-600 border-2 w-32 border-black shadow-lg hover:border-gray-900 hover:bg-slate-400 ease-in transition-all"
            type="submit"
            value="Submit!"
            onClick={handleSubmit}
          />
        </div>
        <div className="flex align-middle justify-center">
          <ul className="">{listMap}</ul>
        </div>
      </div>
    </>
  );
}

export default App;
