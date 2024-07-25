import { NavLink, Outlet } from 'react-router-dom'
import FooterImage from '../../../public/ChaiCodeLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';


const Layout = () => {
    return (
        <>
            <nav className='flex align-items bg-black text-white h-12 items-center'>
                <div className='ml-12 mr-64 space-x-5 flex items-center'>Assignment1 - <i className='text-xs'>by Suraj</i>
                    <FontAwesomeIcon icon={faSquareXTwitter} size='2x' className='cursor-pointer' onClick={() => window.open('https://twitter.com/let_name_suraj', '_blank')}/>
                    <FontAwesomeIcon icon={faGithub} size='2x' className='cursor-pointer' onClick={() => window.open('https://github.com/suraj2860/assignments-masterji.co/tree/master/Assignment1-22072024', '_blank')}/>

                </div>

                <ul className='flex space-x-10'>
                    <NavLink to={'/otp-form'}><li>OTP Form</li></NavLink>
                    <NavLink to={'/course-list'}><li>Course List</li></NavLink>
                    <NavLink to={'/batches'}><li>Batches</li></NavLink>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
            <div className="fixed bottom-5 right-5 w-28 h-28 cursor-pointer z-50 border rounded-2xl" >
                <img
                    src={FooterImage}
                    alt="Chai aur Code"
                    className='w-full h-full rounded-2xl'
                    onClick={() => window.open('https://chaicode.com', '_blank')}
                />
            </div>
        </>
    )
}

export default Layout