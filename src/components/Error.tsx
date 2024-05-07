type ErrorProps = {
  children: React.ReactNode;
};

const Error = ({ children }: ErrorProps) => {
  return (
    <p className="text-center bg-red-600 my-2 text-white font-bold p-2 uppercase text-xs rounded-md">
      {children}
    </p>
  );
};

export default Error;
