import "../legal.css";

export default function LegalNoticePage() {
  return (
    <main className="legal-shell">
      <article className="legal-card">
        <a className="legal-back" href="/">Volver a inicio</a>
        <h1>Aviso legal</h1>
        <p className="legal-meta">Ultima actualizacion: 21 de mayo de 2026</p>
        <p>
          En cumplimiento del articulo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Informacion y de Comercio Electronico, se facilita la informacion general del titular de este sitio web.
          El acceso y uso de la pagina implican la aceptacion de las presentes condiciones.
        </p>

        <h2>Identificacion</h2>
        <ul>
          <li>Titular: SERGIO CACERES GRAJERA.</li>
          <li>NIF/CIF: 76115227Q.</li>
          <li>Domicilio: C/. Cerezo, n. 169, 10600 Plasencia, Caceres.</li>
          <li>Correo electronico: inclima@hotmail.com.</li>
          <li>Actividad: servicios de climatizacion, instalacion, reparacion y mantenimiento.</li>
        </ul>

        <h2>Condiciones de uso</h2>
        <p>
          La persona usuaria se compromete a utilizar la web de forma diligente, licita y respetuosa con la normativa
          aplicable, la buena fe y el orden publico. Queda prohibido introducir datos falsos, usar los formularios
          para comunicaciones fraudulentas, danar sistemas, intentar accesos no autorizados o realizar acciones que
          dificulten el funcionamiento normal del sitio.
        </p>

        <h2>Propiedad intelectual</h2>
        <p>
          Los contenidos de la web, incluyendo textos, imagenes, logotipos, diseno, estructura, codigo fuente y
          elementos graficos, pertenecen a sus titulares o se utilizan con autorizacion. No se permite su reproduccion,
          distribucion, transformacion o explotacion comercial sin autorizacion previa, salvo en los casos permitidos
          por la ley.
        </p>

        <h2>Responsabilidad</h2>
        <p>
          El titular procura que la informacion publicada sea correcta y este actualizada. No obstante, los servicios,
          presupuestos, plazos, disponibilidad de recambios y condiciones tecnicas se confirmaran siempre de forma
          individual, atendiendo a las caracteristicas de cada instalacion o incidencia. El titular no respondera por
          danos derivados de un uso indebido de la web, interrupciones tecnicas ajenas a su control o informacion de
          terceros enlazada desde el sitio.
        </p>

        <h2>Enlaces externos</h2>
        <p>
          La web puede incluir enlaces a paginas o servicios de terceros. El titular no controla dichos contenidos ni
          sus politicas, por lo que el acceso a ellos queda bajo la responsabilidad de la persona usuaria.
        </p>

        <h2>Legislacion aplicable</h2>
        <p>
          Las relaciones entre el titular y las personas usuarias se regiran por la legislacion espanola. Para la
          resolucion de controversias, las partes se someteran a los juzgados y tribunales que resulten competentes
          conforme a la normativa aplicable.
        </p>
      </article>
    </main>
  );
}
