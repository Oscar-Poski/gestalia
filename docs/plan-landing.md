---
title: "gestalia.mx — Plan de landing page"
subtitle: "Benchmark, identidad visual y contenido · v1 · noviembre 2026"
---

# 0. Concepto de marca

**Gestalia** = *Gestalt* ("el todo es más que la suma de sus partes") + *gestión*.
La promesa: tomamos procesos, herramientas y personas que hoy trabajan sueltos y los
convertimos en **un sistema que funciona solo**, con IA donde aporta valor.

- **Posicionamiento:** consultoría boutique de IA *aplicada* para empresas medianas y PyMEs en México. No "transformación digital" genérica: flujos concretos, medibles, en semanas.
- **Diferenciador vs. Big Four (PwC, KPMG, EY):** velocidad, precio accesible, implementación real (no solo diagnóstico) y capacitación del equipo.
- **Diferenciador vs. freelancers de n8n/Fiverr:** método, acompañamiento, seguridad de datos y resultados documentados.
- **Tono:** claro, cercano, sin jerga ("IA generativa agéntica multimodal" ❌ → "un asistente que responde tus WhatsApp y registra el pedido" ✅). Tutear al lector.

# 1. Benchmark: qué hacen las landings de consultoría de IA

| Referente | Qué hace bien | Qué evitar |
|---|---|---|
| Big Four México (PwC, KPMG, EY) | Datos de mercado, autoridad, casos por industria (EY: "100 casos rentables de IA") | Lenguaje corporativo, sin precio ni siguiente paso claro |
| Agencias nuevas CDMX (p. ej. Proxxa, Varela Insights) | Oferta concreta: asistentes de WhatsApp, n8n, CRM a medida | Estética genérica "AI neon", poca prueba social |
| Landings de AI SaaS (galerías tipo Lapa Ninja) | Hero con una frase + 1 CTA, demos visuales del flujo, secciones cortas | Gradientes morados, robots/cerebros 3D, claims vagos |

**Patrones que sí adoptamos**

1. Hero con resultado medible + un solo CTA primario ("Agenda diagnóstico gratuito").
2. Visual del *antes → después* de un flujo (desorden → sistema).
3. Servicios como paquetes concretos con plazo, no como lista de tecnologías.
4. Casos con números (horas ahorradas, tiempo de respuesta, % de errores).
5. WhatsApp como canal de contacto principal (es el canal preferido negocio-cliente en México).
6. FAQ que ataca objeciones: costo, seguridad de datos, "mi equipo no es técnico".

**Datos útiles para el copy** (citar fuente en la página):

- La principal barrera para adoptar IA en México es *no tener claro cómo incorporarla a los procesos* (SAP, 2025).
- Solo 4.8 % de las manufactureras con más de 10 empleados usa IA (Secretaría de Economía, Censo Económico 2024).
- 87 % de las empresas dice que la fragmentación tecnológica limita escalar IA.

→ Gestalia se posiciona exactamente en ese hueco: **claridad + integración**.

# 2. Identidad visual

## 2.1 Colorimetría

Evitamos el morado/neón de "AI genérica". Paleta cálida, mexicana y sobria: jade (confianza,
crecimiento), barro (acción, calidez), maíz (acento) sobre tinta y papel.

<div class="swatches">
<div class="sw" style="background:#101826;color:#F7F4EE"><b>Tinta</b><br>#101826<br><small>Texto, fondos oscuros</small></div>
<div class="sw" style="background:#F7F4EE;color:#101826;border:1px solid #ddd"><b>Papel</b><br>#F7F4EE<br><small>Fondo principal</small></div>
<div class="sw" style="background:#0B6E5B;color:#fff"><b>Jade</b><br>#0B6E5B<br><small>Primario, enlaces</small></div>
<div class="sw" style="background:#3FB59A;color:#101826"><b>Jade claro</b><br>#3FB59A<br><small>Primario en modo oscuro</small></div>
<div class="sw" style="background:#B3431E;color:#fff"><b>Barro</b><br>#B3431E<br><small>CTA principal</small></div>
<div class="sw" style="background:#E9B949;color:#101826"><b>Maíz</b><br>#E9B949<br><small>Acento, highlights</small></div>
<div class="sw" style="background:#5B6472;color:#fff"><b>Pizarra</b><br>#5B6472<br><small>Texto secundario</small></div>
<div class="sw" style="background:#E6E1D6;color:#101826"><b>Arena</b><br>#E6E1D6<br><small>Bordes, tarjetas</small></div>
</div>

**Contraste verificado (WCAG):** Tinta/Papel 16.2 · Jade/Papel 5.6 (AA) · Blanco/Barro 5.6 (AA) ·
Jade claro/Tinta 7.0 (AAA) · Maíz/Tinta 9.7. Regla: **maíz nunca como texto sobre papel**, solo
como fondo o subrayado; en secciones oscuras se usa jade claro en lugar de jade.

Proporción sugerida: 70 % papel/arena · 20 % tinta · 7 % jade · 3 % barro/maíz.

## 2.2 Tipografía (Google Fonts, gratis)

| Rol | Fuente | Uso |
|---|---|---|
| Display / titulares | **Bricolage Grotesque** (600–800) | H1–H3. Carácter propio, legible, no "plantilla" |
| Énfasis editorial | **Instrument Serif** *itálica* | 1–2 palabras clave dentro de titulares ("que funciona *solo*") |
| Texto | **Inter** (400–600) | Párrafos, botones, formularios |
| Datos / etiquetas | **JetBrains Mono** (500) | Métricas, etiquetas de sección ("01 — Diagnóstico") |

Escala (fluida, `clamp`): H1 44→72 px · H2 32→48 · H3 22→28 · cuerpo 17–18 · pequeño 14.
Interlineado 1.1 en titulares, 1.6 en texto. Ancho de línea máx. 68 caracteres.

## 2.3 Logo

- Wordmark **gestalia** en minúsculas, Bricolage Grotesque 700, con el punto de la *i* reemplazado por un nodo de color jade.
- Isotipo: **cuatro piezas/nodos que forman un cuadrado completo** (las partes → el todo). Funciona como favicon y avatar de WhatsApp/LinkedIn.
- Variantes: tinta sobre papel, papel sobre tinta, monocromo.

## 2.4 Lenguaje visual

- **Motivo principal:** nodos y conectores (diagramas de flujo) dibujados con línea fina de 1.5 px. Las piezas sueltas se "ensamblan" al hacer scroll → metáfora Gestalt.
- **Ilustraciones:** diagramas SVG propios de flujos reales (WhatsApp → agente → CRM → reporte). Nada de robots, cerebros 3D ni manos humanas tocando circuitos.
- **Fotografía:** solo personas reales del equipo y clientes, luz natural, tonos cálidos. Sin bancos de imágenes.
- **Texturas:** grano sutil (2–3 %) sobre papel; cuadrícula de puntos tenue en el hero.
- **UI:** bordes redondeados 14 px en tarjetas, 999 px en botones; sombras mínimas; bordes de 1 px arena.
- **Animación:** sobria (fade + translate 12 px, 300 ms). El único "momento wow" es el ensamblaje del diagrama en el hero. Respetar `prefers-reduced-motion`.
- **Modo oscuro:** soportado vía tokens (tinta como fondo, jade claro como primario).

# 3. Contenido de la landing (estructura y copy borrador)

### 3.1 Navegación
Logo · Servicios · Cómo trabajamos · Casos · Capacitación · FAQ · **[Agenda diagnóstico]** (botón barro) · icono WhatsApp.

### 3.2 Hero
- **Etiqueta (mono):** `CONSULTORÍA DE IA Y FLUJOS DE TRABAJO · MÉXICO`
- **H1:** "Tu empresa ya tiene las piezas. Nosotros las convertimos en un sistema que funciona *solo*."
- **Subtítulo:** "Diseñamos e implementamos flujos de trabajo con inteligencia artificial para que tu equipo deje de copiar, pegar y perseguir pendientes. Resultados en semanas, no en años."
- **CTA primario:** "Agenda un diagnóstico gratuito (30 min)" · **CTA secundario:** "Escríbenos por WhatsApp".
- **Visual:** diagrama animado: íconos sueltos (Excel, WhatsApp, correo, PDF) → se conectan en un flujo ordenado.
- **Micro-prueba social:** "Empresas en Guadalajara y CDMX ya automatizan con Gestalia" + logos (cuando existan).

### 3.3 Problema (empatía)
H2: "¿Te suena familiar?" — 4 tarjetas:
1. Tu equipo pasa horas capturando datos de un sistema a otro.
2. Los clientes esperan respuesta en WhatsApp y nadie da abasto.
3. Compraste herramientas de IA, pero nadie las usa de verdad.
4. La información vive en Excel, correos y la cabeza de alguien.

Cierre con dato: "La principal barrera para usar IA en México no es la tecnología: es no saber por dónde empezar."

### 3.4 Servicios (paquetes con plazo)

| # | Servicio | Qué incluye | Plazo |
|---|---|---|---|
| 01 | **Diagnóstico IA** | Mapeo de procesos, priorización por ROI, hoja de ruta | 1–2 semanas |
| 02 | **Automatización de flujos** | Integraciones (n8n/Make/API), agentes de IA, asistentes de WhatsApp, documentos y reportes automáticos | 3–8 semanas |
| 03 | **Software a la medida con IA** | Apps internas, CRMs ligeros, portales (ej. caso coberto.ai) | 6–12 semanas |
| 04 | **Capacitación de equipos** | Talleres prácticos de IA y flujos para áreas no técnicas | 1 día – 4 semanas |

### 3.5 Cómo trabajamos (método en 4 pasos)
`01 Entender` → `02 Diseñar` → `03 Implementar` → `04 Acompañar`.
Mensaje clave: "Empezamos con un flujo pequeño que se paga solo y escalamos desde ahí."

### 3.6 Casos / resultados
Formato de tarjeta: *Industria · Problema · Solución · Resultado en número*.

- **Caso ancla — Promotoría de seguros de auto (Guadalajara):** software coberto.ai: cotización, seguimiento de pólizas y renovaciones con IA. Métricas a documentar: tiempo por cotización, renovaciones recuperadas, horas/semana ahorradas.
- Casos 2 y 3: a llenar con primeros clientes (pedir permiso y métricas desde el kickoff).
- Si aún no hay casos suficientes: "Casos ilustrativos" de flujos típicos por industria, claramente marcados como ejemplos.

### 3.7 Casos de uso por industria (tabs)
Seguros · Despachos contables/legales · Comercio y distribución · Inmobiliarias · Manufactura · Salud/consultorios.
Cada tab: 3 flujos concretos (ej. Contables: "lectura automática de CFDI → conciliación → reporte mensual").

### 3.8 Capacitación (segunda línea de negocio)
Talleres y cursos de IA aplicada para empresas y profesionistas. Temarios, formato (presencial GDL / en línea), CTA "Lleva el taller a tu empresa". Opción de captar correos para cursos abiertos.

### 3.9 Por qué Gestalia
- Implementamos, no solo recomendamos.
- Hablamos tu idioma (sin tecnicismos).
- Tus datos seguros: cumplimiento con la LFPDPPP, accesos controlados, nada se entrena con tu información.
- Experiencia real: construimos y operamos nuestro propio software con IA.

### 3.10 Sobre nosotros
Foto + mini bio del fundador (desarrollador de software y consultor de flujos con IA, Guadalajara). Tono humano.

### 3.11 FAQ
- ¿Cuánto cuesta? (rangos o "desde $X MXN" + diagnóstico gratuito)
- ¿Necesito un equipo técnico?
- ¿Qué pasa con la seguridad y privacidad de mis datos?
- ¿Qué herramientas usan? ¿Me quedo amarrado a ustedes?
- ¿Cuánto tarda en verse un resultado?
- ¿Trabajan fuera de Guadalajara? (sí, remoto en todo México)
- ¿Facturan? (sí, CFDI)

### 3.12 CTA final
Bloque oscuro (tinta): "Encuentra en 30 minutos qué proceso de tu empresa puede funcionar solo." · botón barro + WhatsApp.
Formulario corto: nombre, empresa, WhatsApp, "¿qué proceso te quita más tiempo?" (texto libre).

### 3.13 Footer
Logo, contacto, WhatsApp, LinkedIn, aviso de privacidad (obligatorio LFPDPPP), términos, © Gestalia.

# 4. SEO y conversión

- **Keywords:** consultoría de inteligencia artificial México · automatización de procesos con IA · agentes de IA para empresas · automatización WhatsApp empresas · consultoría IA Guadalajara · capacitación IA empresas.
- **Title:** "Gestalia · Consultoría de IA y automatización de flujos para empresas en México".
- Schema.org `ProfessionalService` + `FAQPage`. Open Graph con imagen del diagrama del hero.
- **Medición:** eventos para clic en CTA, WhatsApp, envío de formulario, scroll 75 %. Meta: tasa de conversión ≥ 3 %.
- Rendimiento: Lighthouse ≥ 95, LCP < 2 s, sin librerías pesadas de 3D.

# 5. Stack técnico recomendado

- **Astro + Tailwind CSS** (sitio estático, rapidísimo, fácil de extender a blog/casos en MDX).
- Animaciones con CSS + un poco de JS (o Motion One); SVG inline para diagramas.
- Formulario → webhook n8n (dogfooding: el propio lead se registra en CRM y avisa por WhatsApp).
- Agenda: Cal.com o Google Calendar appointment schedule.
- Analítica: Plausible o GA4. Deploy en Vercel/Netlify o Cloudflare Pages con dominio gestalia.mx.

# 6. Próximos pasos

1. Validar nombre de paleta, fuentes y concepto de logo.
2. Ajustar copy final (precios, casos reales, bio).
3. Prototipo en Astro: hero + servicios + CTA (v0.1).
4. Diagrama animado del hero y secciones restantes (v0.2).
5. SEO, analítica, aviso de privacidad, deploy en gestalia.mx (v1.0).

---
*Fuentes del benchmark:* SAP "México: IA en el mundo corporativo" (2025); Publimetro (oct. 2026) sobre datos de Secretaría de Economía; EY "100 casos rentables de IA" (2026); PwC México IA; KPMG México; perfiles de Proxxa (DesignRush) y Varela Insights (Clutch); Lapa Ninja (galería de landings de IA); American Industrial Magazine (WhatsApp en PyMEs).
