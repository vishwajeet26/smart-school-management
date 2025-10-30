import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <div><Outlet /><Navbar/></div>
  )
}
