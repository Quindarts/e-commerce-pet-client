import TextField from '../../components/TextField'
import Checkbox from '../../components/CheckBox'
import ProductCard from '../../components/ProductCard'
import Button from '../../components/Button'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Icon } from '@iconify/react'
import InputQuantity from '../../components/InputQuantity'
import formatter from '../../utils/formatter'
import UseTranslate from '../../utils/translate'

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
    const refQuantity = useRef(data.quantity || 0)

    const handleChangeQuantity = (quantity) => {
        refQuantity.current = Number(quantity)
        console.log(quantity)
    }

    const [lang, setLang] = useState('')
    useEffect(() => {
        if (localStorage.getItem('lang')) {
            setLang(localStorage.getItem('lang'))
        }
        // localStorage.setItem('lang', 'zh-CN');
    }, [])

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
                <Button htmlType="link" type="primary" url="/">
                    Click me!
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
                </div>
                {/* TextField Search */}
                <form>
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
                </form>
            </div>

            <div>
                <ProductCard data={dataCard} onClick={handleClick} />
            </div>

            <div className="container">
                <ProductCard data={data} reset={reset} />
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
                    value={refQuantity.current}
                    onChangeQuantity={handleChangeQuantity}
                    errors={errors}
                    register={register}
                    data={data && data}
                    size="large"
                />

                <Button
                    onClick={() => {
                        console.log({ quantity: refQuantity.current })
                    }}
                    htmlType="submit"
                    type="primary"
                    size="small"
                    ghost
                    className="cc"
                >
                    <UseTranslate
                        data={{ useUI: true, text: 'submit', lang }}
                    ></UseTranslate>
                </Button>
            </div>

            <span>{formatter(100000)}</span>
        </>
    )
}

export default TestComponents
