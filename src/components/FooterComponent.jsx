import React from 'react';
import currentYear from '../utils/time';

const FooterComponent = () => {
    return (
        <div>
            <footer className="footer">
                <span className="text-muted">&copy; {currentYear} CopyRight Example. All rights reserved</span>
            </footer>
        </div>
    );
};

export default FooterComponent;
