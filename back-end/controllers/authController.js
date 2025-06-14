import User from '../models/User.js';

// Get user profile by username (e.g., from query param or session)
export const getProfile = async (req, res) => {
  try {
    const { username } = req.query; // e.g., /api/profile?username=foo
    if (!username) return res.status(400).json({ error: 'Username required' });
    const user = await User.findByUsername(username);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
};

// Update user profile by username
export const updateProfile = async (req, res) => {
  try {
    const { username, email, dob, gender } = req.body;
    if (!username) return res.status(400).json({ error: 'Username required' });
    await User.updateProfile(username, { email, dob, gender });
    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
};