import { Document, Page } from 'react-pdf';
import React from 'react';

function MyPdfViewer() {
  return (
    <Document file="2.pdf">
      <Page pageNumber={1} />
    </Document>
  );
}
export default MyPdfViewer;