import { ComponentProps, Suspense } from "react";
import ErrorBoundary, { ErrorFallbackType } from "./ErrorBoundary";
import ErrorFallback from "./ErrorFallback";
import Loading from "./Loading";

interface AsyncBoundaryProps {
  children: React.ReactNode;
  suspenseFallback?: ComponentProps<typeof Suspense>["fallback"];
  errorFallback?: ErrorFallbackType;
}

const AsyncBoundary = ({
  children,
  suspenseFallback = <Loading />,
  errorFallback = ErrorFallback,
}: AsyncBoundaryProps) => {
  return (
    <ErrorBoundary errorFallback={errorFallback}>
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
