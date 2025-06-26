import "../css/Footer.css";

function Footer() {
  

  return (
    <footer className="Footer">
        <p>&copy; {new Date().getFullYear()} Les Murumures de l'Océan. Tous droits réservés.</p>
   <p>Mentions légales</p>
<p>Questions et textes générés par l'IA, images générées par UnSplash</p>
<img src="/src/assets/logoMarie.png" alt="Logo" className="logo" />
      </footer>
  )
}

export default Footer;