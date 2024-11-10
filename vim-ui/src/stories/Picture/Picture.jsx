import classNames from "classnames";
import PropTypes from "prop-types";

export const Picture = ({
    src,
    width = "100%",
    height = "auto",
    isRounded = false,
}) => (
    <picture className={classNames(
        "block w-full",
    )}>
        <img src={src} style={{height, maxWidth: width}} className={classNames({ 'rounded-full': isRounded })}/>
    </picture>
)

Picture.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    isRounded: PropTypes.bool,
}

export default Picture;