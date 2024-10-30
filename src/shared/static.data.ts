import { IstaticData } from "./interface/static.interface";

export const staticData: IstaticData[] = [
  {
    title: "LoA Music",
    description:
      "팀 프로젝트를 진행하며 학습한 내용을 이용해서 스스로의 도메인으로 배포까지 해보는 개인 프로젝트",
    stack: ["next", "mongoDB Atlas", "AWS S3", "AWS Amplify"],
    img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/LoA_Music/loaMusic_index.webp",
    details: {
      introduce:
        "팀 프로젝트에서 많이 부족했다고 생각되는 부분들을 모아 제가 좋아하는 도메인을 활용해 페이지를 제작하는 프로젝트입니다.",
      params:
        "최초 구상은 Next를 이용해 간단한 페이지를 만드는 것이였으나, 개발 과정에서 추가되는 기능들과 배포 환경에서의 문제점 때문에 확장되는 기능을 관리하기 위해\n 각 기능을 모듈별로 세분화 하고 검증했습니다. \n\n • 요청사항이 n개 이상 쌓였을 때 메일 알림이 오는 기능\n • 데이터베이스에 기록되어있는 일자를 기준으로 중복 메일이 전송되지 않게 검증하는 기능\n •  각 이미지 요소를 메모제이션 하는 기능 들이 들어가 있습니다.",
      about: [
        {
          placeholder: "notion",
          link: "https://delicious-corn-899.notion.site/LoA-Music-123b1f89bb83810f9d9fd6506551536a",
        },
        {
          placeholder: "GitHub",
          link: "https://github.com/Saccharin01/LoA_Music",
        },
        {
          placeholder: "Deploy Link",
          link: "https://www.saccharin01.com/",
        },
      ],
      sampleImg: [
        {
          title: "성능 고려",
          params: "현 상황에서는 데이터의 크기가 작아 문제가 없지만, 데이터가 커지는 상황을 고려해 useMemo 훅을 이용해 \n불필요한 리랜더링 비용을 감소합니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/LoA_Music/LoA_Music_useMemo.webp",
        },
        {
          title: "LRU 캐싱 인스턴스",
          params: "AWS Amplify 배포 환경은 람다 기반의 서비스이기 때문에 서버 생태가 초기화 되는 문제를 해결하고자 전역으로 LRU 인스턴스를 생성해 선언했습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/LoA_Music/LoA_Music_LRU_globals.webp",
        },
        {
          title: "메일 전송",
          params: "요청사항이 n개 이상 제출되었을 경우, 개발자의 gmail 계정에 메일이 전송될 수 있도록 내부 로직을 구성했습니다. 여기에 결과값 사진도 들어가야 함!!!!",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/LoA_Music/LoA_Music_SMTP.webp",
        },
        {
          title: "중복 메일 방지",
          params: "n개 이상 이라는 로직을 적용했기 때문에, 중복으로 메일이 전송 될 수 있습니다. 해서, 데이터베이스에 메일 전송 일시를 기록하고 \n메일 전송 이벤트가 트리거 되면 LRU 인스턴스에 저장된 일자와 비교해서 동일한 날짜라면 전송하지 않습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/LoA_Music/LoA_Music_SMTP_log.webp",
        },
      ],
    },
  },
  {
    title: "Good Start",
    description:
      "HTML, CSS, JS를 핸들링 해보며 이벤트를 익히기 위해 작성한 html, js",
    stack: ["HTML", "CSS", "JavaScript"],
    img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/GoodStart/goodStart_SampleIMG.webp",
    details: {
      introduce:
        "웹 개발을 처음 배워보면서 가장 기억에 남는 사이드 프로젝트입니다.",
      params:
        "웹 페이지 라고 부르기에 모자람이 많은 작업물입니다만, 이 페이지를 통해 모듈화 구조, 외부에서 데이터를 불러올 수 있다는 개념, 이벤트의 버블링과 캡쳐링 등 많은 것을 깨우치게 된 프로젝트입니다. \n 아래의 버튼을 이용하시면 학습했던 내용의 기록물이나 Github pages 기능을 이용해서 배포중인 환경을 살펴 보실 수 있습니다.",
      about: [
        {
          placeholder: "notion",
          link: "https://delicious-corn-899.notion.site/129b1f89bb83816db18ee2a766eac8ce",
        },
        {
          placeholder: "Github",
          link: "https://github.com/Saccharin01/Good-Start",
        },
        {
          placeholder: "Github Pages",
          link: "https://saccharin01.github.io/Good-Start/",
        },
      ],
      sampleImg: [
        {
          title: "최초 시작",
          params: "바닐라 자바스크립트, HTML, CSS를 사용해서 제작한 첫 사이드 프로젝트.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/GoodStart/good_start2.webp",
        },
        {
          title: "조건 변수 사용",
          params: "조건문을 구성하는 과정에서 조건 변수를 사용해 이벤트를 처리합니다. 이벤트 대상이 아닌 요소를 클릭하면 조건 변수를 초기화 해서 모든 이벤트를 초기화합니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/GoodStart/good_start1.webp",
        },
      ],
    },
  },

  {
    title: "hackathon Challenge",
    description:
      "KDT 해커톤 참여를 위해 자료 조사 및 서류 작업 준비, 그리고 참여 신청까지 했지만 아쉽게도 본선에 진입하지 못한 프로젝트",
    stack: ["notion"],
    img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/hackathon/hackathon_index.webp",
    details: {
      introduce:
        "학원 수강 기간 중 해커톤이 개최된다는 소식을 듣고 직접 참여 해보기 위해 팀을 구성하고, 여러 방면으로 자료 조사 및 참여를 위해 준비한 기획입니다.",
      params:
        "안타깝게도 해당 해커톤은 본선 진출이 무산되었지만 평소 잘 모르던 도메인에 대한 자료 조사와 팀간 의견 조율을 진행했던 과정입니다.",
      about: [
        {
          placeholder: "notion",
          link: "https://kongukjae.notion.site/962c28d2a75f4d3e9da7379fba87a637?pvs=74",
        },
      ],
      sampleImg: [
        {
          title: "기획서 작성",
          params: "팀원들과 회의하고, 기초 자료를 수집해 참가를 위한 기획서를 작성 했었습니다. ",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/hackathon/hackathon1.webp",
        },
        {
          title: "기획서 작성 2",
          params: "",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/hackathon/hackathon2.webp",
        },
      ],
    },
  },
  {
    title: "CyberFunc ERP",
    description: "Next, Nest를 활용한 ERP 프로젝트",
    stack: ["Next", "Nest", "MonogoDB Atlas", "TanStack"],
    img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/CyberFunc/cyberfunc_index.webp",
    details: {
      introduce: "첫번째 팀 프로젝트 입니다.",
      params:
        "이 프로젝트에서는 그 동안 사용했던 자바스크립트가 아닌 타입스크립트로 마이그레이션을 진행하며 Next, Nest등의 프레임워크를 활용해 ERP 시스템을 구축하는 프로젝트입니다.\n\n 프로젝트를 진행하며 협업 상황에서 발생 할 수 있는 애로사항을 겪어보기도 하고, 본격적인 프레임워크를 활용해보는 프로젝트였습니다.\n 비록 해당 프로젝트에서 담당한 기능이 약소하나, 이 경험을 기점으로 저를 가장 크게 성장시킨 프로젝트 인 것 같아 가장 기억에 남습니다.",
      about: [
        {
          placeholder: "notion",
          link: "https://kongukjae.notion.site/CyberFunc-e95004a63d2e4d5d8366879c5d072e72",
        },
        {
          placeholder: "Github",
          link: "https://github.com/KDT-IaaS-Class-Two-Group/KDT-IaaS-2-ProjectA-2team",
        },
      ],
      sampleImg: [
        {
          title: "메인 페이지",
          params: "ERP프로젝트의 메인 페이지입니다. 각 태그를 클릭 할 때 쿼리가 빌드되어 백엔드 서버로 전송됩니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/CyberFunc/cyberfunc_index.webp",
        },
        {
          title: "검색 페이지",
          params: "검색 결과를 나타내는 페이지 입니다. 이 페이지에서는 배열로 전송되는 데이터의 길이값을 제한하여 \n 무한 스크롤 이벤트를 구현해 서버의 부담을 줄이고자 노력했습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/CyberFunc/cyberfunc_sample2.webp",
        },
        {
          title: "노션 페이지로 연결",
          params: "학습 결과를 팀 노션 페이지에 공유해서 서로의 학습 및 작업 공백에 누락이 없도록 노력했습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/CyberFunc/cyberfunc_notion.jpg",
        },
      ],
    },
  },
  {
    title: "Taison Tiger",
    description:
      "머신러닝 기술을 이용해서 모델을 학습시키고, 학습된 모델에서 나온 예측 값을 활용해 웹 페이지를 구성하는 팀 프로젝트",
    stack: ["Next.js", "FastAPI", "Pytorch", "Tensorflow"],
    img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/taison/taison_index.webp",
    details: {
      introduce: "언어를 파이썬으로 변경해서 진행한 머신러닝 프로젝트입니다.",
      params:
        '생소한 기능이였던 머신러닝 기술을 기반으로 웹 페이지를 제작하는 프로젝트입니다.\n생소한 언어, 생소한 기능을 탐구하며 적용하고, 아웃풋을 내기 위해 노력했었던 프로젝트로 첫번째 프로젝트의 경험을 기반으로 보완책을 마련해서 두번째 프로젝트를 진행하였습니다. \n\n 이 프로젝트를 통해서 "머신러닝 기술이던 새로운 언어던 학습해서 활용하면 그만이지!" 라는 자신감을 얻게 된 것 같습니다.',
      about: [
        {
          placeholder: "notion",
          link: "https://kongukjae.notion.site/90a7d282be5b4c4a9b6d209926ab8c53",
        },
        {
          placeholder: "Github",
          link: "https://github.com/KDT-IaaS-Class-Two-Group/KDT-IaaS-2-ProjectB-2team",
        },
      ],
      sampleImg: [
        {
          title: "웹 페이지",
          params: "사용자의 사진과 닉네임을 전달받는 웹 페이지입니다. 이 페이지에는 META사에서 출시한 SAM(Segment Anything) 을 도입해서 이미지를 잘라낼 계획입니다",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/taison/taison_web_page.webp",
        },
        {
          title: "모델 학습치 점검",
          params: "이미지 인식 모델을 학습시키는 과정에서 해당 모델의 학습이 재대로 이뤄젔는지 관측하고 더 나은 정확도를 이끌어 낼 수 있도록 그래프를 보며 수정 보완 작업을 진행했습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/taison/taison_serkleran.webp",
        },
        {
          title: "모델 산출치 JSON화",
          params: "현 프로젝트에서는 이미지 인식 모델에서 나온 객체값을 이용해 강화 학습의 에이전트로 활용하고 있습니다.\n 강화 학습 모델에서는 학습된 가중치를 이용해서 환경 정의에서 최적의 결과를 산출하기 위해 액션을 취하는데 그 결과의 일부 스크린 샷 입니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/taison/taison_request_log1.webp",
        },
      ],
    },
  },
];
