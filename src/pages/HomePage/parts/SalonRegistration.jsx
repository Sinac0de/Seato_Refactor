import { useState } from "react";

const ModalForm = ({ onClose }) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
    alert("سالن ثبت شد!\nنتیجه تاییدیه از طریق ایمیل به شما اعلام می‌شود");
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div>
        <div>
          <div>
            <img src="/logobig.png" alt="Seato logo" />
          </div>
          {/* <div className={classes["modal-caption"]}> */}
          <div>
            <p>فرم ثبت اولیه سالن زیبایی</p>
          </div>
        </div>
        <form onSubmit={formSubmitHandler}>
          {/* <div className={classes["modal-form-inputs"]}> */}
          <div>
            <input placeholder="نام سالن زیبایی" />
            <input placeholder="شماره تماس" />
            <input placeholder="آدرس" />
          </div>
          {/* <div className={classes["modal-form-action"]}> */}
          <div>
            <button>ثبت سالن زیبایی</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

function SalonRegistration() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && <ModalForm onClose={closeModalHandler} />}
      <div>
        <img src="/salon-beleza.png" alt="Stylish beauty salon" />
      </div>
      <div>
        <h1>
          اگر شما مالک سالن زیبایی هستید؛ سالن زیبایی خود را در کمترین زمان ثبت
          کنید!
        </h1>

        <div>
          <button onClick={showModalHandler}>ثبت سالن زیبایی</button>
        </div>
      </div>
    </div>
  );
}

export default SalonRegistration;
