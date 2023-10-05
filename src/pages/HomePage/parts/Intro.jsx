const Intro = () => {
  return (
    <div className="intro-container">
      <div className="image-container">
        <img src="/handhome.png" alt="Stylish nails" />
      </div>
      <div className="logo-container">
        <div>
          <img className="logo" src="/logobig.png" alt="Seato logo" />
          <img
            className="logo"
            src="/seatoPer.png"
            alt="Persian logo of Seato"
          />
        </div>
        <h3 className="intro-text">
          سیتو یک پلتفرم نظر سنجی و کیفیت و اعتبار دهی به سالن های زیبایی می
          باشد
        </h3>
        <div className="button-container">
          <button>ثبت نظر</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
