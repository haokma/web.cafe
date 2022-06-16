import Banner from "components/Banner/banner";
import Header from "components/Header/header";
import Sidebar from "components/Sidebar/sidebar";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const { children } = props;
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <div className="main relative">
      <Header isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
      <Banner />
      {children}
      <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
    </div>
  );
};

export default MainLayout;
