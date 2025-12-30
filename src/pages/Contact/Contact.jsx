import "./Contact.css"

export default function Contact() {
  return (
    <section className="page">
      <h2>Contacto</h2>
      <form>
        <input placeholder="Nombre" />
        <input placeholder="Email" />
        <textarea placeholder="Mensaje" />
        <button>Enviar</button>
      </form>
    </section>
  )
}
