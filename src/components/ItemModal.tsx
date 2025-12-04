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
        'touch-action'?: string;
        'disable-zoom'?: boolean;
      }, HTMLElement>;
    }
  }
}

const DEFAULT_MODEL_URL = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";

export function ItemModal({ item, isOpen, onClose }: ItemModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [arSupported, setArSupported] = useState(false);
  const [arMode, setArMode] = useState<string>('');
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
        
        // Detect which AR mode will be used
        const isWebXRSupported = 'xr' in navigator;
        const isAndroid = /Android/i.test(navigator.userAgent);
        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        
        if (isWebXRSupported && isAndroid) {
          setArMode('WebXR (Fastest)');
        } else if (isAndroid) {
          setArMode('Scene Viewer');
        } else if (isIOS) {
          setArMode('Quick Look');
        }
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
      const isHTTPS = window.location.protocol === 'https:';
      
      let message = 'AR is not available.\n\n';
      
      if (!isHTTPS) {
        message += '⚠️ Your site must use HTTPS for WebXR AR to work!\n\n';
      }
      
      if (isAndroid) {
        message += 'Android Requirements:\n';
        message += '• HTTPS website (required for WebXR)\n';
        message += '• Chrome browser\n';
        message += '• Android 7.0+\n';
        message += '• Google Play Services for AR installed';
      } else if (isIOS) {
        message += 'iOS Requirements:\n';
        message += '• iOS 12 or higher\n';
        message += '• Safari browser\n';
        message += '• USDZ model file';
      } else {
        message += 'AR works on:\n';
        message += '• Android 7.0+ devices with Chrome\n';
        message += '• iOS 12+ devices with Safari';
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
            
            {/* OPTIMIZED FOR FASTEST AR - WebXR FIRST */}
            <model-viewer
              ref={modelViewerRef}
              src={item.modelUrl || DEFAULT_MODEL_URL}
              alt={item.name}
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              auto-rotate
              shadow-intensity="1"
              shadow-softness="0.5"
              exposure="0.8"
              loading="eager"
              reveal="auto"
              poster={item.image}
              ar-scale="auto"
              touch-action="pan-y"
              disable-zoom
            />
            
            <div className="viewer-badge">
              <Eye size={14} />
              <span>3D View</span>
            </div>
            
            {arSupported && arMode && (
              <div className="ar-mode-badge">
                <span>⚡ {arMode}</span>
              </div>
            )}
          </div>
          <div className="modal-details">
            <h2 className="modal-title">{item.name}</h2>
            <p className="modal-description">{item.description}</p>
            <p className="modal-price">${item.price}</p>
            
            {!arSupported && !isLoading && (
              <div className="ar-warning">
                {window.location.protocol !== 'https:' ? (
                  <>⚠️ HTTPS required for AR</>
                ) : (
                  <>⚠️ AR not available</>
                )}
              </div>
            )}
            
            <button 
              className="btn btn-primary btn-full" 
              onClick={handleARClick}
              style={{ opacity: arSupported ? 1 : 0.6 }}
            >
              <Smartphone size={16} />
              {arSupported ? 'Launch AR' : 'AR Not Available'}
            </button>
            
            <p className="ar-hint">
              {arSupported 
                ? "Tap to launch AR and place on any surface"
                : window.location.protocol !== 'https:' 
                  ? "Deploy to HTTPS to enable AR"
                  : "AR requires compatible device"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}