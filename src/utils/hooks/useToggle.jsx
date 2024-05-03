import { useEffect } from 'react';
import { useCallback, useRef, useState } from 'react';

function useToggle(initialState = false) {
    const [isOpen, setIsOpen] = useState(initialState);
    const ref = useRef(null);

    const toggle = useCallback(() => {
        setIsOpen(prevState => !prevState);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                close();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, close]);

    return { isOpen, toggle, ref };
}

export default useToggle;