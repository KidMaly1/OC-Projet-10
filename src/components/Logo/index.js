/* istanbul ignore file */

import PropTypes from "prop-types";
import "./style.scss";

const Logo = ({ size }) => {
  const logoSize = size === "large" ? 160 : 130;

  return (
    <div className="Logo">
      <img
        src="/Logo1.png"
        alt="724 events logo"
        width={logoSize}
        height="auto"
        style={{
          display: "block",
          objectFit: "contain"
        }}
      />
    </div>
  );
};

Logo.propTypes = {
  size: PropTypes.string,
};

Logo.defaultProps = {
  size: "small",
};

export default Logo;








