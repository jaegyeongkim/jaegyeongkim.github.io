const About = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-14 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16">
          <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
            About
          </p>
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-medium text-[var(--foreground)] leading-snug">
              10개 어드민 서비스의{" "}
              <span className="underline underline-offset-4 decoration-[var(--accent)]">
                플랫폼과 DX
              </span>
              를<br className="hidden md:block" />
              설계하는 프론트엔드 엔지니어입니다.
            </p>
            <div className="space-y-4 text-base text-[var(--muted)] leading-relaxed max-w-2xl">
              <p>
                2020년 12월부터 코코넛사일로에서 근무하며, 라오스 현지 O2O
                플랫폼(이커머스·차량·물류·택시)의{" "}
                <strong className="text-[var(--foreground)] font-medium">
                  어드민 웹 서비스를 처음부터 함께 만들고 운영
                </strong>
                했습니다.
              </p>
              <p>
                기능 구현에 머물지 않고,{" "}
                <strong className="text-[var(--foreground)] font-medium">
                  팀이 더 빠르고 안정적으로 개발할 수 있는 환경을 직접 설계하고
                  정착
                </strong>
                시켜 왔습니다. 개별 레포 → 모노레포 전환 / 수동 배포 → CI/CD
                자동화 / API 응답 불안정 → 런타임 검증 체계 구축처럼,{" "}
                <strong className="text-[var(--foreground)] font-medium">
                  팀 전체가 체감하는 구조적 문제를 찾아 개선하는 일을 주도
                </strong>
                했습니다.
              </p>
              <p>
                업무 외 시간에는{" "}
                <strong className="text-[var(--foreground)] font-medium">
                  기획·설계·개발·배포까지 혼자 수행하는 풀스택 사이드 프로젝트
                </strong>
                를 진행하며 역량을 확장하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
