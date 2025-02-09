import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import { FaTimes } from "react-icons/fa";
import "react-responsive-modal/styles.css";

const PdfViewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pdfUrl = location.state?.pdfUrl;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!pdfUrl) {
      navigate(-1);
    } else {
      setIsModalOpen(true);
    }
  }, [pdfUrl, navigate]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
          closeButton: "hidden", // Hide default close button
        }}
        styles={{
          modal: {
            maxWidth: "90%",
            width: "100%",
            height: "auto",
            padding: "0",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        <div className="relative w-full h-[80vh] sm:h-[95vh] overflow-hidden">
          <iframe
            src={pdfUrl}
            title="PDF Viewer"
            className="w-full h-full border-none rounded-lg shadow-lg"
          />
          <button
            onClick={handleCloseModal}
            className="absolute top-[15px] right-4 bg-blue-500 text-white p-1 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 z-50"
            aria-label="Close PDF viewer"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PdfViewer;