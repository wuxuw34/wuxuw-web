"use client";
import {
  forwardRef,
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
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
    // const [modelOpen, setModelOpen] = useState(open ?? false);
    const handleClose = useCallback(() => {}, [onClose]);
    const handleClickBackdrop = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target !== e.currentTarget) return;
        onClose?.();
      },
      [onClose],
    );

    // useEffect(() => {
    //   if (open !== modelOpen) {
    //     const update = () => {
    //       setModelOpen(open ?? false);
    //     };
    //     update();
    //   }
    // }, [open]);

    if (!open) return null;

    return createPortal(
      <div
        id="model"
        className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50 backdrop-blur-xs"
        onClick={handleClickBackdrop}
      >
        {children}
      </div>,
      document.body,
    );
  },
);

Model.displayName = "Model";

export default Model;
