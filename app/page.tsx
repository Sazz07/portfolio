import { AboutGrid } from '@/components/sections/about-grid';
import { ContactMinimal } from '@/components/sections/contact-minimal';
import { EducationSection } from '@/components/sections/education-section';
import { ExperienceCards } from '@/components/sections/experience-cards';
import { MinimalHero } from '@/components/sections/minimal-hero';
import { ProjectsModern } from '@/components/sections/projects-modern';

import { SkillsMatrix } from '@/components/sections/skills-matrix';

export default function Home() {
  return (
    <main className='relative'>
      <MinimalHero />
      <AboutGrid />
      <ExperienceCards />
      <SkillsMatrix />
      <ProjectsModern />
      <EducationSection />
      <ContactMinimal />
    </main>
  );
}
