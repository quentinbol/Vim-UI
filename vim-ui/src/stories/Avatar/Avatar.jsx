import classNames from "classnames"
import Picture from "../Picture"
import { mapSize } from "./helper"
import { options } from "./constants"
import PropTypes from "prop-types"

export const Avatar = ({ 
    size = "md",
    src,
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
    )
}

Avatar.propTypes = {
    size: PropTypes.oneOf(options.sizes),
    src: PropTypes.string.isRequired,
}

export default Avatar