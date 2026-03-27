"use client";
import "./terms.css";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslations, useLocale } from "next-intl";

export default function TermsClient() {
  const t = useTranslations();
  const locale = useLocale();
  const isEs = locale === "es";

  return (
    <Container className="About-header terms-page">
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">{t("terms.pageTitle")}</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <p>
            <strong>{isEs ? "Ultima actualizacion" : "Last updated"}:</strong>{" "}
            {isEs ? "Marzo 2026" : "March 2026"}
          </p>

          <p>
            {isEs
              ? 'Bienvenido a francampos.me (el "Sitio"). Estos Terminos de Servicio ("Terminos") rigen su acceso y uso de este sitio web, operado por Francisco Javier Campos Diaz, ubicado en Nicoya, Costa Rica. Al acceder o utilizar el Sitio, usted acepta estar sujeto a estos Terminos.'
              : 'Welcome to francampos.me (the "Site"). These Terms of Service ("Terms") govern your access to and use of this website, operated by Francisco Javier Campos Diaz, located in Nicoya, Costa Rica. By accessing or using the Site, you agree to be bound by these Terms.'}
          </p>

          <h2>{isEs ? "1. Aceptacion de los Terminos" : "1. Acceptance of Terms"}</h2>
          <p>
            {isEs
              ? "Al acceder y utilizar este Sitio, usted reconoce que ha leido, entendido y acepta estar sujeto a estos Terminos. Si no esta de acuerdo con alguna parte de estos Terminos, no debe utilizar el Sitio."
              : "By accessing and using this Site, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use the Site."}
          </p>

          <h2>{isEs ? "2. Uso del Sitio" : "2. Use of the Site"}</h2>
          <p>
            {isEs
              ? "Este Sitio es un portafolio personal y blog. Usted acepta utilizar el Sitio unicamente para fines legales y de una manera que no infrinja los derechos de terceros ni restrinja o inhiba el uso y disfrute del Sitio por parte de terceros. Queda prohibido:"
              : "This Site is a personal portfolio and blog. You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the Site by, any third party. You must not:"}
          </p>
          <ul>
            <li>
              {isEs
                ? "Intentar obtener acceso no autorizado a cualquier parte del Sitio o sus sistemas relacionados."
                : "Attempt to gain unauthorized access to any part of the Site or its related systems."}
            </li>
            <li>
              {isEs
                ? "Utilizar el Sitio de cualquier manera que pueda danar, deshabilitar o perjudicar el Sitio."
                : "Use the Site in any way that could damage, disable, or impair the Site."}
            </li>
            <li>
              {isEs
                ? "Utilizar cualquier medio automatizado para acceder al Sitio sin permiso previo por escrito."
                : "Use any automated means to access the Site without prior written permission."}
            </li>
            <li>
              {isEs
                ? "Transmitir cualquier material que sea difamatorio, ofensivo o ilegal."
                : "Transmit any material that is defamatory, offensive, or otherwise unlawful."}
            </li>
          </ul>

          <h2>{isEs ? "3. Propiedad Intelectual" : "3. Intellectual Property"}</h2>
          <p>
            {isEs
              ? "A menos que se indique lo contrario, todo el contenido de este Sitio, incluyendo pero no limitado a texto, graficos, logotipos, imagenes, codigo fuente y diseno, es propiedad de Francisco Javier Campos Diaz y esta protegido por las leyes de propiedad intelectual aplicables. No puede reproducir, distribuir, modificar ni crear obras derivadas de ningun contenido sin autorizacion previa por escrito."
              : "Unless otherwise stated, all content on this Site, including but not limited to text, graphics, logos, images, source code, and design, is the property of Francisco Javier Campos Diaz and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without prior written authorization."}
          </p>

          <h2>{isEs ? "4. Contenido del Blog" : "4. Blog Content"}</h2>
          <p>
            {isEs
              ? "Los articulos del blog publicados en este Sitio son solo para fines informativos y educativos. Si bien se hace un esfuerzo razonable para garantizar la precision del contenido, Francisco Javier Campos Diaz no garantiza que la informacion proporcionada sea completa, precisa o actualizada. Cualquier confianza que deposite en dicha informacion es estrictamente bajo su propio riesgo."
              : "Blog articles published on this Site are for informational and educational purposes only. While reasonable effort is made to ensure the accuracy of the content, Francisco Javier Campos Diaz does not warrant that the information provided is complete, accurate, or up to date. Any reliance you place on such information is strictly at your own risk."}
          </p>
          <p>
            {isEs
              ? 'Los fragmentos de codigo compartidos en los articulos del blog se proporcionan "tal cual" sin garantia de ningun tipo. Siempre pruebe el codigo minuciosamente antes de usarlo en entornos de produccion.'
              : 'Code snippets shared in blog articles are provided "as is" without warranty of any kind. Always test code thoroughly before using it in production environments.'}
          </p>

          <h2>{isEs ? "5. Enlaces a Terceros" : "5. Third-Party Links"}</h2>
          <p>
            {isEs
              ? "Este Sitio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni estan controlados por Francisco Javier Campos Diaz. No tengo control sobre, y no asumo responsabilidad por, el contenido, las politicas de privacidad o las practicas de sitios web o servicios de terceros. Usted reconoce y acepta que Francisco Javier Campos Diaz no sera responsable, directa o indirectamente, de ningun dano o perdida causados o presuntamente causados por o en conexion con el uso o la confianza en dicho contenido, bienes o servicios disponibles en o a traves de dichos sitios web."
              : "This Site may contain links to third-party websites or services that are not owned or controlled by Francisco Javier Campos Diaz. I have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Francisco Javier Campos Diaz shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites."}
          </p>

          <h2>{isEs ? "6. Descargo de Responsabilidad" : "6. Disclaimer"}</h2>
          <p>
            {isEs
              ? 'El Sitio y su contenido se proporcionan "tal cual" y "segun disponibilidad" sin garantias de ningun tipo, ya sean expresas o implicitas, incluyendo pero no limitado a garantias implicitas de comerciabilidad, idoneidad para un proposito particular o no infraccion. Francisco Javier Campos Diaz no garantiza que el Sitio estara disponible de manera ininterrumpida, oportuna, segura o libre de errores.'
              : 'The Site and its content are provided "as is" and "as available" without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Francisco Javier Campos Diaz does not warrant that the Site will be available uninterrupted, timely, secure, or error-free.'}
          </p>

          <h2>{isEs ? "7. Limitacion de Responsabilidad" : "7. Limitation of Liability"}</h2>
          <p>
            {isEs
              ? "En la maxima medida permitida por la ley aplicable, Francisco Javier Campos Diaz no sera responsable de ningun dano indirecto, incidental, especial, consecuente o punitivo, incluyendo pero no limitado a perdida de beneficios, datos, uso, buena voluntad u otras perdidas intangibles, que resulten de su acceso o uso del Sitio, o su incapacidad para acceder o utilizar el Sitio."
              : "To the maximum extent permitted by applicable law, Francisco Javier Campos Diaz shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of the Site, or your inability to access or use the Site."}
          </p>

          <h2>{isEs ? "8. Cambios a estos Terminos" : "8. Changes to These Terms"}</h2>
          <p>
            {isEs
              ? "Me reservo el derecho de modificar o reemplazar estos Terminos en cualquier momento a mi sola discrecion. Si se realiza una revision material, se hara un esfuerzo razonable para proporcionar un aviso previo antes de que los nuevos terminos entren en vigencia. Lo que constituye un cambio material sera determinado a mi sola discrecion. Su uso continuado del Sitio despues de la publicacion de cualquier cambio constituye la aceptacion de dichos cambios."
              : "I reserve the right to modify or replace these Terms at any time at my sole discretion. If a material revision is made, reasonable effort will be made to provide notice prior to any new terms taking effect. What constitutes a material change will be determined at my sole discretion. Your continued use of the Site after the posting of any changes constitutes acceptance of those changes."}
          </p>

          <h2>{isEs ? "9. Contacto" : "9. Contact"}</h2>
          <p>
            {isEs
              ? "Si tiene alguna pregunta sobre estos Terminos de Servicio, puede contactarme en:"
              : "If you have any questions about these Terms of Service, you can contact me at:"}
          </p>
          <ul>
            <li>
              <strong>{isEs ? "Correo electronico" : "Email"}:</strong>{" "}
              <a href="mailto:hey@francampos.me">hey@francampos.me</a>
            </li>
            <li>
              <strong>{isEs ? "Sitio web" : "Website"}:</strong>{" "}
              <a href="https://francampos.me" target="_blank" rel="noopener noreferrer">
                francampos.me
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
