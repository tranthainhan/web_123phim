import React, { useState } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { toggle } from "../../Actions/Dialog";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import FormRegister from "../FormRegister";

import "./style.scss";
import FormLogin from "../FormLogin";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const MyDialog = props => {
  const [register, setRegister] = useState(false);

  const { handleClose, open } = props;
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      className="dialog"
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
        className="dialog-title"
      ></DialogTitle>
      <DialogContent className="dialog-body">
        <FormRegister />
        <FormLogin />
      </DialogContent>
    </Dialog>
  );
};
const mapStateToProps = state => {
  return {
    open: state.toggleDialog
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleClose: () => {
      dispatch(toggle());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyDialog);
