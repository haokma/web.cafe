import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
export const Location = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [refCallback, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: 'free-snap',
      slides: {
        perView: 4,
        spacing: 15,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },

      breakpoints: {
        '(max-width: 1024px)': {
          loop: false,
          slides: {
            perView: 3,
            origin: 'auto',
            spacing: 15,
          },
        },
        '(max-width: 992px)': {
          loop: false,
          slides: {
            perView: 2,
            origin: 'auto',
            spacing: 15,
          },
        },
        '(max-width: 576px)': {
          loop: false,
          slides: {
            perView: 1,
            spacing: 10,
          },
        },
      },
    },
    [
      // add plugins here
    ]
  );
  return (
    <div className="container mt-20 ">
      <div className="row">
        <div className="relative">
          <h2 className="font-bold text-2xl sm:text-center ml-4 sm:ml-0 text-left">
            Khu vực gần đây
          </h2>
          <div className="custom-border"></div>
        </div>
      </div>
      <div className="row mt-10">
        <div className="navigation-wrapper">
          <div ref={refCallback} className="keen-slider">
            <div className="keen-slider__slide">
              <div className="h-96 relative rounded-md">
                <img
                  className="rounded-md"
                  src="https://toidicafe.vn/static/images/region/cau-giay-1647433134263.jpeg?w=960"
                  alt=""
                />
                <div className="absolute bottom-0 left-20  -translate-y-2/4 -translate-x-2/4">
                  <p className="font-bold text-2xl text-white z-20">Cầu giấy</p>
                  <p className="text-white text-sm"> 31 quán cafe</p>
                </div>
              </div>
            </div>

            <div className="keen-slider__slide">
              <div className="h-96 relative rounded-md">
                <img
                  className="rounded-md"
                  src="https://toidicafe.vn/static/images/region/dong-da-1647433142184.jpeg"
                  alt=""
                />
                <div className="absolute bottom-0 left-20  -translate-y-2/4 -translate-x-2/4">
                  <p className="font-bold text-2xl text-white z-20">Đống đa</p>
                  <p className="text-white text-sm"> 101 quán cafe</p>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide">
              <div className="h-96 relative rounded-md">
                <img
                  className="rounded-md"
                  src="https://toidicafe.vn/static/images/region/tay-ho-1647433156043.jpeg?w=960"
                  alt=""
                />
                <div className="absolute bottom-0 left-20  -translate-y-2/4 -translate-x-2/4">
                  <p className="font-bold text-2xl text-white z-20">Tây Hồ</p>
                  <p className="text-white text-sm"> 74 quán cafe</p>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide rounded-md">
              <div className="h-96 relative rounded-md">
                <img
                  className="rounded-md"
                  src="https://toidicafe.vn/static/images/region/ba-dinh-1647433057947.jpeg"
                  alt=""
                />
                <div className="absolute bg-four top-0 left-0 right-0 bottom-0 width-100 height-100"></div>
                <div className="absolute bottom-0 left-20  -translate-y-2/4 -translate-x-2/4">
                  <p className="font-bold text-2xl text-white z-20">Ba Đình</p>
                  <p className="text-white text-sm"> 20 quán cafe</p>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide ">
              <div className="h-96 relative rounded-md">
                <img
                  className="rounded-md"
                  src="https://toidicafe.vn/static/images/region/hoan-kiem-1647433147220.jpeg"
                  alt=""
                />
                <div className="absolute bottom-0 left-20  -translate-y-2/4 -translate-x-2/4">
                  <p className="font-bold text-2xl text-white z-20">Hoàn kiếm</p>
                  <p className="text-white text-sm"> 63 quán cafe</p>
                </div>
              </div>
            </div>
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[0, 1, 2, 3, 4].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={'dot' + (currentSlide === idx ? ' active' : '')}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

function Arrow(props: any) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <div className={`bg-arrow ${props.left ? 'bg-arrow--left' : 'bg-arrow--right'}`}>
      <svg
        className={`h-6 w-6 arrow ${props.left ? 'arrow--left' : 'arrow--right'} ${disabeld}`}
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        {props.left && <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />}
        {!props.left && <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />}
      </svg>
    </div>
  );
}
