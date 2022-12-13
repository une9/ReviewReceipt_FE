import { useNavigate } from "react-router-dom";
import { ReviewDateFormatter } from "../utils/formatters/timeformatter";
import { Review } from "../utils/types/ReviewType";

interface ReviewListIemProps {
    review: Review
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
        publish_year,
        publisher,
        place,
        show_type
    }
} : ReviewListIemProps ) => {
    let navigate = useNavigate();

    const moveToReviewDetail = (rvid:number, e:React.MouseEvent<HTMLElement>) => {
        console.log(rvid)
        navigate(`/review/${rvid}`);
    }


    return (
        <article onClick={(event) => moveToReviewDetail(review_id, event)}>
            <div>{ReviewDateFormatter(do_date)}</div>
            <h2>
                {review_title} ({publish_year})
            </h2>
            <p>{abstract_txt}</p>
        </article>
    )

}

export default ReviewListItem;