import * as React from "react";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";

import Fade from "@mui/material/Fade";

function ScrollBack(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 200,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        /* block: "center", */
        top: 0,
        behavior: "smooth",
      });
    }
  };
  /*  const scrollToTop = React.useCallback(() => {
    document.body.scrollTo();
  }, []); */

  return (
    <Fade in={trigger} >
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

/* ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
 
  window: PropTypes.func,
};
 */
export default ScrollBack;
