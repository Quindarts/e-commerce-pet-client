import Button from "../../components/Button";
import { Icon } from "@iconify/react";

const TestComponents = () => {
  return (
    <>
      <div className="flex items-center gap-5 bg-gray p-20">
        <Button htmlType="link" type="primary" url="/">
          Click me!
        </Button>
        <Button htmlType="link" type="primary" color="green" url="/">
          Read more
        </Button>
        <Button htmlType="link" type="primary" ghost url="/">
          Read more
        </Button>
        <Button htmlType="link" type="primary" url="/" color="white">
          Read more
        </Button>

        <Button htmlType="link" type="primary" url="/" >
          <span>
            <Icon icon="mdi:play" />
          </span>
          see on video
        </Button>
        <Button htmlType="submit" type="primary" size="small" ghost>
          filter
        </Button>
        <Button htmlType="submit" type="icon">
          <Icon icon="pepicons-pop:cart" />
        </Button>
        <Button htmlType="submit" type="icon">
          <Icon icon="mingcute:arrow-right-line" />
        </Button>
        <div className="flex-1">
          <Button
            htmlType="submit"
            type="primary"
            className="w-100 text-center"
          >
            Log in
          </Button>
        </div>
      </div>
    </>
  );
};
export default TestComponents;
