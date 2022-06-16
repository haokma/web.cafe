import { Hastag, Percent } from "components/icons";

type Props = {
  setIsSidebar: (value: boolean) => void;
  isSidebar: boolean;
};

const Header = (props: Props) => {
  const { isSidebar, setIsSidebar } = props;
  return (
    <div className="flex items-center justify-between pl-8 pr-8">
      <div className="flex items-center">
        <div>
          <img
            style={{
              height: "60px",
            }}
            src="https://toidicafe.vn/images/logo.svg"
          />
        </div>
        <ul className="hidden lg:flex items-center text-lg font-semibold">
          <li className="px-4 flex items-center cursor-pointer hover:text-primary">
            <Hastag />
            <span className="ml-1">Khám phá</span>
          </li>
          <li className="px-4 flex items-center cursor-pointer hover:text-primary">
            <Percent />
            <span className="ml-1">Khuyến mãi</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <button className="lg:block hidden bg-primary font-medium text-white pt-2 pb-2 px-4 rounded-xl">
          Viết Review
        </button>
        <button
          className="border-primary border-2 text-primary pt-2 pb-2
         font-medium px-4 rounded-3xl ml-4 lg:block hidden hover:bg-primary hover:text-white"
        >
          Đăng nhập
        </button>
        <div className="text-primary block lg:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div
          className="text-primary block lg:hidden ml-4 cursor-pointer"
          onClick={(event) => {
            setIsSidebar(!isSidebar);
            event?.stopPropagation();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
