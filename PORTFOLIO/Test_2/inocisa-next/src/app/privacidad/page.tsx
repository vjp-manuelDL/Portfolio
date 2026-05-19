import LegalLayout from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Inocisa",
  description: "Política de privacidad de Inocisa. Información sobre el tratamiento de tus datos personales conforme al RGPD y la LOPDGDD.",
};

export default function PrivacidadPage() {
  return (
    <LegalLayout title="Política de Privacidad" lastUpdated="19 de mayo de 2026">
      <p>
        En Inocisa Infraestructuras e Ingeniería, S.L. (en adelante, <strong>«Inocisa»</strong>) nos
        comprometemos a proteger tu privacidad y a tratar tus datos personales con total transparencia,
        conforme al <strong>Reglamento (UE) 2016/679</strong> (RGPD) y a la <strong>Ley Orgánica
        3/2018, de 5 de diciembre</strong>, de Protección de Datos Personales y garantía de los
        derechos digitales (LOPDGDD).
      </p>

      <h2>1. Responsable del Tratamiento</h2>
      <ul>
        <li><strong>Identidad:</strong> Inocisa Infraestructuras e Ingeniería, S.L.</li>
        <li><strong>CIF:</strong> B-XXXXXXXX</li>
        <li><strong>Domicilio:</strong> Calle Ejemplo, 1, 28001 Madrid, España</li>
        <li><strong>Teléfono:</strong> 669 56 92 48</li>
        <li><strong>Email de contacto:</strong> privacidad@inocisa.es</li>
      </ul>

      <h2>2. Datos que Recopilamos</h2>
      <p>Recopilamos los datos personales que tú mismo nos facilitas a través de los siguientes canales:</p>
      <ul>
        <li><strong>Formulario de contacto:</strong> nombre, teléfono, correo electrónico, asunto y mensaje.</li>
        <li><strong>Comunicaciones por email o teléfono:</strong> los datos que aportes voluntariamente.</li>
        <li><strong>Navegación por el Sitio Web:</strong> datos técnicos de acceso (dirección IP, tipo de navegador,
          páginas visitadas) recogidos mediante cookies técnicas.</li>
      </ul>
      <p>No recopilamos datos de categorías especiales (datos de salud, origen étnico, creencias religiosas, etc.).</p>

      <h2>3. Finalidad del Tratamiento</h2>
      <p>Tratamos tus datos personales para las siguientes finalidades:</p>
      <ul>
        <li><strong>Gestión de consultas y solicitudes:</strong> responder a los mensajes y solicitudes de
          presupuesto recibidos a través del formulario de contacto o por otros medios.</li>
        <li><strong>Relación contractual:</strong> ejecutar el contrato de prestación de servicios cuando
          así se formalice.</li>
        <li><strong>Comunicaciones comerciales:</strong> solo si has prestado tu consentimiento expreso,
          para informarte sobre nuestros servicios, promociones y novedades.</li>
        <li><strong>Mejora del Sitio Web:</strong> análisis estadístico y técnico del uso del sitio para
          mejorar la experiencia de usuario (datos anonimizados).</li>
        <li><strong>Obligaciones legales:</strong> cumplimiento de las obligaciones legales aplicables.</li>
      </ul>

      <h2>4. Base Jurídica del Tratamiento</h2>
      <ul>
        <li><strong>Ejecución de un contrato:</strong> para la prestación de los servicios contratados
          (art. 6.1.b RGPD).</li>
        <li><strong>Consentimiento:</strong> para el envío de comunicaciones comerciales y el uso de
          cookies no esenciales (art. 6.1.a RGPD).</li>
        <li><strong>Interés legítimo:</strong> para la gestión de consultas previas a una relación
          contractual (art. 6.1.f RGPD).</li>
        <li><strong>Obligación legal:</strong> para el cumplimiento de obligaciones tributarias y
          contables (art. 6.1.c RGPD).</li>
      </ul>

      <h2>5. Conservación de los Datos</h2>
      <p>
        Los datos personales se conservarán durante el tiempo necesario para la finalidad para la que
        fueron recabados y, en todo caso:
      </p>
      <ul>
        <li>Datos de consultas no formalizadas en contrato: <strong>1 año</strong> desde el último contacto.</li>
        <li>Datos de clientes con relación contractual: <strong>5 años</strong> desde la finalización del contrato
          (plazo de prescripción de acciones civiles).</li>
        <li>Datos de facturación: <strong>6 años</strong> conforme al Código de Comercio.</li>
        <li>Datos de comunicaciones comerciales: hasta la retirada del consentimiento.</li>
      </ul>

      <h2>6. Destinatarios de los Datos</h2>
      <p>
        Inocisa no vende ni cede tus datos a terceros con fines comerciales. Podemos compartir tus datos
        con:
      </p>
      <ul>
        <li><strong>Proveedores de servicios tecnológicos</strong> (hosting, email, CRM) que actúan como
          encargados del tratamiento bajo contrato de confidencialidad.</li>
        <li><strong>Administraciones públicas y autoridades</strong> cuando así lo exija la ley.</li>
        <li><strong>Asesores y auditores</strong> bajo obligación de confidencialidad.</li>
      </ul>
      <p>No realizamos transferencias internacionales de datos fuera del Espacio Económico Europeo.</p>

      <h2>7. Tus Derechos</h2>
      <p>
        Tienes derecho a ejercer, en cualquier momento y de forma gratuita, los siguientes derechos sobre
        tus datos personales:
      </p>
      <ul>
        <li><strong>Acceso:</strong> obtener confirmación de si tratamos tus datos y acceder a ellos.</li>
        <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
        <li><strong>Supresión:</strong> solicitar la eliminación de tus datos cuando, entre otros motivos,
          ya no sean necesarios para los fines que fueron recogidos.</li>
        <li><strong>Oposición:</strong> oponerte al tratamiento en determinadas circunstancias.</li>
        <li><strong>Limitación:</strong> solicitar que limitemos el tratamiento de tus datos.</li>
        <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y de uso común.</li>
        <li><strong>Retirada del consentimiento:</strong> en cualquier momento, sin que ello afecte a la
          licitud del tratamiento previo.</li>
      </ul>
      <p>
        Para ejercer cualquiera de estos derechos, puedes contactarnos por escrito a{" "}
        <a href="mailto:privacidad@inocisa.es">privacidad@inocisa.es</a> o por correo postal a nuestra
        dirección, adjuntando una copia de tu documento de identidad.
      </p>
      <p>
        Si consideras que el tratamiento de tus datos no es conforme a la normativa, puedes presentar una
        reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> en{" "}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.
      </p>

      <h2>8. Seguridad de los Datos</h2>
      <p>
        Inocisa adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad de tus
        datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizados. Entre dichas
        medidas se incluyen cifrado SSL/TLS en las comunicaciones, acceso restringido a los datos y copias
        de seguridad periódicas.
      </p>

      <h2>9. Modificaciones de la Política de Privacidad</h2>
      <p>
        Nos reservamos el derecho de actualizar esta Política de Privacidad para adaptarla a novedades
        legislativas, jurisprudenciales o de nuestra actividad. Te recomendamos revisarla periódicamente.
        La fecha de última actualización siempre estará indicada al principio del documento.
      </p>
    </LegalLayout>
  );
}
