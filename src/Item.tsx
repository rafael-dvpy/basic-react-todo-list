import { useState } from "react";

type ItemProps = {
  name: string;
};
const Item: React.FC<ItemProps> = ({ name }) => {
  const [itemState, setItemState] = useState(true);
  const toggleState = () => {
    setItemState(!itemState);
  };
  if (itemState === true) {
    return (
      <div className="flex m-2 bg-slate-700 rounded-lg p-1 px-2 justify-between">
        <li className="text-lg text-gray-300" key={name}>
          {name}
        </li>
        <button
          className="bg-red-500 ml-3 font-bold p-1 px-2 rounded-lg"
          onClick={toggleState}
        >
          X
        </button>
      </div>
    );
  } else {
    return <></>;
  }
};
export default Item;
