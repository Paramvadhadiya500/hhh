import { useState, useRef, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { CategoryTabs } from "@/components/CategoryTabs";
import { MenuSection } from "@/components/MenuSection";
import { ItemModal } from "@/components/ItemModal";
import { Footer } from "@/components/Footer";
import { menuCategories, MenuItem } from "@/data/menuData";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    const section = sectionRefs.current[categoryId];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Intersection Observer for active category highlighting
  const handleScroll = useCallback(() => {
    const sections = Object.entries(sectionRefs.current);
    const scrollPosition = window.scrollY + 150;

    for (const [id, section] of sections) {
      if (section) {
        const { offsetTop, offsetHeight } = section;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveCategory(id);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const restaurantInfo = {
    name: "Heirloom Cafe",
    tagline: "Cozy atmosphere - Fresh and local food - Live jazz daily",
    isOpen: false,
    phone: "+123 456 789",
    email: "info@heirloomcafe.com",
    website: "https://www.heirloomcafe.com",
    hours: [
      { day: "Monday", status: "Closed" },
      { day: "Tuesday", status: "Closed" },
      { day: "Wednesday", status: "9:00 - 22:00" },
      { day: "Thursday", status: "9:00 - 22:00" },
      { day: "Friday", status: "9:00 - 23:00" },
      { day: "Saturday", status: "10:00 - 23:00" },
      { day: "Sunday", status: "10:00 - 21:00" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Load model-viewer script */}
      <script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"
      />

      <Header
        restaurantName={restaurantInfo.name}
        tagline={restaurantInfo.tagline}
        isOpen={restaurantInfo.isOpen}
      />

      <CategoryTabs
        categories={menuCategories}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {menuCategories.map((category) => (
          <MenuSection
            key={category.id}
            ref={(el) => (sectionRefs.current[category.id] = el)}
            category={category}
            onItemClick={handleItemClick}
          />
        ))}
      </main>

      <Footer
        restaurantName={restaurantInfo.name}
        tagline={restaurantInfo.tagline}
        phone={restaurantInfo.phone}
        email={restaurantInfo.email}
        website={restaurantInfo.website}
        hours={restaurantInfo.hours}
      />

      <ItemModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
