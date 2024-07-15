
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

function Sidebar() {
    return (
        <div
            className="py-5 w-[200px] fixed top-0 bottom-0 bg-zinc-500 text-white"
        >
            <img src={logo} className='px-5' alt="logo" />
            <div className="py-5">
                <ul className=''> 
                    <li className='hover:bg-gray-200 hover:bg-opacity-15 text-lg font-bold'>
                        <Link className='block py-2 px-5' to={'/transactions'} >
                            Transaction
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar