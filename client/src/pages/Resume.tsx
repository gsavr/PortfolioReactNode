import { Document, Page, pdfjs } from "react-pdf";
import resume from "../assets/resume.pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { NavBar } from "../layout/navBar";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Resume: React.FC = () => {
  return (
    <>
      <div className="min-w-screen min-h-screen bg-resume">
        <div className="container mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-start px-6 py-12">
          <div className="w-full px-6 pb-10">
            <NavBar />
          </div>

          <div className="gradient-bg container flex h-fit w-fit items-center justify-center overflow-x-auto overflow-y-auto rounded-xl p-0 shadow-2xl">
            <Document
              className={""}
              file={resume}
              renderMode={"svg"}
              error={
                <div>
                  Looks like Giorgio is updating his resume, please come back
                  soon.
                </div>
              }
              //onLoadError={console.error}
            >
              <Page
                className={"hidden md:block"}
                pageNumber={1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                renderMode={"svg"}
              />
              <Page
                className={"block md:hidden"}
                pageNumber={1}
                scale={0.65}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                renderMode={"svg"}
              />
            </Document>
          </div>
        </div>
      </div>
    </>
  );
};
