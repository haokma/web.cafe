const Banner = () => {
  return (
    <div className="banner">
      <div className="w-12/12 md:w-7/12 px-8">
        <div className="mb-6">
          <h3 className=" text-xl lg:text-3xl font-semibold text-center">
            Đi & Khám Phá Điểm Hẹn Hấp Dẫn
          </h3>
          <p className="text-sm text-center mt-2">
            Mang đến cho bạn những sự lựa chọn tốt nhất cho điểm hẹn cafe
          </p>
        </div>
        <div className="flex">
          <input
            type="text"
            className="flex-1 h-14 rounded-md px-6 py-2 border-0 text-text"
            placeholder="Tên quán, khu vực, kiểu quán,..."
          />
          <button className="bg-primary color-white ml-2 px-4 rounded-md font-medium cursor-pointer h-100 hidden sm:block">
            Tìm quán
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
