import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useForm } from 'react-hook-form';

export default function Cadidate({ open, handleClose, handleRecruiter }) {
  const { register, handleSubmit } = useForm()

  const onSubmit = formData => {
    handleRecruiter(formData);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Recruiters</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <DialogContentText>
          In times like this Recruiters like you can play a huge difference in people's lives. Fill the form below, gain free access to well talented professionals database and start helping people now.
          </DialogContentText>
          <TextField
            variant="outlined"
            margin="dense"
            id="company"
            label="Company"
            name="company_name"
            type="text"
            inputRef={register}
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="contact_person"
            label="Name"
            name="contact_person"
            type="text"
            inputRef={register}
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="country"
            label="Country"
            name="country"
            type="text"
            inputRef={register}
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="state"
            label="State"
            name="state"
            type="text"
            inputRef={register}
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="city"
            label="City"
            name="city"
            type="email"
            inputRef={register}
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="email"
            label="Email Address"
            name="email"
            type="email"
            inputRef={register}
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="password"
            label="Password"
            name="password"
            type="password"
            inputRef={register}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
