export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const showDefaultLang = false;

export const ui = {
  es: {
    'seo.title': 'Portafolio de {name} - {label}`',
    'seo.description': 'Portafolio de {name} - {label}',
    'hero.send-email-to': 'Enviar un correo electrónico a {name} al correo {email}',
    'hero.call-to': 'Llamar por teléfono a {name} al número {phone}',
    'hero.visit-profile': 'Visitar el perfil de {name} en {network}',
    'about.title': "Sobre mi",
    'experience.title': "Experiencia laboral",
    'experience.current': "Actual",
    'education.title': "Educación",
    'education.current': "Actual",
    'projects.title': "Proyectos personales",
    'projects.see-project': "Ver proyecto {name}",
    'projects.see-repo': "Ver código fuente del proyecto {name}",
    'skills.title': "Skills",
    'languagepicker.a.title': 'Change to spanish version'
  },
  en: {
    'seo.title': '{name}´s Portfolio - {label}`',
    'seo.description': 'Portfolio of {name} - {label}',
    'hero.send-email-to': 'Send an email to {name} at {email}',
    'hero.call-to': 'Call {name} at {phone}',
    'hero.visit-profile': 'Visit {name}\'s {network} profile',
    'about.title': "About me",
    'experience.title': "Work experience",
    'experience.current': "Current",
    'education.title': "Education",
    'education.current': "Current",
    'projects.title': "Personal projects",
    'projects.see-project': "See project {name}",
    'projects.see-repo': "See source code of project {name}",
    'skills.title': "Skills",
    'languagepicker.a.title': 'Change to spanish version'
  }
} as const;
