import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

const Logo = () => {
  return <h1>🌴🥥 Far Away 🧳🍷</h1>;
};
const Form = () => {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!desc) return;
    const newitem = {
      description: desc,
      quantity,
      package: false,
      id: new Date(),
    };

    setDesc("");
    setQuantity("");
    console.log(newitem);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        value={desc}
        type="text"
        placeholder="Item..."
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
};
const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item }) => {
  const packedStyle = item.packed ? { textDecoration: "line-through" } : {};
  return (
    <li>
      <span style={packedStyle}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};
const Stats = () => {
  return (
    <footer className="stats">
      <em>
        💼 You have X Items n your list ad you have already packed X (X%) of it.
      </em>
    </footer>
  );
};

export default App;
