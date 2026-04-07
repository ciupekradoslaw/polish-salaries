import { Salary } from '../models';

export const SALARY_MOCK: Salary[] = [
  {
    id: 1,
    title: 'Prezydent',
    category: 'Polityka',
    icon: 'person',
    gross: 25000,
    net: 18000,
    source: 'gov.pl',
    vsAverage: '+173%',
    isAboveAverage: true
  },
  {
    id: 2,
    title: 'Poseł',
    category: 'Polityka',
    icon: 'account_balance',
    gross: 12400,
    net: 9000,
    source: 'sejm.gov.pl',
    vsAverage: '+35%',
    isAboveAverage: true
  },
  {
    id: 3,
    title: 'Nauczyciel',
    category: 'Edukacja',
    icon: 'school',
    gross: 6000,
    net: 4500,
    source: 'MEN',
    vsAverage: '-34%',
    isAboveAverage: false
  }
];
