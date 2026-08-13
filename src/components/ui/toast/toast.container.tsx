import { positionStylesConfig } from "@/config/toast.config";
import { ToastContainerProps } from "@/types/props/toast.props.types";
import ToastItem from "@/components/ui/toast/toast.item";

const ToastContainer = ({
  toasts,
  position,
  onRemove,
}: ToastContainerProps) => {
  return (
    <div
      className={`fixed ${positionStylesConfig[position]} z-100 flex flex-col gap-2`}
    >
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onRemove={onRemove}
          position={position}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
