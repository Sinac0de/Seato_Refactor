import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "src/components/Card/Card";
import { Fragment } from "react";
import ReactModal from "react-modal";

const Salons = () => {
  const [salonList, setSalonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSalonsHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://seato1.ir/api/salons/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformed = data.map((salonData) => ({
        id: salonData.id,
        name: salonData.name,
        address: salonData.address,
        photo: salonData.photo_links[0],
        rating: salonData.rating,
      }));
      setSalonList(transformed);
    } catch (error) {
      alert(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchSalonsHandler();
  }, [fetchSalonsHandler]);

  return (
    <Fragment>
      {/* Loading modal */}
      <ReactModal
        isOpen={isLoading}
        contentLabel="Minimal Modal Example"
        ariaHideApp={false}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            display: "flex",
            position: "absolute",
            left: "0",
            right: "0",
            margin: "0 auto",
            top: "40%",
            width: "fit-content",
            height: "fit-content",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "28px",
            outline: "none",
            padding: "4em",
          },
        }}
      >
        <h4>درحال دریافت اطلاعات سالن ها...</h4>
      </ReactModal>
      {/* salons list section */}
      <section className="p-14 min-h-screen">
        {/* List caption and filter button */}
        <div className="w-full relative mb-5 p-3 flex justify-end">
          <h1 className="font-bold absolute mx-auto top-0 right-0 left-0 w-fit text-[22px]">
            لیست سالن های زیبایی
          </h1>
          <button className="bg-[#DADBDC9C] mt-10 text-base font-bold px-10 p-2 rounded-full">
            فیلتر
          </button>
        </div>
        {/* List of salons */}
        <div className="grid grid-flow-row gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 my-5">
          {salonList.map((salon) => (
            <Link to={`/salons/${salon.id}`} key={salon.id}>
              <Card salon={salon} />
            </Link>
          ))}
        </div>
        {/* Paginator */}
      </section>
    </Fragment>
  );
};

export default Salons;
