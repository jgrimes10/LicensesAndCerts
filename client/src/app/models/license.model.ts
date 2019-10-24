export interface LicenseData {
    id: number;
    professionalRole: string;
    state: string;
    licenseName: string;
    totalHoursRequired: number;
    totalOnlineHoursAccepted: number;
    renewalPeriod: number;
    reminder: number;
    professionalNumber: string;
    nextRenewalDate: number;
    deleted: boolean;
}
