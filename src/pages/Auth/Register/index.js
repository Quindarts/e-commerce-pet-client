import React, { useEffect } from 'react'
import TextField from '../../../components/TextField'
import Button from '../../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSnackbar } from 'notistack'
import { schema } from '../../../utils/validate'
import { useDispatch, useSelector } from 'react-redux'
import { signUp, reset } from '../../../store/auth/authSlice'
import Loading from '../../../components/Loading'
function Register() {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    onBlur,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

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
      navigate('/auth/login')
    }
    dispatch(reset())
  }, [message, enqueueSnackbar, isError, isSuccess, navigate, user, dispatch])

  const onSubmit = ({ confirmPassword, ...data }) => {
    dispatch(signUp(data))
  }

  if (isLoading) {
    return <Loading />
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
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{' '}
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
