import './style.css';
import { useState } from 'react';

const FixFooter = props => {
    
    const [slideUp, setSlideUp] = useState(false);
    return (
        <div className={`fix-footer ${slideUp ? 'active' : ''}`}>
            <div onClick = {() => setSlideUp(!slideUp)} className='slide-up-btn'>
                <div className='d-visibility'></div>

            </div>
        </div>
    );
} 

export default FixFooter;