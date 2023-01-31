import { ReviewReceipt as ReRe } from "../emotion/styles";
import { Dispatch, SetStateAction } from "react";
import { createNewFormDetailItem, FormDetailItem, KeysMatching } from "./ReviewForm";
import { useState } from "react";

// const ReviewFormDetailtem = ({ 
//     num,
//     formDetail,
//     setFormDetail
// }: { 
//     num: number,
//     formDetail: FormDetailItem[],
//     setFormDetail: Dispatch<SetStateAction<FormDetailItem[]>>,
// }) => {
//     const changeHandler = (
//         e:React.ChangeEvent<HTMLInputElement>, 
//         num: number, 
//         cate: keyof FormDetailItem) => {
//             const val = e.target.value;

//             if (formDetail.length < num+1) {
//                 const newItem : FormDetailItem = { [cate] : val};
//                 setFormDetail(prev => [...prev, newItem])
//             } else {
//                 const nxtFormDetail = [...formDetail];
//                 nxtFormDetail[num][cate] = val;
//                 setFormDetail(nxtFormDetail);
//             }
//     }
//     return (
//         <ReRe.Form.Detail.Li
//         >
//             <div>
//                 <div>
//                     부문 <input type="text" onChange={(e) => changeHandler(e, num, "title")} />
//                 </div>
//                 <div>
//                     배점 <input type="number" onChange={(e) => changeHandler(e, num, "score")} /> / 
//                     총점<input type="number" onChange={(e) => changeHandler(e, num, "score_total")} />
//                 </div>
//                 <div>
//                     이유 <input type="text" onChange={(e) => changeHandler(e, num, "desc")} />
//                 </div>
//             </div>
//             <ReRe.Form.Detail.ToggleBtn
//                 onClick={() => {
//                     // const nxtFormDetail = [...formDetail];
//                     // nxtFormDetail.splice(num, 1);
//                     // setFormDetail(nxtFormDetail);
//                     setFormDetail(prev => prev.filter((item, i) => i !== num))
//                 }}
//             >
//                 -
//             </ReRe.Form.Detail.ToggleBtn>
//         </ReRe.Form.Detail.Li>
//     )
// }

const ReviewFormDetail = ({
    formDetail,
    setFormDetail
}: {
    formDetail: FormDetailItem[],
    setFormDetail: Dispatch<SetStateAction<FormDetailItem[]>>
}) => {

    const changeHandler = (
        e:React.ChangeEvent<HTMLInputElement>, 
        num: number, 
        cate: keyof FormDetailItem) => {
            const val = e.target.value;
            console.log("change idx: ", num+1)

            if (formDetail.length < num+1) {
                const newItem : FormDetailItem = createNewFormDetailItem();
                newItem[cate] = val;
                setFormDetail(prev => [...prev, newItem])
            } else {
                const nxtFormDetail = [...formDetail];
                nxtFormDetail[num][cate] = val;
                setFormDetail(nxtFormDetail);
            }
    }

    return (
        <ReRe.Form.Detail.Ul>
            {
                formDetail.map((item, idx) => (
                    <ReRe.Form.Detail.Li key={item.id}>
                        <div>
                            <div>
                                부문 <input type="text" onChange={(e) => changeHandler(e, idx, "title")} />
                            </div>
                            <div>
                                배점 <input type="number" onChange={(e) => changeHandler(e, idx, "score")} /> / 
                                총점<input type="number" onChange={(e) => changeHandler(e, idx, "score_total")} />
                            </div>
                            <div>
                                이유 <input type="text" onChange={(e) => changeHandler(e, idx, "desc")} />
                            </div>
                        </div>
                        <ReRe.Form.Detail.ToggleBtn
                            onClick={(e) => {
                                // const nxtFormDetail = [...formDetail];
                                // nxtFormDetail.splice(num, 1);
                                // setFormDetail(nxtFormDetail);
                                e.preventDefault();
                                console.log("delete idx: ", idx+1)
                                setFormDetail(prev => prev.filter((item, i) => i !== idx))
                            }}
                        >
                            -
                        </ReRe.Form.Detail.ToggleBtn>
                    </ReRe.Form.Detail.Li>
                ))
            }
            {
                formDetail.length < 5
                &&
                <div>
                    <ReRe.Form.Detail.AddBtn
                        onClick={(e) => {
                            e.preventDefault();
                            setFormDetail(prev => [...prev, createNewFormDetailItem()])
                        }}
                        detailLen={formDetail.length}
                    >
                        +
                    </ReRe.Form.Detail.AddBtn>
                    {/* <ReRe.Form.Detail.AddBtnBackdrop>
                    </ReRe.Form.Detail.AddBtnBackdrop>
                    <ReviewFormDetailtem num={detailLen+1} /> */}
                </div>
            }
        </ReRe.Form.Detail.Ul>
    )
}

export default ReviewFormDetail;