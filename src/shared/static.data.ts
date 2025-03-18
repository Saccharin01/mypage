import { IstaticData } from "./interface/static.interface";

export const staticData: IstaticData[] = [
  {
    title: "LoA Music",
    description: "가장 좋아하는 게임을 이용한 웹 어플리케이션 제작",
    stack: ["Next.js", "mongoDB Atlas", "AWS S3", "AWS Amplify"],
    img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/LoA_Music/loaMusic_index.webp",
    details: {
      introduce: "좋아하는 게임을 소개하고자 제작한 페이지입니다.",
      params:
        "팀 프로젝트를 거치며 스스로가 많이 부족하다고 느꼈던 경험이 있습니다. 그 경험을 바탕으로 내가 좋아하는 게임을 소개하는 나만의 웹 페이지, 웹 어플리케이션을 만들어보자 생각해 시작한 프로젝트입니다. 막상 개발 후에 배포를 해놓으니 반응형 디자인을 고려하지 않아 모바일 환경에서의 접근이 어려웠고, 반응형 디자인을 어설프게나마 추가했을 때에는 모바일 환경에서 다루기 어려운 드래그 앤 드랍 이벤트를 처리하는 방안을 생각해야 했었던 기억이 납니다.",
      about: [
        {
          placeholder: "notion",
          link: "https://delicious-corn-899.notion.site/LoA-Music-12db1f89bb838031905cd85b94e3d0d2",
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
          title: "메모제이션",
          params:
            "현 상황에서는 데이터의 크기가 작아 문제가 없지만, 데이터가 커지는 상황을 고려해 useMemo 훅을 이용해 \n불필요한 리랜더링 비용을 감소합니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/LoA_Music/LoA_Music_useMemo.webp",
        },
        // {
        //   title: "LRU 캐싱 인스턴스",
        //   params:
        //     "AWS Amplify 배포 환경은 람다 기반의 서비스이기 때문에 서버 생태가 초기화 되는 문제를 해결하고자 전역으로 LRU 인스턴스를 생성해 선언했습니다. 정작 의도한 바와 다르게 캐시 인스턴스는 서버상태의 초기화를 막을 수는 없었지만, 데이터베이스에 빈번한 요청을 하지 않아도 된다는 점에서는 나름 효용이 있다고 판단, 삭제 보류 중입니다.",
        //   img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/LoA_Music/LoA_Music_LRU_globals.webp",
        // },
        {
          title: "페이지네이션",
          params:
            "서버에 다량의 데이터를 요청하는 페이지이기 때문에 페이지네이션을 고려했습니다. \n최초 요청 시에는 15개의 데이터만 요청하고, 스크롤 이벤트를 감지해서 쓰레스홀드 이하로 내려갔을 때 추가적으로 데이터를 불러오게 조치했습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/LoA_Music/LoA_Music_Pagination.webp",
        },
        {
          title: "메일 전송",
          params:
            "요청사항이 n개 이상 제출되었을 경우, 개발자의 계정에 메일이 전송될 수 있도록 내부 로직을 구성했습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/LoA_Music/LoA_Music_SMTP.webp",
        },
        {
          title: "이벤트 분기 처리",
          params:
            "반응형 디자인이 사용자의 뷰포트를 기반으로 CSS를 조정하는 것에서 착안해 쓰레스홀드를 잡고, 뷰포트가 해당 값 이하라면 모바일 환경이라 생각해 드래그 앤 드랍 이벤트가 아닌 클릭 이벤트로 처리했습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/LoA_Music/event_condition.jpg",
        },
        {
          title: "중복 메일 방지",
          params:
            "n개 이상 이라는 로직을 적용했기 때문에, 중복으로 메일이 전송 될 수 있습니다. 해서, 데이터베이스에 메일 전송 일시를 기록하고 \n메일 전송 이벤트가 트리거 되면 데이터베이스에서 참조하여 저장해놓은 일자와 비교해서 동일한 날짜라면 전송하지 않습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/LoA_Music/LoA_Music_SMTP_log.webp",
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
          link: "https://delicious-corn-899.notion.site/127b1f89bb8381c88a25c96fec25f5f0",
        },
        {
          placeholder: "Github",
          link: "https://github.com/KDT-IaaS-Class-Two-Group/KDT-IaaS-2-ProjectB-2team/tree/Saccharin01/issue10",
        },
        {
          placeholder: "Deploy",
          link: "https://ml.saccharin01.com/",
        },
      ],
      sampleImg: [
        {
          title: "클라이언트 페이지",
          params:
            "클라이언트에서 원하는 사진을 선택하고, 해당 사진 제출할 수 있는 페이지",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/taison/taison_web_page.webp",
        },

        {
          title: "모델 학습치 점검",
          params:
            "이미지 인식 모델을 학습시키는 과정에서 해당 모델의 학습이 재대로 이뤄젔는지 관측하고 더 나은 정확도를 이끌어 낼 수 있도록 그래프를 보며 수정 보완 작업을 진행했습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/taison/taison_serkleran.webp",
        },
        {
          title: "모델 산출치 JSON화",
          params:
            "현 프로젝트에서는 이미지 인식 모델에서 나온 객체값을 이용해 강화 학습의 에이전트로 활용하고 있습니다.\n 강화 학습 모델에서는 학습된 가중치를 이용해서 환경 정의에서 최적의 결과를 산출하기 위해 액션을 취하는데 그 결과의 일부 스크린 샷 입니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/taison/taison_request_log1.webp",
        },
      ],
    },
  },
  {
    title: "Taison Tiger Crawler",
    description:
      "머신러닝 프로젝트에 이용할 데이터셋을 만들기 위한 크롤러 작성",
    stack: ["Python", "bs4"],
    img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/DataCrawler/ufc_fighter_profile.jpg",
    details: {
      introduce: '"크롤러를 이용해볼 수 있지 않을까"',
      params:
        "사전에 제작되어있는 데이터셋을 활용하는 편이 훨씬 올바른 접근이였을 수 있지만, 이왕 하는 거 '어렵게' 해보자는 마음에 기초 데이터셋부터 만들기 위해 웹 크롤러를 이용해 데이터셋을 생성했습니다.",
      about: [
        {
          placeholder: "GitHub",
          link: "https://github.com/Saccharin01/tensorFlow",
        },
      ],
      sampleImg: [
        {
          title: "DOM 구조 파악",
          params:
            "UFC 선수들의 바디프로필을 소개하는 공식 페이지를 통해 이미지와 원하는 데이터를 추출하고자 DOM 구조와 페이지네이션 패턴을 파악했습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/DataCrawler/robots.jpg",
        },
        {
          title: "robots.txt",
          params:
            "크롤링이라는 작업은 어찌보면 회색지대에 접해있는 작업이라고 생각합니다. 이럴 때에는 제작자가 허용한 부분과 허용하지 않은 부분을 파악하고 존중하는것이 올바른 행동이라고 생각합니다. 해당 규칙이 적혀있는 robots.txt 의 내용을 기반으로 웹 크롤링을 작업합니다",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/DataCrawler/robots.jpg",
        },
        {
          title: "지도학습을 위한 데이터 라벨링",
          params:
            "마련된 데이터를 기반으로 모델을 학습시키기 위한 데이터를 직접 라벨링해봤습니다. 최초 계획 단계에서는 이미지 인식 모델만 있어도 충분했지만, 시뮬레이션까지 돌려보자는 의견에 따라 강화 학습 모델이 필요했고 그 모델을 사용하기 위해 여러번 튜닝하고 최적의 모델을 생성하고자 노력했습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/hackathon/hackathon2.webp",
        },
      ],
    },
  },
  {
    title: "Re : Taison Tiger",
    description: "팀 프로젝트 개선 그리고 배포 시도",
    stack: ["Next.js", "FastAPI", "Docker", "Ngnix", "Amplify", "EC2"],
    img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/taison/taison_index.webp",
    details: {
      introduce: "",
      params:
        "교육기간 중 제작한 머신러닝 프로젝트는 과정 말기에 시작되어 시간도 촉박하고 참여율도 저조했습니다. 해당 프로젝트의 팀장으로써, 비록 부족한 모습일지라도 이 프로젝트를 배포해보자, 고쳐보자 라는 오기가 발동해 개선과 배포를 이어가고 있습니다.",
      about: [
        {
          placeholder: "notion",
          link: "https://delicious-corn-899.notion.site/Notion-Page-123b1f89bb838053b8eae833aebc7e68#162b1f89bb8380d3b811c54faed79ae7",
        },
        {
          placeholder: "Github",
          link: "https://github.com/KDT-IaaS-Class-Two-Group/KDT-IaaS-2-ProjectB-2team/tree/Saccharin01/issue10",
        },
        {
          placeholder: "Deploy",
          link: "https://ml.saccharin01.com/",
        },
      ],
      sampleImg: [
        {
          title: "모델 마이그레이션",
          params:
            "배포 환경에서 TensorFlow나 Pytorch는 너무 무겁다고 생각했습니다. 모델을 학습시키기 위한 도구가 필요한 게 아니라, 모델을 구동하기 위한 프로세스만 필요했다고 생각했기 때문에 무거운 프레임워크를 덜어내고 ONNX 를 이용해 모델을 구동시키기로 결정 했습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/taison/taison_convert.jpg",
        },
        {
          title: "Docker 컨테이너 배포",
          params:
            "Nest.js 로 작성한 서버를 배포하려고 할 때, node 환경을 구축하고 모듈을 설치하고 코드를 구동시키는 과정이 굉장히 불편했습니다. 이 과정을 Docker를 이용해 컨테이너로 만들면 훨씬 간편할 것 같아 해당 방법을 적용했습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/taison/taison_deploy.webp",
        },
        {
          title: "리버스 프록시 Ngnix 사용",
          params:
            "어찌저찌 컨테이너를 배포한다고 해도, 내부 포트를 직접적으로 노출하는 것은 보안상의 큰 문제라고 생각했습니다. 이에, 서버의 앞단에 서버의 요청을 대신 전달받고 판단해주는 Ngnix를 설치해 보안을 강화하고자 했습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/taison/taison_ngnix.jpg",
        },
        {
          title: "자동화 스크립트의 공격 방어",
          params:
            "무사히 서버를 배포했으나, 자동화 도구가 악의적인 접근과 프로젝트의 민감한 파일을 탐색하려는 공격 시도를 포착했습니다. 이들을 방어하기 위해 GeoIP 를 사용, 한국이 아닌 지역에서의 접근을 차단하고 Ngnix 에서 특정 파일의 요청이나 상위 디렉토리로 이동하려는 시도를 하는 IP를 추적, 해당 IP가 잦은 접속 요청을 할 경우 블랙리스트를 생성해 접속을 차단하도록 조치하였습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/taison/attack_log.webp",
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
          params:
            "ERP프로젝트의 메인 페이지입니다. 각 태그를 클릭 할 때 쿼리가 빌드되어 백엔드 서버로 전송됩니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/CyberFunc/cyberfunc_index.webp",
        },
        {
          title: "검색 페이지",
          params:
            "검색 결과를 나타내는 페이지 입니다. 이 페이지에서는 배열로 전송되는 데이터의 길이값을 제한하여 \n 무한 스크롤 이벤트를 구현해 서버의 부담을 줄이고자 노력했습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/CyberFunc/cyberfunc_sample2.webp",
        },
        {
          title: "팀 노션 페이지에 기록",
          params:
            "학습 결과를 팀 노션 페이지에 공유해서 서로의 학습 및 작업 공백에 누락이 없도록 노력했습니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/CyberFunc/cyberfunc_notion.jpg",
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
          link: "https://delicious-corn-899.notion.site/12db1f89bb83805c8895d0ce4652be7a",
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
          params:
            "바닐라 자바스크립트, HTML, CSS를 사용해서 제작한 첫 사이드 프로젝트.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/GoodStart/good_start2.webp",
        },
        {
          title: "조건 변수 사용",
          params:
            "조건문을 구성하는 과정에서 조건 변수를 사용해 이벤트를 처리합니다. 이벤트 대상이 아닌 요소를 클릭하면 조건 변수를 초기화 해서 모든 이벤트를 초기화합니다.",
          img: "https://saccharinportfolio.s3.ap-northeast-2.amazonaws.com/GoodStart/good_start1.webp",
        },
      ],
    },
  },
];
