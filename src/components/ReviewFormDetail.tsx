import { ReviewReceipt as ReRe } from "../emotion/styles";
import { Dispatch, SetStateAction } from "react";
import { FormDetail } from "./ReviewForm";
import { useState } from "react";

const ReviewFormDetail = ({
    formDetail,
    setFormDetail
}: {
    formDetail: FormDetail,
    setFormDetail: Dispatch<SetStateAction<FormDetail>>
}) => {
    const [useNthDetail, setUseNthDetail] = useState({
                                                            1: true,
                                                            2: false,
                                                            3: false,
                                                            4: false,
                                                            5: false
                                                        })
    return (
        <ReRe.Form.Detail.Ul>
           {
            new Array(5).fill(true).map((_, idx) => {
                const num = idx+1;

                return (
                    <ReRe.Form.Detail.Li
                        key={num}
                    >
                            <ReRe.Form.Detail.LiElem>
                                {num}
                            </ReRe.Form.Detail.LiElem>
                            <div>
                                <div>
                                    부문 <input type="text" />
                                </div>
                                <div>
                                    배점 <input type="number" /> / 
                                    총점<input type="number" />
                                </div>
                            </div>
                        <ReRe.Form.Detail.ToggleBtn
                            
                        >
                            -
                        </ReRe.Form.Detail.ToggleBtn>
                    </ReRe.Form.Detail.Li>
                )
            })
           }
        </ReRe.Form.Detail.Ul>
    )
}

export default ReviewFormDetail;