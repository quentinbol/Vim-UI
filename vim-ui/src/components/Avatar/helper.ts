const avatarSize: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
} = {
    sm: 22,
    md: 44,
    lg: 66,
    xl: 88,
    xxl: 110,
}

export const mapSize: (size: any) => number = size => avatarSize[size] || avatarSize.md;