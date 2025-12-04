import { Phone, Calendar } from "lucide-react";

interface HeaderProps {
  restaurantName: string;
  tagline: string;
  isOpen: boolean;
}

export function Header({ restaurantName, tagline, isOpen }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className={`status-badge ${isOpen ? 'open' : 'closed'}`}>
          <span className="status-dot" />
          <span>{isOpen ? 'Open' : 'Closed'}</span>
        </div>
        <h1 className="restaurant-name">{restaurantName}</h1>
        <p className="tagline">{tagline}</p>
        <div className="header-buttons">
          <button className="btn btn-outline">
            <Phone size={16} />
            Call
          </button>
          <button className="btn btn-outline">
            <Calendar size={16} />
            Book
          </button>
        </div>
      </div>
    </header>
  );
}
