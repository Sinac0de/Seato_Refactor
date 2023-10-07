import { useState, useEffect, useCallback } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { sliderOptions } from "src/utils/SliderConfigs/sliderConfigs";
import CommentCard from "./CommentCard";

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
      <div className="flex flex-col p-10">
        <div className="flex justify-between ">
          <h2 className="font-bold text-2xl">آخرین بازخورد&zwnj;ها</h2>
        </div>
        <div className="flex justify-center p-8 px-0">
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
