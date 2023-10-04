import checkSignImgUrl from "assets/checksign.png";
function SupportForm() {
  return (
    // <div className={classes.support}>
    <div>
      {/* <div className={classes.caption}> */}
      <div>
        <h2>چه خدماتی را دوست دارید در سیتو داشته باشید؟</h2>
        <p>از چیزهایی که نیاز داری برای ما بنویس</p>
      </div>

      {/* <form className={classes.actions}> */}
      <form>
        <textarea />
        <button>ارسال پیشنهاد</button>
      </form>
      {/* <div className={classes.image}> */}
      <div>
        <img src={checkSignImgUrl} alt="Checksign" />
      </div>
    </div>
  );
}

export default SupportForm;
