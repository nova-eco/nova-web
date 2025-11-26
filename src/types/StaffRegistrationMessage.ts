export interface StaffRegistrationMessage {
  id: string;
  registrationId: string;
  isEnabled: boolean;
  sequenceNumber: number;
  validUntil: number;
}
