import { useNavigate } from "react-router-dom";
import {
  getYearFormatter,
  ReviewShortDateFormatter,
} from "../utils/formatters/timeFormatters";
import { Review } from "../utils/types/ReviewType";
import { ReviewListItem as ReLiItem } from "../emotion/styles";

interface ReviewListIemProps {
  review: Review;
}

const ReviewListItem = ({
  review: {
    review_id,
    review_title,
    review_type,
    user_id,
    abstract_txt,
    director,
    do_date,
    favorite_line,
    player,
    publish_date,
    publisher,
    place,
    show_type,
  },
}: ReviewListIemProps) => {
  let navigate = useNavigate();

  const moveToReviewDetail = (
    rvid: number,
    e: React.MouseEvent<HTMLElement>
  ) => {
    console.log(rvid);
    navigate(`/review/${rvid}`);
  };

  const publishYear = getYearFormatter(publish_date);

  return (
    <ReLiItem.Body
      onClick={(event: React.MouseEvent<HTMLElement>) =>
        moveToReviewDetail(review_id, event)
      }
    >
      <ReLiItem.Date>{ReviewShortDateFormatter(do_date)}</ReLiItem.Date>
      <ReLiItem.Title>
        {review_title} {publishYear && `(${publishYear})`}
      </ReLiItem.Title>
      <ReLiItem.Abstract>{abstract_txt}</ReLiItem.Abstract>
    </ReLiItem.Body>
  );
};

export default ReviewListItem;
