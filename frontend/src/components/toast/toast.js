import { CloudAlert, CloudCheck, X } from "lucide-react";
import React, { useEffect } from "react";
import { useStore } from "../../store/store";

const TOAST_TIME = 10;

export const initialState = {
  type: "",
  message: "",
};

function Toast() {
  const { toast, setToast } = useStore();

  useEffect(() => {
    if (toast.type) {
      setTimeout(() => {
        setToast(initialState);
      }, TOAST_TIME * 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast]);

  if (!toast.type) return;

  return (
    <div className="flex gap-3 bg-white absolute bottom-8 right-5 p-2.5 rounded-xl border border-gray text-sm">
      {toast.type === "error" ? (
        <CloudAlert size={20} />
      ) : (
        <CloudCheck size={20} />
      )}
      <div className="w-72">{toast.message}</div>
    </div>
  );
}

export default Toast;
