import styleError from "./Error.module.css";

let Error = () => {
  return (
    <div className={styleError.container}>
      <p className={styleError.error}>Error, please reload page!</p>
    </div>
  );
};

export default Error;
