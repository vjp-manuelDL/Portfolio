import LegalLayout from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Inocisa",
  description: "Aviso legal de Inocisa Infraestructuras e Ingeniería, S.L. Información sobre el titular del sitio web, condiciones de uso y propiedad intelectual.",
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso Legal" lastUpdated="19 de mayo de 2026">
      <h2>1. Datos del Titular</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
        de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos del
        titular del presente sitio web:
      </p>
      <ul>
        <li><strong>Razón social:</strong> Inocisa Infraestructuras e Ingeniería, S.L.</li>
        <li><strong>CIF:</strong> B-XXXXXXXX</li>
        <li><strong>Domicilio social:</strong> Calle Ejemplo, 1, 28001 Madrid, España</li>
        <li><strong>Teléfono:</strong> 669 56 92 48</li>
        <li><strong>Correo electrónico:</strong> info@inocisa.es</li>
        <li><strong>Sitio web:</strong> www.inocisa.es</li>
        <li><strong>Registro Mercantil:</strong> Inscrita en el Registro Mercantil de Madrid</li>
      </ul>

      <h2>2. Objeto y Ámbito de Aplicación</h2>
      <p>
        El presente Aviso Legal regula el acceso y la utilización del sitio web <strong>www.inocisa.es</strong>
        (en adelante, el «Sitio Web») del que es titular Inocisa Infraestructuras e Ingeniería, S.L. La
        utilización del Sitio Web atribuye la condición de usuario e implica la aceptación plena y sin
        reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
      </p>

      <h2>3. Condiciones de Acceso y Uso</h2>
      <p>
        El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Inocisa ofrece
        a través del Sitio Web. En particular, queda prohibido:
      </p>
      <ul>
        <li>Usar el Sitio Web con fines ilícitos o contrarios a la buena fe.</li>
        <li>Reproducir, distribuir o modificar los contenidos sin autorización expresa.</li>
        <li>Introducir o difundir en la red virus informáticos o cualquier otro sistema que pueda
          deteriorar, bloquear o interrumpir el normal funcionamiento del Sitio Web.</li>
        <li>Intentar acceder sin autorización a otras cuentas, sistemas o redes informáticas.</li>
        <li>Realizar actividades publicitarias no solicitadas o no autorizadas.</li>
      </ul>

      <h2>4. Propiedad Intelectual e Industrial</h2>
      <p>
        Todos los contenidos del Sitio Web —incluyendo, sin limitación, textos, fotografías, gráficos,
        imágenes, logotipos, iconos, software y cualquier otro material— son propiedad de Inocisa o de
        terceros que han autorizado su uso, y están protegidos por la legislación española e internacional
        sobre propiedad intelectual e industrial.
      </p>
      <p>
        Queda expresamente prohibida la reproducción, distribución, comunicación pública y transformación
        de dichos contenidos sin la autorización previa y por escrito de Inocisa o de los titulares de los
        derechos correspondientes. El incumplimiento de esta prohibición podrá dar lugar a las
        correspondientes acciones legales.
      </p>

      <h2>5. Exclusión de Responsabilidad</h2>
      <h3>5.1 Disponibilidad del Sitio Web</h3>
      <p>
        Inocisa no garantiza la disponibilidad y continuidad del Sitio Web. Cuando ello sea razonablemente
        posible, advertirá previamente de las interrupciones en el funcionamiento del mismo. Inocisa tampoco
        garantiza la utilidad del Sitio Web para la realización de ninguna actividad en concreto.
      </p>
      <h3>5.2 Contenidos de Terceros</h3>
      <p>
        El Sitio Web puede contener enlaces a páginas web de terceros. Inocisa no asume responsabilidad
        alguna por los contenidos, informaciones o servicios que aparezcan en dichos sitios, los cuales
        son responsabilidad exclusiva de sus respectivos titulares.
      </p>
      <h3>5.3 Virus y Seguridad</h3>
      <p>
        Inocisa adoptará todas las medidas técnicas razonables para evitar la existencia de virus y
        programas maliciosos en el Sitio Web. No obstante, no garantiza la ausencia absoluta de dichos
        elementos y no se responsabiliza de los daños que pudieran ocasionarse en los equipos informáticos
        de los usuarios.
      </p>

      <h2>6. Legislación Aplicable y Jurisdicción</h2>
      <p>
        Las relaciones establecidas entre Inocisa y el usuario se rigen por lo dispuesto en la normativa
        española vigente. En caso de controversia, las partes acuerdan someterse a los Juzgados y
        Tribunales de Madrid, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
      </p>

      <h2>7. Modificaciones</h2>
      <p>
        Inocisa se reserva el derecho de modificar el presente Aviso Legal en cualquier momento. Las
        modificaciones entrarán en vigor desde el momento de su publicación en el Sitio Web. Se recomienda
        al usuario revisar periódicamente el contenido de este documento.
      </p>
    </LegalLayout>
  );
}
