const About = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
          <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-widest pt-1">
            About
          </p>
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-medium text-[var(--foreground)] leading-snug">
              10개 어드민 서비스의 플랫폼과 DX를{" "}
              <br className="hidden md:block" />
              설계하는 프론트엔드 엔지니어입니다.
            </p>
            <p className="text-base text-[var(--muted)] leading-relaxed max-w-2xl">
              기능 구현보다 팀 전체의 개발 생산성을 높이는 구조를 설계합니다.
              모노레포 전환, CI/CD 자동화, API 런타임 검증 체계 구축 등
              플랫폼·아키텍처 개선을 주도하며 2021년부터 FE 팀을 리드하고
              있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
