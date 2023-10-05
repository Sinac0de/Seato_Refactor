import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        {/* up line */}
        <div className={classes.upper}>
          <img src={"assets/images/footerlogo.png"} alt="logo" />
          <p>آدرس: همدان، دانشگاه بوعلی سینا، مرکز نوآوری و شتابدهی کنـدو</p>
        </div>
        {/* line */}
        <div className={classes.line}>
          <hr width="80%" />
        </div>
        {/* down line */}
        <div className={classes.lower}>
          <p>تمامی حقوق مادی و معنوی این وبسایت متعلق به سیتو میباشد.</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com"
          >
            <img src={"assets/images/footerinsta.png"} alt="Instagram logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
