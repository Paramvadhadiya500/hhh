import { forwardRef } from "react";
import { MenuCategory, MenuItem } from "@/data/menuData";
import { MenuCard } from "./MenuCard";

interface MenuSectionProps {
  category: MenuCategory;
  onItemClick: (item: MenuItem) => void;
}

export const MenuSection = forwardRef<HTMLElement, MenuSectionProps>(
  ({ category, onItemClick }, ref) => {
    return (
      <section ref={ref} id={category.id} className="menu-section">
        <h2 className="section-title">{category.name}</h2>
        <div className="menu-grid">
          {category.items.map((item) => (
            <MenuCard key={item.id} item={item} onClick={onItemClick} />
          ))}
        </div>
      </section>
    );
  }
);

MenuSection.displayName = "MenuSection";
