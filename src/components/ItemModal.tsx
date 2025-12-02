import { useEffect, useRef, useState } from "react";
import { X, View, Smartphone, Loader2 } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import { Button } from "@/components/ui/button";

interface ItemModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

// Declare model-viewer as a custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          ar?: boolean;
          'ar-modes'?: string;
          'camera-controls'?: boolean;
          'auto-rotate'?: boolean;
          poster?: string;
          'shadow-intensity'?: string;
          'environment-image'?: string;
          exposure?: string;
          loading?: string;
          onLoad?: () => void;
          onError?: () => void;
        },
        HTMLElement
      >;
    }
  }
}

export const ItemModal = ({ item, isOpen, onClose }: ItemModalProps) => {
  const modelViewerRef = useRef<HTMLElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setHasError(false);
    }
  }, [isOpen, item]);

  if (!isOpen || !item) return null;

  // Fallback model if no custom model provided
  const sampleModelUrl = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";
  const modelSrc = item.modelUrl || sampleModelUrl;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
      <div
        className="relative bg-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-card/80 hover:bg-card text-card-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* 3D Model Viewer */}
          <div className="w-full md:w-1/2 h-64 md:h-96 bg-secondary relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-secondary z-10">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            )}
            {hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-secondary z-10">
                <p className="text-muted-foreground text-sm">Failed to load 3D model</p>
              </div>
            )}
            <model-viewer
              ref={modelViewerRef}
              src={modelSrc}
              alt={item.name}
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              auto-rotate
              shadow-intensity="1"
              exposure="0.8"
              loading="eager"
              style={{ width: "100%", height: "100%" }}
              onLoad={() => {
                console.log("Model loaded:", modelSrc);
                setIsLoading(false);
              }}
              onError={() => {
                console.error("Model failed to load:", modelSrc);
                setIsLoading(false);
                setHasError(true);
              }}
            />
            <div className="absolute bottom-4 left-4 flex gap-2">
              <div className="flex items-center gap-1 bg-card/90 text-card-foreground px-3 py-1.5 rounded-full text-xs font-medium">
                <View className="w-3.5 h-3.5" />
                <span>3D View</span>
              </div>
            </div>
          </div>

          {/* Item Details */}
          <div className="w-full md:w-1/2 p-6 flex flex-col">
            <div className="flex-1">
              <h2 className="font-heading text-2xl font-bold text-card-foreground mb-2">
                {item.name}
              </h2>
              <p className="text-muted-foreground mb-4">
                {item.description}
              </p>
              <p className="text-3xl font-bold text-foreground mb-6">
                ${item.price}
              </p>
            </div>

            <div className="space-y-3">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  const mv = modelViewerRef.current as any;
                  if (mv?.activateAR) {
                    mv.activateAR();
                  }
                }}
              >
                <Smartphone className="w-4 h-4 mr-2" />
                View in AR
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Point your camera at a flat surface to place the dish
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
