const ModalAvatar = ({ avatarIcon, avatarText }) => {
  return (
    <div className="modal-user-avatar-container">
      <div className="modal-user-avatar">
        <img
          className="modal-avatar-icon"
          src="/assets/images_modal/svg/Layer_1.svg"
          alt=""
        />
        <img
          className="modal-guest-text-icon"
          src="/assets/images_modal/GUEST.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default ModalAvatar;