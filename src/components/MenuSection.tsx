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
      <section ref={ref} id={category.id} className="scroll-mt-20">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
          {category.name}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {category.items.map((item) => (
            <MenuCard key={item.id} item={item} onClick={() => onItemClick(item)} />
          ))}
        </div>
      </section>
    );
  }
);

MenuSection.displayName = "MenuSection";
