import { ReviewReceiptDetail as ReviewReceiptDetailStyle, 
        ReviewReceiptDetailRow as Row,
        SepLine as SepLineStyle,
        ReviewReceiptDetailReviewText as DetailReviewText } from "../utils/emotion/styles"
import { scoreformatter } from "../utils/formatters/scoreformatter";
import { ReviewDetail } from "../utils/types/ReviewType";

const SepLine = (sep: string) => {
    return (
        <SepLineStyle>
            { new Array(50).fill(sep).join("") }
        </SepLineStyle>
    )
}

const SepLineList = () => SepLine("-");
const SepLineDetailText = () => SepLine(" * ");

const DetailScoreSection = (props: ReviewDetail) => {
    return (
        <ul>
            <Row>
                <SepLineList />
                <div className="row-score">
                    <div className="left">부문</div>
                    <div className="right">
                        <div>배점</div>
                        <div>점수</div>
                    </div>
                </div>
                <SepLineList />
            </Row>
            <div className="rows">
                {
                    new Array(5).fill(true).map((_, i: number) => {
                        const title = props[`list_${i+1}_title` as keyof ReviewDetail];     // https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
                        if (!title) return

                        const scoreTotal = props[`list_${i+1}_score_total` as keyof ReviewDetail];
                        const score = props[`list_${i+1}_score` as keyof ReviewDetail];
                        const desc = props[`list_${i+1}_desc` as keyof ReviewDetail];

                        return (
                            <Row key={`row-${i}-${title}`}>
                                <div className="row-score">
                                    <div className="left">{title as string}</div>
                                    <div className="right">
                                        <div>{scoreformatter(scoreTotal as number)}</div>
                                        <div>{scoreformatter(score as number)}</div>
                                    </div>
                                </div>
                                {
                                    desc &&
                                    <div className="row-desc">
                                        {desc as string}
                                    </div>
                                }
                            </Row>
                        )
                    })
                }
            </div>
            <Row>
                <SepLineList />
                <div className="row-score">
                    <div className="left">총점</div>
                    <div className="right">
                        <div>100.0</div>
                        <div>85.0</div>
                    </div>
                </div>
                <SepLineList />
            </Row>
        </ul>
    )
}

const DetailReviewSection = (props: {
    detailText : string
} ) => {
    return (
        <DetailReviewText>
            <SepLineDetailText />
            <p>
                {props.detailText}
            </p>
            <SepLineDetailText />
        </DetailReviewText>
    )
}

const ReviewReceiptDetail = (
    props: ReviewDetail
) => {

    return (
        <ReviewReceiptDetailStyle>
            {
                (props.list_1_title && props.list_1_score_total && props.list_1_score)
                &&
                <DetailScoreSection {...props} />
            }
            {
                props.detail_review_text
                &&
                <DetailReviewSection detailText={props.detail_review_text} />
            }
        </ReviewReceiptDetailStyle>
    )
}

export default ReviewReceiptDetail;