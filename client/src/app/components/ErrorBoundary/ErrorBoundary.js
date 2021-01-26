import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            stack: null,
            message: null,
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, stack: error.stack, message: error.message };
    }

    componentDidCatch(error, errorInfo) {
        // logger(error, 'app crash');
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Guys, something strange has happened</h1>
                    <button onClick={() => window.location.reload()}>Перезагрузить страницу</button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;