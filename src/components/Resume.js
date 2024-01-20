import React, { useState } from 'react'
import { RESUME_DOWNLOAD_URL } from '../constants';
import { PDFDocument } from 'pdf-lib';

const Resume = () => {
    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        setLoading(true);

        window.open(RESUME_DOWNLOAD_URL)

        try {
            const modifiedPdfBuffer = await replaceTextInPdf(RESUME_DOWNLOAD_URL, '+917062712600', '-hidden-');

            // Create a Blob from the modified PDF buffer
            const blob = new Blob([modifiedPdfBuffer], { type: 'application/pdf' });

            // Create a download link
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'Resume_Ankit_Jangir.pdf';

            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading resume:', error);
        } finally {
            setLoading(false);
        }
    };

    const replaceTextInPdf = async (resumeUrl, oldText, newText) => {
        try {
            // const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
            const response = await fetch(resumeUrl);
            const originalPdfBuffer = await response.arrayBuffer();

            const pdfDoc = await PDFDocument.load(originalPdfBuffer);

            // Iterate through all pages and replace text
            const pages = pdfDoc.getPages();
            for (const page of pages) {
                const textContent = page.getTextContent();
                for (const item of textContent.items) {
                    if (item.str === oldText) {
                        const { x, y } = item.transform;
                        const fontColor = item.color;

                        // Replace
                        page.drawText(newText, { x, y, fontColor });
                    }
                }
            }

            // Save the modified PDF as a new buffer
            const modifiedPdfBuffer = await pdfDoc.save();

            return modifiedPdfBuffer;
        } catch (error) {
            throw new Error('Error replacing text in PDF: ', error);
        }

    }
    return (
        <div className='group text-white transition duration-300 border-b border-transparent hover:border-white hover:cursor-pointer'
            onClick={() => handleDownload()}
        >
            Download resume
        </div>
    )
}

export default Resume