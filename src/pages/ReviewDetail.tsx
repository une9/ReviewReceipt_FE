import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Page from "../components/Page";
import ReviewReceipt from "../components/ReviewReceipt";
import { ReviewExtend } from "../utils/types/ReviewType";
// import { saveAsPng } from 'save-html-as-image';
const saveHtmlAsImage = require('save-html-as-image');
const { saveAsPng } = saveHtmlAsImage;

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
  }, [review]);

  useEffect(() => {
    fetchReview();
    console.log("loading");
  }, []);

  const receiptRef = useRef<HTMLInputElement>(null);

  const onPrintReceipt = () => {
    console.log(receiptRef)
    saveAsPng(receiptRef);
  }

  return (
    <Page>
        {review && (
          <div>
            {/* <div>{review['is_public'] ? "공개" : "비공개"}</div> */}
            {/* <ReviewReceipt 
              ref={receiptRef}
              review={review} /> */}

            <ReviewReceipt
              props={review}
              ref={receiptRef} />

              <button
                onClick={onPrintReceipt}
              >
                프린트
              </button>

          </div>
        )}
    </Page>
  );
};

export default ReviewDetail;
