import React from 'react'
import TextField from '../../../components/TextField'
import Button from '../../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { apiRegister } from '../../../services/auth'
import { useSnackbar } from 'notistack'
import { schema } from '../../../utils/validate'

function Register() {
    const { enqueueSnackbar } = useSnackbar()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        onBlur,
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
    })

    const onSubmit = async ({ confirmPassword, ...data }) => {
        try {
            const res = await apiRegister(data)
            console.log(res)
            if (res.success === true) {
                enqueueSnackbar(res.message, {
                    variant: 'success',
                })
                navigate('/auth/login')
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                const { message } = error.response.data
                enqueueSnackbar(`Error: ${message}`, {
                    variant: 'error',
                })
            } else if (error.request) {
                // The request was made, but no response was received
                enqueueSnackbar('Error: No response from the server', {
                    variant: 'error',
                })
            } else {
                // Something happened in setting up the request
                enqueueSnackbar(
                    'Error: An error occurred while sending the request',
                    {
                        variant: 'error',
                    }
                )
            }
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
                            onBlur={onBlur}
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
                            label="Confirm password *"
                            type="password"
                            disabled={false}
                            color="blue"
                            id="confirmPassword"
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
                        <Link to={'/auth/login'}>Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
