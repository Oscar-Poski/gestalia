// Datos de contacto. TODO: reemplazar los placeholders antes de publicar.
export const site = {
  name: 'Gestalia',
  url: 'https://gestalia.mx',
  title: 'Gestalia · Capacitación y adopción de IA para PyMEs en México',
  description:
    'Modernizamos el back office de tu empresa y capacitamos a cada persona, en sesiones uno a uno, para que automatice sus propias tareas con Claude, Gemini o ChatGPT.',
  // Número en formato internacional sin "+" ni espacios, ej. 5213312345678
  whatsapp: '520000000000',
  whatsappMessage: 'Hola, me interesa el programa de adopción de IA de Gestalia.',
  // Liga de agenda (Cal.com / Google Calendar)
  bookingUrl: '#contacto',
  email: 'hola@gestalia.mx',
};

export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
