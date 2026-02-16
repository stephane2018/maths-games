export default function ConfirmDialog({ open, message, onConfirm, onCancel, confirmText = 'Yes', cancelText = 'No' }) {
  if (!open) return null;

  return (
    <div className="confirm-overlay" onClick={onCancel}>
      <div className="confirm-card" onClick={(e) => e.stopPropagation()}>
        <p className="confirm-message">{message}</p>
        <div className="confirm-buttons">
          <button className="btn btn-secondary" onClick={onCancel}>{cancelText}</button>
          <button className="btn btn-primary" onClick={onConfirm}>{confirmText}</button>
        </div>
      </div>
    </div>
  );
}
