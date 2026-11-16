/* Recommended gear catalog. Each entry becomes a search link at Amazon and B&H.
   {placeholders} are filled from the planner's results.
   "when" decides where the item shows:
     switch    camera planner jobs with PoE switches (customer network or separate network)
     recorder  camera planner jobs where cameras plug straight into a PoE recorder
     any       every camera planner job
     storage   the NVR storage calculator
     poe       the PoE budget calculator
   Other pages pick their entries with SITE_GEAR(when, values) in site.js. */
window.SITE_PRODUCTS = [
  { id: 'poe-switch', when: 'switch', name: 'PoE switch',
    qty: '{switches}', spec: '{ports} PoE ports, at least {budget} W PoE budget',
    query: '{ports} port PoE+ managed switch {budget}W' },
  { id: 'poe-nvr', when: 'recorder', name: 'PoE recorder (NVR)',
    qty: '{recorders}', spec: '{ports} PoE ports, at least {budget} W PoE budget',
    query: '{ports} channel PoE NVR' },
  { id: 'hdd', when: 'any', name: 'Surveillance hard drive',
    qty: '{drives}', spec: '{driveTB} TB each, about {tb} TB of recording in total',
    query: 'surveillance hard drive {driveTB}TB' },
  { id: 'cameras', when: 'any', name: 'PoE IP cameras',
    qty: '{cameras}', spec: 'Match the types and wattages in your device list',
    query: 'PoE IP security camera' },
  { id: 'cable', when: 'any', name: 'Cat6 bulk cable',
    qty: '{cableBoxes}', spec: '1000 ft boxes, at about {feetPerRun} ft per run',
    query: 'Cat6 bulk cable 1000ft CMR' },
  { id: 'patch', when: 'any', name: 'Patch cables',
    qty: '{patches}', spec: 'Short Cat6 patch cords for the switch or recorder end',
    query: 'Cat6 patch cable 3ft 10 pack' },
  { id: 'ups', when: 'any', name: 'UPS battery backup',
    qty: '1', spec: 'Sized for about {upsW} W of PoE plus the recorder',
    query: 'rack mount UPS 1500VA' },

  { id: 'storage-nvr', when: 'storage', name: 'NVR',
    qty: '1', spec: 'At least {channels} channels, {bays} drive bays, {mbps} Mbps incoming',
    query: '{channelsRounded} channel NVR {bays} bay' },
  { id: 'storage-hdd', when: 'storage', name: 'Surveillance hard drive',
    qty: '{drives}', spec: '{driveTB} TB each, for about {tb} TB of recording',
    query: 'surveillance hard drive {driveTB}TB' },

  { id: 'poe-switch-sized', when: 'poe', name: 'PoE switch',
    qty: '1', spec: 'At least {ports} PoE ports and {budget} W PoE budget, {standard} on every port',
    query: '{portsRounded} port {standard} PoE switch {budget}W' },
  { id: 'poe-injector', when: 'poe', name: 'PoE injector',
    qty: '{injectors}', spec: 'For devices that need more than one port can supply: {injectorW} W',
    query: '{injectorStandard} PoE injector {injectorW}W' }
];
