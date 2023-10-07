import { useState, useEffect, useCallback } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const options = {
  type: "loop",
  perPage: 3,
  perMove: 1,
  gap: "1.5rem",
  autoplay: true,
  interval: 5000,
  pagination: false,
  breakpoints: {
    1400: {
      perPage: 2,
    },
    950: {
      perPage: 1,
    },
  },
};

const CommentsSection = (props) => {
  const [comments, setComments] = useState([]);

  const fetchCommentsHandler = useCallback(async () => {
    let id = props.id;

    if (id == null) {
      let url = window.location.href.split("/");
      id = url[url.length - 1];
    }
    try {
      const response = await fetch("http://seato1.ir/api/salons/" + id);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const comments = data.comments;
      // console.log(data, comments);
      const transformed = comments.map((comment) => {
        return {
          name: comment.name,
          comment: comment.comment,
          datetime: comment.commented_date,
        };
      });
      setComments(transformed);
    } catch (error) {
      alert(error);
    }
  }, []);

  useEffect(() => {
    fetchCommentsHandler();
  }, [fetchCommentsHandler]);

  return (
    comments && (
      <div>
        <div className="">
          <Splide options={options} className="">
            {comments &&
              comments.length > 0 &&
              comments.map((comment) => {
                return (
                  <SplideSlide key={comment.id}>
                    <Slide comment={comment} />
                  </SplideSlide>
                );
              })}
          </Splide>
        </div>
      </div>
    )
  );
};

export default CommentsSection;
