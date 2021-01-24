import ContentLoader from "react-content-loader";

const LoadingView = (props) => {
  const speed = 1;

  return (
    <ContentLoader
      speed={speed}
      height="100%"
      width="100%"
      primarycolor="#242b34"
      secondarycolor="#343d4c"
      {...props}
    >
      <rect rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>
  );
};

export { LoadingView };
