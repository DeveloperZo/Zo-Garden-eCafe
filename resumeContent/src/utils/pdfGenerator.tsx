// src/utils/pdfGenerator.ts
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ResumeData {
  experience: Array<{
    company: string | undefined;
    role: string;
    startDate: Date;
    endDate: Date;
    accomplishments: string[];
  }>;
  education: Array<{
    institution: string | undefined;
    degree: string;
    startDate: Date;
    endDate: Date;
    details: string[];
  }>;
  skills: string[];
}

const generatePDF = async (data: ResumeData, filename: string): Promise<void> => {
  // First create a clone of the resume container without the download button
  const resumeContainer = document.querySelector('.resume-container');
  if (!resumeContainer) return;
  
  const clonedResume = resumeContainer.cloneNode(true) as HTMLElement;
  const downloadButton = clonedResume.querySelector('.download-button');
  if (downloadButton && downloadButton.parentNode) {
    downloadButton.parentNode.removeChild(downloadButton);
  }
  
  // Add the cloned element to the DOM temporarily, but hide it
  clonedResume.style.position = 'absolute';
  clonedResume.style.left = '-9999px';
  document.body.appendChild(clonedResume);
  
  try {
    // Generate canvas from the DOM element
    const canvas = await html2canvas(clonedResume, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      logging: false
    });
    
    // Calculate dimensions to fit on A4
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    
    // Create PDF instance
    const pdf = new jsPDF('p', 'mm', 'a4');
    let currentPage = 1;
    
    // Add image to first page
    pdf.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    
    // Add additional pages if content exceeds page height
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      currentPage++;
    }
    
    // Save the PDF
    pdf.save(filename);
  } catch (error) {
    console.error('Error generating PDF:', error);
  } finally {
    // Clean up the cloned element
    document.body.removeChild(clonedResume);
  }
};

export default generatePDF;