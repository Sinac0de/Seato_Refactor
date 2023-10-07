import classes from "./ServiceFeedback.module.css";

function ServiceForm() {
  return (
    // <div className={classes.service}>
    <div>
      {/* <div className={classes.caption}> */}
      <div>
        <h2>مشاوره و پشتیبانی از سیتو</h2>
        <p>در صورتی که نیاز به پشتیبانی دارید فرم زیر را پر کنید</p>
      </div>

      {/* <form className={classes.actions}> */}
      <form>
        <input placeholder="نام و نام خانوادگی" />
        <input placeholder="شماره موبایل" />
        <input placeholder="ایمیل" />
        <button>درخواست پشتیبانی</button>
      </form>
      {/* <div className={classes.supporticon}> */}
      <div>
        <img src="/support.png" alt="Support staff" />
      </div>
    </div>
  );
}

export default ServiceForm;
