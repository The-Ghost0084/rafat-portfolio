"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ProjectGalleryProps = {
  images: string[];
  projectTitle: string;
};

export default function ProjectGallery({
  images,
  projectTitle,
}: ProjectGalleryProps) {
  const params = useParams();

  const lang =
    typeof params?.lang === "string" ? params.lang : "en";

  const isArabic = lang === "ar";

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return current === 0 ? images.length - 1 : current - 1;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return current === images.length - 1 ? 0 : current + 1;
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();

      if (event.key === "ArrowLeft") {
        if (isArabic) {
          showNext();
        } else {
          showPrevious();
        }
      }

      if (event.key === "ArrowRight") {
        if (isArabic) {
          showPrevious();
        } else {
          showNext();
        }
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    activeIndex,
    closeLightbox,
    showNext,
    showPrevious,
    isArabic,
  ]);

  const text = {
    gallery: isArabic ? "معرض المشروع" : "Project Gallery",

    title: isArabic
      ? "الأعمال الميدانية، التركيب، وتسليم المشروع."
      : "Fieldwork, installation, and project delivery.",

    description: isArabic
      ? "سجل مرئي لأعمال تنفيذ المشروع والمعدات والأنشطة الميدانية والبنية التحتية المنجزة."
      : "A visual record of the project's implementation, equipment, field activities, and completed infrastructure.",

    photo: isArabic ? "صورة" : "Photo",
    photos: isArabic ? "صور" : "Photos",

    view: isArabic ? "عرض" : "View",

    close: isArabic ? "إغلاق عارض الصور" : "Close image viewer",

    previous: isArabic ? "الصورة السابقة" : "Previous image",

    next: isArabic ? "الصورة التالية" : "Next image",

    imageViewer: isArabic ? "عارض صور" : "image viewer",

    projectImage: isArabic ? "صورة المشروع" : "project image",

    openImage: isArabic ? "فتح صورة المشروع" : "Open project image",
  };

  const lightbox =
    mounted && activeIndex !== null
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={
              isArabic
                ? `${text.imageViewer} ${projectTitle}`
                : `${projectTitle} ${text.imageViewer}`
            }
            dir={isArabic ? "rtl" : "ltr"}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2147483647,
              background: "rgba(2, 6, 23, 0.97)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            {/* Backdrop click area */}
            <button
              type="button"
              aria-label={text.close}
              onClick={closeLightbox}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
                background: "transparent",
                cursor: "default",
                zIndex: 1,
              }}
            />

            {/* Main image */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "min(86vw, 1400px)",
                height: "82vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <img
                src={images[activeIndex]}
                alt={
                  isArabic
                    ? `${projectTitle} - ${text.projectImage} ${
                        activeIndex + 1
                      }`
                    : `${projectTitle} ${text.projectImage} ${
                        activeIndex + 1
                      }`
                }
                style={{
                  display: "block",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "18px",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
                }}
              />
            </div>

            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label={text.close}
              style={{
                position: "absolute",
                top: "22px",
                right: "22px",
                zIndex: 4,
                width: "46px",
                height: "46px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.22)",
                background: "rgba(15,23,42,0.72)",
                color: "#fff",
                fontSize: "30px",
                lineHeight: 1,
                cursor: "pointer",
              }}
            >
              ×
            </button>

            {/* Previous */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={showPrevious}
                aria-label={text.previous}
                style={{
                  position: "absolute",
                  left: "22px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 4,
                  width: "52px",
                  height: "52px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.22)",
                  background: "rgba(15,23,42,0.72)",
                  color: "#fff",
                  fontSize: "38px",
                  lineHeight: 1,
                  cursor: "pointer",
                }}
              >
                ‹
              </button>
            )}

            {/* Next */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={showNext}
                aria-label={text.next}
                style={{
                  position: "absolute",
                  right: "22px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 4,
                  width: "52px",
                  height: "52px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255,255,255,0.22)",
                  background: "rgba(15,23,42,0.72)",
                  color: "#fff",
                  fontSize: "38px",
                  lineHeight: 1,
                  cursor: "pointer",
                }}
              >
                ›
              </button>
            )}

            {/* Counter */}
            <div
              style={{
                position: "absolute",
                bottom: "22px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 4,
                padding: "8px 14px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(15,23,42,0.72)",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {activeIndex + 1} / {images.length}
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <section
        className="bg-slate-50 py-20 sm:py-24"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
                {text.gallery}
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">
                {text.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                {text.description}
              </p>
            </div>

            <p className="shrink-0 text-sm font-medium text-slate-500">
              {images.length}{" "}
              {images.length === 1 ? text.photo : text.photos}
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={
                  isArabic
                    ? `${text.openImage} ${index + 1} - ${projectTitle}`
                    : `${text.openImage} ${projectTitle} ${index + 1}`
                }
                className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 text-left shadow-[0_18px_55px_-38px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_-35px_rgba(15,23,42,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  aria-hidden="true"
                  className="scale-110 object-cover object-center blur-xl transition-transform duration-700 group-hover:scale-[1.14]"
                />

                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-slate-950/25"
                />

                <Image
                  src={image}
                  alt={
                    isArabic
                      ? `${projectTitle} - ${text.projectImage} ${index + 1}`
                      : `${projectTitle} ${text.projectImage} ${index + 1}`
                  }
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />

                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <span className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-slate-950/45 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/45 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                  {text.view}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox}
    </>
  );
}