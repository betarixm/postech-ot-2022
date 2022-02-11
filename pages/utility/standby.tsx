import React from 'react'
import { NextPage } from 'next'
import styles from './styles.module.css'

interface Schedule {
  begin: Date
  end?: Date
  title: React.ReactNode
  speaker?: string
  subtitle:
    | 'null'
    | 'main'
    | 'class'
    | 'icebreaking'
    | 'missiontour'
    | 'club'
    | 'youtube'
}

const Subtitles = {
  null: '',
  main: "zoom 이름을 '분반 이름'으로 설정해주세요 (ex. 0분반 김포닉스)",
  class: '분반별 소그룹으로 이동해주세요',
  icebreaking: '분반별 줌 링크로 이동해주세요',
  missiontour: '분반별 줌 링크로 이동해주세요',
  club: '원하시는 단체의 소그룹으로 이동해주세요',
  youtube: '보이는 라디오 유투브 라이브로 이동해주세요'
}

const Schedules: Schedule[] = [
  {
    begin: new Date(Date.parse('2022-02-14T13:00:00+09:00')),
    title: '오프닝 영상 상영',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-14T13:10:00+09:00')),
    title: '전체 일정 및 새준위 소개',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-14T13:30:00+09:00')),
    title: '테마기획 소개',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-14T13:50:00+09:00')),
    title: '분반별 소그룹 이동',
    subtitle: 'class'
  },
  {
    begin: new Date(Date.parse('2022-02-14T14:00:00+09:00')),
    title: '분반별 만남 시간',
    subtitle: 'class'
  },
  {
    begin: new Date(Date.parse('2022-02-14T14:30:00+09:00')),
    title: '총장님 환영 인사',
    speaker: '김무환 총장님',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-14T14:40:00+09:00')),
    title: '무은재학부 교육체계 안내',
    speaker: '무은재학부 행정팀 신재성 선생님',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-14T15:00:00+09:00')),
    title: 'RC 생활 안내',
    speaker: 'RA회장 김영주',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-14T15:20:00+09:00')),
    title: '휴식',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-14T15:30:00+09:00')),
    title: 'IT인프라, 개인정보보호교육',
    speaker: '정보기술팀 김대헌 선생님',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-14T16:00:00+09:00')),
    title: 'POVIS 활용 교육',
    speaker: '정보전략팀 김형진 선생님',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-14T16:30:00+09:00')),
    title: 'POVIS 계정 생성 안내 및 휴식',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-14T17:00:00+09:00')),
    title: '동아리 탐방',
    subtitle: 'club'
  },
  {
    begin: new Date(Date.parse('2022-02-14T18:00:00+09:00')),
    title: '저녁식사',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-14T19:00:00+09:00')),
    title: '아이스브레이킹 준비',
    subtitle: 'icebreaking'
  },
  {
    begin: new Date(Date.parse('2022-02-14T20:00:00+09:00')),
    title: '아이스브레이킹',
    subtitle: 'icebreaking'
  },
  {
    begin: new Date(Date.parse('2022-02-14T22:30:00+09:00')),
    title: '새터 공지 및 피드백 설문조사',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-14T23:00:00+09:00')),
    title: '인솔자 회의',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-15T12:00:00+09:00')),
    title: '분반 지도교수 및 SA와의 만남',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-15T14:00:00+09:00')),
    title: '입학학생처장님 환영 인사',
    speaker: '윤건수 입학학생처장님',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-15T14:20:00+09:00')),
    title: '휴식',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-15T14:30:00+09:00')),
    title: '동문 교수님 특강',
    speaker: '신소재공학과 정운룡 교수님',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-15T15:00:00+09:00')),
    title: '테마기획 현황 발표',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-15T15:10:00+09:00')),
    title: (
      <span>
        새준위 영상 상영:
        <br />
        {'<나는 잘나가는 새내기다>'}
      </span>
    ),
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-15T15:20:00+09:00')),
    title: '휴식',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-15T15:30:00+09:00')),
    title: '미션투어',
    subtitle: 'missiontour'
  },
  {
    begin: new Date(Date.parse('2022-02-15T18:00:00+09:00')),
    title: '저녁식사',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-15T19:00:00+09:00')),
    title: '휴식',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-15T19:30:00+09:00')),
    title: '동아리 탐방 준비',
    subtitle: 'club'
  },
  {
    begin: new Date(Date.parse('2022-02-15T20:00:00+09:00')),
    title: '동아리 탐방',
    subtitle: 'club'
  },
  {
    begin: new Date(Date.parse('2022-02-15T21:00:00+09:00')),
    title: '분반별 시간',
    subtitle: 'class'
  },
  {
    begin: new Date(Date.parse('2022-02-15T22:20:00+09:00')),
    title: '인솔자 회의',
    subtitle: 'null'
  },
  {
    begin: new Date(Date.parse('2022-02-16T12:00:00+09:00')),
    title: '분반 지도교수 및 SA와의 만남',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-16T14:00:00+09:00')),
    title: '상담센터 소개',
    speaker: '상담센터 장은영 선생님',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-16T14:20:00+09:00')),
    title: '온라인 심리 검사',
    speaker: '상담센터 장은영 선생님',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-16T14:50:00+09:00')),
    title: '장애인식개선교육',
    speaker: '부산장애인식개선교육센터 제상정 강사님',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-16T15:20:00+09:00')),
    title: '새준위 영상 상영: <S.M.P.>',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-16T15:30:00+09:00')),
    title: '대학교육 및 학사제도 안내',
    speaker: '학사팀 정수훈 선생님',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-16T16:20:00+09:00')),
    title: '휴식',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-16T16:30:00+09:00')),
    title: '영어프로그램 소개',
    speaker: '인문사회학부 권수옥 교수님',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-16T17:00:00+09:00')),
    title: '성공적인 학업 전략',
    speaker: '교육혁신센터 정유지 선생님',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-16T17:30:00+09:00')),
    title: '공돌이 용달 특강',
    speaker: '컴퓨터공학과 정용준 연사님',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-16T18:30:00+09:00')),
    title: '테마기획 현황 발표',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-16T18:40:00+09:00')),
    title: '저녁식사',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-16T19:30:00+09:00')),
    title: '동아리 탐방 준비',
    subtitle: 'club'
  },
  {
    begin: new Date(Date.parse('2022-02-16T20:00:00+09:00')),
    title: '동아리 탐방',
    subtitle: 'club'
  },
  {
    begin: new Date(Date.parse('2022-02-16T21:00:00+09:00')),
    title: '분반별 시간',
    subtitle: 'class'
  },
  {
    begin: new Date(Date.parse('2022-02-16T22:20:00+09:00')),
    title: '인솔자 회의',
    subtitle: 'null'
  },
  {
    begin: new Date(Date.parse('2022-02-17T12:00:00+09:00')),
    title: '분반 지도교수 및 SA와의 만남',
    subtitle: 'null'
  },
  {
    begin: new Date(Date.parse('2022-02-17T14:00:00+09:00')),
    title: '총학생회 환영 인사',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-17T14:10:00+09:00')),
    title: '자치단체/학생단체 소개',
    subtitle: 'club'
  },
  {
    begin: new Date(Date.parse('2022-02-17T16:10:00+09:00')),
    title: '도서관/학술정보이용',
    speaker: '학술정보팀 이진솔 선생님',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-17T16:40:00+09:00')),
    title: (
      <span>
        새준위 영상 상영:
        <br />
        {'<베어포닉스의 인간 vs 포스텍>'}
      </span>
    ),
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-17T17:00:00+09:00')),
    title: '교가 배우기',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-17T17:20:00+09:00')),
    title: '응원가 배우기',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-17T18:10:00+09:00')),
    title: '테마기획 현황 발표',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-17T18:20:00+09:00')),
    title: '저녁식사',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-17T19:00:00+09:00')),
    title: '최종 준비',
    subtitle: 'main'
  },
  {
    begin: new Date(Date.parse('2022-02-17T20:00:00+09:00')),
    title: '보이는 라디오 및 시상',
    subtitle: 'youtube'
  },
  {
    begin: new Date(Date.parse('2022-02-17T22:00:00+09:00')),
    title: '수고하셨습니다~! 👏',
    subtitle: 'null'
  }
]

for (let i = 0; i < Schedules.length - 1; i++) {
  const previous = Schedules[i]
  const current = Schedules[i + 1]
  if (previous.end === undefined) {
    previous.end = current.begin
  }
}

const StandBy: NextPage = (props) => {
  const recentIndex = Schedules.reduce(
    (acc, s, i) => (s.begin.getTime() < new Date().getTime() ? i : acc),
    0
  )
  const [schedule, setSchedule] = React.useState<number>(recentIndex)

  const subtitle = Subtitles[Schedules[schedule].subtitle]
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{Schedules[schedule].title}</div>
      <div className={styles.speaker}>{Schedules[schedule].speaker}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.interval}>
        {Schedules[schedule].begin.toLocaleTimeString().slice(0, -3)} ~{' '}
        {Schedules[schedule].end?.toLocaleTimeString()?.slice(0, -3)}
      </div>
      <div className={styles.navigator}>
        <button onClick={() => setSchedule(Math.max(schedule - 1, 0))}>
          ◀
        </button>
        <span>
          {schedule + 1} / {Schedules.length}
        </span>
        <button
          onClick={() =>
            setSchedule(Math.min(schedule + 1, Schedules.length - 1))
          }
        >
          ▶
        </button>
        ︎
      </div>
    </div>
  )
}

export default StandBy
