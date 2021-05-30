import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const DummyModal = React.forwardRef((props,ref) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const { open, close, message, title, headProp } = props;

  const shortDec = title || 'Text in a modal';
  const desc = message || 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.';

  return (
    <div ref={ref}>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="dummy-modal-title"
        aria-describedby="dummy-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 ref={headProp} id="dummy-modal-title">{shortDec}</h2>
          <p id="dummy-modal-description">
            {desc}
          </p>
        </div>
      </Modal>
    </div>
  );
});
DummyModal.displayName = DummyModal;
export default DummyModal;
