import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

const App = () => {
  const [items, setItems] = useState(initialItems);
  const handleAddItems = (item) => {
    setItems((prev) => [...prev, item]);
  };
  const handleRemoveItems = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handlePackedItems = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    confirmed && setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} onRemoveItems={handleRemoveItems} />
      <PackingList
        items={items}
        onRemoveItems={handleRemoveItems}
        onPackItems={handlePackedItems}
        onClearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
};

const Logo = () => {
  return <h1>🌴🥥 Far Away 🧳🍷</h1>;
};
const Form = ({ onAddItems }) => {
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
    // handleAddItems(newitem);
    onAddItems(newitem);

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
const PackingList = ({ items, onRemoveItems, onPackItems, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedList = items;

  if (sortBy === "description") {
    sortedList = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedList = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <Item
            item={item}
            key={item.id}
            onRemoveItems={onRemoveItems}
            onPackItems={onPackItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Value</option>
          <option value="description">Sort by Description Name</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
};

const Item = ({ item, onRemoveItems, onPackItems }) => {
  const packedStyle = item.packed ? { textDecoration: "line-through" } : {};

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onPackItems(item.id)}
      />
      <span style={packedStyle}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onRemoveItems(item.id)}>❌</button>
    </li>
  );
};
const Stats = ({ items }) => {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const packedPercentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      {numItems === 0 ? (
        <em>You do not have any Items on the List.</em>
      ) : (
        <em>
          {packedPercentage === 100
            ? "You have packed Everything! Ready to go."
            : `💼 You have ${numItems} Items in your list ad you have already
          packed ${packedItems} (${packedPercentage}%) of it.`}
        </em>
      )}
    </footer>
  );
};

export default App;
