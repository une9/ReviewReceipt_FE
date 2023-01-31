import { ReviewReceipt as ReRe } from "../emotion/styles";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ReviewDateFormatter,
  ReviewTimeFormatter,
} from "../utils/formatters/timeFormatters";
import {
  Review,
  ReviewDetail,
  ReviewExtend,
  ReviewType,
  ReviewTypeObj,
} from "../utils/types/ReviewType";
import ReviewFormDetail from "./ReviewFormDetail";
import {
  playerDisplayName,
  publisherDisplayName,
  publlishDateDisplayName,
} from "../utils/displaynames/ReviewReceiptDisplayNames";
import ReviewFormSideBar from "./ReviewFormSideBar";
import { DateString } from "../utils/types/DateType";
import { request } from "../utils/request/Request";

type InputFormValType = string | Date | number | undefined;

interface InputForm {
  user_id?: number;
  review_type?: string;
  do_date?: DateString;
  review_title?: string;
  publish_date?: DateString;
  abstract_txt?: string;
  publisher?: string;
  director?: string;
  player?: string;
  favorite_line?: string;
  show_type?: string;
  place?: string;
  is_public?: boolean;
  detail_review_text?: string;
  list_1_title?: string;
  list_1_score_total?: number;
  list_1_score?: number;
  list_1_desc?: string;
  list_2_title?: string;
  list_2_score_total?: number;
  list_2_score?: number;
  list_2_desc?: string;
  list_3_title?: string;
  list_3_score_total?: number;
  list_3_score?: number;
  list_3_desc?: string;
  list_4_title?: string;
  list_4_score_total?: number;
  list_4_score?: number;
  list_4_desc?: string;
  list_5_title?: string;
  list_5_score_total?: number;
  list_5_score?: number;
  list_5_desc?: string;
}

export interface OptionalInputs {
  director: boolean;
  favorite_line: boolean;
  player: boolean;
  publisher: boolean;
  publish_date: boolean;
  detail_review_text: boolean;
  review_detail: boolean;
}

// ★★ NEEDS REFACTORING ★★

export type FormDetailItemNum = 1 | 2 | 3 | 4 | 5;
// export type FormDetailItemKeyPrefix = `list_${FormDetailItemNum}_${'title'|'score_total'|'score'|'desc'}`
export type FormDetailItemKeyPrefix = `list_${FormDetailItemNum}`;
// export type FormDetailItemKeyTitle = `${FormDetailItemKeyPrefix}_title`;
// export type FormDetailItemKeyScoreTotal = `${FormDetailItemKeyPrefix}_score_total`;

// export type FormDetailItem1 = {
//     "list_1_title"?: string;
//     "list_1_score_total"?: number;
//     "list_1_score"?: number;
//     "list_1_desc"?: string,
// }
// export type FormDetailItem2 = {
//     "list_2_title"?: string;
//     "list_2_score_total"?: number;
//     "list_2_score"?: number;
//     "list_2_desc"?: string,
// }
// export type FormDetailItem3 = {
//     "list_3_title"?: string;
//     "list_3_score_total"?: number;
//     "list_3_score"?: number;
//     "list_3_desc"?: string,
// }
// export type FormDetailItem4 = {
//     "list_4_title"?: string;
//     "list_4_score_total"?: number;
//     "list_4_score"?: number;
//     "list_4_desc"?: string,
// }
// export type FormDetailItem5 = {
//     "list_5_title"?: string;
//     "list_5_score_total"?: number;
//     "list_5_score"?: number;
//     "list_5_desc"?: string,
// }

// export type FormDetail = {
//     1? : FormDetailItem1;
//     2? : FormDetailItem2;
//     3? : FormDetailItem3;
//     4? : FormDetailItem4;
//     5? : FormDetailItem5;
// }

export type FormDetailItem = {
  id: string;
  title?: string;
  score_total?: string;
  score?: string;
  desc?: string;
};

export type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

export const createNewFormDetailItem = () => {
  return { id: new Date().getTime().toString() };
};

const ReviewForm = () => {
  const loc = useLocation();
  const path = loc.pathname;
  const navigate = useNavigate();

  const [form, setForm] = useState<InputForm>({});
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [isInForm, setIsInForm] = useState<OptionalInputs>({
    director: false,
    favorite_line: false,
    player: false,
    publisher: false,
    publish_date: false,
    detail_review_text: true,
    review_detail: true,
  });
  const [formDetail, setFormDetail] = useState<FormDetailItem[]>([
    createNewFormDetailItem(),
  ]);

  useEffect(() => {
    const regex = /^\/review\/[0-9]\/edit/;
    if (regex.test(path)) {
      // axios
      console.log("수정페이지!");
    } else {
      // 신규 작성 페이지
      // default values
      setForm({
        review_type: "MOV",
        do_date: ReviewDateFormatter(new Date()),
        publish_date: ReviewDateFormatter(new Date()),
      });
    }
  }, []);

  const changeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    id: keyof InputForm
  ) => {
    // const newForm:{[key: string]: InputFormValType} = {...form};
    const newForm: InputForm = { ...form };
    Object.assign(newForm, { [id]: e.target.value });
    return setForm(newForm);
  };

  const Input = (
    type: string,
    id: keyof InputForm,
    defaultVal?: string | number
  ) => (
    <input
      defaultValue={defaultVal}
      type={type}
      id={id}
      name={id}
      onChange={(e) => changeHandler(e, id)}
    />
  );

  // Inputs
  const InputText = (
    id: KeysMatching<InputForm, string | undefined>,
    defaultVal?: string
  ) => Input("text", id, defaultVal);
  const InputDate = (
    id: KeysMatching<InputForm, DateString | undefined>,
    defaultVal?: string
  ) => Input("date", id, defaultVal);
  const InputNumber = (
    id: KeysMatching<InputForm, number | undefined>,
    defaultVal?: number
  ) => Input("number", id, defaultVal);
  const TextArea = (
    id: "detail_review_text" | "favorite_line",
    defaultVal?: string
  ) => (
    <textarea
      defaultValue={defaultVal}
      id={id}
      name={id}
      onChange={(e) => changeHandler(e, id)}
    />
  );
  const Select = (id: "review_type", target: Object, defaultVal?: string) => (
    <select
      id={id}
      onChange={(e) => changeHandler(e, id)}
      defaultValue={defaultVal}
    >
      {Object.keys(target).map((key) => (
        <option key={key} value={key}>
          {ReviewTypeObj[key as keyof typeof ReviewTypeObj]}
        </option>
      ))}
    </select>
  );
  const Label = (target: string, name: string) => (
    <label htmlFor={target}>{`${name}▶`}</label>
  );

  const FormInputElem = {
    text: (
      id: KeysMatching<InputForm, string | undefined>,
      defaultVal?: string
    ) => Input("text", id, defaultVal),
    date: (
      id: KeysMatching<InputForm, DateString | undefined>,
      defaultVal?: string
    ) => Input("date", id, defaultVal),
    number: (
      id: KeysMatching<InputForm, number | undefined>,
      defaultVal?: string
    ) => Input("number", id, defaultVal),
    textarea: (
      id: "detail_review_text" | "favorite_line",
      defaultVal?: string
    ) => (
      <textarea
        defaultValue={defaultVal}
        id={id}
        name={id}
        onChange={(e) => changeHandler(e, id)}
      />
    ),
  } as const;

  // const FormInputElemType = {
  //     text: String,
  //     number: Number,
  //     date: DateString
  // } as const

  // const InputElem = (t: string) => {
  //     let elem = null;
  //     if (t === "text") {
  //         elem = InputText()
  //     } else if (t === "number") {
  //         elem = Number
  //     } else if (t === "date") {
  //         elem = DateString
  //     }

  //     return (
  //         (id:KeysMatching<InputForm, FormInputElemType[t] | undefined>, defaultVal?:FormInputElemType[t]) => Input(t, id, defaultVal)
  //     )
  // }

  // (id:KeysMatching<InputForm, number | undefined>, defaultVal?:number) => Input("number", id, defaultVal);
  // const FormRowInput = (
  //         type: string,
  //         id: keyof InputForm,
  //         name: string,
  //         defaultVal?: string,
  //         target?: Object) => {
  //             console.log(id, InputElem(type))
  //     return (
  //         <ReRe.Form.Row>
  //             {Label(id, name)}
  //             {/* {FormInputElem[type](id, defaultVal)} */}
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
    );
  };

  // handler
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const customForm = { ...form };

    // 추가 정보 (수정 필요)
    console.log(customForm, formDetail);
    const formExtend: any = {
      ...customForm,
      user_id: 5,
      is_public: isPublic,
    };

    // 선택 가능한 항목 추가/삭제
    for (const key in isInForm) {
      // if (key === "review_detail") continue;
      if (!isInForm[key as keyof typeof isInForm] && key in formExtend) {
        delete formExtend[key];
      }
    }

    // detail items 추가
    if (isInForm.review_detail) {
      formExtend["yes_detail"] = true;
      for (let i = 0; i < formDetail.length; i++) {
        const detailItem = formDetail[i];
        for (const key in detailItem) {
          console.log(key);
          if (key === "id") continue;
          formExtend[`list_${i + 1}_${key}`] =
            detailItem[key as keyof FormDetailItem];
        }
      }
    } else {
      formExtend["yes_detail"] = false;
    }

    console.log(formExtend);

    // // axios - insert
    try {
      request("post", "/review/insert", formExtend).then((data) => {
        console.log(data);
        navigate(`/review/${data}`);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ReviewFormSideBar
        isPublic={isPublic}
        setIsPublic={setIsPublic}
        isInForm={isInForm}
        setIsInForm={setIsInForm}
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

            {form["review_type"] === ReviewTypeObj.SHOW && (
              <>
                <ReRe.Form.Row>
                  {Label("show_type", "공연 유형")}
                  {InputText("show_type")}
                </ReRe.Form.Row>
                <ReRe.Form.Row>
                  {Label("place", "장소")}
                  {InputText("place")}
                </ReRe.Form.Row>
              </>
            )}
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
            {isInForm["player"] && (
              <ReRe.Form.Row>
                {Label(
                  "player",
                  "review_type" in form
                    ? playerDisplayName[
                        form["review_type"] as keyof typeof playerDisplayName
                      ]
                    : "출연자"
                )}
                {InputText("player")}
              </ReRe.Form.Row>
            )}
            {isInForm["director"] && (
              <ReRe.Form.Row>
                {Label("director", "감독")}
                {InputText("director")}
              </ReRe.Form.Row>
            )}
            {isInForm["publisher"] && (
              <ReRe.Form.Row>
                {Label(
                  "publisher",
                  publisherDisplayName[
                    form["review_type"] as keyof typeof playerDisplayName
                  ]
                )}
                {InputText("publisher")}
              </ReRe.Form.Row>
            )}
            {isInForm["publish_date"] && (
              <ReRe.Form.Row>
                {Label(
                  "publish_date",
                  publlishDateDisplayName[
                    form["review_type"] as keyof typeof playerDisplayName
                  ]
                )}
                {InputDate("publish_date", ReviewDateFormatter(new Date()))}
              </ReRe.Form.Row>
            )}
          </ReRe.Form.Fieldset>

          {isInForm["review_detail"] && (
            <ReRe.Form.Fieldset>
              <ReviewFormDetail
                formDetail={formDetail}
                setFormDetail={setFormDetail}
              />
            </ReRe.Form.Fieldset>
          )}

          <ReRe.Form.Fieldset>
            {isInForm["favorite_line"] && (
              <ReRe.Form.Row>
                {Label("favorite_line", "인용")}
                {TextArea("favorite_line")}
              </ReRe.Form.Row>
            )}
            {isInForm["detail_review_text"] && (
              <ReRe.Form.Row>
                {Label("detail_review_text", "내용")}
                {TextArea("detail_review_text")}
              </ReRe.Form.Row>
            )}
          </ReRe.Form.Fieldset>
        </ReRe.Receipt.Body>

        <ReRe.Form.SaveBtnWrapper>
          <ReRe.Form.SaveBtn>save</ReRe.Form.SaveBtn>
        </ReRe.Form.SaveBtnWrapper>
      </form>
    </div>
  );
};

export default ReviewForm;
