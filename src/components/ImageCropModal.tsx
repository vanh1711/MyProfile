import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  X,
  Check,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Maximize2,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

interface ImageCropModalProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
  onSave: (croppedDataUrl: string) => void;
  initialAspectRatio?: number; // default 4/3
}

export const ImageCropModal: React.FC<ImageCropModalProps> = ({
  isOpen,
  imageSrc,
  onClose,
  onSave,
  initialAspectRatio = 4 / 3,
}) => {
  const [aspectRatio, setAspectRatio] = useState<number>(initialAspectRatio);
  const [scale, setScale] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [imgElement, setImgElement] = useState<HTMLImageElement | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportSize, setViewportSize] = useState<{ width: number; height: number }>({
    width: 360,
    height: 270,
  });

  // Load image when imageSrc changes
  useEffect(() => {
    if (!imageSrc) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      setImgElement(img);
      // Reset transformations
      setScale(1);
      setRotation(0);
      setOffsetX(0);
      setOffsetY(0);
    };
    img.src = imageSrc;
  }, [imageSrc]);

  // Calculate viewport size based on aspect ratio
  useEffect(() => {
    const maxWidth = typeof window !== 'undefined' ? Math.min(window.innerWidth - 48, 440) : 400;
    const width = maxWidth;
    const height = Math.round(width / aspectRatio);
    setViewportSize({ width, height });
  }, [aspectRatio]);

  // Compute base dimensions to "cover" the viewport
  const getBaseDimensions = useCallback(() => {
    if (!imgElement) return { baseWidth: viewportSize.width, baseHeight: viewportSize.height };

    const isRotated90 = rotation % 180 !== 0;
    const naturalW = isRotated90 ? imgElement.naturalHeight : imgElement.naturalWidth;
    const naturalH = isRotated90 ? imgElement.naturalWidth : imgElement.naturalHeight;

    const imgAspect = naturalW / naturalH;
    const vpAspect = viewportSize.width / viewportSize.height;

    let baseW = viewportSize.width;
    let baseH = viewportSize.height;

    if (imgAspect > vpAspect) {
      baseH = viewportSize.height;
      baseW = viewportSize.height * imgAspect;
    } else {
      baseW = viewportSize.width;
      baseH = viewportSize.width / imgAspect;
    }

    return { baseWidth: baseW, baseHeight: baseH };
  }, [imgElement, rotation, viewportSize]);

  // Handle Dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - offsetX, y: e.clientY - offsetY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setOffsetX(Math.round(e.clientX - dragStart.x));
    setOffsetY(Math.round(e.clientY - dragStart.y));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({ x: touch.clientX - offsetX, y: touch.clientY - offsetY });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const touch = e.touches[0];
    setOffsetX(Math.round(touch.clientX - dragStart.x));
    setOffsetY(Math.round(touch.clientY - dragStart.y));
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.08 : -0.08;
    setScale((prev) => Math.min(3.5, Math.max(0.5, Number((prev + delta).toFixed(2)))));
  };

  // Nudge actions
  const nudge = (dx: number, dy: number) => {
    setOffsetX((prev) => prev + dx);
    setOffsetY((prev) => prev + dy);
  };

  // Reset to center
  const resetTransform = () => {
    setScale(1);
    setOffsetX(0);
    setOffsetY(0);
    setRotation(0);
  };

  // Preset alignments
  const alignTopFace = () => {
    // Focus slightly higher up (towards the head/face)
    setOffsetX(0);
    setOffsetY(Math.round(viewportSize.height * 0.18));
    setScale(1.15);
  };

  const alignCenter = () => {
    setOffsetX(0);
    setOffsetY(0);
  };

  // Export cropped canvas image
  const handleSaveCroppedImage = () => {
    if (!imgElement) return;

    const OUT_WIDTH = 800;
    const OUT_HEIGHT = Math.round(OUT_WIDTH / aspectRatio);

    const canvas = document.createElement('canvas');
    canvas.width = OUT_WIDTH;
    canvas.height = OUT_HEIGHT;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Neutral dark background
    ctx.fillStyle = '#080808';
    ctx.fillRect(0, 0, OUT_WIDTH, OUT_HEIGHT);

    const R = OUT_WIDTH / viewportSize.width;
    const { baseWidth, baseHeight } = getBaseDimensions();

    // Map viewport coordinates to canvas coordinates
    ctx.save();
    ctx.translate(OUT_WIDTH / 2 + offsetX * R, OUT_HEIGHT / 2 + offsetY * R);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(scale * R, scale * R);

    // Depending on rotation, draw appropriate dimensions
    const isRotated90 = rotation % 180 !== 0;
    const drawW = isRotated90 ? baseHeight : baseWidth;
    const drawH = isRotated90 ? baseWidth : baseHeight;

    ctx.drawImage(imgElement, -drawW / 2, -drawH / 2, drawW, drawH);
    ctx.restore();

    const dataUrl = canvas.toDataURL('image/jpeg', 0.94);
    onSave(dataUrl);
    onClose();
  };

  if (!isOpen) return null;

  const { baseWidth, baseHeight } = getBaseDimensions();
  const isRotated90 = rotation % 180 !== 0;
  const renderWidth = isRotated90 ? baseHeight : baseWidth;
  const renderHeight = isRotated90 ? baseWidth : baseHeight;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl border border-[#2E2E2E] bg-[#111111] text-white shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#242424] bg-[#161616] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 border border-[#333333] bg-black text-white">
              <Move className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-black text-sm sm:text-base uppercase tracking-tight text-white">
                CĂN CHỈNH VỊ TRÍ &amp; CẮT ẢNH
              </h3>
              <p className="font-mono text-[10px] text-[#888888] uppercase tracking-wider">
                Kéo trực tiếp hoặc dùng thanh trượt để chỉnh lệch
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 border border-[#333333] bg-[#161616] hover:bg-white hover:text-black transition-colors"
            title="Đóng"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
          
          {/* Aspect Ratio Selector */}
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
            <span className="text-[#888888] uppercase tracking-wider flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-white" />
              TỈ LỆ KHUNG HÌNH:
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setAspectRatio(4 / 3)}
                className={`px-2.5 py-1 text-[11px] border transition-colors ${
                  Math.abs(aspectRatio - 4 / 3) < 0.05
                    ? 'border-white bg-white text-black font-bold'
                    : 'border-[#333333] bg-[#161616] text-[#A3A3A3] hover:text-white'
                }`}
              >
                4:3 (HỒ SƠ)
              </button>
              <button
                type="button"
                onClick={() => setAspectRatio(1)}
                className={`px-2.5 py-1 text-[11px] border transition-colors ${
                  Math.abs(aspectRatio - 1) < 0.05
                    ? 'border-white bg-white text-black font-bold'
                    : 'border-[#333333] bg-[#161616] text-[#A3A3A3] hover:text-white'
                }`}
              >
                1:1 (VUÔNG)
              </button>
              <button
                type="button"
                onClick={() => setAspectRatio(16 / 9)}
                className={`px-2.5 py-1 text-[11px] border transition-colors ${
                  Math.abs(aspectRatio - 16 / 9) < 0.05
                    ? 'border-white bg-white text-black font-bold'
                    : 'border-[#333333] bg-[#161616] text-[#A3A3A3] hover:text-white'
                }`}
              >
                16:9 (NGANG)
              </button>
            </div>
          </div>

          {/* Interactive Crop Viewport Stage */}
          <div className="flex flex-col items-center justify-center">
            <div
              ref={containerRef}
              style={{
                width: `${viewportSize.width}px`,
                height: `${viewportSize.height}px`,
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheel}
              className={`relative border-2 border-dashed border-[#555555] hover:border-white bg-[#060606] overflow-hidden select-none transition-colors ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
            >
              {/* Image with Transformations */}
              {imgElement && (
                <div
                  style={{
                    position: 'absolute',
                    left: `${viewportSize.width / 2 + offsetX}px`,
                    top: `${viewportSize.height / 2 + offsetY}px`,
                    width: `${renderWidth}px`,
                    height: `${renderHeight}px`,
                    transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
                    transformOrigin: 'center center',
                    willChange: 'transform',
                  }}
                  className="pointer-events-none"
                >
                  <img
                    src={imageSrc}
                    alt="Căn chỉnh ảnh"
                    draggable={false}
                    className="w-full h-full object-contain pointer-events-none"
                  />
                </div>
              )}

              {/* Rule of Thirds Grid Overlay for perfect face framing */}
              <div className="absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-3 opacity-30">
                <div className="border-r border-b border-white/40"></div>
                <div className="border-r border-b border-white/40"></div>
                <div className="border-b border-white/40"></div>
                <div className="border-r border-b border-white/40"></div>
                <div className="border-r border-b border-white/40"></div>
                <div className="border-b border-white/40"></div>
                <div className="border-r border-white/40"></div>
                <div className="border-r border-white/40"></div>
                <div></div>
              </div>

              {/* Center Target Indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border border-white/50 pointer-events-none" />

              {/* Touch/Drag hint */}
              <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/75 border border-[#333333] font-mono text-[9px] text-[#CCCCCC] pointer-events-none">
                GIỮ &amp; KÉO ĐỂ DI CHUYỂN
              </div>
            </div>
          </div>

          {/* Precision Controls */}
          <div className="space-y-4 pt-2 border-t border-[#222222]">
            
            {/* 1. Quick Presets Bar */}
            <div className="flex items-center justify-between flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="text-[#888888] uppercase">CĂN NHANH:</span>
              <div className="flex flex-wrap gap-1">
                <button
                  type="button"
                  onClick={alignTopFace}
                  className="px-2 py-1 border border-[#333333] bg-[#161616] hover:border-white hover:text-white transition-colors flex items-center gap-1"
                  title="Căn cao hơn để lấy rõ khuôn mặt"
                >
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>CĂN KHUÔN MẶT</span>
                </button>
                <button
                  type="button"
                  onClick={alignCenter}
                  className="px-2 py-1 border border-[#333333] bg-[#161616] hover:border-white hover:text-white transition-colors"
                >
                  CĂN CHÍNH GIỮA
                </button>
                <button
                  type="button"
                  onClick={resetTransform}
                  className="px-2 py-1 border border-[#333333] bg-[#161616] text-[#A3A3A3] hover:text-white hover:border-white transition-colors flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>ĐẶT LẠI</span>
                </button>
              </div>
            </div>

            {/* 2. Offset X: Trái / Phải */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#A3A3A3] uppercase flex items-center gap-1.5">
                  <ArrowLeft className="w-3 h-3" /> LỆCH TRÁI / PHẢI <ArrowRight className="w-3 h-3" />
                </span>
                <span className="text-white font-bold">{offsetX > 0 ? `+${offsetX}px` : `${offsetX}px`}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => nudge(-15, 0)}
                  className="p-1.5 border border-[#333333] bg-[#161616] hover:border-white text-xs"
                  title="Sang trái 15px"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <input
                  type="range"
                  min="-250"
                  max="250"
                  value={offsetX}
                  onChange={(e) => setOffsetX(Number(e.target.value))}
                  className="flex-1 accent-white h-1.5 bg-[#262626] cursor-pointer"
                />
                <button
                  type="button"
                  onClick={() => nudge(15, 0)}
                  className="p-1.5 border border-[#333333] bg-[#161616] hover:border-white text-xs"
                  title="Sang phải 15px"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 3. Offset Y: Lên / Xuống */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#A3A3A3] uppercase flex items-center gap-1.5">
                  <ArrowUp className="w-3 h-3" /> LỆCH LÊN / XUỐNG <ArrowDown className="w-3 h-3" />
                </span>
                <span className="text-white font-bold">{offsetY > 0 ? `+${offsetY}px` : `${offsetY}px`}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => nudge(0, -15)}
                  className="p-1.5 border border-[#333333] bg-[#161616] hover:border-white text-xs"
                  title="Lên trên 15px"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
                <input
                  type="range"
                  min="-250"
                  max="250"
                  value={offsetY}
                  onChange={(e) => setOffsetY(Number(e.target.value))}
                  className="flex-1 accent-white h-1.5 bg-[#262626] cursor-pointer"
                />
                <button
                  type="button"
                  onClick={() => nudge(0, 15)}
                  className="p-1.5 border border-[#333333] bg-[#161616] hover:border-white text-xs"
                  title="Xuống dưới 15px"
                >
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 4. Zoom / Scale & Rotation Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* Zoom Slider */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#A3A3A3] uppercase flex items-center gap-1">
                    <ZoomIn className="w-3 h-3" /> THU PHÓNG (ZOOM)
                  </span>
                  <span className="text-white font-bold">{Math.round(scale * 100)}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setScale((s) => Math.max(0.5, Number((s - 0.1).toFixed(2))))}
                    className="p-1.5 border border-[#333333] bg-[#161616] hover:border-white text-xs"
                    title="Thu nhỏ"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="range"
                    min="0.5"
                    max="3.0"
                    step="0.05"
                    value={scale}
                    onChange={(e) => setScale(Number(e.target.value))}
                    className="flex-1 accent-white h-1.5 bg-[#262626] cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => setScale((s) => Math.min(3.0, Number((s + 0.1).toFixed(2))))}
                    className="p-1.5 border border-[#333333] bg-[#161616] hover:border-white text-xs"
                    title="Phóng to"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Rotation & Quick Rotate */}
              <div className="space-y-1.5 flex flex-col justify-end">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#A3A3A3] uppercase flex items-center gap-1">
                    <RotateCw className="w-3 h-3" /> XOAY GÓC
                  </span>
                  <span className="text-white font-bold">{rotation}°</span>
                </div>
                <button
                  type="button"
                  onClick={() => setRotation((r) => (r + 90) % 360)}
                  className="w-full py-2 border border-[#333333] bg-[#161616] hover:border-white text-xs font-mono uppercase flex items-center justify-center gap-2 transition-colors"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>XOAY 90 ĐỘ</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-[#242424] bg-[#161616] flex items-center justify-between gap-3 font-mono text-xs uppercase">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3 border border-[#333333] bg-[#111111] text-[#A3A3A3] hover:text-white hover:border-[#666666] transition-colors"
          >
            HỦY BỎ
          </button>
          <button
            type="button"
            onClick={handleSaveCroppedImage}
            className="px-6 py-3 border border-white bg-white text-black font-bold tracking-wider hover:bg-transparent hover:text-white transition-all flex items-center gap-2 shadow-lg"
          >
            <Check className="w-4 h-4 stroke-[2.5]" />
            <span>LƯU &amp; ÁP DỤNG ẢNH</span>
          </button>
        </div>

      </div>
    </div>
  );
};
