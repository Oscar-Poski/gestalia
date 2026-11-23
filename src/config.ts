// Datos del sitio. TODO: reemplazar los placeholders antes de publicar.
export const site = {
  name: 'Gestalia',
  url: 'https://gestalia.mx',
  title: 'Gestalia · Capacitación y adopción de IA para PyMEs en México',
  description:
    'Modernizamos el back office de tu empresa y capacitamos a cada persona, en sesiones uno a uno, para que automatice sus propias tareas con Claude, Gemini o ChatGPT.',
  // Número en formato internacional sin "+" ni espacios, ej. 5213312345678
  whatsapp: '523312890864',
  whatsappMessage: 'Hola, me interesa el programa de adopción de IA de Gestalia.',
  // Liga de agenda (Cal.com / Google Calendar). Mientras no exista, lleva al formulario.
  bookingUrl: '#contacto',
  email: 'hola@gestalia.mx',
  linkedin: 'https://www.linkedin.com/in/oscar-poski',
  // Endpoint que recibe el formulario por POST (JSON). Compatible con Formspree, Web3Forms,
  // un webhook propio o una función serverless. Vacío = el formulario abre el correo del visitante.
  formEndpoint: '',
};

export const fundador = {
  nombre: 'Oscar Rivera',
  iniciales: 'OR',
  rol: 'Fundador',
  foto: 'img/fundador.webp',
  bio: [
    'Desarrollador de software y consultor de flujos de trabajo con IA en Guadalajara.',
    'Ha capacitado a equipos que nunca habían usado IA para que hoy automaticen su propio trabajo, y construye software con IA para su propio negocio de seguros.',
  ],
};

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

// Antepone el base path (p. ej. /gestalia en GitHub Pages, / en gestalia.mx) a rutas internas.
export const url = (ruta = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${ruta.replace(/^\//, '')}`;
