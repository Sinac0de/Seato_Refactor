import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const Rate = ({ salonId }) => {
  const [rate, setRate] = useState(0);

  const handleRating = (rate) => {
    setRate(rate);
  };

  const id = salonId || window.location.href.split("/").pop();

  const submitRateHandler = (event) => {
    event.preventDefault();

    fetch("http://127.0.0.1:8000/api/rates/", {
      method: "POST",
      body: JSON.stringify({
        salon: id,
        rate: rate,
      }),
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': 'JWT ' + localStorage.getItem('token')
      },
    })
      .then((res) => {
        if (res.ok) {
          // TODO: Close modal or handle success
          window.location.reload(false);
        } else {
          throw new Error("Something went wrong!\nTry with the correct form."); // Generate appropriate errors
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <form onSubmit={submitRateHandler}>
      <div>
        <Rating rtl onClick={handleRating} />
      </div>
      <button type="submit">ارسال نمره</button>
    </form>
  );
};

export default Rate;
