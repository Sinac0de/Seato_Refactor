import { useState, useEffect, useCallback } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import classes from "./RecentComments.module.css";
import CommentCard from "./CommentCard";

const sliderOptions = {
  type: "loop",
  perPage: 4,
  perMove: 1,
  gap: "1.5rem",
  autoplay: true,
  interval: 5000,
  width: "95%",
  pagination: false,
  breakpoints: {
    1600: {
      perPage: 3,
    },
    1400: {
      perPage: 2,
    },
    850: {
      perPage: 1,
    },
  },
};

const RecentComments = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = useCallback(async () => {
    try {
      const response = await fetch("http://seato1.ir/api/comments/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const slicedComments = data.slice(0, 11);
      const transformedComments = slicedComments.map((comment) => {
        return {
          name: comment.name,
          comment: comment.comment,
          datetime: comment.commented_date,
        };
      });
      setComments(transformedComments);
    } catch (error) {
      alert(error);
    }
  }, []);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    comments && (
      <div className={classes.commentsWrapper}>
        <div className={classes.caption}>
          <h2>آخرین بازخورد ها</h2>
        </div>
        <div>
          <Splide options={sliderOptions}>
            {comments.length > 0 &&
              comments.map((comment) => (
                <SplideSlide key={comment.id}>
                  <CommentCard comment={comment} />
                </SplideSlide>
              ))}
          </Splide>
        </div>
      </div>
    )
  );
};

export default RecentComments;
