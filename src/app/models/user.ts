export class User {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    dob?: Date;
    country?: string;
    role?: UserRole;  // Assuming UserRole is an enum defined elsewhere
}

export enum UserRole {
    Admin,
    RegularUser
}
