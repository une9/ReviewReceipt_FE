import { ReviewReceipt as ReRe } from "../emotion/styles";
import { useState } from "react";
import { ReviewDateFormatter } from "../utils/formatters/timeformatter";
import { ReviewType, ReviewTypeObj } from "../utils/types/ReviewType";

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
    const [form, setForm] = useState({});

    const changeHandler = (
        e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>, 
        name:string) => {
            const newForm:{[key: string]: InputFormValType} = {...form};
            newForm[name] = e.target.value;
            return setForm(newForm);
    }

    const Input = (type:string, name:string, defaultVal?:string | number) => (
        <input 
            defaultValue={defaultVal}
            type={type} id={name} name={name}
            onChange={e => changeHandler(e, name)}
         />
    )

    // Inputs
    const InputText= (name:KeysMatching<InputForm, string | undefined>, defaultVal?:string) => Input("text", name, defaultVal);
    const InputDate = (name:KeysMatching<InputForm, Date | undefined>, defaultVal?:string) => Input("date", name, defaultVal);
    const Inputnumber = (name:KeysMatching<InputForm, number | undefined>, defaultVal?:number) => Input("number", name, defaultVal);
    const TextArea = (name: "detail_review_text", defaultVal?: string) => (
        <textarea 
            defaultValue={defaultVal}
            id={name} name={name}
            onChange={e => changeHandler(e, name)}
        />
    )
    const Select = (target:Object, name: "review_type", defaultVal?: string) => (
        <select id={name} onChange={e => changeHandler(e, name)}>
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

    const handleSubmit : React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log(form)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ReRe.Receipt.Body>
                    <ReRe.Receipt.Head>[ 리뷰 영수증 ]</ReRe.Receipt.Head>


                    <section>
                        <ReRe.Receipt.Row>
                            {Label("review_title", "제목")}
                            {InputText("review_title")}
                        </ReRe.Receipt.Row>
                        {/* REVIEW TYPE SELECT */}
                        <ReRe.Receipt.Row>
                            {Label("review_type", "리뷰 타입")}
                            {Select(ReviewTypeObj, "review_type")}
                        </ReRe.Receipt.Row>
                        {}
                        <ReRe.Receipt.Row>
                            {Label("abstract_txt", "한줄요약")}
                            {InputText("abstract_txt")}
                        </ReRe.Receipt.Row>
                        <ReRe.Receipt.Row>
                            {Label("detail_review_text", "내용")}
                            {TextArea("detail_review_text")}
                        </ReRe.Receipt.Row>
                        <ReRe.Receipt.Row>
                            {Label("do_date", "감상일자")}
                            {InputDate("do_date", ReviewDateFormatter(new Date()))}
                        </ReRe.Receipt.Row>
                    </section>
                </ReRe.Receipt.Body>
                <button>
                    작성
                </button>
            </form>
        </div>
    )
}

export default ReviewForm;
