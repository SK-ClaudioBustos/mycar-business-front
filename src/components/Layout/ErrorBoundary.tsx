import React, { Component, ReactNode } from "react";

interface Props {
    fallback: ReactNode;
    children: ReactNode;
}

class ErrorBoundary extends Component<Props> {

    state: { hasError: boolean }

    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: React.ErrorInfo) {
        console.log(error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.log({ error, info })
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;