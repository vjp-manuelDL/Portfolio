import "../legal.css";

export default function CookiesPage() {
  return (
    <main className="legal-shell">
      <article className="legal-card">
        <a className="legal-back" href="/">Volver a inicio</a>
        <h1>Politica de cookies</h1>
        <p className="legal-meta">Ultima actualizacion: 21 de mayo de 2026</p>
        <p>
          Esta politica explica que son las cookies, que tipos pueden utilizarse en esta web y como puede gestionarlas
          la persona usuaria. Se facilita en cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Informacion y de Comercio Electronico.
        </p>

        <h2>Responsable</h2>
        <p>
          El responsable de la web es SERGIO CACERES GRAJERA, con NIF/CIF 76115227Q, domicilio en C/. Cerezo, n. 169,
          10600 Plasencia, Caceres, y correo de contacto inclima@hotmail.com.
        </p>

        <h2>Que son las cookies</h2>
        <p>
          Una cookie es un pequeno archivo que se descarga en el dispositivo de la persona usuaria al acceder a
          determinadas paginas web. Las cookies permiten almacenar y recuperar informacion sobre la navegacion, el
          dispositivo o determinadas preferencias, con el fin de facilitar el funcionamiento de la web y mejorar la
          experiencia de uso.
        </p>

        <h2>Tipos de cookies</h2>
        <ul>
          <li>Cookies tecnicas: permiten la navegacion, la seguridad, la carga de contenidos y el uso de funciones basicas. No requieren consentimiento cuando son estrictamente necesarias.</li>
          <li>Cookies de preferencias o personalizacion: recuerdan opciones elegidas por la persona usuaria, como ajustes de visualizacion o idioma.</li>
          <li>Cookies de analisis o medicion: permiten conocer de forma agregada como se utiliza la web para mejorar contenidos, rendimiento y usabilidad.</li>
          <li>Cookies publicitarias o de publicidad comportamental: permiten gestionar espacios publicitarios y, en su caso, adaptar anuncios al perfil de navegacion. Solo se utilizaran si se informa de ello y existe consentimiento.</li>
          <li>Cookies de terceros: son gestionadas por servicios externos integrados en la web, como herramientas de analitica, mapas, videos, seguridad o redes sociales.</li>
          <li>Cookies de sesion y persistentes: segun su duracion, pueden eliminarse al cerrar el navegador o conservarse durante un periodo definido.</li>
        </ul>

        <h2>Gestion del consentimiento</h2>
        <p>
          Las cookies no necesarias se instalaran unicamente cuando la persona usuaria haya prestado su consentimiento,
          si la web incorpora herramientas que lo requieran. La persona usuaria podra aceptar, rechazar o configurar
          las categorias disponibles mediante el panel o mecanismo de gestion que se habilite en la web.
        </p>

        <h2>Cookies utilizadas</h2>
        <p>
          La web puede utilizar cookies tecnicas necesarias para su funcionamiento. Si en el futuro se incorporan
          servicios de analitica, mapas, videos, publicidad, redes sociales u otras herramientas de terceros, se
          identificaran las cookies correspondientes, su finalidad, titularidad y plazo de conservacion cuando proceda.
        </p>

        <h2>Como desactivar cookies</h2>
        <p>
          Puedes bloquear, eliminar o permitir cookies desde la configuracion de tu navegador. La gestion concreta
          depende del navegador utilizado. Como referencia, puedes consultar la ayuda oficial de Google Chrome,
          Mozilla Firefox, Safari o Microsoft Edge. Ten en cuenta que bloquear cookies tecnicas puede afectar al
          funcionamiento normal de la web.
        </p>

        <h2>Actualizaciones</h2>
        <p>
          Esta politica puede modificarse cuando cambie la normativa aplicable o las herramientas utilizadas por la
          web. Se recomienda revisar esta pagina periodicamente para conocer la version vigente.
        </p>
      </article>
    </main>
  );
}
