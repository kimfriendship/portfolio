import Boree from "../Asset/boree.jpeg";
import Slam from "../Asset/slam.gif";
import Horror from "../Asset/horror.gif";

const projectData = [
  {
    id: 1,
    name: "ghost leg",
    thumbnail: Boree,
    detail: "캔버스와 리액트를 활용하여 만든 사다리 타기 게임입니다. ",
    date: "2020.12.02 - 2020.12.08",
    topic: "랜덤 사다리 타기",
    member: "개인 프로젝트",
    techStack: ["Canvas", "JavaScript", "React", "Styled-Component"],
    github: "https://github.com/kimfriendship/ghost-leg",
    page: "https://kimfriendship.github.io/ghost-leg/",
    images: [],
    features: [
      "플레이어 수에 따른 랜덤 프로필과 랜덤 사다리 설정",
      "사다리 게임 로직을 리액트의 상태 관리와 자바스크립트로 구현",
      "캔버스를 활용하여 사다리 경로를 그리기 기능 구현",
      "웹 접근성 지침에 부합하도록 마크업",
      "최적화를 통해 리렌더링 최소화 및 성능 향상",
      "PC와 Mobile 버전으로 반응형 구현",
    ],
  },
  {
    id: 2,
    name: "airdnd",
    thumbnail: Slam,
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
    images: [],
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
  },
  {
    id: 3,
    name: "time to travel",
    thumbnail: Horror,
    detail: "바닐라 스크립트로 작성한 여행 스케줄 관리 프로젝트입니다.",
    date: "2020.04.20 - 2020.04.24",
    topic: "여행 스케줄 관리 앱",
    member: "Frontend 3명",
    techStack: ["JSON Server", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/kimfriendship/time-to-travel",
    page: "",
    images: [],
    features: [
      "JSON server를 이용하여 서버 통신",
      "여행 스케줄 타임라인을 구현",
      "여행지 정보 제공 및 예약 정보를 저장할 수 있는 기능 구현",
      "여행지별 목록을 나열할 수 있는 기능 구현",
    ],
  },
];

export default projectData;
