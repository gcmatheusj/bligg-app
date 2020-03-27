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
import { professions } from '../professions';

export default function Candidate({ open, handleClose, handleCandidate }) {
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
            If you lost your job during the Covid-19 Pandemic, don't remain a victim of the virus. Fill out the form below and we will help you find employment. And never forget. <strong>Everything is gonna be alright</strong>!
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
            <Autocomplete
              id="profession-select"
              options={professions}
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
                  id="position"
                  label="Position"
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
              id="years_of_exp"
              label="Years of Experience"
              name="years_of_exp"
              type="number"
              fullWidth
              inputRef={register}
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
              label="Register a Password"
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
            Submit
          </Button>
        </DialogActions>
          </form>
      </Dialog>
    </div>
  );
}

