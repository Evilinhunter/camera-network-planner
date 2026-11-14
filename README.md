# Camera Network Planner

Plan the network for a security camera, access control or intercom job in one pass. List the devices and the planner gives you:

- **VLAN and IP plan**: one /24 per role (network management, security systems, cameras, access control) using a `10.<site>.<vlan>.0/24` scheme
- **PoE budget**: devices spread across switches so each stays under a PoE limit you set (80% of the budget by default)
- **Port map**: every device with its switch, port, VLAN and IP address
- **Switch configs**, ready to paste, for:
  - Cisco IOS-XE (Catalyst 9200/9300 style)
  - Aruba AOS-CX (CX 6000/6100/6200 style)
  - Arista EOS (720XP style)
  - MikroTik RouterOS 7 (CRS3xx/CRS5xx, bridge VLAN filtering)
- **Settings sheet** for UniFi and other switches you configure through a web interface
- **Firewall requests** to hand the customer's IT team
- **IT handoff** in Markdown, ready to paste into an email or ticket
- **Warnings** for ports that can't supply enough PoE, VLANs that run out of addresses, and busy uplinks

## Use it

It's one HTML file with no build step and no server. Open `index.html` in a browser, or host it on GitHub Pages: **Settings → Pages → Deploy from branch → main / root**.

The browser remembers your job. Use **Save or load a job** to copy a job out as text or load a saved one back in.

## Hardening built into the configs

- Access ports with PortFast/admin-edge and BPDU guard
- Broadcast storm control where the platform supports it in this form (Cisco, Arista)
- PoE turned off on ports with no PoE device
- Unused ports shut down and parked in an unused VLAN
- Uplink trunks carry only the security VLANs
- SSH only, web management off, management on its own VLAN

## Before you deploy

- Wattage and bitrate defaults are typical values. Replace them with the figures from each device's spec sheet.
- Camera, VMS and access control ports vary by vendor. Check the firewall requests against the vendor's port list.
- Change every `CHANGE_ME` password and secret.
- On MikroTik, VLAN filtering is switched on last. Paste the config from a console or a port you won't lose.
- Check the generated config against your switch model and software version before you deploy it.

## Roadmap ideas

- More platforms: Ubiquiti UniFi API, Netgear AV, Ruckus ICX, Aruba AOS-S
- Per-model presets for PoE budgets and port counts
- Larger subnets or multiple camera VLANs on big sites
- Import device lists from a CSV or a VMS export
- Batfish checks for VLAN isolation in CI

## License

MIT
