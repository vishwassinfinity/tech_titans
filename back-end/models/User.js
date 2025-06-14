import { db } from '../db.js';

class User {
  static async findByUsername(username) {
    const [users] = await db.promise().query(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );
    return users[0];
  }

  static async updateProfile(username, { email, dob, gender }) {
    await db.promise().query(
      'UPDATE users SET email=?, dob=?, gender=? WHERE username=?',
      [email, dob, gender, username]
    );
  }
}

export default User;