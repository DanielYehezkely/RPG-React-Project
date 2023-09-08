const RegisterModalNavbar = ({isStatsPage}) => {
  return (
    <div className="modal-nav-bar">
      <div className="myAccount-box modal-title-structure ">
        <a className={isStatsPage ? ("darking-font"):("bright-font")} href="my-account">
          My Account
        </a>
      </div>
      <div className="myStats-box modal-title-structure">
        <a className={isStatsPage ? ("bright-font"):("darking-font")} href="my-stats">
          My Stats
        </a>
      </div>
    </div>
  );
};
export default RegisterModalNavbar;