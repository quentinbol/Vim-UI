import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { options } from './constants';
import PropTypes from 'prop-types';

export interface CardProps {
    children: ReactNode;
    color?: typeof options['colors'][number];
    size?: typeof options['sizes'][number];
    isClickable?: boolean;
    isDragable?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    color = 'primary',
    size = 'sm',
    isClickable = false,
    isDragable = false,
}) => {
    
    const colorClasses: Record<'primary' | 'secondary', string> = {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-neutral-700 text-white',
    };

    const sizeClasses: Record<'sm' | 'md' | 'lg' | 'xl' | 'xxl', string> = {
        sm: 'p-4 text-sm',
        md: 'p-6 text-base',
        lg: 'p-8 text-lg',
        xl: 'p-10 text-xl',
        xxl: 'p-12 text-2xl',
    };

    const validColor: string = colorClasses[color];
    const validSize: string = sizeClasses[size];

    return (
        <div
            className={classNames(
                'border border-slate-200 rounded-lg items-center',
                validColor,
                validSize,
                {
                    'cursor-pointer': isClickable,
                    'cursor-grabbing select-none': isDragable,
                }
            )}
        >
            {children}
        </div>
    );
};

Card.propTypes = {
    size: PropTypes.oneOf(options.sizes),
    color: PropTypes.oneOf(options.colors),
    children: PropTypes.node.isRequired,
    isClickable: PropTypes.bool,
    isDragable: PropTypes.bool,
}

export default Card;
