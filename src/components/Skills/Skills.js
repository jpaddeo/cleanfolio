import uniqid from 'uniqid';

import useContent from '../../hooks/useContent';

import './Skills.css';

const Skills = () => {
  const { skills, softSkills, LangString } = useContent();
  if (!skills.length && !softSkills.length) return null;

  return (
    <div className='skills__container'>
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
      <section className='section skills' id='soft-skills'>
        <h2 className='section__title'>{LangString('softSkills')}</h2>
        <ul className='skills__list'>
          {softSkills.map((sskill) => (
            <li key={uniqid()} className='skills__list-item btn btn--plain'>
              {sskill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Skills;
