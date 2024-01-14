import TextField from '../../components/TextField'
import Checkbox from '../../components/CheckBox'
import ProductCard from '../../components/ProductCard'
import Button from '../../components/Button'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Icon } from '@iconify/react'
import InputQuantity from '../../components/InputQuantity'
import formatter from '../../utils/formatterMoney'
import UseTranslate from '../../utils/translate'
import Breadcrumb from '../../components/Breadcrumb'
import ProductModal from '../../components/ProductModal'
import Accordin from '../../components/Accordin/Accordin'

import { useSnackbar } from 'notistack'
import QuantityTextField from '../../components/QuantityTextField'

import Tab from '../../components/Tab'

import InputText from '../../components/InputText'
import Badge from '../../components/Badge'
import TabContent from '../../components/Tab/TabContent'

const data = {
    id: '1',
    title: 'American Journey Landmark Chicken',
    desc: 'Cats are natural carnivores, so they thrive on a diet that’s high in animal protein.',
    category: ['Whole', 'Hearted'],
    weight: [8, 16, 32],
    stock: [1, 0, 1],
    price: [20, 30, 40],
}

const TestComponents = () => {
    const { enqueueSnackbar } = useSnackbar()

    const [isChecked, setChecked] = useState(false)
    const [dataCard, setDataCard] = useState(data)
    const [showProductModal, setShowProductModal] = useState(false)
    const refQuantity = useRef(data.quantity || 0)

    const handleChangeQuantity = (quantity) => {
        refQuantity.current = Number(quantity)
        console.log(quantity)
    }

    const handleProductModal = () => {
        setShowProductModal(!showProductModal)
    }

    const [lang, setLang] = useState('')
    useEffect(() => {
        if (localStorage.getItem('lang')) {
            setLang(localStorage.getItem('lang'))
        }
        // localStorage.setItem('lang', 'zh-CN');
    }, [])

    const handleCheckboxChange = () => {
        setChecked(!isChecked)
    }

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        setValue,
    } = useForm()

    const onSubmit = (value) => {
        console.log(value)
        reset()
    }

    // SHOW TOAST
    function showTopRightCustomSnackbar() {
        enqueueSnackbar(
            '“American Journey Landmark Chicken” has been added to your cart.',
            {
                variant: 'customVariant',
                // persist: false,
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
                autoHideDuration: 3000,
                hideIconVariant: false,
                iconVariant: false,
            }
        )
    }

    const handleClickWarning = (variant) => () => {
        enqueueSnackbar('This is a custom snackbar', {
            variant,
        })
    }

    const handleClickError = (variant) => () => {
        enqueueSnackbar('This is a custom snackbar', {
            variant,
        })
    }

    const handleSnackbar = (variant) => {
        enqueueSnackbar('This is a custom snackbar', {
            variant: 'success', // You can change the variant as needed
        })
    }

    const handleClickInfo = (variant) => () => {
        enqueueSnackbar('This is a custom snackbar', {
            variant,
        })
    }

    // UPDATE INPUT QUANTITY

    const [quantity, setQuantity] = useState(1)
    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity)
    }

    // UPDATE INPUT QUANTITY

    // TAB

    const tabData = [
        {
            id: 1,
            tab: 'Dogs',
            path: 'dog',
            title: 'Anh',
        },
        {
            id: 2,
            tab: 'Cats',
            path: 'cat',
            title: 'Yêu',
        },

        {
            id: 3,
            tab: 'Fish',
            path: 'fish',
            title: 'Em',
        },

        {
            id: 4,
            tab: 'Small Pets',
            path: 'small-pet',
            title: 'Lắm',
        },
    ]

    console.log(badgeMessages.map((badge) => badge.status))

    return (
        <>
            <div className="flex items-center gap-5 bg-gray p-20">
                <Button htmlType="link" type="primary" url="/">
                    Click me!
                </Button>
                <Button
                    onClick={handleClickInfo('info')}
                    htmlType="link"
                    type="primary"
                    ghost
                    url="/"
                >
                    Read more
                </Button>
                <Button
                    onClick={handleSnackbar}
                    htmlType="link"
                    type="primary"
                    url="/"
                    color="white"
                >
                    Read more
                </Button>
                <Button
                    onClick={handleClickError('error')}
                    htmlType="link"
                    type="primary"
                    url="/"
                >
                    <span>
                        <Icon icon="mdi:play" />
                    </span>
                    see on video
                </Button>
                <Button
                    onClick={handleClickWarning('warning')}
                    htmlType="submit"
                    type="primary"
                    size="small"
                    ghost
                >
                    filter
                </Button>
                <Button
                    onClick={showTopRightCustomSnackbar}
                    htmlType="submit"
                    type="icon"
                >
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

            {/* <div>
                <ProductCard data={dataCard} onClick={handleClick} />
            </div> */}

            <div className="container">
                <ProductCard
                    data={data}
                    reset={reset}
                    handleProductModal={handleProductModal}
                />
            </div>

            <ProductCard
                style={{ position: 'relative', margin: '0 auto' }}
                data={data}
                reset={reset}
                handleProductModal={handleProductModal}
            >
                <div className="badge__list">
                    <Badge badges={'new'} message="new"></Badge>
                    <Badge badges={'sale'} message="-11%"></Badge>
                    <Badge badges={'featured'} message="top"></Badge>
                    <Badge badges={'outofstock'} message="out of stock"></Badge>
                </div>
            </ProductCard>
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
            <div>
                <Breadcrumb targetFormat="snake" className="cc"></Breadcrumb>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '50px 50px',
                }}
            >
                <Accordin className="w-100" message="Coupon code">
                    <div style={{ height: 500 }}></div>
                </Accordin>
            </div>

            <QuantityTextField
                className="mt-2"
                quantity={quantity}
                onChange={handleQuantityChange}
                size="large"
                style={{ margin: '10px' }}
            />
            <ProductModal
                showProductModal={showProductModal}
                data={data}
                handleChangeQuantity={handleChangeQuantity}
                value={refQuantity.current}
                errors={errors}
                handleProductModal={handleProductModal}
            />

            <Tab
                data={tabData}
                style={{
                    margin: '0 auto 25px',
                    maxWidth: '1160px',
                    textAlign: 'center',
                    lineHeight: 0,
                }}
            >
                <TabContent />
            </Tab>
        </>
    )
}

export default TestComponents
