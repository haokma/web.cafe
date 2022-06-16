import { Purpose, Location, ShopList } from 'components/Home';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Purpose />
      <Location />
      <ShopList />
    </>
  );
};

export default Home;
