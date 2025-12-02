import { Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  restaurantName: string;
  tagline: string;
  phone: string;
  email: string;
  website: string;
  hours: { day: string; status: string }[];
}

export const Footer = ({
  restaurantName,
  tagline,
  phone,
  email,
  website,
  hours,
}: FooterProps) => {
  return (
    <footer className="bg-card border-t border-border mt-16 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-card-foreground mb-3">
              {restaurantName}
            </h3>
            <p className="text-muted-foreground mb-4">{tagline}</p>
            <p className="text-muted-foreground text-sm mb-4">
              Public holidays incur a 10% surcharge. Please let us know if you
              have any dietary requirements before you order.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Learn More
              </Button>
              <Button variant="outline" size="sm">
                Book
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold text-card-foreground mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                {phone}
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                {email}
              </a>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="w-4 h-4" />
                {website.replace("https://", "")}
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-heading text-lg font-bold text-card-foreground mb-4">
              Opening Hours
            </h4>
            <div className="space-y-2">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between text-muted-foreground"
                >
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
};
