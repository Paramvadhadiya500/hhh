import { useEffect, useRef, useState } from "react";
import { X, Eye, Smartphone } from "lucide-react";
import { MenuItem } from "@/data/menuData";

interface ItemModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        ar?: boolean;
        'ar-modes'?: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        'shadow-intensity'?: string;
        exposure?: string;
        loading?: string;
        reveal?: string;
        poster?: string;
      }, HTMLElement>;
    }
  }
}

const DEFAULT_MODEL_URL = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";

export function ItemModal({ item, isOpen, onClose }: ItemModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const modelViewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    const handleLoad = () => setIsLoading(false);
    const handleError = () => setIsLoading(false);

    modelViewer.addEventListener('load', handleLoad);
    modelViewer.addEventListener('error', handleError);

    return () => {
      modelViewer.removeEventListener('load', handleLoad);
      modelViewer.removeEventListener('error', handleError);
    };
  }, [item]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleARClick = () => {
    const modelViewer = modelViewerRef.current as any;
    if (modelViewer?.canActivateAR) {
      modelViewer.activateAR();
    } else {
      alert('AR is not supported on this device or browser.');
    }
  };

  if (!item) return null;

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'active' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        <div className="modal-content">
          <div className="modal-viewer">
            {isLoading && (
              <div className="loader">
                <div className="spinner" />
              </div>
            )}
            <model-viewer
              ref={modelViewerRef}
              src={item.modelUrl || DEFAULT_MODEL_URL}
              alt={item.name}
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              auto-rotate
              shadow-intensity="1"
              exposure="0.8"
              loading="eager"
              reveal="auto"
              poster={item.image}
            />
            <div className="viewer-badge">
              <Eye size={14} />
              <span>3D View</span>
            </div>
          </div>
          <div className="modal-details">
            <h2 className="modal-title">{item.name}</h2>
            <p className="modal-description">{item.description}</p>
            <p className="modal-price">${item.price}</p>
            <button className="btn btn-primary btn-full" onClick={handleARClick}>
              <Smartphone size={16} />
              View in AR
            </button>
            <p className="ar-hint">Point your camera at a flat surface to place the dish</p>
          </div>
        </div>
      </div>
    </div>
  );
}
