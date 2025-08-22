import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '/src/styles/ScrollToTop.css'; // Create this CSS file for styling

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top" aria-live="polite">
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="scroll-button"
                    aria-label="Scroll to top"
                    title="Back to top"
                    style={{
                        border: 'none',
                        background: '#28a745',
                        color: '#fff',
                        borderRadius: '50%',
                        width: '48px',
                        height: '48px',
                        boxShadow: '0 4px 12px rgba(40,167,69,0.15)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        position: 'fixed',
                        bottom: '32px',
                        right: '32px',
                        zIndex: 9999,
                        transition: 'background 0.2s',
                    }}
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
