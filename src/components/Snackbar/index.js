import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Slide from '@material-ui/core/Slide'

function TransitionRight (props) {
  return <Slide {...props} direction="left" />
}

const CustomSnackbar = ({ open, handleClose, message }) => (
  <Snackbar
    style={{ top: 87 }}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={open}
    onClose={handleClose}
    TransitionComponent={TransitionRight}
    autoHideDuration={6000}
  >
    <MuiAlert elevation={6} onClose={handleClose} variant="filled" severity="success">
      {message}
    </MuiAlert>
  </Snackbar>
)

export default CustomSnackbar
