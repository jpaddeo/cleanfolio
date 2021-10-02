import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import useContent from '../../hooks/useContent';
import './About.css';

const About = () => {
  const { about, LangString } = useContent();
  const { profileUrl, name, role, description, resume, social } = about;

  return (
    <div className='about center'>
      {name && (
        <div className='about__legend'>
          <img src={profileUrl} alt={name} />
          <h1>
            {LangString('iam')} <span className='about__name'>{name}.</span>
          </h1>
        </div>
      )}
      {role && <h2 className='about__role'>{role}.</h2>}
      <p className='about__desc'>{description && description}</p>
      <div className='about__contact center'>
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.twitter && (
              <a
                href={social.twitter}
                aria-label='twitter'
                className='link link--icon'
              >
                <TwitterIcon />
              </a>
            )}

            {resume && (
              <a href={resume}>
                <span type='button' className='btn btn--outline'>
                  {LangString('resume')}
                </span>
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
