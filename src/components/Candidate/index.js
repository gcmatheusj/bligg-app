import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useForm } from 'react-hook-form';

export default function Cadidate({ open, handleClose, handleCandidate }) {
  const { register, handleSubmit } = useForm()

  const onSubmit = formData => {
    handleCandidate(formData);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Candidate</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <DialogContentText>
            If you lost your job during the pandemic season of covid19, don't let the virus take you down. Fill the form below and we will help you be back to the game. And never forget, <strong>Everything is gonna be alright</strong>!
          </DialogContentText>
            <TextField
              variant="outlined"
              margin="dense"
              id="fullname"
              label="Full Name"
              name="full_name"
              type="text"
              fullWidth
              inputRef={register}
            />
            <TextField
              variant="outlined"
              margin="dense"
              id="position"
              label="Position"
              name="position"
              type="text"
              fullWidth
              inputRef={register}
            />
            <TextField
              variant="outlined"
              margin="dense"
              id="years_of_exp"
              label="Years of Experience"
              name="years_of_exp"
              type="number"
              fullWidth
              inputRef={register}
            />
            <TextField
              variant="outlined"
              margin="dense"
              id="country"
              label="Country"
              name="country"
              type="text"
              fullWidth
              inputRef={register}
            />
            <TextField
              variant="outlined"
              margin="dense"
              id="state"
              label="State"
              name="state"
              type="text"
              fullWidth
              inputRef={register}
            />
            <TextField
              variant="outlined"
              margin="dense"
              id="city"
              label="City"
              name="city"
              type="text"
              fullWidth
              inputRef={register}
            />
            <TextField
              variant="outlined"
              margin="dense"
              id="linkedin"
              label="Linkedin Profile"
              name="linkedin_url"
              type="text"
              fullWidth
              inputRef={register}
            />
            <TextField
              variant="outlined"
              margin="dense"
              id="email"
              label="Email Address"
              name="email"
              type="email"
              fullWidth
              inputRef={register}
            />
            <TextField
              variant="outlined"
              margin="dense"
              id="password"
              label="Password"
              name="password"
              type="password"
              fullWidth
              inputRef={register}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Subscribe
          </Button>
        </DialogActions>
          </form>
      </Dialog>
    </div>
  );
}
