import { Input as I } from "antd";
import { useState } from "react";
const { Search } = I;
function Input() {
  const [query, setQuery] = useState("");
  const handleChange = (newValue) =>
    /^\d+$/.test(newValue) ? setQuery(newValue) : null;

  const [loading, setLoading] = useState(false);

  return (
    <Search
      placeholder="input search loading with enterButton"
      loading={loading}
      enterButton
      maxLength={7}
      value={query}
      onChange={(e) => handleChange(e.target.value)}
      onSearch={(value, event) => {
        setLoading(true);
      }}
    />
  );
}

export default Input;
