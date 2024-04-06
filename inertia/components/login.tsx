import { useForm } from '@inertiajs/react'
import { ChangeEvent, FormEvent } from 'react'
import { LoginType } from '#type/user'
const Login = () => {
  const { data, setData, post, processing } = useForm<LoginType>()
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    post('/auth/login', { data })
  }
  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="emil" name="email" required onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" required onChange={handleChange} />
        <button disabled={processing} type="submit">
          Login
        </button>
      </form>
    </>
  )
}

export default Login
