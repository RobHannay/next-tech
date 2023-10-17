import { Component, PropsWithChildren } from "react";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import "./ErrorBoundary.css";
import { BiErrorCircle } from "react-icons/bi";
class ErrorBoundary extends Component<
  PropsWithChildren,
  { hasError: boolean; error?: Error }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // This lifecycle method works like a catch block.
    // If any error is thrown in the child component tree,
    // it gets caught here and, the block of code inside
    // this lifecycle method gets executed.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // This lifecycle method works similarly to the finally block in a try-catch-finally.
    // After the getDerivedStateFromError lifecycle method is run,
    // then this lifecycle method is run irrespective of the result.
    // You can log the error to an error reporting service here
    console.error("Uncaught error:", error, errorInfo);
  }

  componentDidUpdate(prevProps) {
    // use a deep equality check to handle changes in complex props
    if (this.props.children !== prevProps.children) {
      // Reset the error if child props are changed
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Card className={"ErrorBoundary"}>
          <CardHeader className={"ErrorBoundary__header"}>
            <BiErrorCircle /> Something went wrong!
          </CardHeader>
          <Divider />
          <CardBody>{this.state.error.message}</CardBody>
        </Card>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
