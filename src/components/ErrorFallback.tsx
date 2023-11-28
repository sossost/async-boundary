import { ErrorFallbackProps } from "./ErrorBoundary";

const ErrorFallback = (props: ErrorFallbackProps) => {
  return (
    <div>
      <div>
        <h4>에러가 발생했습니다.</h4>
        <p>{props.error.toString()}</p>
        <button onClick={() => props.reset()}>다시시도</button>
      </div>
    </div>
  );
};

export default ErrorFallback;
