"use client";

import { useState } from "react";
import { Modal } from "../modal";
import { DownloadContent } from "../donwload-content";

export const DownloadModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-green-600 px-6 py-2 rounded-full text-white transition-colors hover:bg-green-700 font-medium"
      >
        Download
      </button>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          content={<DownloadContent />}
          onClose={() => setIsModalOpen(false)}
          size="large"
        />
      )}
    </>
  );
};
