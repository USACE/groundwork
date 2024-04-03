import { Button } from "../button";
import { useState } from "react";

function LoginButton({ onClick }) {
  return (
    <Button
      color="white"
      style="plain"
      className="font-normal"
      onClick={onClick}
    >
      Login
    </Button>
  );
}

function OkCancel({ onOk, onCancel }) {
  return (
    <div className="flex gap-2">
      <Button color="emerald" onClick={onOk}>
        Ok
      </Button>
      <Button color="white" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  );
}

function DeleteConfirm({ onDelete, alignConfirm = "right" }) {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleDelete = () => {
    setIsConfirming(true);
  };

  const handleCancel = () => {
    setIsConfirming(false);
  };

  const handleConfirm = () => {
    if (onDelete && typeof onDelete === "function") onDelete();
    setIsConfirming(false);
  };

  const cancelConfirm = [
    <Button key="cancel" color="white" onClick={handleCancel}>
      Cancel
    </Button>,
    <Button key="confirm" color="red" onClick={handleConfirm}>
      Confirm
    </Button>,
  ];

  return (
    <div className="flex gap-2">
      {isConfirming ? (
        <>
          {alignConfirm === "right" ? cancelConfirm : cancelConfirm.reverse()}
        </>
      ) : (
        <Button color="red" onClick={handleDelete}>
          Delete
        </Button>
      )}
    </div>
  );
}

export { LoginButton, OkCancel, DeleteConfirm };
