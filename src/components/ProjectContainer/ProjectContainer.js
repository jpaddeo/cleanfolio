import uniqid from 'uniqid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';

import './ProjectContainer.css';
import useContent from '../../hooks/useContent';

const ProjectContainer = ({ project }) => {
  const { LangString } = useContent();

  return (
    <div className='project'>
      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>
      {project.date && (
        <p className='project__date'>
          {LangString('date')}{' : '}{project.date}
        </p>
      )}

      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
          target='_blank'
          rel='noreferrer'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
          target='_blank'
          rel='noreferrer'
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  );
};

export default ProjectContainer;
