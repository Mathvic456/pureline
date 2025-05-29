import { projects } from './projectsData';
import ProjectCard from './ProjectCard';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-thin text-center mb-12">Our Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}