import {WorkExperience} from '../../interface-types/work-experience';

/* Template
  positionName: string;
  companyName: string;
  startDate: string;
  endDate: string;
  summary: string;
  tasks: string[];
  skills: string[];
 */
export const WORK_EXPERIENCE: WorkExperience [] = [
  {
    positionName: 'Software Developer in Defence & Security',
    companyName: 'CAE',
    startDate: '09/2019',
    endDate: '12/2019',
    summary: 'Assist the development of CAE\'s UAV (Unmanned aerial vehicle) simulator',
    tasks: [
      'Improved Maximum Elevation algorithm speed (from unusable to a few milliseconds)',
      'Upgraded UAV\'s pilot interface in C# and C++',
      'Improved UAV\'s community of practice\'s knowledge management by creating a department Wiki, introducing related processes and' +
      ' implementing modular Wiki templates to facilitate documentation'
    ],
    skills: [
      'C#', 'C++', 'Agile', 'Git'
    ]
  }
];
