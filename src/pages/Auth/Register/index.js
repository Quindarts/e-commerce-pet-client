import React from 'react'
import TextField from '../../../components/TextField'
import Button from '../../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { apiRegister } from '../../../services/api'
import { useSnackbar } from 'notistack'
import { schema } from '../../../utils/schema'

function Register() {
    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {
        try {
            const response = await apiRegister(data)
            if (response) {
                navigate('/login')
            } else {
                enqueueSnackbar(response.message, { variant: 'error' })
            }
        } catch (error) {
            console.error('An error occurred', error)
            enqueueSnackbar('An error occurred', {
                variant: 'error',
                anchorOrigin: { vertical: 'top', horizontal: 'right' },
                timeOut: 3000,
            })
        }
        reset()
    }

    return (
        <>
            <div className="register">
                <div className="register__form">
                    <div className="register__header">Register</div>
                    <form className="register__content">
                        <TextField
                            label="Email address *"
                            type="form"
                            disabled={false}
                            color="blue"
                            id="email"
                            register={register}
                            errors={errors}
                        />
                        <TextField
                            className="mt-2"
                            label="User name *"
                            type="form"
                            disabled={false}
                            color="blue"
                            id="userName"
                            register={register}
                            errors={errors}
                        />
                        <TextField
                            className="mt-2"
                            label="Password *"
                            type="password"
                            disabled={false}
                            color="blue"
                            id="password"
                            register={register}
                            errors={errors}
                        />
                        <TextField
                            className="mt-2"
                            label="First name *"
                            type="form"
                            disabled={false}
                            color="blue"
                            id="firstName"
                            register={register}
                            errors={errors}
                        />
                        <TextField
                            className="mt-2"
                            label="Last name *"
                            type="form"
                            disabled={false}
                            color="blue"
                            id="lastName"
                            register={register}
                            errors={errors}
                        />
                    </form>
                    <div className="register__policy">
                        <p>
                            Your personal data will be used to support your
                            experience throughout this website, to manage access
                            to your account, and for other purposes described in
                            our{' '}
                            <Link to="#" target="_blank">
                                privacy policy
                            </Link>
                            .
                        </p>
                    </div>
                    <Button
                        onClick={handleSubmit(onSubmit)}
                        htmlType="submit"
                        type="primary"
                        className="w-100 text-center"
                    >
                        Register
                    </Button>
                    <div className="register__bottom">
                        You A Member?
                        <Link>Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
