import NavbarTwo from "../NavbarTwo/NavbarTwo";
import ThirdNavbar from "../ThirdNavabar.jsx/ThirdNavbar";
export const FirstNavbar = () => {
  return (
    <div className="container">
      <div className="nav-container">
        <div id="squadesflex" className="item">
          <img
            className="BackButton "
            src="/public/Back Button (1).svg"
            alt="svg10"
          />
          <div className="squaddies ">
            <p className="lessit">SQUADDIES</p>
          </div>
          <NavbarTwo></NavbarTwo>
        </div>
        <ThirdNavbar></ThirdNavbar>
      </div>
    </div>
  );
};
export default FirstNavbar;
