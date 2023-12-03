import Button from '../../components/Button'
import { Icon } from '@iconify/react'
import TextField from '../../components/TextField'
import Footer from '../../components/Shared/Footer'
import { useLoaderData } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'
const TestComponents = () => {
    //test fetch route
    const music = useLoaderData()
    console.log('🚀 ~ file: index.js:10 ~ TestComponents ~ music:', music)

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(false)
    }, [music])

    return isLoading ? (
        <h1>Loading data</h1>
    ) : (
        <Fragment>
            <Fragment>
                <div className="flex items-center gap-5 bg-gray p-20">
                    <Button htmlType="link" type="primary" url="/">
                        Click me!
                    </Button>
                    <Button
                        htmlType="link"
                        type="primary"
                        color="green"
                        url="/"
                    >
                        Read more
                    </Button>
                    <Button htmlType="link" type="primary" ghost url="/">
                        Read more
                    </Button>
                    <Button
                        htmlType="link"
                        type="primary"
                        url="/"
                        color="white"
                    >
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
                </div>
                <div className="text__search">
                    <TextField
                        type="search"
                        name="search"
                        placeholder="Start typing..."
                        value=""
                        onChange=""
                        disabled={false}
                        color="green"
                    />
                    <TextField
                        type="form"
                        name=""
                        placeholder=""
                        value=""
                        onChange=""
                        disabled={false}
                        color="green"
                    />
                    <TextField
                        type="checkbox"
                        name=""
                        placeholder=""
                        value=""
                        onChange=""
                        disabled={false}
                        color="green"
                    />
                </div>
            </Fragment>
        </Fragment>
    )
}
export default TestComponents
