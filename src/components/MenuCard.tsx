import { MenuItem } from "@/data/menuData";

interface MenuCardProps {
  item: MenuItem;
  onClick: () => void;
}

export const MenuCard = ({ item, onClick }: MenuCardProps) => {
  return (
    <div
      onClick={onClick}
      className="flex bg-card rounded-lg border border-border overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-primary/30 group animate-fade-in"
    >
      <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading font-semibold text-card-foreground text-lg leading-tight">
              {item.name}
            </h3>
            <span className="text-foreground font-semibold whitespace-nowrap">
              ${item.price}
            </span>
          </div>
          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
            {item.description}
          </p>
        </div>
        <span className="text-xs text-primary font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          View in 3D →
        </span>
      </div>
    </div>
  );
};
