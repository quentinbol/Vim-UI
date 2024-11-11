import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { options } from './constants';
import PropTypes from 'prop-types';

export interface TypographyProps {
    children: ReactNode;
    type?: typeof options['types'][number];
    color?: typeof options['colors'][number];
    size?: typeof options['sizes'][number];
    weight?: typeof options['weights'][number];
}

export const Typography: React.FC<TypographyProps> = ({
    children,
    type = 'body',
    color = 'neutral',
    size = 'md',
    weight = 'normal',
}) => {

    const colorClasses: Record<'primary' | 'secondary', string> = {
        primary: 'text-blue-500',
        secondary: 'text-neutral-700',
    };

    const sizeClasses: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl', string> = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        xxl: 'text-2xl',
        xxxl: 'text-3xl',
    };

    const weightClasses: Record<'normal' | 'bold' | 'light' | 'medium', string> = {
        normal: 'font-normal',
        bold: 'font-bold',
        light: 'font-light',
        medium: 'font-medium',
    };

    const Component: keyof JSX.IntrinsicElements = type as keyof JSX.IntrinsicElements;

    return (
        <Component className={classNames(
            colorClasses[color],
            sizeClasses[size],
            weightClasses[weight],
        )}>
            {children}
        </Component>
    );
}

Typography.propTypes = {
    type: PropTypes.oneOf(options.types),
    color: PropTypes.oneOf(options.colors),
    size: PropTypes.oneOf(options.sizes),
    weight: PropTypes.oneOf(options.weights),
    children: PropTypes.node.isRequired,
};

export default Typography;
