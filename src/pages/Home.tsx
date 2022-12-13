import { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import ReviewListItem from "../components/ReviewListIem";
import { Review } from "../utils/types/ReviewType";
import { Page } from "../utils/emotion/styles";

const Home = () => {
    const [reviews, setReviews] = useState<Review[]>([]);

    const fetchReviews = useCallback(async () => {
        try {
            console.log("reviews: ", reviews);

            const resp = await axios.get('/api/review');
            console.log("resp.data: ", resp.data);
            setReviews(resp.data);
        } catch (error) {
            console.log(error);
        }
    }, [reviews]) ;

    useEffect(() => {
        fetchReviews();
        console.log("loading")
    }, []);


    return (
        <Page>
            <h1>
                Home
            </h1>

            <section>
                {
                    reviews.map((review, i) => (
                        <ReviewListItem review={review} key={i} />
                    ))
                }
            </section>
        </Page>
    )
}

export default Home;