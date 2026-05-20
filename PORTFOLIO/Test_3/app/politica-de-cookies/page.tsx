import "../legal.css";

export default function CookiesPage() {
  return (
    <main className="legal-shell">
      <article className="legal-card">
        <a className="legal-back" href="/">Volver a inicio</a>
        <h1>Politica de cookies</h1>
        <p className="legal-meta">Ultima actualizacion: 20 de mayo de 2026</p>
        <p>
          Esta pagina informa sobre el uso de cookies y tecnologias similares en la web de Inclima Plasencia.
          Una cookie es un pequeno archivo que el navegador guarda para recordar informacion tecnica o preferencias.
        </p>

        <h2>Tipos de cookies</h2>
        <ul>
          <li>Cookies tecnicas: necesarias para que la pagina funcione correctamente.</li>
          <li>Cookies de preferencias: recuerdan ajustes de navegacion cuando el usuario los elige.</li>
          <li>Cookies de medicion: ayudan a entender el uso de la web de forma agregada si se activan herramientas analiticas.</li>
          <li>Cookies de terceros: pueden proceder de servicios externos integrados, como mapas, videos o sistemas antispam.</li>
        </ul>

        <h2>Gestion del consentimiento</h2>
        <p>
          Las cookies no necesarias deben instalarse solo cuando exista consentimiento. El usuario puede aceptar,
          rechazar o configurar las categorias disponibles desde el panel de cookies si la web incorpora herramientas
          de analitica, marketing o terceros.
        </p>

        <h2>Como desactivar cookies</h2>
        <p>
          Puedes bloquear o eliminar cookies desde la configuracion de tu navegador. Ten en cuenta que limitar
          cookies tecnicas puede afectar al funcionamiento normal de algunas partes de la web.
        </p>

        <h2>Actualizaciones</h2>
        <p>
          Esta politica puede actualizarse cuando cambien las herramientas usadas por la web. Se recomienda revisar
          esta pagina periodicamente para conocer la version vigente.
        </p>
      </article>
    </main>
  );
}
