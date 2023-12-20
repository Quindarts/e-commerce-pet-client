import TextField from '../../components/TextField'
import Checkbox from '../../components/CheckBox'
import ProductCard from '../../components/ProductCard'
import Button from '../../components/Button'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const data = {
    id: "1",
    title: "American Journey Landmark Chicken",
    desc: "Cats are natural carnivores, so they thrive on a diet that’s high in animal protein.",
    category: ["Whole", "Hearted"],
    weight: [8, 16, 32],
    stock: [1, 0, 1],
    price: [20, 30, 40],
}

const TestComponents = () => {
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked)
    }

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm()

    const onSubmit = (value) => {
        console.log(value)
        // Xử lý dữ liệu khi form được submit
        // Sau khi xử lý, reset giá trị của form
        reset()
    }

    return (
        <>
            <div className="flex items-center gap-5 bg-gray p-20">
                {/* <Button htmlType="link" type="primary" url="/">
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

                <Button htmlType="link" type="primary" url="/">
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
                </div> */}
                {/* TextField Search */}
                <form>
                    {/* <TextField
                        type="search"
                        name="search"
                        placeholder="Start typing..."
                        disabled={false}
                        color="blue"
                    /> */}
                    <TextField
                        className="mt-2"
                        label="Your phone number *"
                        type="form"
                        placeholder=""
                        disabled={false}
                        color="blue"
                        id="phone"
                        register={register}
                        validate={{
                            required: 'This field can not empty.',
                            pattern: {
                                value: /(0[3|5|7|8|9])+([0-9]{8})\b/,
                                message: 'Phone number is valid',
                            },
                        }}
                        errors={errors}
                    />
                    <Button
                        onClick={handleSubmit(onSubmit)}
                        htmlType="submit"
                        type="primary"
                        size="small"
                        ghost
                        className="cc"
                    >
                        submit
                    </Button>
                    {/* 
                    <TextField
                    type="checkbox"
                    name=""
                    placeholder=""
                    value=""
                    onChange=""
                    disabled={false}
                    color="green"
                    checked={true}
                /> */}

                    {/* <Checkbox label="Remember Me" color="green" size="c-form" /> */}
                </form>
            </div>
            <div className='container'>
                <ProductCard data={data} reset={reset}/>
            </div>
        </>
    )
}
export default TestComponents
