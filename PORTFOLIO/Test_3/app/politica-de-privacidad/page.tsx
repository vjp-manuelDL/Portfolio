import "../legal.css";

export default function PrivacyPage() {
  return (
    <main className="legal-shell">
      <article className="legal-card">
        <a className="legal-back" href="/">Volver a inicio</a>
        <h1>Politica de privacidad</h1>
        <p className="legal-meta">Ultima actualizacion: 20 de mayo de 2026</p>
        <p>
          Esta politica explica como Inclima Plasencia trata los datos personales recibidos a traves de la web,
          telefono, correo electronico y formularios de contacto. El objetivo es responder consultas, preparar
          presupuestos y prestar servicios de instalacion, reparacion y mantenimiento de climatizacion.
        </p>

        <h2>Responsable del tratamiento</h2>
        <p>
          Responsable: Inclima Plasencia. Contacto: inclima@inclimaplasencia.es y telefono 927 42 24 03.
          Ambito de actividad: servicios de climatizacion en Plasencia y alrededores.
        </p>

        <h2>Datos que se pueden solicitar</h2>
        <ul>
          <li>Nombre y datos de contacto, como telefono y correo electronico.</li>
          <li>Informacion incluida en el asunto y mensaje del formulario.</li>
          <li>Datos tecnicos necesarios para preparar una intervencion, como tipo de equipo o direccion del servicio si se facilita posteriormente.</li>
        </ul>

        <h2>Finalidad y base legal</h2>
        <p>
          Los datos se tratan para responder solicitudes precontractuales, gestionar presupuestos, coordinar visitas
          tecnicas y mantener comunicaciones relacionadas con el servicio. Cuando la consulta se envia desde el
          formulario, la base legal es el consentimiento de la persona interesada y la aplicacion de medidas
          precontractuales solicitadas.
        </p>

        <h2>Conservacion</h2>
        <p>
          Los datos se conservaran durante el tiempo necesario para gestionar la consulta o relacion comercial y,
          posteriormente, durante los plazos exigidos por obligaciones legales, fiscales o de garantia.
        </p>

        <h2>Destinatarios</h2>
        <p>
          No se cederan datos a terceros salvo obligacion legal o cuando sea necesario para prestar el servicio,
          por ejemplo proveedores tecnicos, herramientas de correo o asesoria, siempre con garantias adecuadas.
        </p>

        <h2>Derechos</h2>
        <p>
          Puedes solicitar acceso, rectificacion, supresion, oposicion, limitacion del tratamiento y portabilidad
          escribiendo a inclima@inclimaplasencia.es. Tambien puedes reclamar ante la Agencia Espanola de Proteccion
          de Datos si consideras que el tratamiento no se ajusta a la normativa.
        </p>
      </article>
    </main>
  );
}
