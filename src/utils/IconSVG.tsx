interface IconProps {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    size?: number | string;
    color?: string;
}

export const IconSVG = ({ Icon, size = 24, color = 'currentColor' }: IconProps) => {
    return (
        <Icon
            width={size}
            height={size}
            fill={color}
        />
    );
};