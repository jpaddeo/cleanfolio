import uniqid from 'uniqid';

import useContent from '../../hooks/useContent';

import ProjectContainer from '../ProjectContainer/ProjectContainer';

import './Projects.css';

const Projects = () => {
  const { projects, learningProjects, LangString } = useContent();
  if (!projects.length && !learningProjects.length) return null;

  return (
    <>
      <section id='projects' className='section projects'>
        <h2 className='section__title'>{LangString('projects')}</h2>
        <div className='projects__grid'>
          {projects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
          ))}
        </div>
      </section>
      <section id='learning-projects' className='section projects'>
        <h2 className='section__title'>{LangString('learningProjects')}</h2>
        <div className='projects__grid'>
          {learningProjects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
