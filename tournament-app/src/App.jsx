import React from 'react';

// 외부 라이브러리(lucide-react) 없이 브라우저와 프리뷰에서 100% 작동하도록 직접 구현한 SVG 아이콘들
const SparklesIcon = () => (
  <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z"/>
    <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z"/>
  </svg>
);

const CrosshairIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="22" y1="12" x2="18" y2="12"/>
    <line x1="6" y1="12" x2="2" y2="12"/>
    <line x1="12" y1="6" x2="12" y2="2"/>
    <line x1="12" y1="22" x2="12" y2="18"/>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const UserIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const ScaleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 16 3-8 3 8c-.1.3-.4.5-.8.5h-4.4c-.4 0-.7-.2-.8-.5z"/>
    <path d="m2 16 3-8 3 8c-.1.3-.4.5-.8.5H3.8c-.4 0-.7-.2-.8-.5z"/>
    <line x1="12" y1="3" x2="12" y2="21"/>
    <line x1="12" y1="6" x2="22" y2="6"/>
    <line x1="12" y1="6" x2="2" y2="6"/>
  </svg>
);

const ClapperboardIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2"/>
    <path d="m3 9 18-3"/>
    <path d="m21 9-18 3"/>
    <path d="m8 6 3-3"/>
    <path d="m16 6 3-3"/>
    <path d="m12 12-3 3"/>
  </svg>
);

const BanIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
  </svg>
);

const SwordIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/>
    <line x1="13" y1="19" x2="19" y2="13"/>
    <line x1="16" y1="16" x2="20" y2="20"/>
    <line x1="19" y1="21" x2="21" y2="19"/>
  </svg>
);

const TrophyIcon = ({ size = 24, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/>
    <path d="M12 2a4 4 0 0 0-4 4v5a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"/>
  </svg>
);

const CupSodaIcon = () => (
  <svg className="w-9 h-9 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 8 1.7 12c.1.9.9 1.6 1.8 1.6h5c.9 0 1.7-.7 1.8-1.6L18 8"/>
    <path d="M5 8h14"/>
    <path d="M18 5h-3a3 3 0 0 0-3 3v12"/>
  </svg>
);

const HelpIcon = () => (
  <svg className="w-9 h-9 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const Section = ({ icon: Icon, title, children, fullWidth }) => (
  <div className={`relative bg-slate-800/80 rounded-xl border border-slate-700 overflow-hidden shadow-md ${fullWidth ? 'col-span-1 md:col-span-2' : ''}`}>
    {/* 상단 고정 그라데이션 라인 */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500" />
    
    <div className="p-6 h-full flex flex-col relative z-10">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-700/50">
        <div className="p-2.5 bg-slate-900/80 text-cyan-400 rounded-lg border border-slate-700">
          <Icon />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-slate-100 tracking-tight">{title}</h3>
      </div>
      <div className="text-slate-300 font-medium leading-relaxed flex-1 space-y-2">
        {children}
      </div>
    </div>
  </div>
);

const RewardItem = ({ icon: Icon, isCustomIcon, title, desc, subDesc }) => (
  <div className="flex flex-col items-center text-center p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
    <h4 className="text-sm md:text-base font-bold mb-3 text-cyan-300">{title}</h4>
    <div className="p-4 bg-slate-800 rounded-full border border-slate-600 mb-3 shadow-md">
      {isCustomIcon ? (
        <Icon />
      ) : (
        <TrophyIcon size={36} className="text-amber-400 stroke-[1.5]" />
      )}
    </div>
    <p className="text-xs md:text-sm font-semibold text-slate-200 whitespace-pre-line leading-tight">{desc}</p>
    {subDesc && <p className="text-xs text-slate-400 mt-2 bg-slate-800 px-2 py-1 rounded-md">{subDesc}</p>}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black py-10 px-4 flex justify-center items-start font-sans">
      {/* 메인 컨테이너 */}
      <div className="w-full max-w-5xl relative">
        
        {/* 메인 보드 (배경 고정) */}
        <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 md:p-10 relative shadow-2xl">
          
          {/* 타이틀 헤더 */}
          <div className="text-center mb-12 relative">
            <div className="inline-flex justify-center items-center gap-3 mb-4 px-6 py-2 rounded-full bg-slate-800/80 border border-slate-700">
              <SparklesIcon />
              <h2 className="text-lg md:text-xl font-bold text-slate-300 tracking-widest">
                제1회 갤디 예언 던전
              </h2>
              <SparklesIcon />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black my-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-sm">
              솔로 스피드런 대회
            </h1>
            
            <div className="flex justify-center items-center mt-6">
              <div className="flex items-center gap-4 py-2 px-8 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <div className="w-2 h-2 bg-cyan-500 transform rotate-45"></div>
                <span className="text-lg md:text-xl font-bold tracking-widest text-slate-200">
                  기록 경쟁 이벤트
                </span>
                <div className="w-2 h-2 bg-purple-500 transform rotate-45"></div>
              </div>
            </div>
          </div>

          {/* 본문 카드 목록 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            <Section icon={CrosshairIcon} title="1. 대상 던전">
              <p className="text-lg font-bold mb-2 text-cyan-100">예언 던전</p>
              <p>체크포인트 사용 없이 처음부터 끝까지<br/>한 번의 플레이로 클리어해야 합니다.</p>
            </Section>

            <Section icon={ClockIcon} title="2. 진행 기간">
              <p className="font-bold mb-2 text-cyan-100 text-[15px]">2026년 5월 22일 00:00 ~ 2026년 6월 9일 23:59</p>
              <p>마감 전까지 대회 게시판에 인증글이<br/>작성된 기록만 인정합니다.</p>
            </Section>

            <Section icon={UserIcon} title="3. 참가 방법">
              <p>
                예언 던전을 <span className="text-cyan-300 font-bold">솔로</span>로 클리어한 뒤, 편집 없는<br/>
                전체 플레이 영상을 유튜브에 업로드하고<br/>
                대회 게시판에 링크가 포함된 인증글을<br/>
                작성해주세요.
              </p>
            </Section>

            <Section icon={ScaleIcon} title="4. 기록 산정 기준">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>클리어 시간은 던전 종료 후 통계 화면에 표시되는 시간을 기준으로 합니다.</li>
                <li>별도의 외부 타이머 기록은 인정하지 않습니다.</li>
                <li>기간 내 재도전 및 기록 갱신이 가능합니다. 다만, <span className="text-purple-300">기록 갱신의 경우 3번까지만 가능</span>합니다.</li>
                <li>한 참가자가 여러 기록을 제출할 경우 가장 빠른 기록 하나만 최종 인정합니다.</li>
                <li>동점 발생 시 다음 순서로 순위를 결정합니다.
                  <ul className="list-none pl-4 mt-1 text-slate-400">
                    <li className="before:content-['-'] before:mr-2">제출 시간이 빠른 기록 및 운영진 판단</li>
                  </ul>
                </li>
              </ul>
            </Section>

            <Section icon={ClapperboardIcon} title="5. 영상 인증 규칙">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>영상은 던전 시작부터 최종 클리어 및 종료 통계 화면까지 확인 가능해야 합니다.</li>
                <li>영상에서 <span className="text-cyan-300">플레이어 닉네임, 전체 플레이 과정, 종료 통계 시간</span>이 식별 가능해야 합니다.</li>
                <li>영상이 인식 불가능할 정도의 저화질일 경우 기록으로 인정하지 않습니다.</li>
                <li>편집으로 인해 플레이 연속성이 확인되지 않을 경우 기록이 무효 처리될 수 있습니다.</li>
                <li>체크포인트 사용, 중간 난입, 중간 재접속 후 클리어는 인정하지 않습니다.</li>
                <li>모든 영상의 끝엔 채팅창에 <span className="text-purple-300 font-bold">'갤디 스런대회 참가'</span> 라는 채팅이 입력되어야 하며, 해당 채팅이 확인되지 않을시 해당 기록은 무효입니다.</li>
              </ul>
            </Section>

            <Section icon={BanIcon} title="6. 금지 사항">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>전 직업 공통으로 갈고리 펀치에 추가요소를 주는 모든 보너스 버프를 금지합니다.
                  <ul className="list-none pl-4 mt-2 mb-1">
                    <li className="text-red-400 font-bold bg-red-950/40 p-2 rounded border border-red-900/50 before:content-['⚠'] before:mr-2">
                      특히, 해당 버프를 이용해 보스에게 직접 피해를 주는 용도로 사용한 것이 확인될 경우 대상자는 실격 처리합니다.
                    </li>
                  </ul>
                </li>
                <li>외부 프로그램, 매크로, 네트워크 조작, 비정상적인 버그 악용, 지형 이탈, 글리치, 열칼 스케이팅은 금지됩니다.</li>
                <li>자세한 내용은 운영진에게 문의 바라며, 경우에 따라 추가적으로 제한 조치가 추가될 수 있습니다.</li>
              </ul>
            </Section>

            <Section icon={SwordIcon} title="7. 제한 사항" fullWidth>
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <p className="text-sm">
                  무기 세팅의 경우, <span className="text-cyan-300 font-bold">1흰탄 1특탄 1중탄 세팅 고정</span>이 허용됩니다.<br/>
                  해당 사항은 1/2/3넴 및 중간 이동 과정에서도 동일하게 적용되며, 로드아웃 스왑 과정에서 잠깐<br/>
                  투특탄으로 변환되는 것은 허용하나, <span className="text-red-400">투 특탄을 유지하며 플레이할시 실격 처리</span> 됩니다.
                </p>
              </div>
            </Section>

            <Section icon={TrophyIcon} title="8. 보상" fullWidth>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-4">
                <RewardItem 
                  title="헌터 1등상" 
                  desc="원하는 식음료&#10;브랜드 3만원&#10;상당 쿠폰" 
                />
                <RewardItem 
                  title="워록 1등상" 
                  desc="원하는 식음료&#10;브랜드 3만원&#10;상당 쿠폰" 
                />
                <RewardItem 
                  title="타이탄 1등상" 
                  desc="원하는 식음료&#10;브랜드 3만원&#10;상당 쿠폰" 
                />
                <RewardItem 
                  icon={CupSodaIcon}
                  isCustomIcon
                  title="참가상" 
                  desc="싸이버거 쿠폰" 
                  subDesc="(3인 추첨)"
                />
                <RewardItem 
                  icon={HelpIcon}
                  isCustomIcon
                  title="히든 상" 
                  desc="???" 
                />
              </div>
              <p className="text-center text-sm font-bold text-slate-400 mt-4 border-t border-slate-700/50 pt-4">
                ※ 중복 수상 가능 여부는 추후 공지 또는 운영진 판단에 따릅니다.
              </p>
            </Section>

          </div>

          {/* 하단 푸터 */}
          <div className="mt-12 text-center border-t border-slate-700/80 pt-8 pb-4">
            <p className="text-lg font-bold text-slate-400">
              본 대회는 기록 경쟁 이벤트입니다.<br/>
              모든 판정은 운영진 재량에 따라 진행될 수 있습니다.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}