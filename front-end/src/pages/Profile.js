import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function Profile() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({ name: 'Username', email: 'user@example.com', dob:'1990-01-01', gender:'Prefer not to say' });
  const [form, setForm] = useState(user);

  const handleSave = () => { setUser(form); setOpen(false); };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign:'center', borderRadius:3 }}>
        <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb:2 }}>{user.name.charAt(0)}</Avatar>
        <Typography variant="h5" gutterBottom>{user.name}</Typography>
        <Typography variant="body2" color="text.secondary">{user.email}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt:1 }}>DOB: {user.dob}</Typography>
        <Typography variant="body2" color="text.secondary">Gender: {user.gender}</Typography>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt:3 }}>
          <Button variant="outlined" onClick={()=>{ setForm(user); setOpen(true);}}>Edit Profile</Button>
          <Button variant="contained" color="secondary">Logout</Button>
        </Stack>
      </Paper>
      <Dialog open={open} onClose={()=>setOpen(false)} fullWidth maxWidth="xs">
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent sx={{ pt:2 }}>
          <Stack spacing={2}>
            <TextField label="Name" fullWidth value={form.name} onChange={(e)=>setForm({ ...form, name: e.target.value})} />
            <TextField label="Email" fullWidth value={form.email} onChange={(e)=>setForm({ ...form, email: e.target.value})} />
            <TextField label="Date of Birth" type="date" fullWidth InputLabelProps={{ shrink:true }} value={form.dob} onChange={(e)=>setForm({ ...form, dob: e.target.value})} />
            <TextField select label="Gender" fullWidth value={form.gender} onChange={(e)=>setForm({ ...form, gender: e.target.value})}>
              {['Male','Female','Non-binary','Prefer not to say'].map((option)=>(<MenuItem key={option} value={option}>{option}</MenuItem>))}
            </TextField>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Profile; 