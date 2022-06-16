import classNames from 'classnames';
import { Check, Fire, Info, Location, Mail, Percent } from 'components/icons';

type Props = {
  setIsSidebar: (value: boolean) => void;
  isSidebar: boolean;
};

const Sidebar = (props: Props) => {
  const { isSidebar, setIsSidebar } = props;
  return (
    <div
      className={classNames(
        'sidebar absolute w-screen h-screen  right top-0  cursor-pointer z-10',
        {
          active: isSidebar,
        }
      )}
    >
      <div
        onClick={(event) => {
          setIsSidebar(false);
          event?.stopPropagation();
        }}
        className=" top-0 left-0 bg-modal absolute w-screen h-screen"
      ></div>
      <div
        className={classNames(
          'absolute h-screen w-80 bg-white right animation  top-0 transition ease-in-out pt-4 ',
          {
            active: isSidebar,
          }
        )}
      >
        <button className="bg-primary text-white px-6 pt-2 pb-2 text-md font-semibold mx-4">
          Đăng nhập / Đăng ký
        </button>
        <ul className="mt-8 mx-4">
          <li className="bg-light text-sm text-text py-2 pl-2">Tôi đi Cafe</li>
          <li className=" flex justify-start text-md text-center mt-4  pb-1 mb-3 items-center pt-1 hover:text-primary font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className=" mt-1 ml-2">Trang chủ</span>
          </li>
          <li className=" flex justify-start text-md text-center  pb-1 mb-3 pt-1 hover:text-primary font-semibold">
            <Fire />
            <span className=" mt-1 ml-2">Khám phá</span>
          </li>
          <li className=" flex justify-start text-md text-center  pb-1 mb-3 pt-1 hover:text-primary font-semibold">
            <Percent />
            <span className=" mt-1 ml-2">Khuyễn mãi</span>
          </li>
          <li className=" flex justify-start text-md text-center  pb-1 mb-3 pt-1 hover:text-primary font-semibold">
            <Location />
            <span className="ml-2 mt-1">Địa điểm mới</span>
          </li>
        </ul>
        <ul className="mt-8 mx-4">
          <li className="bg-light text-sm text-text py-2 pl-2">Thông tin</li>
          <li className=" flex justify-start text-md text-center mt-4  pb-1 mb-3 items-center pt-1 hover:text-primary font-semibold">
            <Info />
            <span className=" mt-1 ml-2">Giới thiệu</span>
          </li>
          <li className=" flex justify-start text-md text-center  pb-1 mb-3 pt-1 hover:text-primary font-semibold">
            <Check />
            <span className=" mt-1 ml-2">Điều khoản & Chính sách</span>
          </li>
          <li className=" flex justify-start text-md text-center  pb-1 mb-3 pt-1 hover:text-primary font-semibold">
            <Mail />
            <span className=" mt-1 ml-2">Liên hệ - Góp ý</span>
          </li>
        </ul>
        <ul className="mt-8 mx-4">
          <li className="bg-light text-sm text-text py-2 pl-2">Theo dõi chúng tôi</li>
          <li className=" flex justify-start text-md text-center mt-4  pb-1 mb-3 items-center pt-1 hover:text-primary font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className=" mt-1 ml-2">Facebook</span>
          </li>
          <li className=" flex justify-start text-md text-center  pb-1 mb-3 pt-1 hover:text-primary font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className=" mt-1 ml-2">Instagram</span>
          </li>
          <li className=" flex justify-start text-md text-center  pb-1 mb-3 pt-1 hover:text-primary font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className=" mt-1 ml-2">Tiktok</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
