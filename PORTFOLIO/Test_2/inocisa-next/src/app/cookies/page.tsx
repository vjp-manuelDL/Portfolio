import LegalLayout from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Inocisa",
  description: "Política de cookies de Inocisa. Información sobre los tipos de cookies utilizadas, su finalidad y cómo gestionarlas.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Política de Cookies" lastUpdated="19 de mayo de 2026">
      <p>
        En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y
        Comercio Electrónico (LSSI-CE), y del Reglamento (UE) 2016/679 (RGPD), Inocisa Infraestructuras e
        Ingeniería, S.L. informa a los usuarios sobre el uso de cookies en el sitio web{" "}
        <strong>www.inocisa.es</strong>.
      </p>

      <h2>1. ¿Qué son las Cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que los sitios web colocan en el dispositivo del usuario
        durante la navegación. Permiten que el sitio recuerde información sobre tu visita, como el idioma
        preferido o la sesión iniciada, lo que facilita una navegación más cómoda y eficiente.
      </p>
      <p>
        Las cookies no dañan tu dispositivo ni contienen código malicioso. No pueden leer datos de tu
        disco duro ni acceder a información personal que no hayas proporcionado previamente.
      </p>

      <h2>2. Tipos de Cookies que Utilizamos</h2>

      <h3>2.1 Según su titularidad</h3>
      <ul>
        <li>
          <strong>Cookies propias:</strong> generadas por el propio sitio web de Inocisa y gestionadas
          directamente por nosotros.
        </li>
        <li>
          <strong>Cookies de terceros:</strong> establecidas por dominios distintos al nuestro (por
          ejemplo, servicios de análisis como Google Analytics).
        </li>
      </ul>

      <h3>2.2 Según su finalidad</h3>
      <ul>
        <li>
          <strong>Cookies técnicas o estrictamente necesarias:</strong> imprescindibles para la
          navegación y el correcto funcionamiento del sitio web. Sin ellas, algunos servicios no podrían
          prestarse. No requieren consentimiento del usuario.
        </li>
        <li>
          <strong>Cookies de preferencias o personalización:</strong> permiten recordar tus preferencias
          de navegación (por ejemplo, el idioma o la región).
        </li>
        <li>
          <strong>Cookies de análisis o medición:</strong> recopilan información anónima sobre cómo los
          usuarios navegan por el sitio con el fin de mejorar su funcionamiento y contenidos.
        </li>
        <li>
          <strong>Cookies de publicidad comportamental:</strong> almacenan información del comportamiento
          del usuario para mostrar publicidad personalizada. <em>Actualmente no utilizamos este tipo de
          cookies.</em>
        </li>
      </ul>

      <h3>2.3 Según su duración</h3>
      <ul>
        <li>
          <strong>Cookies de sesión:</strong> se eliminan automáticamente cuando cierras el navegador.
        </li>
        <li>
          <strong>Cookies persistentes:</strong> permanecen en tu dispositivo durante un período definido,
          que puede oscilar entre minutos y varios años.
        </li>
      </ul>

      <h2>3. Detalle de las Cookies Utilizadas</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50">
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Nombre</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Tipo</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Titular</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Duración</th>
              <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700">Finalidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-600 font-mono text-xs">_session</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-600">Técnica</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-600">Propia</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-600">Sesión</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-600">Mantener la sesión del usuario activa durante la navegación</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="border border-slate-200 px-4 py-3 text-slate-600 font-mono text-xs">_ga</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-600">Análisis</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-600">Google</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-600">2 años</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-600">Distinguir usuarios únicos para estadísticas de Google Analytics</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 text-slate-600 font-mono text-xs">_ga_*</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-600">Análisis</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-600">Google</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-600">2 años</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-600">Mantener el estado de la sesión para Google Analytics 4</td>
            </tr>
            <tr className="bg-slate-50/50">
              <td className="border border-slate-200 px-4 py-3 text-slate-600 font-mono text-xs">cookie_consent</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-600">Técnica</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-600">Propia</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-600">1 año</td>
              <td className="border border-slate-200 px-4 py-3 text-slate-600">Almacenar la preferencia de consentimiento del usuario</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>4. Cómo Gestionar y Desactivar las Cookies</h2>
      <p>
        Puedes permitir, bloquear o eliminar las cookies instaladas en tu dispositivo mediante la
        configuración de las opciones de tu navegador. A continuación te indicamos cómo hacerlo en los
        principales navegadores:
      </p>
      <ul>
        <li>
          <strong>Google Chrome:</strong>{" "}
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
            Configuración de cookies en Chrome
          </a>
        </li>
        <li>
          <strong>Mozilla Firefox:</strong>{" "}
          <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">
            Configuración de cookies en Firefox
          </a>
        </li>
        <li>
          <strong>Microsoft Edge:</strong>{" "}
          <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
            Configuración de cookies en Edge
          </a>
        </li>
        <li>
          <strong>Safari:</strong>{" "}
          <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
            Configuración de cookies en Safari
          </a>
        </li>
      </ul>
      <p>
        Ten en cuenta que la desactivación de ciertas cookies puede afectar al funcionamiento óptimo del
        sitio web y a la disponibilidad de algunos de sus servicios.
      </p>

      <h2>5. Cookies de Terceros y Herramientas de Análisis</h2>
      <p>
        Utilizamos <strong>Google Analytics</strong>, un servicio de analítica web de Google LLC, que
        emplea cookies para analizar el uso del Sitio Web. La información generada se transmite a
        servidores de Google en EE.UU. Google puede transferir esta información a terceros cuando así lo
        exija la legislación o cuando dichos terceros procesen la información por cuenta de Google.
      </p>
      <p>
        Inocisa tiene activada la <strong>anonimización de IP</strong> en Google Analytics, por lo que
        la dirección IP del usuario se trunca antes de ser almacenada, evitando su identificación directa.
        Puedes desactivar Google Analytics instalando el complemento de inhabilitación disponible en:{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          tools.google.com/dlpage/gaoptout
        </a>.
      </p>

      <h2>6. Consentimiento y Revocación</h2>
      <p>
        Al acceder por primera vez a nuestro Sitio Web, verás un banner informativo sobre el uso de
        cookies. Al hacer clic en «Aceptar todas», prestas tu consentimiento para el uso de todas las
        cookies descritas en esta política. Si seleccionas «Solo necesarias», únicamente se instalarán
        las cookies técnicas imprescindibles.
      </p>
      <p>
        Puedes revocar tu consentimiento en cualquier momento eliminando las cookies desde la
        configuración de tu navegador o contactando con nosotros en{" "}
        <a href="mailto:privacidad@inocisa.es">privacidad@inocisa.es</a>.
      </p>

      <h2>7. Actualizaciones de esta Política</h2>
      <p>
        Inocisa se reserva el derecho de modificar esta Política de Cookies en cualquier momento para
        adaptarla a cambios legales, técnicos o de negocio. Te recomendamos revisarla periódicamente.
        Cualquier cambio relevante será notificado mediante el banner de cookies al volver a visitar el
        sitio.
      </p>

      <h2>8. Contacto</h2>
      <p>
        Para cualquier consulta relacionada con el uso de cookies o el tratamiento de tus datos
        personales, puedes contactarnos en:
      </p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:privacidad@inocisa.es">privacidad@inocisa.es</a></li>
        <li><strong>Teléfono:</strong> 669 56 92 48</li>
        <li><strong>Dirección postal:</strong> Calle Ejemplo, 1, 28001 Madrid, España</li>
      </ul>
    </LegalLayout>
  );
}
