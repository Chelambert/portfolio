import React from 'react';
import SOCIALS from '../../test-data/socials-data';
import Social from '../Social/Social';

const Socials: React.FC = () => (
    <div>
        <h2>Connect with me!</h2>
        <div>
            {
                SOCIALS.map(SOCIAL => {
                    return (<Social key={SOCIAL.id} social={SOCIAL} />);
                })
            }
        </div>
    </div>
)

export default Socials;