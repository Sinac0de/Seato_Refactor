import handImgUrl from "src/assets/images/handhome.png";
import bigLogoUrl from "src/assets/images/logobig.png";
import seatoPersianLogo from "src/assets/images/seatoPer.png";
const Intro = () => {
  return (
    <div className="max-h-1/3 pt-14 bg-gradient-to-b from-[#FDDDD780] to-[#B6BCCB80]">
      <div className="flex gap-2 justify-around px-10 mx-auto">
        <div className="image-container w-fit h-fit relative">
          <img src={handImgUrl} alt="Stylish nails" className="relative z-10" />
          {/* back gradient shape */}
          <div className="absolute z-0 bg-gradient-to-b rounded-tl-[173px] from-[#D3B5B0AB] to-[#8E94A224] w-[72%] h-[95%] bottom-0 left-0"></div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex items-end">
            <img className="" src={bigLogoUrl} alt="Seato logo" />
            <img
              className="object-contain"
              src={seatoPersianLogo}
              alt="Persian logo of Seato"
            />
          </div>
          <h3 className="text-xl font-light">
            سیتو یک پلتفرم نظر سنجی و کیفیت و اعتبار دهی به سالن های زیبایی می
            باشد
          </h3>

          <div className="flex justify-end">
            <button className="bg-[#E0BFB8] p-3 rounded-full px-14 w-fit font-semibold">
              ثبت نظر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
