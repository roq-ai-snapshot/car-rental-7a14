interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Administrator', 'Vehicle Owner'],
  tenantName: 'Administration',
  applicationName: 'Car Rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own reservations',
    'View vehicle details',
    'View reservation details',
    'Manage own user information',
  ],
  ownerAbilities: ['Manage users', 'Manage administration', 'Manage vehicles', 'Manage reservations'],
  getQuoteUrl: 'https://app.roq.ai/proposal/d62bcae4-dc7d-4484-a0fb-85defe055769',
};
