import uniqid from 'uniqid';

import useContent from '../../hooks/useContent';

import ProjectContainer from '../ProjectContainer/ProjectContainer';

import './Projects.css';

const Projects = () => {
  const { projects, LangString } = useContent();
  if (!projects.length) return null;

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>{LangString('projects')}</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
