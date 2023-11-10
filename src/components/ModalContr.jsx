import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import qrcode from "../assets/img/qrcode.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "#ebf2f9",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function ModalContr({ isClose, isOpen }) {
  return (
    <Modal
      open={isOpen}
      onClose={isClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <div style={{display:"flex", justifyContent:"center", marginBottom:"1vw"}}>Ajude a manter esse site Online com qualquer valor!</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "inline-block", textAlign: "center", marginRight: "3vw" }}>
              <img src={qrcode} style={{ width: "20vw",  }} />
              <p style={{ fontSize:"2vh"}}>PIX</p>
            </div>
            <div style={{ display: "inline-block", textAlign: "center", marginLeft: "3vw"  }}>
              <img src={qrcode} style={{ width: "20vw"}} />
              <p style={{ fontSize:"2vh" }}>Sats BTC via lightning</p>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
