export interface StaffRegistration {
  id: string;
  companyId: string;
  staffRoleId: string;
  email: string;
  forename: string;
  isEnabled?: boolean;
  surname: string;
  username: string;
  validUntil?: number;
}
