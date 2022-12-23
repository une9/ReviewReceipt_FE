import { ReviewReceipt as ReRe } from "../emotion/styles";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ReviewDateFormatter } from "../utils/formatters/timeformatter";
import { Review, ReviewDetail, ReviewExtend, ReviewType, ReviewTypeObj } from "../utils/types/ReviewType";
import ReviewFormDetail from "./ReviewFormDetail";
import { playerDisplayName, publisherDisplayName, publlishDateDisplayName } from "../utils/displaynames/ReviewReceiptDisplayNames";
import ReviewFormSideBar from "./ReviewFormSideBar";

type InputFormValType = string | Date | number | undefined;

interface InputForm {
    review_type?: string,
    do_date?: Date,
    review_title?: string,
    publish_date?: Date,
    abstract_txt?: string,
    publisher?: string,
    director?: string,
    player?: string,
    favorite_line?: string,
    show_type?: string,
    place?: string,
    is_public?: boolean,
    detail_review_text?: string,
    list_1_title?: string,
    list_1_score_total?: number,
    list_1_score?: number,
    list_1_desc?: string,
    list_2_title?: string,
    list_2_score_total?: number,
    list_2_score?: number,
    list_2_desc?: string,
    list_3_title?: string,
    list_3_score_total?: number,
    list_3_score?: number,
    list_3_desc?: string,
    list_4_title?: string,
    list_4_score_total?: number,
    list_4_score?: number,
    list_4_desc?: string,
    list_5_title?: string,
    list_5_score_total?: number,
    list_5_score?: number,
    list_5_desc?: string
}

type KeysMatching<T, V> = {[K in keyof T]-?: T[K] extends V ? K : never}[keyof T];

const ReviewForm = () => {
    const loc = useLocation();
    const path = loc.pathname;

    const [form, setForm] = useState<InputForm>({});
    const [isPublic, setIsPublic] = useState<boolean>(false);

    useEffect(() => {
        const regex = /^\/review\/[0-9]\/edit/;
        if (regex.test(path)) {
            // axios
            console.log("수정페이지!")

        }
    }, [])

    const changeHandler = (
        e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>, 
        id:keyof InputForm) => {
            // const newForm:{[key: string]: InputFormValType} = {...form};
            const newForm:InputForm = {...form};
            Object.assign(newForm, {id: e.target.value});
            return setForm(newForm);
    }

    const Input = (type:string, id:keyof InputForm, defaultVal?:string | number) => (
        <input 
            defaultValue={defaultVal}
            type={type} id={id} name={id}
            onChange={e => changeHandler(e, id)}
         />
    )

    // Inputs
    const InputText= (id:KeysMatching<InputForm, string | undefined>, defaultVal?:string) => Input("text", id, defaultVal);
    const InputDate = (id:KeysMatching<InputForm, Date | undefined>, defaultVal?:string) => Input("date", id, defaultVal);
    const InputNumber = (id:KeysMatching<InputForm, number | undefined>, defaultVal?:number) => Input("number", id, defaultVal);
    const TextArea = (
        id: "detail_review_text" | "favorite_line", 
        defaultVal?: string) => (
            <textarea 
                defaultValue={defaultVal}
                id={id} name={id}
                onChange={e => changeHandler(e, id)}
            />
    )
    const Select = (id: "review_type", target:Object, defaultVal?: string) => (
        <select 
            id={id} 
            onChange={e => changeHandler(e, id)}
            defaultValue={defaultVal}>
            {
                Object.keys(target).map(key => (
                    <option 
                        key={key}
                        value={key}
                    >
                        {ReviewTypeObj[key as keyof typeof ReviewTypeObj]}
                    </option>
                ))
            }
        </select>
    )
    const Label = (target:string, name:string) => <label htmlFor={target}>{`${name }▶`}</label>

    const FormInputElem = {
        text: InputText,
        date: InputDate,
        number: InputNumber,
        textarea: TextArea,
    } as const;

    // const FormRowInput = (
    //         type: keyof typeof FormInputElem, 
    //         id: keyof InputForm, 
    //         name: string, 
    //         defaultVal?: string,
    //         target?: Object) => {

    //     return (
    //         <ReRe.Form.Row>
    //             {Label(id, name)}
    //             {FormInputElem[type](id, defaultVal)}
    //         </ReRe.Form.Row>
    //     )
    // }

    const FormRowSelect = ( 
        id: "review_type", 
        name: string, 
        target: Object,
        defaultVal?: string
    ) => {
        return (
            <ReRe.Form.Row>
                {Label(id, name)}
                {Select(id, target, defaultVal)}
            </ReRe.Form.Row>
        )
    }


    // handler
    const handleSubmit : React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log(form)
    }


    return (
        <div>
            <ReviewFormSideBar
                isPublic={isPublic}
                setIsPublic={setIsPublic}
            />

            <form onSubmit={handleSubmit}>
                <ReRe.Receipt.Body>
                    <ReRe.Receipt.Head>[ 리뷰 영수증 ]</ReRe.Receipt.Head>


                    <ReRe.Form.Fieldset>
                        <ReRe.Form.Row>
                            {Label("review_title", "제목")}
                            {InputText("review_title")}
                        </ReRe.Form.Row>
                        {/* REVIEW TYPE SELECT */}
                        {/* <ReRe.Form.Row>
                            {Label("review_type", "리뷰 타입")}
                            {Select("review_type", ReviewTypeObj)}
                        </ReRe.Form.Row> */}
                        {FormRowSelect("review_type", "리뷰 타입", ReviewTypeObj, "MOV")}

                        <ReRe.Form.Row>
                            {Label("do_date", "감상일자")}
                            {InputDate("do_date", ReviewDateFormatter(new Date()))}
                        </ReRe.Form.Row>
                        <ReRe.Form.Row>
                            {Label("abstract_txt", "한줄요약")}
                            {InputText("abstract_txt")}
                        </ReRe.Form.Row>

                    </ReRe.Form.Fieldset>
                    <ReRe.Form.Fieldset>
                        <ReRe.Form.Row>
                            {Label("player", 
                                "review_type" in form
                                ?
                                    playerDisplayName[
                                        form["review_type"] as keyof typeof playerDisplayName
                                    ]
                                : "출연자"
                            )}
                            {InputText("player")}
                        </ReRe.Form.Row>
                        <ReRe.Form.Row>
                            {Label("director", "감독")}
                            {InputText("director")}
                        </ReRe.Form.Row>
                        <ReRe.Form.Row>
                            {Label("publisher", publisherDisplayName[
                                                    form["review_type"] as keyof typeof playerDisplayName
                                                ])}
                            {InputText("publisher")}
                        </ReRe.Form.Row>
                        <ReRe.Form.Row>
                            {Label("publish_date", publlishDateDisplayName[
                                                        form["review_type"] as keyof typeof playerDisplayName
                                                    ])}
                            {InputDate("publish_date", ReviewDateFormatter(new Date()))}
                        </ReRe.Form.Row>
                        {
                            form["review_type"] === ReviewTypeObj.SHOW
                            &&
                            <>
                                <ReRe.Form.Row>
                                    {Label("place", "장소")}
                                    {InputText("place")}
                                </ReRe.Form.Row>
                                <ReRe.Form.Row>
                                    {Label("show_type", "공연 유형")}
                                    {InputText("show_type")}
                                </ReRe.Form.Row>
                            </>
                        }
                    </ReRe.Form.Fieldset>
                    <ReRe.Form.Fieldset>
                        <ReviewFormDetail />
                    </ReRe.Form.Fieldset>
                    <ReRe.Form.Fieldset>
                        <ReRe.Form.Row>
                            {Label("favorite_line", "인용")}
                            {TextArea("favorite_line")}
                        </ReRe.Form.Row>
                        <ReRe.Form.Row>
                            {Label("detail_review_text", "내용")}
                            {TextArea("detail_review_text")}
                        </ReRe.Form.Row>
                    </ReRe.Form.Fieldset>
                </ReRe.Receipt.Body>
                <button>
                    작성
                </button>
            </form>
        </div>
    )
}

export default ReviewForm;
