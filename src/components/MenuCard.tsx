import { useCallback } from "react";
import { MenuItem } from "@/data/menuData";

const DEFAULT_MODEL_URL = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";

interface MenuCardProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
}

export function MenuCard({ item, onClick }: MenuCardProps) {
  const preloadModel = useCallback(() => {
    const modelUrl = item.modelUrl || DEFAULT_MODEL_URL;
    // Preload the 3D model when hovering
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = modelUrl;
    link.as = 'fetch';
    if (!document.querySelector(`link[href="${modelUrl}"]`)) {
      document.head.appendChild(link);
    }
  }, [item.modelUrl]);

  return (
    <div 
      className="menu-card" 
      onClick={() => onClick(item)}
      onMouseEnter={preloadModel}
      onTouchStart={preloadModel}
    >
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
