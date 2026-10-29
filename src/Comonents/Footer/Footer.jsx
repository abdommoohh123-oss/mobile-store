import { FiFacebook, FiInstagram, FiMail, FiMapPin, FiPhone, FiTwitter } from "react-icons/fi";
import logo from "../../assets/logo.png";
import "./Footer.css";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-brand">
					<img src={logo} alt="PhoneX Smart Store" />
					<p>Smart phones, trusted brands, and accessories for every day.</p>
					<div className="footer-socials" aria-label="Social media links">
						<a href="#facebook" aria-label="Facebook"><FiFacebook /></a>
						<a href="#instagram" aria-label="Instagram"><FiInstagram /></a>
						<a href="#twitter" aria-label="Twitter"><FiTwitter /></a>
					</div>
				</div>

				<div className="footer-column">
					<h2>Shop</h2>
					<a href="/mobiles">Mobiles</a>
					<a href="/brands">Brands</a>
					<a href="/accessories">Accessories</a>
					<a href="/offers">Offers</a>
				</div>

				<div className="footer-column">
					<h2>Support</h2>
					<a href="/contact">Contact us</a>
					<a href="/shipping">Shipping &amp; delivery</a>
					<a href="/returns">Returns &amp; refunds</a>
					<a href="/faq">FAQs</a>
				</div>

				<div className="footer-contact">
					<h2>Get in touch</h2>
					<a href="mailto:hello@phonex.com"><FiMail /> hello@phonex.com</a>
					<a href="tel:+201000000000"><FiPhone /> +20 100 000 0000</a>
					<span><FiMapPin /> Cairo, Egypt</span>
				</div>
			</div>

			<div className="footer-bottom">
				<span>© 2026 PhoneX. All rights reserved.</span>
				<div>
					<a href="/privacy">Privacy</a>
					<a href="/terms">Terms</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;