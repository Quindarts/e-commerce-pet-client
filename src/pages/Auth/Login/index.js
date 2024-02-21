import React, { useEffect } from 'react'
import TextField from '../../../components/TextField'
import Button from '../../../components/Button'
import Checkbox from '../../../components/CheckBox'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { validateLogin } from '../../../utils/validate'
import { useSnackbar } from 'notistack'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../../../components/Loading'
import { login, reset } from '../../../store/auth/authSlice'
import Breadcrumb from '../../../components/Breadcrumb'
function Login() {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validateLogin),
    mode: 'onBlur',
  })

  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  console.log(message)
  useEffect(() => {
    if (isError) {
      enqueueSnackbar(message, {
        variant: 'error',
      })
    }
    if ((isSuccess || user) && message !== '') {
      enqueueSnackbar(message, {
        variant: 'success',
      })
      navigate('/')
    }
    dispatch(reset())
  }, [message, enqueueSnackbar, isError, isSuccess, navigate, user, dispatch])
  const onSubmit = ({ confirmPassword, ...data }) => {
    dispatch(login(data))
  }
  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <header className="account__header">
        <Breadcrumb
          className="account__header--breadcrumb"
          targetFormat="snake"
        />
        <h1
          style={{ textTransform: 'capitalize' }}
          className="account__header--title mx-auto"
        >
          My account
        </h1>
      </header>
      <div className="login">
        <div className="login__content">
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
              <Checkbox label="Remember Me" color="blue" size="c-form" />
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
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
