import styleLoading from "./Loading.module.css";

let Loading = () => {
  return (
    <div className={styleLoading.container}>
      <div className={styleLoading.loader}></div>
    </div>
  );
};

export default Loading;
