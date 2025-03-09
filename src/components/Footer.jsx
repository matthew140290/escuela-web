export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">Contacto</h3>
          <p>Email: info@escuela1290.com</p>
          <p>Teléfono: +123 456 789</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Redes Sociales</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Políticas</h3>
          <p>Privacidad</p>
          <p>Cookies</p>
          <p>Términos de uso</p>
        </div>
      </div>
    </footer>
  );
}
