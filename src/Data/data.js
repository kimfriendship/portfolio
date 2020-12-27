import GL_Game from "../Asset/GL_Game.png";
import GL_Home from "../Asset/GL_Home.png";
import GL_Result from "../Asset/GL_Result.png";
import TTT_Home from "../Asset/TTT_Home.png";
import TTT_Timeline from "../Asset/TTT_Timeline.png";
import TTT_Info from "../Asset/TTT_Info.png";
import TTT_Modal from "../Asset/TTT_Modal.png";
import DND_Bookmark from "../Asset/DND_Bookmark.png";
import DND_Cards from "../Asset/DND_Cards.png";
import DND_Filter from "../Asset/DND_Filter.png";
import DND_Map from "../Asset/DND_Map.png";
import DND_Modal from "../Asset/DND_Modal.png";
import DND_Big from "../Asset/DND_Big.png";
import DND_Small from "../Asset/DND_Small.png";
import GL_Big from "../Asset/GL_Game.png";
import GL_Small from "../Asset/GL_Small.png";
import TTT_Big from "../Asset/TTT_Big.png";
import TTT_Small from "../Asset/TTT_Small.png";
import { css } from "styled-components";

const data = [
  {
    id: 1,
    name: "airdnd",
    detail:
      "직접 주도하여 프론트와 백 개발자들이 함께 작업한 airbnb 클론 프로젝트입니다.",
    date: "2020.08.03 - 2020.09.11",
    member: "Frontend 4명, Backend 4명",
    techStack: [
      "JavaScript",
      "React",
      "Redux",
      "Redux-Thunk",
      "Styled-Component",
    ],
    github: "https://github.com/kimfriendship/airdnd-frontend",
    page: "",
    images: [
      {
        src: DND_Map,
        alt: "숙소 리스트와 지도 화면",
      },
      {
        src: DND_Filter,
        alt: "숙소 필터 팝업 화면",
      },
      {
        src: DND_Cards,
        alt: "지도를 없앤 카드형 숙소 리스트 화면",
      },
      {
        src: DND_Modal,
        alt: "필터 모달창 화면",
      },
      {
        src: DND_Bookmark,
        alt: "숙소 북마크 모달 화면",
      },
    ],
    features: [
      "Redux를 통해 필터 조건, 페이지, 지도 범위 등 검색 페이지와 관련된 모든 state 관리",
      "숙소 리스트에 있는 숙소들을 지도 상에 각각의 위도 경도에 맞게 숙소 가격 마커 렌더",
      "새로운 북마크 리스트 추가 및 북마크 설정/해제 기능 구현",
      "숙소 이미지를 보여주는 infinity carousel을 반응형으로 구현",
      "검색 결과를 리스트형/카드형으로 선택적으로 볼 수 있는 기능 구현",
      "숙소 유형과 숙소 가격 범위 등의 조건을 설정 할 수 있는 필터 팝업 구현 ",
      "검색 조건을 query로 관리하여 refresh 되더라도 상태 유지",
      "3가지 뷰포트를 기준으로 한 반응형 구현",
    ],
    carouselSize: {
      paddingBottom: 50,
    },
    bigImg: {
      animation: "fadeInLeft",
      src: DND_Big,
      alt: "airdnd 프로젝트 리스트형 검색 페이지 썸네일",
      width: "80%",
    },
    smallImg: {
      animation: "fadeInRight",
      src: DND_Small,
      alt: "airdnd 프로젝트 카드형 검색 페이지 썸네일",
      width: "30%",
      position: css`
        bottom: -10rem;
        right: 0;
      `,
    },
    tagStyle: {
      bottom: "-8rem",
      left: 0,
    },
    mainStyle: {
      bottom: "30rem",
    },
  },
  {
    id: 2,
    name: "ghost-leg",
    detail: "캔버스와 리액트를 활용하여 만든 사다리 타기 게임입니다. ",
    date: "2020.06.20 - 2020.06.29",
    member: "개인 프로젝트",
    techStack: ["Canvas", "JavaScript", "React", "Styled-Component"],
    github: "https://github.com/kimfriendship/ghost-leg",
    page: "https://kimfriendship.github.io/ghost-leg/",
    images: [
      {
        src: GL_Home,
        alt: "플레이어 수 설정 화면",
      },
      {
        src: GL_Game,
        alt: "사다리 경로 화면",
      },
      {
        src: GL_Result,
        alt: "게임 결과 화면 ",
      },
    ],
    features: [
      "웹 접근성 지침에 부합하도록 마크업 (ver2.1.0)",
      "최적화를 통해 리렌더링 최소화 및 성능 향상 (ver2.1.0)",
      "PC와 Mobile 버전으로 반응형 구현 (ver2.1.0)",
      "플레이어 수에 따른 랜덤 프로필과 랜덤 사다리 설정",
      "사다리 게임 로직을 리액트의 상태 관리와 자바스크립트로 구현",
      "캔버스를 활용하여 사다리 경로를 그리기 기능 구현",
    ],
    carouselSize: {
      paddingBottom: 60,
    },
    bigImg: {
      animation: "fadeInRight",
      src: GL_Big,
      alt: "ghost-leg 프로젝트 게임 페이지 썸네일",
      extraStyle: css`
        margin-left: 30%;
      `,
    },
    smallImg: {
      animation: "fadeInLeft",
      src: GL_Small,
      alt: "ghost-leg 프로젝트 결과 페이지 썸네일",
      position: css`
        bottom: 4rem;
        left: 0;
      `,
    },
    tagStyle: {
      top: "15%",
      left: 0,
    },
    mainStyle: {
      bottom: "20rem",
    },
  },
  {
    id: 3,
    name: "time-to-travel",
    detail: "바닐라 스크립트로 작성한 여행 스케줄 관리 프로젝트입니다.",
    date: "2020.04.20 - 2020.04.24",
    member: "Frontend 3명",
    techStack: ["JSON Server", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/kimfriendship/time-to-travel",
    page: "",
    images: [
      {
        src: TTT_Home,
        alt: "홈 화면",
      },
      {
        src: TTT_Modal,
        alt: "여행 일정 추가 모달창",
      },
      {
        src: TTT_Timeline,
        alt: "여행 타임라인 화면",
      },
      {
        src: TTT_Info,
        alt: "여행 항공권 및 숙소 정보 화면",
      },
    ],
    features: [
      "JSON server를 이용하여 서버 통신",
      "여행 스케줄 타임라인을 구현",
      "여행지 정보 제공 및 예약 정보를 저장할 수 있는 기능 구현",
      "여행지별 목록을 나열할 수 있는 기능 구현",
    ],
    carouselSize: {
      paddingBottom: 60,
    },
    bigImg: {
      animation: "fadeInLeft",
      src: TTT_Big,
      alt: "time-to-travel 프로젝트 홈 화면 썸네일",
    },
    smallImg: {
      animation: "fadeInRight",
      src: TTT_Small,
      alt: "time-to-travel 프로젝트 타임라인 화면 썸네",
      position: css`
        bottom: -10rem;
        right: 0;
      `,
    },
    tagStyle: {
      top: "18%",
      right: 0,
      textAlign: "right",
    },
    mainStyle: {
      bottom: "10rem",
    },
  },
];

export default data;
