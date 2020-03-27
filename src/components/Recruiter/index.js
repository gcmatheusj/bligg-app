import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useForm } from 'react-hook-form';
import { countries } from '../countries';

export default function Recruiter({ open, handleClose, handleRecruiter }) {
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
          In times like this Recruiters like you can play a huge difference in the lives of others. Fill in the form below, gain free access to a database filled with talented professionals and become a hero, helping people get back into the workforce again.
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
          <Autocomplete
              id="country-select"
              options={countries}
              autoHighlight
              getOptionLabel={option => option.label}
              renderOption={option => (
                <React.Fragment>
                  {option.label} ({option.code})
                </React.Fragment>
              )}
              renderInput={params => (
                <TextField
                  {...params}
                  variant="outlined"
                  margin="dense"
                  id="country"
                  label="Country"
                  fullWidth
                  inputRef={register}
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
            label="Register a Password"
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
          <Button type="submit" color="primary">
            Submit
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
