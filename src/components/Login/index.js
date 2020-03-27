import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useForm } from 'react-hook-form';

import { profile } from '../profile';

export default function Login({ open, handleClose, handleLogin }) {
  const { session, handleSubmit } = useForm()


  const onSubmit = formData => {
    handleLogin(formData);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
            <TextField
              variant="outlined"
              margin="dense"
              id="email"
              label="Email Address"
              name="email"
              type="email"
              fullWidth
              inputRef={session}
            />
            <Autocomplete
              id="profile-select"
              options={profile}
              autoHighlight
              getOptionLabel={option => option.label}
              renderOption={option => (
                <React.Fragment>
                  {option.label}
                </React.Fragment>
              )}
              renderInput={params => (
                <TextField
                  {...params}
                  variant="outlined"
                  margin="dense"
                  id="profile"
                  label="Profile"
                  fullWidth
                  inputRef={session}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                  }}
                />
              )}
            />
            <TextField
              variant="outlined"
              margin="dense"
              id="password"
              label="Password"
              name="password"
              type="password"
              fullWidth
              inputRef={session}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Sign In
          </Button>
        </DialogActions>
          </form>
      </Dialog>
    </div>
  );
}

