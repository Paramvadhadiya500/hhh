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
        'ios-src'?: string;
        alt?: string;
        ar?: boolean;
        'ar-modes'?: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        'shadow-intensity'?: string;
        'shadow-softness'?: string;
        exposure?: string;
        loading?: string;
        reveal?: string;
        poster?: string;
        'ar-scale'?: string;
        'camera-orbit'?: string;
        'min-camera-orbit'?: string;
        'max-camera-orbit'?: string;
        'interpolation-decay'?: string;
      }, HTMLElement>;
    }
  }
}

const DEFAULT_MODEL_URL = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";

export function ItemModal({ item, isOpen, onClose }: ItemModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [arSupported, setArSupported] = useState(false);
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
    const modelViewer = modelViewerRef.current as any;
    if (!modelViewer) return;

    const handleLoad = () => {
      setIsLoading(false);
      // Check AR support after model loads
      if (modelViewer.canActivateAR) {
        setArSupported(true);
      }
    };
    
    const handleError = () => {
      setIsLoading(false);
      console.error('Model failed to load');
    };

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
      const isAndroid = /Android/i.test(navigator.userAgent);
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      
      let message = 'AR is not supported on this device.\n\n';
      if (isAndroid) {
        message += 'Make sure you have:\n• Android 7.0 or higher\n• ARCore installed\n• Chrome or supported browser';
      } else if (isIOS) {
        message += 'Make sure you have:\n• iOS 12 or higher\n• Safari browser\n• USDZ model file (coming soon)';
      } else {
        message += 'AR works on:\n• Android 7.0+ devices\n• iOS 12+ devices';
      }
      
      alert(message);
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
              ar-modes="scene-viewer quick-look webxr"
              camera-controls
              auto-rotate
              shadow-intensity="1"
              shadow-softness="0.5"
              exposure="0.8"
              loading="eager"
              reveal="auto"
              poster={item.image}
              ar-scale="auto"
              camera-orbit="0deg 75deg 105%"
              min-camera-orbit="auto auto 5%"
              max-camera-orbit="auto auto 500%"
              interpolation-decay="200"
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
            <button 
              className="btn btn-primary btn-full" 
              onClick={handleARClick}
              style={{ opacity: arSupported ? 1 : 0.6 }}
            >
              <Smartphone size={16} />
              {arSupported ? 'View in AR' : 'AR Not Available'}
            </button>
            <p className="ar-hint">
              {arSupported 
                ? "Point your camera at a flat surface to place the dish"
                : "AR requires Android 7.0+ or iOS 12+"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}