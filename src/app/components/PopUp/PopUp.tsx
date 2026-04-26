import Style from "./popup.module.css"



interface PopupProps {
  onClose: () => void
}

export default function PopUp({ onClose }: PopupProps) {
  return (
    <div className={Style.popup} onClick={onClose}>
      <p>Em construção</p>
    </div>
  )
}