import GL_Game from "../Asset/GL_Game.png";
import GL_Home from "../Asset/GL_Home.png";
import GL_Result from "../Asset/GL_Result.png";
import GL_Thumb from "../Asset/GL_Thumb.png";
import TTT_Home from "../Asset/TTT_Home.png";
import TTT_Timeline from "../Asset/TTT_Timeline.png";
import TTT_Info from "../Asset/TTT_Info.png";
import TTT_Modal from "../Asset/TTT_Modal.png";
import TTT_Thumb from "../Asset/TTT_Thumb.png";
import DND_Home from "../Asset/DND_Home.png";
import DND_Bookmark from "../Asset/DND_Bookmark.png";
import DND_Cards from "../Asset/DND_Cards.png";
import DND_Filter from "../Asset/DND_Filter.png";
import DND_Map from "../Asset/DND_Map.png";
import DND_Thumb from "../Asset/DND_Thumb.png";
import DND_Modal from "../Asset/DND_Modal.png";

const projectData = [
  {
    id: 1,
    name: "ghost leg",
    thumbnail: GL_Thumb,
    detail: "캔버스와 리액트를 활용하여 만든 사다리 타기 게임입니다. ",
    date: "2020.12.02 - 2020.12.08",
    topic: "랜덤 사다리 타기",
    member: "개인 프로젝트",
    techStack: ["Canvas", "JavaScript", "React", "Styled-Component"],
    github: "https://github.com/kimfriendship/ghost-leg",
    page: "https://kimfriendship.github.io/ghost-leg/",
    images: [
      {
        src: GL_Home,
        alt: "플레이어 수 설정 화면",
        caption: "플레이어 수에 따라 랜덤으로 프로필과 사다리 결정",
      },
      {
        src: GL_Game,
        alt: "사다리 경로 화면",
        caption: "케이스를 모두 입력한 뒤 게임을 시작하면 사다리 경로가 나타남",
      },
      {
        src: GL_Result,
        alt: "게임 결과 화면 ",
        caption: "전체 결과를 한번에 볼 수 있음",
      },
    ],
    features: [
      "플레이어 수에 따른 랜덤 프로필과 랜덤 사다리 설정",
      "사다리 게임 로직을 리액트의 상태 관리와 자바스크립트로 구현",
      "캔버스를 활용하여 사다리 경로를 그리기 기능 구현",
      "웹 접근성 지침에 부합하도록 마크업",
      "최적화를 통해 리렌더링 최소화 및 성능 향상",
      "PC와 Mobile 버전으로 반응형 구현",
    ],
    style: {
      height: "55rem",
    },
  },
  {
    id: 2,
    name: "airdnd",
    thumbnail: DND_Thumb,
    detail:
      "직접 주도하여 프론트와 백 개발자들이 함께 작업한 airbnb 클론 프로젝트입니다.",
    date: "2020.08.03 - 2020.09.11",
    topic: "airbnb 클론 프로젝트",
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
        caption: "검색 조건에 맞는 숙소들을 리스트로 정렬하고 지도에 마커 표시",
      },
      {
        src: DND_Filter,
        alt: "숙소 필터 팝업 화면",
        caption: "환불 정책, 숙소 유형, 요금 필터를 설정하여 숙소 검색",
      },
      {
        src: DND_Cards,
        alt: "지도를 없앤 카드형 숙소 리스트 화면",
        caption: "지도 없이 숙소 리스트를 카드형으로 볼 수 있도록 설정",
      },
      {
        src: DND_Modal,
        alt: "필터 모달창 화면",
        caption: "추가적인 필터를 설정하기 위한 모달",
      },
      {
        src: DND_Bookmark,
        alt: "숙소 북마크 모달 화면",
        caption: "북마크 목록을 생성하여 마음에 드는 숙소를 북마크에 추가",
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
    style: {
      height: "41rem",
    },
  },
  {
    id: 3,
    name: "time to travel",
    thumbnail: TTT_Thumb,
    detail: "바닐라 스크립트로 작성한 여행 스케줄 관리 프로젝트입니다.",
    date: "2020.04.20 - 2020.04.24",
    topic: "여행 스케줄 관리 앱",
    member: "Frontend 3명",
    techStack: ["JSON Server", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/kimfriendship/time-to-travel",
    page: "",
    images: [
      {
        src: TTT_Home,
        alt: "게임 결과 화면 ",
        caption: "플레이어 수에 따른 랜덤 프로필과 랜덤 사다리 설정",
      },
      {
        src: TTT_Modal,
        alt: "게임 결과 화면 ",
        caption: "플레이어 수에 따른 랜덤 프로필과 랜덤 사다리 설정",
      },
      {
        src: TTT_Timeline,
        alt: "게임 결과 화면 ",
        caption: "플레이어 수에 따른 랜덤 프로필과 랜덤 사다리 설정",
      },
      {
        src: TTT_Info,
        alt: "게임 결과 화면 ",
        caption: "플레이어 수에 따른 랜덤 프로필과 랜덤 사다리 설정",
      },
    ],
    features: [
      "JSON server를 이용하여 서버 통신",
      "여행 스케줄 타임라인을 구현",
      "여행지 정보 제공 및 예약 정보를 저장할 수 있는 기능 구현",
      "여행지별 목록을 나열할 수 있는 기능 구현",
    ],
    style: {
      objectPosition: "right",
      height: "55rem",
    },
  },
];

export const colors = {
  html5: "#E24F27",
  css3: "#1472B6",
  js: "#EFC332",
  react: "#44B8D8",
  redux: "#764ABC",
  styledComponents: "#DB7091",
  webpack: "#1A74B9",
  figma: "#11CF82",
  git: "#EF5132",
};

export const actions = {
  GET_IMAGES: "GET_IMAGES",
  MOVE_NEXT: "MOVE_NEXT",
  MOVE_BEFORE: "MOVE_BEFORE",
  END_MOVE: "END_MOVE",
};

export default projectData;
