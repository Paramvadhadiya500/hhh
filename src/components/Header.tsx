import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  restaurantName: string;
  tagline: string;
  isOpen: boolean;
}

export const Header = ({ restaurantName, tagline, isOpen }: HeaderProps) => {
  return (
    <header className="pt-6 pb-4 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Status Badge */}
        <div className="mb-4">
          <span
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
              isOpen
                ? "bg-status-open/10 text-status-open"
                : "bg-status-closed/10 text-status-closed"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isOpen ? "bg-status-open" : "bg-status-closed"
              }`}
            />
            {isOpen ? "Open" : "Closed"}
          </span>
        </div>

        {/* Restaurant Name */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
          {restaurantName}
        </h1>

        {/* Tagline */}
        <p className="text-muted-foreground text-lg mb-6">{tagline}</p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Phone className="w-4 h-4" />
            Call
          </Button>
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" />
            Book
          </Button>
        </div>
      </div>
    </header>
  );
};
