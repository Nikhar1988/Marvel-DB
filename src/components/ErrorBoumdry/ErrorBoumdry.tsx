import { Component, ErrorInfo, ReactNode } from 'react';
import Error from '../Error/Error';
 

class ErrorBoundry extends Component<{children: ReactNode},{error:boolean}> {
    
    state = {
        error: false
    }
    
    componentDidCatch = (error: Error, errorInfo: ErrorInfo) => {
        this.setState({
            error: true
        })
    }
    
    
    render() {
        if(this.state.error) {
            return <Error/>      
        }
        return this.props.children;
    }
}
export default ErrorBoundry;