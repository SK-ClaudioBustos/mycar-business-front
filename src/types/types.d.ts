export type ErrorData = Error | null;

export interface NavItemData {
    section: string,
    label: string
}

export interface ButtonData {
    id: string;
    tooltipLabel: string;
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    function?: () => void
}

