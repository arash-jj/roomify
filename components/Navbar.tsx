import { Box } from 'lucide-react'
import Button from './ui/Button';

const Navbar = () => {
    const isSignIn = true;
    const username = 'John Doe';
    const handleAuthClick = async () => {
        console.log('Login button clicked');
    }
    return (
        <header className="navbar">
            <nav className="inner">
                <div className="left">
                    <div className="brand">
                        <Box className='logo'/>
                        <span className="name">Roomify</span>
                    </div>
                    <ul className='links'>
                        <a href="#">Product</a>
                        <a href="#">Pricing</a>
                        <a href="#">Community</a>
                        <a href="#">Enterprise</a>
                    </ul>
                </div>
                <div className="actions">
                    {isSignIn ? (
                        <>
                        <span className="greeting">
                            {username ? `Hello, ${username}` : 'Sign in successful!'}
                        </span>
                        <Button size='sm' onClick={handleAuthClick} className='btn'>Log Out</Button>
                        </>
                    ) : (
                        <>
                        <Button onClick={handleAuthClick} size='sm' variant='ghost'>Login</Button>
                        <a href="#upload" className='cta'>Get Started</a>
                        </>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar