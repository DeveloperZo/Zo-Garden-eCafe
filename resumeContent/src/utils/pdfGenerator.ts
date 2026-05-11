// WYSIWYG PDF: captures the visible résumé DOM (same layout as the screen). Slices the canvas into A4 pages.
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const JPEG_QUALITY = 0.88;
/** Balance sharpness vs file size (1 = fastest/smallest, 2 = heavier). */
const CANVAS_SCALE = 1.45;

/**
 * Renders the on-screen `.resume-container` to a multi-page A4 PDF.
 * Uses the live element (not an off-screen clone) so layout, fonts, and CSS match the page.
 */
export async function generateResumePdfFromDom(filename: string): Promise<void> {
  const el = document.querySelector('.resume-container') as HTMLElement | null;
  if (!el) return;

  const btn = el.querySelector('.download-button') as HTMLElement | null;
  const prevVisibility = btn?.style.visibility ?? '';
  const prevPointer = btn?.style.pointerEvents ?? '';
  if (btn) {
    btn.style.visibility = 'hidden';
    btn.style.pointerEvents = 'none';
  }

  await document.fonts?.ready?.catch?.(() => undefined);

  try {
    const w = Math.max(el.scrollWidth, el.offsetWidth);
    const h = Math.max(el.scrollHeight, el.offsetHeight);

    const canvas = await html2canvas(el, {
      scale: CANVAS_SCALE,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: w,
      height: h,
      windowWidth: w,
      windowHeight: h,
      x: 0,
      y: 0,
    });

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageWidthMm = pdf.internal.pageSize.getWidth();
    const pageHeightMm = pdf.internal.pageSize.getHeight();

    // Full image scaled to page width; height derived from aspect ratio
    const imgWidthMm = pageWidthMm;
    const imgHeightMm = (canvas.height / canvas.width) * imgWidthMm;

    // One PDF page tall in px: mm/px is uniform when the image is scaled to page width
    const pxPerPage = (pageHeightMm / pageWidthMm) * canvas.width;
    let yPx = 0;
    let pageIndex = 0;

    while (yPx < canvas.height - 0.5) {
      const slicePx = Math.min(pxPerPage, canvas.height - yPx);
      const sliceCanvas = document.createElement('canvas');
      sliceCanvas.width = canvas.width;
      sliceCanvas.height = Math.ceil(slicePx);
      const ctx = sliceCanvas.getContext('2d');
      if (!ctx) break;
      ctx.drawImage(
        canvas,
        0,
        yPx,
        canvas.width,
        slicePx,
        0,
        0,
        canvas.width,
        slicePx,
      );

      const sliceData = sliceCanvas.toDataURL('image/jpeg', JPEG_QUALITY);
      const sliceHeightMm = (slicePx / canvas.height) * imgHeightMm;

      if (pageIndex > 0) pdf.addPage();
      pdf.addImage(sliceData, 'JPEG', 0, 0, imgWidthMm, sliceHeightMm);

      yPx += slicePx;
      pageIndex++;
    }

    pdf.save(filename);
  } catch (e) {
    console.error('PDF generation failed:', e);
  } finally {
    if (btn) {
      btn.style.visibility = prevVisibility;
      btn.style.pointerEvents = prevPointer;
    }
  }
}

export default generateResumePdfFromDom;
