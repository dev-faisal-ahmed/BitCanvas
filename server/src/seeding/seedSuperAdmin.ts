import {
  BCRYPT_SALT,
  MONGO_URI,
  SUPER_ADMIN_EMAIL,
  SUPER_ADMIN_PASS,
} from '../app/config';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { User } from '../modules/user/model';

const seedSuperAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    const user = await User.findOne({ role: 'SUPER_ADMIN' });
    if (user) throw new Error('SuperAdmin Already Exist');

    const hashedPassword = await bcrypt.hash(SUPER_ADMIN_PASS, BCRYPT_SALT);
    const superAdmin = await User.create({
      name: {
        firstName: 'Faisal',
        lastName: 'Ahmed',
      },

      email: SUPER_ADMIN_EMAIL,
      password: hashedPassword,
      role: 'SUPER_ADMIN',
    });

    if (!superAdmin) throw new Error('SuperAdmin was not created');

    console.log('================ Success ================');
    console.log('EMAIL :', SUPER_ADMIN_EMAIL);
    console.log('PASSWORD :', SUPER_ADMIN_PASS);
    console.log('================ END ================');
  } catch (err) {
    console.log('================ Error ================');
    console.log('Error :', err?.message);
    console.log('================ END ================');
  } finally {
    await mongoose.disconnect();
  }
};

seedSuperAdmin();
