// src/app/models/admin.ts
import { User } from './user';

export class Admin extends User {
    adminLevel?: number;  // Optional property specific to Admins
}
