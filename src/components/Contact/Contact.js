import useContent from '../../hooks/useContent';
import './Contact.css';

const Contact = () => {
  const { contact, LangString } = useContent();

  if (!contact.email) return null;

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>{LangString('contact')}</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          {LangString('emailme')}
        </span>
      </a>
    </section>
  );
};

export default Contact;
