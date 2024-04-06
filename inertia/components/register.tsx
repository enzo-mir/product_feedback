import { useForm } from '@inertiajs/react'
import { ChangeEvent, FormEvent, Fragment } from 'react'
import { RegisterType } from '#type/user'
const Register = () => {
  const { data, setData, post, processing } = useForm<RegisterType>()
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    post('/auth/register', { data })
  }
  return (
    <>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="emil" name="email" required onChange={handleChange} />
        <label htmlFor="pseudo">Pseudo</label>
        <input
          type="text"
          name="pseudo"
          autoComplete="given-name"
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" required onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default Register
