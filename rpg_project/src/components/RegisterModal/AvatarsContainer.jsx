const AvatarsContainer = () => {
  const avatars = [
    'guest',
    'head-1',
    'head-2',
    'head-3',
    'head-4',
    'head-5',
    'head-6',
    'molotov',
    'tnt',
    'bomb'
  ];

  return (
    <div className="modal-avatars-container">
      <h3 className="box-headline">AVATAR</h3>
      <div className="modal-avatars">
        {avatars.map((avatar) => (
          <div key={avatar} className={`avatar-box ${avatar}`}>
            <div id={avatar} />
          </div>
        ))}
        {new Array(3).fill(null).map((_, index) => (
          <div key={index} className="avatar-box coming-soon">
            <p>COMING SOON</p>
          </div>
        ))}
      </div>
      <div className="modal-create-account-container add-squaddie-btn">
      <div className="btn">
        <div className="green-btn "><span>Create Account</span></div> {/**red-button class  + text change 'Logged In' */}
      </div>
      </div>
    </div>
  );
};
export default AvatarsContainer;