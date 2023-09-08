const ModalAvatar = ({ avatarIcon, avatarText }) => {
  return (
    <div className="modal-user-avatar-container">
      <div className="modal-user-avatar">
        <img
          className="modal-avatar-icon"
          src="/assets/images/svg/Layer_1.svg"
          alt=""
        />
        <img
          className="modal-guest-text-icon"
          src="/assets/images/GUEST.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default ModalAvatar;