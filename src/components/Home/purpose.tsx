import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
export const Purpose = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [refCallback, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: 'free-snap',
      slides: {
        perView: 3,
        spacing: 15,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      breakpoints: {
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
    <div className="container mt-6 ">
      <div className="row">
        <div className="relative">
          <h2 className="font-bold text-2xl sm:text-center ml-4 sm:ml-0 text-left">
            Mục đích bạn cần ?
          </h2>
          <div className="custom-border"></div>
        </div>
      </div>
      <div className="row mt-10">
        <div className="navigation-wrapper">
          <div ref={refCallback} className="keen-slider">
            <div className="keen-slider__slide">
              <div className="h-56 relative rounded-md">
                <img
                  className="rounded-md"
                  src="https://toidicafe.vn/static/images/purpose/song-ao-1647441301274.jpeg?w=960"
                  alt=""
                />
                <div className="absolute bg-one top-0 left-0 right-0 bottom-0 width-100 height-100"></div>
                <div className="absolute top-1/2 left-1/2  -translate-y-2/4 -translate-x-2/4">
                  <p className="font-extrabold text-3xl text-white z-20">Sống ảo</p>
                </div>
              </div>
            </div>

            <div className="keen-slider__slide">
              <div className="h-56 relative rounded-md">
                <img
                  className="rounded-md"
                  src="https://toidicafe.vn/static/images/purpose/chill-1647441264959.jpeg?w=960"
                  alt=""
                />
                <div className="absolute bg-two top-0 left-0 right-0 bottom-0 width-100 height-100"></div>
                <div className="absolute top-1/2 left-1/2  -translate-y-2/4 -translate-x-2/4">
                  <p className="font-extrabold text-3xl text-white z-20">Chill</p>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide">
              <div className="h-56 relative rounded-md">
                <img
                  className="rounded-md"
                  src="https://toidicafe.vn/static/images/purpose/hen-ho-1647441284779.jpeg"
                  alt=""
                />
                <div className="absolute bg-one top-0 left-0 right-0 bottom-0 width-100 height-100"></div>
                <div className="absolute top-1/2 left-1/2  -translate-y-2/4 -translate-x-2/4">
                  <p className="font-extrabold text-3xl text-white z-20">Hẹn hò</p>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide">
              <div className="h-56 relative rounded-md">
                <img
                  className="rounded-md"
                  src="https://toidicafe.vn/static/images/purpose/doc-sach-1647441276414.jpeg"
                  alt=""
                />
                <div className="absolute bg-four top-0 left-0 right-0 bottom-0 width-100 height-100"></div>
                <div className="absolute top-1/2 left-1/2  -translate-y-2/4 -translate-x-2/4">
                  <p className="font-extrabold text-3xl text-white z-20">Đọc sách</p>
                </div>
              </div>
            </div>
            <div className="keen-slider__slide ">
              <div className="h-56 relative rounded-md">
                <img
                  className="rounded-md"
                  src="https://toidicafe.vn/static/images/purpose/lam-viec-1647441292275.jpeg?w=960"
                  alt=""
                />
                <div className="absolute bg-three top-0 left-0 right-0 bottom-0 width-100 height-100"></div>
                <div className="absolute top-1/2 left-1/2  -translate-y-2/4 -translate-x-2/4">
                  <p className="font-extrabold text-3xl text-white z-20">Làm việc</p>
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
