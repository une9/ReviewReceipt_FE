import {
  getYearFormatter,
  ReviewDateFormatter,
  ReviewTimeFormatter,
} from "../utils/formatters/timeformatter";
import { ReviewDetail, ReviewExtend } from "../utils/types/ReviewType";
import { ReviewReceipt as ReRe } from "../emotion/styles";
import ReviewReceiptDetailComp from "./ReviewReceiptDetail";
import {
  GenreDisplayName,
  playerDisplayName,
  publlishDateDisplayName,
} from "../utils/displaynames/ReviewReceiptDisplayNames";
import ReviewReceiptBarcode from "./ReviewReceiptBarcode";

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
  list_5_desc,
}: ReviewExtend) => {
  const ReviewDetailProps: ReviewDetail = {
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
    list_5_desc,
  };

  const publishYear = getYearFormatter(publish_date);

  return (
    <ReRe.Receipt.Body>
      <ReRe.Receipt.Head>[ 리뷰 영수증 ]</ReRe.Receipt.Head>

      <h1>
        {review_title && publishYear
          ? `${review_title} (${publishYear})`
          : review_title && review_title}
      </h1>

      <section>
        <ReRe.Receipt.Row>
          {review_type === "SHOW"
            ? `/ ${GenreDisplayName[review_type]} (${show_type}) /`
            : `/ ${GenreDisplayName[review_type]} /`}
        </ReRe.Receipt.Row>
        <ReRe.Receipt.Row>
          {`관람일: ${ReviewDateFormatter(do_date)}`}
        </ReRe.Receipt.Row>
        <ReRe.Receipt.Row>
          {abstract_txt && `한줄요약: ${abstract_txt}`}
        </ReRe.Receipt.Row>
        <ReRe.Receipt.Row>
          {`${playerDisplayName[review_type]}: ${player}`}
        </ReRe.Receipt.Row>
        <ReRe.Receipt.Row>{director && `감독: ${director}`}</ReRe.Receipt.Row>
        <ReRe.Receipt.Row>
          {publisher && `출판사: ${publisher}`}
        </ReRe.Receipt.Row>
        <ReRe.Receipt.Row>{place && `장소: ${place}`}</ReRe.Receipt.Row>
        <ReRe.Receipt.Row>
          {publish_date &&
            `${publlishDateDisplayName[review_type]}: ${ReviewDateFormatter(
              publish_date
            )}`}
        </ReRe.Receipt.Row>
      </section>

      <ReviewReceiptDetailComp {...ReviewDetailProps} />
      <ReviewReceiptBarcode 
        reviewId={review_id}
        reviewType={review_type}
        createDate={create_date}
      />

      <ReRe.Receipt.Footer.Body>
        <div>
          <ReRe.Receipt.Footer.Row>{`작성: ${ReviewTimeFormatter(
            create_date
          )}`}</ReRe.Receipt.Footer.Row>
          <ReRe.Receipt.Footer.Row>{`수정: ${ReviewTimeFormatter(
            modify_date
          )}`}</ReRe.Receipt.Footer.Row>
        </div>
      </ReRe.Receipt.Footer.Body>
    </ReRe.Receipt.Body>
  );
};

export default ReviewReceipt;
