import "../legal.css";

export default function LegalNoticePage() {
  return (
    <main className="legal-shell">
      <article className="legal-card">
        <a className="legal-back" href="/">Volver a inicio</a>
        <h1>Aviso legal</h1>
        <p className="legal-meta">Ultima actualizacion: 20 de mayo de 2026</p>
        <p>
          Este aviso regula el acceso y uso de la web de Inclima Plasencia, dedicada a informar sobre servicios
          de climatizacion, instalacion, reparacion, mantenimiento y contacto comercial.
        </p>

        <h2>Identificacion</h2>
        <p>
          Titular: Inclima Plasencia. Correo de contacto: inclima@inclimaplasencia.es. Telefono: 927 42 24 03.
          La informacion completa de identificacion fiscal y domicilio debera incorporarse segun la documentacion
          societaria o profesional actualizada del titular.
        </p>

        <h2>Condiciones de uso</h2>
        <p>
          La persona usuaria se compromete a usar la web de forma licita, sin danar sistemas, introducir contenido
          falso en formularios ni realizar acciones que impidan el funcionamiento normal de la pagina.
        </p>

        <h2>Propiedad intelectual</h2>
        <p>
          Los textos, imagenes, logotipos, diseno, estructura y codigo de la web pertenecen a sus titulares o se
          utilizan con autorizacion. No esta permitida su reproduccion comercial sin permiso previo.
        </p>

        <h2>Responsabilidad</h2>
        <p>
          Inclima Plasencia procura mantener la informacion actualizada, pero los presupuestos, plazos y condiciones
          tecnicas se confirmaran siempre tras analizar cada caso concreto. La web puede incluir enlaces a servicios
          externos sobre los que el titular no tiene control directo.
        </p>

        <h2>Legislacion aplicable</h2>
        <p>
          Este aviso se rige por la normativa espanola aplicable a servicios de la sociedad de la informacion,
          proteccion de datos, consumidores y comercio electronico.
        </p>
      </article>
    </main>
  );
}
