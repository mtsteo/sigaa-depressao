import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import lightning from "../assets/img/lightning.jpg";
import pix from "../assets/img/pix.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "10px",
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
        <div style={style}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1vw",
            }}
          >
            Ajude a manter esse site Online com qualquer valor!
          </div>
          <div
            style={{
              display: "inline-block",
              textAlign: "center",
              marginRight: "3vw",
            }}
          >
            <p style={{ fontSize: "3vh", fontWeight:"700", color:"white" }}>Ajude com a hospedagem do site!</p>
            <img src={pix} style={{ width: "80%" }} />
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
