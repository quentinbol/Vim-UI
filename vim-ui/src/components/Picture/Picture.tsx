import React from 'react';
import classNames from 'classnames';

export interface PictureProps {
    src: string;
    width?: string | number;
    height?: string | number;
    isRounded?: boolean;
}

export const Picture: React.FC<PictureProps> = ({
    src,
    width = "100%",
    height = "auto",
    isRounded = false,
}) => (
    <picture className={classNames("block w-full")}>
        <img
            src={src}
            style={{ height, maxWidth: width }}
            className={classNames({ 'rounded-full': isRounded })}
        />
    </picture>
);

export default Picture;
