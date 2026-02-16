import { Box } from 'lucide-react'
import Button from './ui/Button';
import { useOutletContext } from 'react-router';

const Navbar = () => {
    const { isAuthenticated, userName, signIn, signOut } = useOutletContext<AuthContext>();
    const handleAuthClick = async () => {
        if (isAuthenticated) {
            try {
                await signOut();
            } catch (error) {
                console.error('Failed to sign out:', error);
            }
            return
        }
        try {
            await signIn();
        } catch (error) {
            console.error('Failed to sign in:', error);
        }
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
                    {isAuthenticated ? (
                        <>
                        <span className="greeting">
                            {userName ? `Hello, ${userName}` : 'Sign in successful!'}
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