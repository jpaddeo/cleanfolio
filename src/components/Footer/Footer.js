import './Footer.css';

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/jpaddeo/cleanfolio'
      className='link footer__link'
      target='_blank'
      rel='noreferrer'
    >
      Created By Juan Pablo Addeo
    </a>
    <a
      href='https://github.com/rajshekhar26/cleanfolio'
      className='link footer__secondary__link'
      target='_blank'
      rel='noreferrer'
    >
      (Forked from Raj Shekhar)
    </a>
  </footer>
);

export default Footer;
