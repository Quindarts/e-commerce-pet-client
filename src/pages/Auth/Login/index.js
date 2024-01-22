import React from 'react'
import TextField from '../../../components/TextField'
import Button from '../../../components/Button'
import Checkbox from '../../../components/CheckBox'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { validateLogin } from '../../../utils/validate'
import { apiLogin } from '../../../services/auth'
import { useSnackbar } from 'notistack'

function Login() {
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm({
        resolver: yupResolver(validateLogin),
        mode: 'onBlur',
    })

    const onSubmit = async ({ confirmPassword, ...data }) => {
        try {
            const res = await apiLogin(data)
            console.log(res)
            if (res.success === true) {
                enqueueSnackbar(res.message, {
                    variant: 'success',
                })
                navigate('/')
            }
        } catch (error) {
            if (error.response) {
                const { message } = error.response.data
                enqueueSnackbar(`Error: ${message}`, {
                    variant: 'error',
                })
            } else if (error.request) {
                enqueueSnackbar('Error: No response from the server', {
                    variant: 'error',
                })
            } else {
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
            <div className="login">
                <div className="login__form">
                    <div className="login__header">Login</div>
                    <form className="login__content">
                        <TextField
                            className="mt-2"
                            label="User name *"
                            type="form"
                            disabled={false}
                            color="blue"
                            id="userName"
                            register={register}
                            errors={errors}
                            name="username"
                            autocomplete="user-name"
                        />
                        <TextField
                            hidden
                            className="mt-2"
                            label="Password *"
                            type="password"
                            disabled={false}
                            color="blue"
                            id="password"
                            register={register}
                            errors={errors}
                            autoComplete="user-password"
                        />
                    </form>
                    <div className="login__remember">
                        <Checkbox
                            label="Remember Me"
                            color="blue"
                            size="c-form"
                        />
                        <div className="login__remember--lost-password">
                            <Link>Lost Your Password?</Link>
                        </div>
                    </div>
                    <Button
                        onClick={handleSubmit(onSubmit)}
                        htmlType="submit"
                        type="primary"
                        className="w-100 text-center"
                    >
                        Login
                    </Button>
                    <div className="login__bottom">
                        Not A Member?
                        <Link to="/auth/register">Register</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
