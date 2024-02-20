import { UnitCode, type Alarm } from './alarm-view.types';

export const projectArchiveCodex: Alarm = {
  id: 'MAKAROV CORP',
  dueDate: '[IMPERATIVE]',
  label: 'PROJECT_ARCHIVE_TERMINAL',
  description: `Makarov Corps presents an operating system with a sleek, lightweight terminal, optimized for navigating an array of projects with ease. You are free to move around the icons and pop-ups on the desktop. `,
  unitCodeData: [
    [UnitCode.EVC, UnitCode.CTA, UnitCode.ERR, UnitCode.EVC],
    [UnitCode.AXH, UnitCode.OBX, UnitCode.EVC, UnitCode.DCX],
    [UnitCode.ERR, UnitCode.EVC, UnitCode.ERR, UnitCode.AXH],
    [UnitCode.EVC, UnitCode.CTA, UnitCode.OBX, UnitCode.OBX],
  ]
};

export const warpMailProtocol: Alarm = {
  id: 'alexander.makarov62@gmail.com',
  dueDate: '[IMPERATIVE CONVERGENCE]',
  label: 'WARP_MAIL_PROTOCOL',
  description: `Groundbreaking technology in the field of digital communication, employing quantum entanglement and advanced encryption methods to deliver messages instantaneously across vast distances.`,
  unitCodeData: [
    [UnitCode.CTA, UnitCode.OBX, UnitCode.EVC, UnitCode.EVC],
    [UnitCode.EVC, UnitCode.AXH, UnitCode.AXH, UnitCode.ERR],
    [UnitCode.OBX, UnitCode.DCX, UnitCode.ERR, UnitCode.ERR],
    [UnitCode.EVC, UnitCode.AXH, UnitCode.CTA, UnitCode.OBX],
  ]
};

export const linkedInMatrix: Alarm = {
  id: 'alexander-makarov-52b5a215a',
  dueDate: '[PROXIMAL MANDATE]',
  label: 'LINKEDIN_QUANTUM_LINK',
  description: `Access the hyperlink to send me a message through LinkedIn in the cybernetic dimension.`,
  unitCodeData: [
    [UnitCode.OBX, UnitCode.EVC, UnitCode.ERR, UnitCode.OBX],
    [UnitCode.AXH, UnitCode.ERR, UnitCode.EVC, UnitCode.CTA],
    [UnitCode.DCX, UnitCode.DCX, UnitCode.EVC, UnitCode.EVC],
    [UnitCode.EVC, UnitCode.AXH, UnitCode.CTA, UnitCode.OBX],
  ]
};
