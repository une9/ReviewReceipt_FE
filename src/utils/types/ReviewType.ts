// enums
export const ReviewTypeObj = {
    MOV: "MOVIE",
    DRM: "DRAMA",
    BOOK: "BOOK",
    SHOW: "SHOW",
} as const;
export type ReviewType = keyof typeof ReviewTypeObj;

// export enum ShowTypeEnum {

// }

// interfaces
export interface Review {
    review_id: number,
    review_title: string,
    review_type: ReviewType,
    user_id: number,
    abstract_txt: string,
    director: string,
    do_date: Date,
    favorite_line: string,
    player: string,
    publish_year: string,
    publisher: string,
    place: string,
    create_date: Date,
    modify_date: Date,
    publish_date: Date,
    review_detail_id: number | null,
    show_type: string | null,
    is_public: boolean,
    status: boolean,
    yes_detail: boolean
};

export interface ReviewDetail {
    detail_review_text: string,
    list_1_desc: string,
    list_1_score: number,
    list_1_score_total: number,
    list_1_title: string,
    list_2_desc: string,
    list_2_score: number,
    list_2_score_total: number,
    list_2_title: string,
    list_3_desc: string,
    list_3_score: number,
    list_3_score_total: number,
    list_3_title: string,
    list_4_desc: string,
    list_4_score: number,
    list_4_score_total: number,
    list_4_title: string,
    list_5_desc: string,
    list_5_score: number,
    list_5_score_total: number,
    list_5_title: string,
}

export interface ReviewExtend extends Review, ReviewDetail {
    
}