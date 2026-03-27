"use client";
import "./privacy.css";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslations, useLocale } from "next-intl";

export default function PrivacyClient() {
  const t = useTranslations();
  const locale = useLocale();
  const isEs = locale === "es";

  return (
    <Container className="About-header">
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">{t("privacy.pageTitle")}</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row>
        <Col lg="10" className="privacy-section">
          <p className="last-updated">
            {isEs ? "Ultima actualizacion: Marzo 2026" : "Last updated: March 2026"}
          </p>

          {isEs ? <SpanishContent /> : <EnglishContent />}
        </Col>
      </Row>
    </Container>
  );
}

function EnglishContent() {
  return (
    <>
      <p>
        This Privacy Policy describes how Francisco Javier Campos Diaz (&quot;I&quot;,
        &quot;me&quot;, or &quot;my&quot;) collects, uses, and protects information when you visit
        francampos.me (the &quot;Site&quot;). By using the Site, you agree to the practices
        described in this policy.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>Information You Provide</h3>
      <ul>
        <li>
          <strong>Contact Form:</strong> When you use the contact form, you may provide your name,
          email address, and message content. This information is sent via EmailJS and is not stored
          on the Site&apos;s servers.
        </li>
      </ul>

      <h3>Information Collected Automatically</h3>
      <ul>
        <li>
          <strong>Analytics Data:</strong> Google Analytics 4 (measurement ID: G-QMX4S3JFBC) and
          Google Tag Manager (container ID: GTM-TZQ8CMJ6) collect anonymized usage data including
          pages visited, time spent on pages, referral source, browser type, device type, and
          approximate geographic location.
        </li>
        <li>
          <strong>Advertising Data:</strong> Google AdSense (publisher ID: ca-pub-3451020767524769)
          may collect data to serve personalized or non-personalized ads, depending on your consent
          preferences.
        </li>
        <li>
          <strong>Local Storage:</strong> The Site stores your theme preference (dark/light mode) in
          your browser&apos;s localStorage. This data never leaves your device.
        </li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To respond to your inquiries submitted through the contact form.</li>
        <li>To analyze Site traffic and usage patterns to improve content and user experience.</li>
        <li>To display advertisements through Google AdSense.</li>
        <li>To remember your display preferences (theme selection).</li>
      </ul>

      <h2>3. Cookies and Tracking Technologies</h2>
      <p>
        The Site uses cookies and similar technologies through the following third-party services:
      </p>
      <ul>
        <li>
          <strong>Google Analytics 4:</strong> Uses cookies to distinguish unique users, track
          sessions, and collect interaction data. These cookies (e.g., <code>_ga</code>,{" "}
          <code>_ga_*</code>) are set by Google and typically expire after 2 years.
        </li>
        <li>
          <strong>Google Tag Manager:</strong> Manages the loading of analytics and advertising
          scripts. It may set its own cookies for functionality purposes.
        </li>
        <li>
          <strong>Google AdSense:</strong> Uses cookies to serve ads based on your prior visits to
          this Site or other websites. Google&apos;s advertising cookies (e.g., <code>__gads</code>,{" "}
          <code>__gpi</code>) enable ad personalization and frequency capping.
        </li>
      </ul>
      <p>
        You can manage cookie preferences through your browser settings. You can also opt out of
        personalized advertising by visiting{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
          Google Ads Settings
        </a>{" "}
        or{" "}
        <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">
          aboutads.info
        </a>
        .
      </p>

      <h2>4. Third-Party Services</h2>
      <p>The Site relies on the following third-party services that may process your data:</p>
      <ul>
        <li>
          <strong>Google Analytics &amp; Google Tag Manager:</strong> For website analytics.{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google Privacy Policy
          </a>
        </li>
        <li>
          <strong>Google AdSense:</strong> For displaying advertisements.{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            How Google Uses Cookies in Advertising
          </a>
        </li>
        <li>
          <strong>EmailJS:</strong> For processing contact form submissions. Your message data is
          transmitted through their service.{" "}
          <a
            href="https://www.emailjs.com/legal/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            EmailJS Privacy Policy
          </a>
        </li>
        <li>
          <strong>Contentful:</strong> Content management system used to deliver blog content. No
          personal user data is shared with Contentful.
        </li>
        <li>
          <strong>Vercel:</strong> Hosting platform for the Site. Vercel may collect server logs
          including IP addresses.{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel Privacy Policy
          </a>
        </li>
      </ul>

      <h2>5. Data Retention</h2>
      <ul>
        <li>
          <strong>Analytics data:</strong> Retained by Google Analytics according to Google&apos;s
          data retention settings (default 14 months).
        </li>
        <li>
          <strong>Contact form data:</strong> Messages are delivered to my email inbox and are not
          stored on the Site.
        </li>
        <li>
          <strong>Local storage data:</strong> Persists in your browser until you clear it manually.
        </li>
      </ul>

      <h2>6. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access the personal data collected about you.</li>
        <li>Request correction or deletion of your personal data.</li>
        <li>Opt out of data collection by disabling cookies in your browser.</li>
        <li>Opt out of personalized advertising through Google&apos;s ad settings.</li>
      </ul>
      <p>
        To exercise any of these rights, please contact me using the information provided below.
      </p>

      <h2>7. Children&apos;s Privacy</h2>
      <p>
        This Site is not directed at children under the age of 13. I do not knowingly collect
        personal information from children. If you believe a child has provided personal information
        through the Site, please contact me so I can take appropriate action.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        I may update this Privacy Policy from time to time. Any changes will be posted on this page
        with an updated revision date. Continued use of the Site after changes constitutes
        acceptance of the revised policy.
      </p>

      <h2>9. Contact</h2>
      <p>If you have any questions about this Privacy Policy, you can reach me at:</p>
      <ul>
        <li>
          <strong>Name:</strong> Francisco Javier Campos Diaz
        </li>
        <li>
          <strong>Email:</strong> <a href="mailto:hey@francampos.me">hey@francampos.me</a>
        </li>
        <li>
          <strong>Location:</strong> Nicoya, Costa Rica
        </li>
      </ul>
    </>
  );
}

function SpanishContent() {
  return (
    <>
      <p>
        Esta Politica de Privacidad describe como Francisco Javier Campos Diaz (&quot;yo&quot;,
        &quot;me&quot; o &quot;mi&quot;) recopila, utiliza y protege la informacion cuando visitas
        francampos.me (el &quot;Sitio&quot;). Al usar el Sitio, aceptas las practicas descritas en
        esta politica.
      </p>

      <h2>1. Informacion que Recopilamos</h2>

      <h3>Informacion que proporcionas</h3>
      <ul>
        <li>
          <strong>Formulario de contacto:</strong> Cuando usas el formulario de contacto, puedes
          proporcionar tu nombre, direccion de correo electronico y el contenido del mensaje. Esta
          informacion se envia a traves de EmailJS y no se almacena en los servidores del Sitio.
        </li>
      </ul>

      <h3>Informacion recopilada automaticamente</h3>
      <ul>
        <li>
          <strong>Datos de analitica:</strong> Google Analytics 4 (ID de medicion: G-QMX4S3JFBC) y
          Google Tag Manager (ID de contenedor: GTM-TZQ8CMJ6) recopilan datos de uso anonimizados,
          incluyendo paginas visitadas, tiempo en paginas, fuente de referencia, tipo de navegador,
          tipo de dispositivo y ubicacion geografica aproximada.
        </li>
        <li>
          <strong>Datos de publicidad:</strong> Google AdSense (ID de editor:
          ca-pub-3451020767524769) puede recopilar datos para mostrar anuncios personalizados o no
          personalizados, dependiendo de tus preferencias de consentimiento.
        </li>
        <li>
          <strong>Almacenamiento local:</strong> El Sitio almacena tu preferencia de tema (modo
          oscuro/claro) en el localStorage de tu navegador. Estos datos nunca salen de tu
          dispositivo.
        </li>
      </ul>

      <h2>2. Como Usamos la Informacion</h2>
      <ul>
        <li>Para responder a tus consultas enviadas a traves del formulario de contacto.</li>
        <li>
          Para analizar el trafico y los patrones de uso del Sitio para mejorar el contenido y la
          experiencia del usuario.
        </li>
        <li>Para mostrar anuncios a traves de Google AdSense.</li>
        <li>Para recordar tus preferencias de visualizacion (seleccion de tema).</li>
      </ul>

      <h2>3. Cookies y Tecnologias de Rastreo</h2>
      <p>
        El Sitio utiliza cookies y tecnologias similares a traves de los siguientes servicios de
        terceros:
      </p>
      <ul>
        <li>
          <strong>Google Analytics 4:</strong> Usa cookies para distinguir usuarios unicos, rastrear
          sesiones y recopilar datos de interaccion. Estas cookies (por ejemplo, <code>_ga</code>,{" "}
          <code>_ga_*</code>) son establecidas por Google y generalmente expiran despues de 2 anos.
        </li>
        <li>
          <strong>Google Tag Manager:</strong> Gestiona la carga de scripts de analitica y
          publicidad. Puede establecer sus propias cookies para fines de funcionalidad.
        </li>
        <li>
          <strong>Google AdSense:</strong> Usa cookies para mostrar anuncios basados en tus visitas
          anteriores a este Sitio u otros sitios web. Las cookies publicitarias de Google (por
          ejemplo, <code>__gads</code>, <code>__gpi</code>) permiten la personalizacion de anuncios
          y el control de frecuencia.
        </li>
      </ul>
      <p>
        Puedes gestionar las preferencias de cookies a traves de la configuracion de tu navegador.
        Tambien puedes optar por no recibir publicidad personalizada visitando la{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
          Configuracion de Anuncios de Google
        </a>{" "}
        o{" "}
        <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">
          aboutads.info
        </a>
        .
      </p>

      <h2>4. Servicios de Terceros</h2>
      <p>El Sitio depende de los siguientes servicios de terceros que pueden procesar tus datos:</p>
      <ul>
        <li>
          <strong>Google Analytics y Google Tag Manager:</strong> Para analitica web.{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Politica de Privacidad de Google
          </a>
        </li>
        <li>
          <strong>Google AdSense:</strong> Para mostrar anuncios.{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Como Google Usa Cookies en Publicidad
          </a>
        </li>
        <li>
          <strong>EmailJS:</strong> Para procesar envios del formulario de contacto. Los datos de tu
          mensaje se transmiten a traves de su servicio.{" "}
          <a
            href="https://www.emailjs.com/legal/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Politica de Privacidad de EmailJS
          </a>
        </li>
        <li>
          <strong>Contentful:</strong> Sistema de gestion de contenido utilizado para entregar el
          contenido del blog. No se comparten datos personales de usuarios con Contentful.
        </li>
        <li>
          <strong>Vercel:</strong> Plataforma de alojamiento del Sitio. Vercel puede recopilar
          registros del servidor incluyendo direcciones IP.{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Politica de Privacidad de Vercel
          </a>
        </li>
      </ul>

      <h2>5. Retencion de Datos</h2>
      <ul>
        <li>
          <strong>Datos de analitica:</strong> Retenidos por Google Analytics segun la configuracion
          de retencion de datos de Google (predeterminado 14 meses).
        </li>
        <li>
          <strong>Datos del formulario de contacto:</strong> Los mensajes se entregan a mi bandeja
          de correo electronico y no se almacenan en el Sitio.
        </li>
        <li>
          <strong>Datos de almacenamiento local:</strong> Persisten en tu navegador hasta que los
          elimines manualmente.
        </li>
      </ul>

      <h2>6. Tus Derechos</h2>
      <p>Dependiendo de tu jurisdiccion, puedes tener derecho a:</p>
      <ul>
        <li>Acceder a los datos personales recopilados sobre ti.</li>
        <li>Solicitar la correccion o eliminacion de tus datos personales.</li>
        <li>
          Optar por no participar en la recopilacion de datos desactivando las cookies en tu
          navegador.
        </li>
        <li>
          Optar por no recibir publicidad personalizada a traves de la configuracion de anuncios de
          Google.
        </li>
      </ul>
      <p>
        Para ejercer cualquiera de estos derechos, por favor contactame utilizando la informacion
        proporcionada a continuacion.
      </p>

      <h2>7. Privacidad de Menores</h2>
      <p>
        Este Sitio no esta dirigido a menores de 13 anos. No recopilo intencionalmente informacion
        personal de menores. Si crees que un menor ha proporcionado informacion personal a traves
        del Sitio, por favor contactame para que pueda tomar las medidas apropiadas.
      </p>

      <h2>8. Cambios en Esta Politica</h2>
      <p>
        Puedo actualizar esta Politica de Privacidad de vez en cuando. Cualquier cambio se publicara
        en esta pagina con una fecha de revision actualizada. El uso continuado del Sitio despues de
        los cambios constituye la aceptacion de la politica revisada.
      </p>

      <h2>9. Contacto</h2>
      <p>Si tienes alguna pregunta sobre esta Politica de Privacidad, puedes contactarme en:</p>
      <ul>
        <li>
          <strong>Nombre:</strong> Francisco Javier Campos Diaz
        </li>
        <li>
          <strong>Correo electronico:</strong>{" "}
          <a href="mailto:hey@francampos.me">hey@francampos.me</a>
        </li>
        <li>
          <strong>Ubicacion:</strong> Nicoya, Costa Rica
        </li>
      </ul>
    </>
  );
}
