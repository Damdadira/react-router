import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/videos'>Videos</Link>
    </nav>
  )
}