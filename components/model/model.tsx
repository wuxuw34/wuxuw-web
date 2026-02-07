"use client";
import { forwardRef } from "react";
import { createPortal } from "react-dom";

interface ModelProps {
  children?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
}

interface ModelRef {
  toggle: () => void;
}

const Model = forwardRef<ModelRef, ModelProps>(
  ({ children, open, onClose }) => {

    

    if (!open) return null;

    return createPortal(
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
        {children}
      </div>,
      document.body,
    );
  },
);

Model.displayName = "Model";

export default Model;
