import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ReviewListItem from "../components/ReviewListIem";
import { Review } from "../utils/types/ReviewType";
import { ReviewListSection } from "../emotion/styles";
import Page from "../components/Page";

const Home = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const fetchReviews = useCallback(async () => {
    try {
      console.log("reviews: ", reviews);

      const resp = await axios.get("/api/review");
      console.log("resp.data: ", resp.data);
      setReviews(resp.data);
    } catch (error) {
      console.log(error);
    }
  }, [reviews]);

  useEffect(() => {
    fetchReviews();
    console.log("loading");
  }, []);

  return (
    <Page>
      <ReviewListSection>
        {reviews.map((review, i) => (
          <ReviewListItem review={review} key={i} />
        ))}
      </ReviewListSection>
    </Page>
  );
};

export default Home;
