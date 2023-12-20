import TextField from '../../components/TextField'
import Checkbox from '../../components/CheckBox'
import ProductCard from '../../components/ProductCard'
import Button from '../../components/Button'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputQuantity from '../../components/InputQuantity'

const data = {
    title: 'American Journey Landmark Chicken',
    desc: 'Cats are natural carnivores, so they thrive on a diet that’s high in animal protein.',
    category: ['Whole', 'Hearted'],
    weight: [8, 16, 32],
    selectedWeight: 0,
    stock: '0',
    price: '20',
    quantity: 10,
    maxQuantity: 100,
}

const TestComponents = () => {
    const [isChecked, setChecked] = useState(false)
    const [dataCard, setDataCard] = useState(data)
    const [quantity, setQuantity] = useState(data.quantity || 0)

    const handleClick = (weight) => {
        const weightList = data.weight
        data.selectedWeight = weightList.findIndex((item) => item === weight)
        setDataCard(data)
        reset()
    }

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
                />

                    {/* <Checkbox label="Remember Me" color="green" size="c-form" /> */}
                </form>
            </div>
            <div>
                <ProductCard data={dataCard} onClick={handleClick} />
            </div>
            <div style={{ marginLeft: '500px' }}>
                <InputQuantity
                    id="quantity"
                    validate={{
                        required: 'This field cannot be empty.',
                        pattern: {
                            value: /^[0-9]+$/,
                            message: 'Value must be greater than or equal to 1',
                        },
                    }}
                    value
                    onchange
                    onChangeQuantity={function (quantity) {
                        setQuantity(quantity)
                    }}
                    errors={errors}
                    register={register}
                    data={data && data}
                    size="large"
                />
                <Button
                    onClick={() => {
                        console.log({ quantity: quantity })
                    }}
                    htmlType="submit"
                    type="primary"
                    size="small"
                    ghost
                    className="cc"
                >
                    submit
                </Button>
            </div>
        </>
    )
}
export default TestComponents
