import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { contactList } from '../../utils/constants';
import { useTranslation } from 'react-i18next';
import Contact from '../Contact/Contact';
import './Contacts.css';

const textAnimation = {
  hidden: {
    x: 0,
    y: 100,
    opacity: 0
  },
  visible: custom => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: { delay: custom }
  })
};

const Contacts = ({ contactRef }, ref) => {
  const { t } = useTranslation();

  return (
    <motion.section
      className='contacts'
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.1, once: true }}
    >
      <h3 className='contacts__title' ref={contactRef}>
        {t('contactMe')}
      </h3>
      <div className='contacts__info'>
        <motion.p
          variants={textAnimation}
          custom={0.3}
          className='contacts__data'
        >
          {t('currentLocation')}:{' '}
          <span className='contacts__dataSpan'> {t('RussiaKrasnodar')} </span>{' '}
          <br />{' '}
        </motion.p>
        <motion.p
          variants={textAnimation}
          custom={0.7}
          className='contacts__data'
        >
          {t('status')}: <span className='contacts__dataSpan'>{t('openToWork')}</span>
        </motion.p>
      </div>
      <div className='contact-container'>
        {contactList &&
          contactList.map((contact, i) => {
            return (
              <Contact
                key={contact.title}
                title={contact.title}
                image={contact.image}
                text={contact.text}
                link={contact.link}
                custom={i}
              />
            );
          })}
      </div>
    </motion.section>
  );
};

export default forwardRef(Contacts);
