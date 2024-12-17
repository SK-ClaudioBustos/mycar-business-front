/// <reference types="vite/client" />

// Declaración para los SVG importados como componentes
declare module '*.svg?react' {
    import React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}

// Declaración para los SVG importados normalmente
declare module '*.svg' {
    const src: string;
    export default src;
}
