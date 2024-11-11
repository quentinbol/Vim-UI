import React from 'react';
import classNames from 'classnames';
import Picture from '../Picture';
import { mapSize } from './helper';
import { options } from './constants';
import PropTypes from 'prop-types';

export interface AvatarProps {
    size?: typeof options['sizes'][number];
    src: string;
}

const Avatar: React.FC<AvatarProps> = ({ 
    size = 'md',
    src 
}) => {
    return (
        <div className={classNames(
        )}>
            <Picture
                src={src}
                width={mapSize(size)}
                height={mapSize(size)}
                isRounded
            />
        </div>
    );
};

Avatar.propTypes = {
    size: PropTypes.oneOf(options.sizes),
    src: PropTypes.string.isRequired,
}

export default Avatar;
