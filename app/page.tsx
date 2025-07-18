import { SideNav } from '@/components/layout/side-nav';
import { AboutGrid } from '@/components/sections/about-grid';
import { ContactMinimal } from '@/components/sections/contact-minimal';
import { ExperienceCards } from '@/components/sections/experience-cards';
import { MinimalHero } from '@/components/sections/minimal-hero';
import { ProjectsModern } from '@/components/sections/projects-modern';

import { SkillsMatrix } from '@/components/sections/skills-matrix';

export default function Home() {
  return (
    <main className='relative'>
      <SideNav />
      <div className='ml-0 lg:ml-20'>
        <MinimalHero />
        <AboutGrid />
        <ExperienceCards />
        <SkillsMatrix />
        <ProjectsModern />
        <ContactMinimal />
      </div>
    </main>
  );
}
