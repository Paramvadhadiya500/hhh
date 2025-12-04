import { Phone, Mail, Globe } from "lucide-react";

interface FooterProps {
  restaurantName: string;
  tagline: string;
  phone: string;
  email: string;
  website: string;
  hours: { day: string; status: string }[];
}

export function Footer({ restaurantName, tagline, phone, email, website, hours }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <h3 className="footer-title">{restaurantName}</h3>
            <p className="footer-tagline">{tagline}</p>
            <p className="footer-note">
              Public holidays incur a 10% surcharge. Please let us know if you have any dietary requirements before you order.
            </p>
            <div className="footer-buttons">
              <button className="btn btn-outline btn-sm">Learn More</button>
              <button className="btn btn-outline btn-sm">Book</button>
            </div>
          </div>
          <div className="footer-contact">
            <h4 className="footer-subtitle">Contact</h4>
            <a href={`tel:${phone}`} className="contact-link">
              <Phone size={16} />
              {phone}
            </a>
            <a href={`mailto:${email}`} className="contact-link">
              <Mail size={16} />
              {email}
            </a>
            <a href={website} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Globe size={16} />
              {website.replace('https://', '')}
            </a>
          </div>
          <div className="footer-hours">
            <h4 className="footer-subtitle">Opening Hours</h4>
            <div className="hours-list">
              {hours.map((item) => (
                <div key={item.day} className="hours-row">
                  <span>{item.day}</span>
                  <span>{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
