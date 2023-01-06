import { ArrowSmRightIcon, PlayIcon } from '@heroicons/react/outline';

const Introduce = () => (
  <div className="relative aspect-video">
    <video width="100%" height="100%" preload="auto" autoPlay muted>
      <source src="/assets/videos/battech.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>

    <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-center w-full h-full">
      <div className="justify-center w-5/6 sm:w-2/3">
        <div className="max-w-2xl text-lg font-bold text-white sm:text-2xl md:text-5xl">
          Công nghệ phòng họp thực tế ảo tiên tiến
        </div>

        <div className="max-w-2xl mt-5 text-sm text-white sm:text-base line-clamp-2 sm:flex">
          Tương tác và gặp gỡ với tất cả mọi người trong thế giới thực tế ảo đa chiều, phòng họp thực tế ảo của BATTECH
          dễ dàng kết nối, chân thực sống động, hiệu ứng hình ảnh vượt trội, giúp bạn thêm trải nghiệm mới mẻ và thú vị
          trong những giờ họp căng thẳng.
        </div>

        <div className="flex flex-row items-center mt-5 gap-x-5 gap-y-3">
          <button className="flex items-center px-2 py-2 border shadow-2xl sm:py-3 sm:px-9 border-primary rounded-3xl hover:bg-primary text-primary hover:text-white w-fit">
            <div className="mr-2 sm:mr-3">
              <PlayIcon className="w-6 h-6" />
            </div>

            <div className="text-sm sm:text-base">Xem giới thiệu</div>
          </button>

          <button className="flex items-center px-2 py-2 border shadow-2xl sm:py-3 sm:px-9 border-primary rounded-3xl hover:bg-primary text-primary hover:text-white w-fit">
            <div className="mr-2 sm:mr-3">
              <ArrowSmRightIcon className="w-6 h-6" />
            </div>

            <div className="text-sm sm:text-base">Đăng ký ngay</div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Introduce;
