import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewReceipt from "../components/ReviewReceipt";
import { Page, ReviewDetailInner } from "../utils/emotion/styles";
import { ReviewExtend } from "../utils/types/ReviewType";

const ReviewDetail = () => {
    const params = useParams();
    const rvid = params.rvid;
    const [review, setReview] = useState<ReviewExtend>();

    const fetchReview = useCallback(async () => {
        try {
            console.log("review: ", review);

            const resp = await axios.get(`/api/review/${rvid}`);
            console.log("resp.data: ", resp.data);
            setReview(resp.data);
        } catch (error) {
            console.log(error);
        }
    }, [review]) ;

    useEffect(() => {
        fetchReview();
        console.log("loading")
    }, []);

    return (
        <Page>
            <ReviewDetailInner>
            {
                review
                &&
                <div>
                    <div>{review['is_public'] ? "공개" : "비공개"}</div>
                    <ReviewReceipt {...review} />
                </div>
            }
            </ReviewDetailInner>
        </Page>
    )
}

export default ReviewDetail;