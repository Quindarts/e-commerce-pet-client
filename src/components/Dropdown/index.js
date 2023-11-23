import { Icon } from "@iconify/react";

const Dropdown = (props) => {
  const { options, onChange, ...restProps } = props;

  // Kiểm tra default value
  const defaultOption = options.find(item => item?.defaultValue === true)
  const defaultValue = defaultOption ? defaultOption.value : "";

  return (
    <>
      <div className="selector">
        <select defaultValue={defaultValue} onChange={onChange} {...restProps}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <Icon icon="fa6-solid:angle-down" />
      </div>
    </>
  );
};
export default Dropdown;
