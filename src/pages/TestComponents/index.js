import Button from "../../components/Button";
import { Icon } from "@iconify/react";
import TextField from "../../components/TextField";
import Dropdown from "../../components/Dropdown";
import { useState } from "react";

const TestComponents = () => {
  const [value, setValue] = useState("fruit");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const options = [
    { label: "Fruit", value: "fruit" },
    { label: "Vegetable", value: "vegetable" },
    { label: "Meat", value: "meat" },
  ];

  return (
    <>
      
      <Dropdown
        label="What do we eat?"
        options={options}
        value={value}
        onChange={handleChange}
      />
      <div className="containe">
        <div className="">
          <form action="cc">
          <Button type="primary">
          filter
        </Button>
          </form>
          <Button htmlType="link" type="primary" href="https://google.com">
          <span>
          <Icon icon="pepicons-pop:cart" />
          </span>
          Add to cart
        </Button>
        </div>
      </div>
    </>
  );
};
export default TestComponents;
