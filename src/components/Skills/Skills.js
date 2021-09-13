import uniqid from 'uniqid';

import useContent from '../../hooks/useContent';

import './Skills.css';

const Skills = () => {
  const { skills, LangString } = useContent();
  if (!skills.length) return null;

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>{LangString('skills')}</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
