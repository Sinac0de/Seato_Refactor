import { useState } from "react";

function SalonDetail({ salon }) {
  const [userRate, setUserRate] = useState(null);
  const [userName, setUserName] = useState("");
  const [userComment, setUserComment] = useState("");

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userCommentChangeHandler = (event) => {
    setUserComment(event.target.value);
  };

  //! todo : move fetch to api module
  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    let id = salon.id;

    if (userName === "") {
      alert("نام نمیتواند خالی باشد!");
      return;
    }

    if (userComment === "") {
      alert("لطفا کامنت خود را وارد کنید!");
      return;
    }

    if (userRate) {
      fetch("http://seato1.ir/api/rates/", {
        method: "POST",
        body: JSON.stringify({
          salon: id,
          rate: userRate,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then();
    }

    fetch("http://seato1.ir/api/comments/", {
      method: "POST",
      body: JSON.stringify({
        salon: id,
        comment: userComment,
        name: userName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          // refresh comments
          window.location.reload(false);
        } else {
          throw new Error("Somethin went wrong!\nTry with correct form."); // generate appropriate errors
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const starRatingHandle = (rate) => {
    setUserRate(rate);
  };

  return (
    <div className={classes.wrapper}>
      {/* image */}
      <div className={classes["img-wrapper"]}>
        <div className={classes["img-underlay"]}>{/* background canvas */}</div>
        <div className={classes["img-overlay"]}>
          {salon.photo_links && salon.photo_links.length > 0 && (
            <img src={salon.photo_links[0].url} alt="Salon" />
          )}
        </div>
      </div>
      {/* details */}
      <div className={classes["caption-wrapper"]}>
        <h1>{salon.name}</h1>
        <div className={classes["caption-address"]}>
          <img src="/location-pin.png" alt="Location pin icon" />
          <p>{salon.address}</p>
        </div>
        <div className={classes["caption-phone"]}>
          <img src="/phone-icon.png" alt="Phone icon" />
          <p>{salon.phone_number}</p>
        </div>
        <div className={classes["caption-opens"]}>
          <img src="/opens-icon.png" alt="Clock icon" />
          <p>{salon.opens}</p>
        </div>
        <hr />
        {/* comment form */}
        <form className={classes["actions"]} onSubmit={onSubmitFormHandler}>
          <div className={classes["action-line"]}>
            <input
              onChange={userNameChangeHandler}
              placeholder="نام و نام خانوادگی"
            />
            {/* star rating */}
            <div className={classes["action-star"]}>
              <Star onClick={starRatingHandle} rating={salon.rating} />
            </div>
          </div>
          <textarea
            onChange={userCommentChangeHandler}
            placeholder="تجربه خود را درباره این سالن اینجا بنویسید"
          />
          <button onClick={onSubmitFormHandler}>ثبت نظر</button>
        </form>
      </div>
    </div>
  );
}

export default SalonDetail;
