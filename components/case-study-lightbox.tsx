"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type LightboxItem = { src: string; alt: string };

type LightboxContextValue = {
  open: (src: string) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

function collectGallery(root: HTMLElement): LightboxItem[] {
  const nodes = root.querySelectorAll<HTMLElement>("[data-lightbox-src]");
  const items: LightboxItem[] = [];
  nodes.forEach((node) => {
    const src = node.getAttribute("data-lightbox-src");
    if (!src) return;
    items.push({
      src,
      alt: node.getAttribute("data-lightbox-alt") ?? "",
    });
  });
  return items;
}

export function CaseStudyLightboxRoot({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<LightboxItem[]>([]);
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);

  const open = useCallback((src: string) => {
    const root = rootRef.current;
    if (!root) return;
    const gallery = collectGallery(root);
    const i = gallery.findIndex((item) => item.src === src);
    if (gallery.length === 0 || i < 0) return;
    setItems(gallery);
    setIndex(i);
  }, []);

  const go = useCallback(
    (delta: number) => {
      setIndex((current) => {
        if (current === null || items.length === 0) return current;
        return (current + delta + items.length) % items.length;
      });
    },
    [items.length],
  );

  const goPrev = useCallback(() => go(-1), [go]);
  const goNext = useCallback(() => go(1), [go]);

  useEffect(() => {
    if (index === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, close, goPrev, goNext]);

  const active = index !== null ? items[index] : null;

  return (
    <LightboxContext.Provider value={{ open }}>
      <div ref={rootRef}>{children}</div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full screen image viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 sm:p-10"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-3 top-3 z-10 flex h-11 min-w-11 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:top-6"
            aria-label="Close image viewer"
          >
            ×
          </button>

          {items.length > 1 ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 top-1/2 z-10 flex h-12 min-w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 top-1/2 z-10 flex h-12 min-w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6"
                aria-label="Next image"
              >
                ›
              </button>
              <p className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1.5 text-sm font-medium text-white/90">
                {(index ?? 0) + 1} / {items.length}
              </p>
            </>
          ) : null}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active.src}
            alt={active.alt}
            className="max-h-[min(90dvh,900px)] max-w-[min(95vw,1400px)] object-contain"
          />
        </div>
      ) : null}
    </LightboxContext.Provider>
  );
}

export function CaseStudyImageTrigger({
  src,
  alt,
  className,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  children: ReactNode;
}) {
  const context = useContext(LightboxContext);

  if (!context) {
    return <div className={className}>{children}</div>;
  }

  return (
    <button
      type="button"
      data-lightbox-src={src}
      data-lightbox-alt={alt}
      className={`motion-case-image mx-auto block w-fit max-w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f387ab] focus-visible:ring-offset-2 ${className ?? ""}`}
      onClick={() => context.open(src)}
      aria-label={`View full size: ${alt}`}
    >
      {children}
    </button>
  );
}
