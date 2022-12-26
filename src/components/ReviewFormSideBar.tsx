import { ReviewReceipt as ReRe } from "../emotion/styles";
import { Dispatch, SetStateAction } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { OptionalInputs } from "./ReviewForm";

interface ReviewFormSideBarProps {
  isPublic: boolean,
  setIsPublic: Dispatch<SetStateAction<boolean>>,
  isInForm: OptionalInputs,
  setIsInForm: Dispatch<SetStateAction<OptionalInputs>>
}

const ReviewFormSideBarSectionIsPublic = ({
  isPublic,
  setIsPublic
}: {
  isPublic: boolean,
  setIsPublic: Dispatch<SetStateAction<boolean>>,
}) => {
  const handleIsPublic = () => setIsPublic((prev) => !prev);

  return (
    <>
      <ReRe.Form.SideBar.InputWrapper>
        <ReRe.Form.SideBar.Input
          type="radio"
          id="isPublic"
          checked={isPublic}
          name="publicCheck"
          onChange={handleIsPublic}
        />
        <ReRe.Form.SideBar.Label htmlFor="isPublic">
          {isPublic ? (
            <i className="bi bi-unlock-fill" />
          ) : (
            <i className="bi bi-unlock" />
          )}
          공개
        </ReRe.Form.SideBar.Label>
      </ReRe.Form.SideBar.InputWrapper>
      <ReRe.Form.SideBar.InputWrapper>
        <ReRe.Form.SideBar.Input
          type="radio"
          id="isPrivate"
          checked={!!!isPublic}
          name="publicCheck"
          onChange={handleIsPublic}
        />
        <ReRe.Form.SideBar.Label htmlFor="isPrivate">
          {isPublic ? (
            <i className="bi bi-lock" />
          ) : (
            <i className="bi bi-lock-fill" />
          )}
          비공개
        </ReRe.Form.SideBar.Label>
      </ReRe.Form.SideBar.InputWrapper>

      <ReRe.Form.SideBar.InputDesc>
        {isPublic
          ? "내가 작성한 리뷰를 다른 사용자도 볼 수 있어요"
          : "이 리뷰 나만 볼 수 있어요 내 눈에만 보여요"}
      </ReRe.Form.SideBar.InputDesc>
    </>
  );
};

const ReviewFormSideBar = ({
  isPublic,
  setIsPublic,
  isInForm,
  setIsInForm
}: ReviewFormSideBarProps) => {

  const optionalToggleIcons: {id: keyof OptionalInputs, icon: null}[] = [
    {
      id: "director",
      icon: null
    },
    {
      id: "favorite_line",
      icon: null
    },
    {
      id: "player",
      icon: null
    },
    {
      id: "publisher",
      icon: null
    },
    {
      id: "publish_date",
      icon: null
    },
    {
      id: "detail_review_text",
      icon: null
    },
    {
      id: "review_detail",
      icon: null
    },
  ]

  return (
    <ReRe.Form.SideBar.Body>
      <ReRe.Form.SideBar.Ul>
        <ReRe.Form.SideBar.Li>
            <ReviewFormSideBarSectionIsPublic 
                isPublic={isPublic}
                setIsPublic={setIsPublic}
            />
        </ReRe.Form.SideBar.Li>

        <ReRe.Form.SideBar.SepLine />

        <ReRe.Form.SideBar.Li>
          {
            optionalToggleIcons
            .map((item, i) => (
              <ReRe.Form.SideBar.ToggleBtn
                key={item.id}
                onClick={() => {
                  const newForm :OptionalInputs = {...isInForm};
                  Object.assign(newForm, {[item.id]: !isInForm[item.id]});
                  return setIsInForm(newForm);
                }}
              >
                {item.id}
              </ReRe.Form.SideBar.ToggleBtn>
            ))
          }
            
        </ReRe.Form.SideBar.Li>
      </ReRe.Form.SideBar.Ul>
    </ReRe.Form.SideBar.Body>
  );
};

export default ReviewFormSideBar;
