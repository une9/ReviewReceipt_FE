import { getYearFormatter, ReviewDateFormatter, ReviewTimeFormatter } from "../utils/formatters/timeformatter";
import { ReviewDetail, ReviewExtend } from "../utils/types/ReviewType";
import { ReviewReceipt as ReviewReceiptComp } from "../utils/emotion/styles";
import ReviewReceiptDetailComp from "./ReviewReceiptDetail";
import { playerDisplayName, publlishDateDisplayName } from "../utils/displaynames/ReviewReceiptDisplayNames";

const ReviewReceipt = ({
    review_id,
    review_title,
    review_type,
    user_id,
    abstract_txt,
    director,
    do_date,
    favorite_line,
    player,
    publisher,
    place,
    create_date,
    modify_date,
    publish_date,
    review_detail_id,
    show_type,
    is_public,
    status,
    yes_detail,
    detail_review_text,
    list_1_title,
    list_1_score_total,
    list_1_score,
    list_1_desc,
    list_2_title,
    list_2_score_total,
    list_2_score,
    list_2_desc,
    list_3_title,
    list_3_score_total,
    list_3_score,
    list_3_desc,
    list_4_title,
    list_4_score_total,
    list_4_score,
    list_4_desc,
    list_5_title,
    list_5_score_total,
    list_5_score,
    list_5_desc
} : ReviewExtend) => {

    const ReviewDetailProps
    : ReviewDetail = {
        detail_review_text,
        list_1_title,
        list_1_score_total,
        list_1_score,
        list_1_desc,
        list_2_title,
        list_2_score_total,
        list_2_score,
        list_2_desc,
        list_3_title,
        list_3_score_total,
        list_3_score,
        list_3_desc,
        list_4_title,
        list_4_score_total,
        list_4_score,
        list_4_desc,
        list_5_title,
        list_5_score_total,
        list_5_score,
        list_5_desc
    }

    const publishYear = getYearFormatter(publish_date);
    

    return (
        <ReviewReceiptComp>
            <div>[ 영수증 ]</div>
            <h1>
                {
                    (review_title && publishYear)
                    ?
                    `${review_title} (${publishYear})`
                    :
                    review_title && review_title
                }
            </h1>
            <p>
                {
                    review_type === 'SHOW'
                    ?
                    `/ ${review_type} (${show_type}) /`
                    :
                    `/ ${review_type} /`
                }
            </p>
            <p>{`관람: ${ReviewDateFormatter(do_date)}`}</p>
            <p>{`${playerDisplayName[review_type]}: ${player}`}</p>
            <p>{abstract_txt && `한줄요약: ${abstract_txt}`}</p>
            <p>
                {director && `감독: ${director}`}
            </p>
            <p>
                {publisher && `출판사: ${publisher}`}
            </p>
            <p>
                {place && `장소: ${place}`}
            </p>
            <p>
                {publish_date && `${publlishDateDisplayName[review_type]}: ${ReviewDateFormatter(publish_date)}`}
            </p>
            {
                <ReviewReceiptDetailComp {...ReviewDetailProps} />
            }
            <div>
                <p>{`작성: ${ReviewTimeFormatter(create_date)}` }</p>
                <p>{`수정: ${ReviewTimeFormatter(modify_date)}` }</p>
            </div>
        </ReviewReceiptComp>
    )
}

export default ReviewReceipt;