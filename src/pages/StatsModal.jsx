import {
    RegisterModalNavbar,
    StatsContainer
  } from '../components';

  const StatsModal = () => {
    return (             
        <div className="darken-filter">
      <div className="login-modal">
        <div className="modal-back-btn">
          <a href="lobby">
            <img src="/assets/images/back_button.png" alt="back_button" />
          </a>
        </div>
          <RegisterModalNavbar isStatsPage={true} />
          <div className="modal-header">
            <div className="modal-gunEdge-img">
              <img src="/assets/images/Modal-Gun-Edge.png" alt="" />
              </div>
              </div>
              <div className="modal-showcase-container">
            <StatsContainer/>
            </div>
            </div>
        </div>
  )}
  export default StatsModal;