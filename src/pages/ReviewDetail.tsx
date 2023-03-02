import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Page from "../components/Page";
import ReviewReceipt, { ForwardedReviewReceipt } from "../components/ReviewReceipt";
import { ReviewExtend } from "../utils/types/ReviewType";

import { toPng } from 'html-to-image';
import download from 'downloadjs';
// const saveHtmlAsImage = require('save-html-as-image');
// const { saveAsPng } = saveHtmlAsImage;



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
  }, [review, rvid]);

  useEffect(() => {
    fetchReview();
    console.log("loading");
  }, []);

  const receiptRef = useRef<HTMLInputElement>(null);

  const onPrintReceipt = () => {
    console.log(receiptRef.current)
    const receiptElem = receiptRef.current;
    if (receiptElem != null) {
      // saveAsPng(receiptElem);
      toPng(receiptElem)
      .then(function (dataUrl) {
        download(dataUrl, 'my-node.png');
      });

    }
  }

  return (
    <Page>
        {review && (
          <div>
            {/* <div>{review['is_public'] ? "공개" : "비공개"}</div> */}
            {/* <ReviewReceipt 
              ref={receiptRef}
              review={review} /> */}

            <ForwardedReviewReceipt
              review={review}
              receiptRef={receiptRef}
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
