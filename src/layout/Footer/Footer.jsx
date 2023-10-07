import footerLogoImg from "src/assets/images/footerlogo.png";
import instaLogoImg from "src/assets/images/footerinsta.png";

const Footer = () => {
  return (
    <footer className="bg-[#020202] p-10 text-[#FDDDD7]">
      <div className="flex flex-col gap-5">
        {/* up line */}
        <div className="flex justify-between items-end border-b-2 border-[#FDDDD7] pb-5">
          <img src={footerLogoImg} alt="logo" />
          <p>آدرس: همدان، دانشگاه بوعلی سینا، مرکز نوآوری و شتابدهی کنـدو</p>
        </div>

        {/* bottom section */}
        <div className="flex justify-between">
          <p>تمامی حقوق مادی و معنوی این وبسایت متعلق به سیتو میباشد.</p>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com"
            >
              <img src={instaLogoImg} alt="Instagram logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
