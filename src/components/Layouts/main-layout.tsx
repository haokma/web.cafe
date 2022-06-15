import Header from "components/Header/header";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className="main">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
