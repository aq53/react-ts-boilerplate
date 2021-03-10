import { Spinner } from "reactstrap";

const Loader = ({
  loading,
  children,
}: {
  loading: boolean;
  children: any;
}) => {
  return loading ? (
    <div className="flex-center">
      <Spinner />
    </div>
  ) : (
    children
  );
};

export default Loader;
