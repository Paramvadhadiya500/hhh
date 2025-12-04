import { MenuCategory } from "@/data/menuData";

interface CategoryTabsProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

export function CategoryTabs({ categories, activeCategory, onCategoryClick }: CategoryTabsProps) {
  return (
    <nav className="category-nav">
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-tab ${category.id === activeCategory ? 'active' : ''}`}
            onClick={() => onCategoryClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
