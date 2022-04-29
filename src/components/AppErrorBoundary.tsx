import { FC, PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRouter } from "next/router";

import { ErrorFallbackProps } from "../types/ErrorFallbackProps";

const ErrorFallback: FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  // console.log(error.message);
  // call errorHappened API
  return (
    <div role="alert">
      {error.message}
      <button onClick={resetErrorBoundary}>Close and Try again.</button>
    </div>
  );
};

const AppErrorBoundary: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const router = useRouter();

  const handleReset = () => {
    router.push("");
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset}>
      {children}
    </ErrorBoundary>
  );
};

export { AppErrorBoundary };
