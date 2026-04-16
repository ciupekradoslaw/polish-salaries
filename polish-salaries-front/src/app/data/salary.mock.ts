import { Salary } from '../models';

export const SALARY_MOCK: Salary[] = [
  {
    id: 1,
    slug: 'prezydent',
    title: 'Prezydent',
    icon: 'person',
    gross: 25000,
    net: 18000,
    source: 'gov.pl',
    vsAverage: '+173%',
    isAboveAverage: true,
    relatedSlugs: ['posel', 'minister', 'senator']
  },
  {
    id: 2,
    slug: 'posel',
    title: 'Poseł',
    icon: 'account_balance',
    gross: 12400,
    net: 9000,
    source: 'sejm.gov.pl',
    vsAverage: '+35%',
    isAboveAverage: true,
    relatedSlugs: ['senator', 'minister', 'prezydent']
  },
  {
    id: 3,
    slug: 'senator',
    title: 'Senator',
    icon: 'account_balance',
    gross: 11700,
    net: 8500,
    source: 'senat.gov.pl',
    vsAverage: '+28%',
    isAboveAverage: true,
    relatedSlugs: ['posel', 'minister', 'prezydent']
  },
  {
    id: 4,
    slug: 'minister',
    title: 'Minister',
    icon: 'gavel',
    gross: 14200,
    net: 10200,
    source: 'gov.pl',
    vsAverage: '+55%',
    isAboveAverage: true,
    relatedSlugs: ['posel', 'prezydent', 'sedzia']
  },
  {
    id: 5,
    slug: 'sedzia',
    title: 'Sędzia',
    icon: 'balance',
    gross: 10800,
    net: 7800,
    source: 'ms.gov.pl',
    vsAverage: '+18%',
    isAboveAverage: true,
    relatedSlugs: ['prokurator', 'adwokat', 'minister']
  },
  {
    id: 6,
    slug: 'nauczyciel',
    title: 'Nauczyciel',
    icon: 'school',
    gross: 6000,
    net: 4500,
    source: 'MEN',
    vsAverage: '-34%',
    isAboveAverage: false,
    relatedSlugs: ['wykladowca', 'pedagog', 'psycholog']
  },
  {
    id: 7,
    slug: 'programista',
    title: 'Programista',
    icon: 'code',
    gross: 18000,
    net: 12800,
    source: 'No Fluff Jobs 2025',
    vsAverage: '+97%',
    isAboveAverage: true,
    relatedSlugs: ['tester', 'devops', 'data-scientist']
  },
  {
    id: 8,
    slug: 'lekarz',
    title: 'Lekarz',
    icon: 'stethoscope',
    gross: 14500,
    net: 10400,
    source: 'NIL',
    vsAverage: '+58%',
    isAboveAverage: true,
    relatedSlugs: ['pielegniarka', 'stomatolog', 'farmaceuta']
  },
  {
    id: 9,
    slug: 'pielegniarka',
    title: 'Pielęgniarka',
    icon: 'medical_services',
    gross: 7200,
    net: 5300,
    source: 'NIPiP',
    vsAverage: '-21%',
    isAboveAverage: false,
    relatedSlugs: ['lekarz', 'ratownik-medyczny', 'fizjoterapeuta']
  },
  {
    id: 10,
    slug: 'kierowca',
    title: 'Kierowca',
    icon: 'local_shipping',
    gross: 6400,
    net: 4700,
    source: 'GUS',
    vsAverage: '-30%',
    isAboveAverage: false,
    relatedSlugs: ['magazynier', 'kurier', 'mechanik']
  }
];
