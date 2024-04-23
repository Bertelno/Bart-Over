
function Footer(){
    return(
        
        <footer className = "Footer">
            <p>&copy; {new Date().getFullYear()}<a href="/" className="Footer-logo"> BartOver</a></p>
            <ul>   
        <li><a href="/about">FAQ</a></li>
        <li><a href="/services">Privacy</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
        </footer>
    );
}
export default Footer