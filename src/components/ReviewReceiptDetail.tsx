import { ReviewReceipt as ReRe } from "../emotion/styles";
import { scoreformatter } from "../utils/formatters/scoreFormatters";
import { ReviewDetail } from "../utils/types/ReviewType";

const SepLine = (sep: string) => {
  return <ReRe.SepLine>{new Array(50).fill(sep).join("")}</ReRe.SepLine>;
};

const SepLineList = () => SepLine("-");
const SepLineDetailText = () => SepLine(" * ");

const DetailScoreSection = (props: ReviewDetail) => {
  return (
    <ReRe.Detail.Ul>
      <ReRe.Detail.Row>
        <SepLineList />
        <div className="row-score">
          <div className="left">부문</div>
          <div className="right">
            <div>점수</div>
            <div>배점</div>
          </div>
        </div>
        <SepLineList />
      </ReRe.Detail.Row>
      <div className="rows">
        {new Array(5).fill(true).map((_, i: number) => {
          const title = props[`list_${i + 1}_title` as keyof ReviewDetail]; // https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
          if (!title) return;

          const scoreTotal =
            props[`list_${i + 1}_score_total` as keyof ReviewDetail];
          const score = props[`list_${i + 1}_score` as keyof ReviewDetail];
          const desc = props[`list_${i + 1}_desc` as keyof ReviewDetail];

          return (
            <ReRe.Detail.Row key={`row-${i}-${title}`}>
              <div className="row-score">
                <div className="left">{title as string}</div>
                <div className="right">
                  <div>{scoreformatter(score as number)}</div>
                  <div>{scoreformatter(scoreTotal as number)}</div>
                </div>
              </div>
              {desc && <div className="row-desc">{desc as string}</div>}
            </ReRe.Detail.Row>
          );
        })}
      </div>
      <ReRe.Detail.Row>
        <SepLineList />
        <div className="row-score">
          <div className="left">총점</div>
          <div className="right">
            <div>
              {scoreformatter(
                props.list_1_score +
                  props.list_2_score +
                  props.list_3_score +
                  props.list_4_score +
                  props.list_5_score
              )}
            </div>
            /
            <div>
              {scoreformatter(
                props.list_1_score_total +
                  props.list_2_score_total +
                  props.list_3_score_total +
                  props.list_4_score_total +
                  props.list_5_score_total
              )}
            </div>
          </div>
        </div>
        <SepLineList />
      </ReRe.Detail.Row>
    </ReRe.Detail.Ul>
  );
};

const DetailReviewSection = (props: { detailText: string }) => {
  return (
    <ReRe.Detail.ReviewText>
      <SepLineDetailText />
      <p>{props.detailText}</p>
      <SepLineDetailText />
    </ReRe.Detail.ReviewText>
  );
};

const ReviewReceiptDetail = (props: ReviewDetail) => {
  return (
    <ReRe.Detail.Section>
      {props.list_1_title && props.list_1_score_total && props.list_1_score && (
        <DetailScoreSection {...props} />
      )}
      {props.detail_review_text && (
        <DetailReviewSection detailText={props.detail_review_text} />
      )}
    </ReRe.Detail.Section>
  );
};

export default ReviewReceiptDetail;
