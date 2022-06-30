import * as React from "react";

export type LoadingBulletsProps = {
  children: React.ReactNode;
};

const LoadingBullets = ({ children }: LoadingBulletsProps) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((current) => (current + 1) % 4);
    }, 1000 / 3);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {count > 2 && "• "}
      {count > 1 && "• "}
      {count > 0 && "• "}

      {"• "}

      {children}

      {" •"}

      {count > 0 && " •"}
      {count > 1 && " •"}
      {count > 2 && " •"}
    </>
  );
};

export default LoadingBullets;
