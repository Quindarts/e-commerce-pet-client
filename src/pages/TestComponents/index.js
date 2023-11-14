import Button from "../../components/Button";
import { Icon } from "@iconify/react";
import TextField from "../../components/TextField";
import Dropdown from "../../components/Dropdown";
import { useState } from "react";

const TestComponents = () => {
  const [value, setValue] = useState("big");

  const handleChange = (e) => {
    e.target.value ? setValue(e.target.value) : setValue("big-small");
  };

  const options = [
    { label: "Choose an option", value: "" },
    { label: "Big", value: "big", defaultValue: true },
    { label: "Small", value: "small"},
  ];

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>{value}</h1>
          <Dropdown options={options} onChange={handleChange}/>
        </div>
      </div>
    </>
  );
};
export default TestComponents;
