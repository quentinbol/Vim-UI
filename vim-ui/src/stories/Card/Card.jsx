import PropTypes from "prop-types";
import classNames from "classnames";
import { options } from "./constants";

export const Card = ({ 
    children,
    color = "primary",
    size = "sm",
    isClickable,
    isDragable,
}) => {

    const colorClasses = {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-neutral-700 text-white',
    };

    const sizeClasses = {
        sm: 'p-4 text-sm',
        md: 'p-6 text-base',
        lg: 'p-8 text-lg',
        xl: 'p-10 text-xl',
        xxl: 'p-12 text-2xl',
    };

    return (
        <div className={classNames(
            'border border-slate-200 rounded-lg items-center',
            colorClasses[color],
            sizeClasses[size],
            {
                "cursor-pointer": isClickable,
                "cursor-grabbing select-none": isDragable,
            }
        )}>
            {children}
        </div>
    );
}

Card.propTypes = {
    size: PropTypes.oneOf(options.sizes),
    color: PropTypes.oneOf(options.colors),
    children: PropTypes.node.isRequired,
    isClickable: PropTypes.bool,
    isDragable: PropTypes.bool,
}

export default Card;
