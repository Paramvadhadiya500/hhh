import { MenuItem } from "@/data/menuData";

interface MenuCardProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
}

export function MenuCard({ item, onClick }: MenuCardProps) {
  return (
    <div className="menu-card" onClick={() => onClick(item)}>
      <div className="card-image">
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="card-content">
        <div>
          <div className="card-header">
            <h3 className="card-title">{item.name}</h3>
            <span className="card-price">${item.price}</span>
          </div>
          <p className="card-description">{item.description}</p>
        </div>
        <span className="view-3d-hint">View in 3D →</span>
      </div>
    </div>
  );
}
