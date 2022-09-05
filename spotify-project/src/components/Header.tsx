import { useContext } from 'react'
import { AppContext } from '../context'
import { ILogin } from '../interfaces';

export const Header = () => {
  const { user } = useContext(AppContext) as unknown as ILogin;
  return (
    <header>
      <h1>Header</h1>
      <h2>{user}</h2>
    </header>
  )
}
