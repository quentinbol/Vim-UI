const avatarSize = {
    sm: 22,
    md: 44,
    lg: 66,
    xl: 88,
    xxl: 110,
}

export const mapSize = size => avatarSize[size] || avatarSize.md;