
import { useMemo, useRef, useState } from "react";
import {
  Search,
  BriefcaseBusiness,
  GraduationCap,
  Building2,
  Users,
  Layers3,
  MapPin,
  Clock3,
  ArrowRight,
  CheckCircle2,
  UserRound,
  Mail,
  Heart,
  IdCard,
  Info,
  UploadCloud,
  Send,
  X,
  Globe2,
  HardHat,
  FileText,
  LoaderCircle,
} from "lucide-react";

/* 
  Connect your backend/Formspree using the onSubmit prop:
  <Careers onSubmit={async (formData) => { ... }} />
*/

const POSITIONS = {
  "NTONARCH MEDIA": [
    ["Journalist / Reporter", "2–4 yrs", "Bachelor's", "Research, report and produce news stories and feature pieces for NTONARCH Media's platforms and publications.", ["Journalism or communications degree", "Strong investigative and writing skills", "Experience in field reporting", "Interview and source management", "Familiarity with media law and ethics"]],
    ["News Anchor / Presenter", "3–5 yrs", "Bachelor's", "Present news, documentaries, and live programmes on NTONARCH Media's broadcast channels.", ["On-camera presenting experience", "Clear diction and professional delivery", "Ability to read autocue and ad-lib", "Makeup and appearance readiness for broadcast", "Live broadcast composure"]],
    ["Camera Operator", "2–4 yrs", "Bachelor's / Certification", "Operate professional cameras for news, events, and productions for NTONARCH Media.", ["Professional camera operation (ENG/EFP)", "Studio and field shooting experience", "Lighting setup assistance", "Ability to work under tight deadlines", "Maintenance and care of camera equipment"]],
    ["Studio Production Manager", "4–6 yrs", "Bachelor's", "Manage studio production schedules, crews, and equipment to deliver high-quality NTONARCH Media productions.", ["Studio production management experience", "Broadcasting technical knowledge", "Team coordination and scheduling", "Budget and resource management", "Problem-solving in live studio environments"]],
    ["Radio Host / DJ", "2–4 yrs", "Bachelor's / Certification", "Host engaging live and pre-recorded radio programmes across NTONARCH Media's radio stations.", ["On-air radio hosting experience", "Strong voice and presentation skills", "Music curation and playlist management", "Audience engagement strategies", "Familiarity with radio broadcasting software"]],
    ["Broadcast Technician", "2–4 yrs", "Technical Diploma / Certification", "Operate and maintain broadcast transmission equipment ensuring uninterrupted on-air delivery.", ["Broadcast engineering or technical qualification", "Transmitter and encoder operation", "Fault diagnosis and rapid repair", "Shift work availability", "Regulatory compliance knowledge"]],
  ],
  "NTONARCH MARKET": [
    ["Market Operations Supervisor", "3–5 yrs", "Bachelor's", "Oversee daily marketplace operations, vendor management, and customer service at NTONARCH Market's physical outlets.", ["Retail or market operations experience", "Team supervision and training", "Vendor relationship management", "Inventory tracking and reporting", "Problem resolution on the floor"]],
    ["Sales Representative", "1–3 yrs", "Bachelor's", "Promote and sell NTONARCH Market products and services to individual and business customers on-ground.", ["B2C or B2B sales experience", "Strong persuasion and closing skills", "Product knowledge ability", "CRM or sales tracking tools", "Target-driven work ethic"]],
    ["Warehouse Manager", "4–6 yrs", "Bachelor's", "Manage NTONARCH Market's warehouse operations including stock control, dispatch, and team leadership.", ["Warehouse management experience", "Inventory management system proficiency", "Team leadership and scheduling", "Health and safety compliance", "Order fulfilment and dispatch oversight"]],
    ["Logistics / Delivery Coordinator", "2–4 yrs", "Bachelor's", "Coordinate last-mile delivery operations ensuring timely, accurate product delivery to NTONARCH Market customers.", ["Delivery logistics coordination experience", "Route planning and optimisation", "Driver scheduling and performance management", "Customer communication on delivery status", "Tracking and reporting tools proficiency"]],
    ["Customer Service Officer", "1–3 yrs", "Bachelor's", "Resolve customer queries, complaints, and requests at NTONARCH Market's physical service points.", ["Customer service or retail experience", "Conflict resolution and complaint handling", "POS system operation", "Patient and empathetic communication", "Knowledge of products and services"]],
    ["Stock Controller", "2–4 yrs", "Bachelor's / Diploma", "Monitor, record, and maintain accurate inventory levels across NTONARCH Market's storage and retail locations.", ["Stock control and inventory management experience", "ERP or inventory software proficiency", "Cycle count and audit experience", "Attention to detail and accuracy", "Physical ability for stockroom work"]],
  ],
  "NTONARCH FARMS": [
    ["Farm Manager", "4–6 yrs", "Bachelor's", "Oversee all farming operations across NTONARCH's agricultural sites, managing crops, livestock, and farm staff.", ["Farm or agribusiness management experience", "Knowledge of crop cycles and soil management", "Staff supervision and training", "Budget and procurement management", "Health and safety compliance on farm"]],
    ["Agronomist", "3–5 yrs", "Bachelor's", "Provide expert guidance on crop selection, soil health, and farming techniques to optimise NTONARCH Farms' yields.", ["Agronomy degree and field experience", "Soil testing and analysis skills", "Crop disease identification and management", "Advisory and reporting skills", "Knowledge of sustainable farming practices"]],
    ["Irrigation Technician", "2–4 yrs", "Technical Diploma / Certification", "Install, operate, and maintain irrigation systems across NTONARCH's farm sites to ensure optimal water management.", ["Irrigation system installation and maintenance", "Drip, sprinkler, and flood irrigation knowledge", "Mechanical troubleshooting skills", "Physical fitness for outdoor work", "Ability to read technical drawings"]],
    ["Farm Labourer / Field Worker", "Entry Level", "Basic Education", "Carry out general on-farm duties including planting, weeding, harvesting, and post-harvest handling.", ["Willingness to perform physical outdoor farm work", "Reliability and punctuality", "Ability to follow farm supervisor instructions", "Basic understanding of crops or livestock a plus", "No prior experience required — training provided"]],
    ["Livestock Attendant", "1–3 yrs", "High School / Diploma", "Care for NTONARCH Farms' livestock, monitoring health, feeding, and maintaining animal welfare standards.", ["Livestock care or animal husbandry experience", "Animal health monitoring ability", "Feeding and record-keeping", "Physical fitness for outdoor duties", "Veterinary first response awareness"]],
    ["Agricultural Equipment Operator", "2–4 yrs", "Technical Certification", "Operate tractors, harvesters, and other farm machinery safely and efficiently across NTONARCH's farm sites.", ["Tractor and agricultural equipment operation licence", "Safe machinery operation record", "Basic mechanical maintenance knowledge", "Ability to work in varied terrain and weather", "Farm equipment safety compliance"]],
    ["Post-Harvest Handler", "Entry Level", "High School", "Manage post-harvest sorting, grading, packing, and storage of NTONARCH Farms' produce.", ["Post-harvest or packhouse work experience a plus", "Attention to quality standards and grading", "Physical stamina for packing duties", "Food hygiene and safety awareness", "Reliability and consistent attendance"]],
    ["Farm Security Officer", "1–3 yrs", "High School + Security Licence", "Protect NTONARCH Farms' assets, crops, and staff through professional on-site security patrols.", ["Security or farm guard experience", "Valid security certification", "Night shift availability", "Alertness and integrity", "Incident reporting skills"]],
  ],
  "NTONARCH COMPUTERS": [
    ["IT Support Technician", "1–3 yrs", "Bachelor's / Certification", "Provide on-site hardware, software, and network support to staff across NTONARCH Computers' operations.", ["CompTIA A+ or equivalent certification", "Desktop, laptop, and peripheral repair", "Network troubleshooting skills", "Windows, MacOS, and Linux support", "Customer-focused helpdesk communication"]],
    ["Hardware Engineer", "2–4 yrs", "Bachelor's", "Design, build, test, and repair computer hardware systems for NTONARCH Computers' product and service lines.", ["Electronics or computer engineering background", "PCB design and component-level repair", "Test equipment operation", "Technical documentation skills", "Ability to work in lab and field environments"]],
    ["Network Engineer", "3–5 yrs", "Bachelor's / CCNA", "Install, configure, and maintain network infrastructure across NTONARCH's offices and client sites.", ["CCNA or equivalent certification", "LAN/WAN installation and configuration", "Firewall and VPN management", "Network monitoring tools", "Cable management and on-site installation"]],
    ["Systems Administrator", "3–5 yrs", "Bachelor's", "Administer servers, operating systems, and IT infrastructure across NTONARCH's on-ground facilities.", ["Windows Server / Linux administration", "Active Directory and domain management", "Backup and disaster recovery", "System monitoring and patch management", "On-site data centre management"]],
    ["Data Centre Technician", "2–4 yrs", "Bachelor's / Certification", "Operate and maintain NTONARCH's physical data centre infrastructure including servers, cabling, and cooling.", ["Data centre operations experience", "Server rack installation and cabling", "Environmental monitoring (cooling, power)", "Hardware replacement and upgrades", "Health and safety in server environments"]],
  ],
  "NTONARCH ENGINEERING": [
    ["Site Engineer", "3–5 yrs", "Bachelor's", "Supervise and coordinate engineering activities on NTONARCH construction and infrastructure sites.", ["On-site construction engineering experience", "Technical drawing interpretation", "Subcontractor and labour coordination", "Quality assurance and inspection", "Daily site reporting and documentation"]],
    ["Civil Engineer", "3–5 yrs", "Bachelor's", "Provide civil engineering design, supervision, and quality control for NTONARCH Engineering's projects.", ["Civil engineering degree and relevant professional body membership", "Structural and drainage design experience", "AutoCAD and civil design software", "Knowledge of construction standards and codes", "Site inspection and report writing"]],
    ["Structural Engineer", "3–5 yrs", "Bachelor's / Master's", "Design and verify structural systems for NTONARCH Engineering's building and infrastructure projects.", ["Structural analysis software (STAAD Pro / SAP2000)", "Building code compliance knowledge", "Structural calculation and design experience", "Site inspection capability", "Collaboration with architects and project managers"]],
    ["Mechanical Engineer", "3–5 yrs", "Bachelor's", "Design, supervise, and install mechanical systems — HVAC, plumbing, fire safety — on NTONARCH Engineering projects.", ["Mechanical systems design and installation experience", "HVAC and plumbing design knowledge", "AutoCAD MEP or equivalent", "Site supervision and contractor coordination", "Health and safety compliance"]],
    ["Electrical Engineer", "3–5 yrs", "Bachelor's", "Design, install, and commission electrical systems across NTONARCH Engineering's projects and facilities.", ["Electrical engineering degree and site installation experience", "Power, lighting, and distribution design", "Compliance with national electrical codes", "Site supervision and commissioning", "Renewable energy knowledge a plus"]],
    ["Quantity Surveyor", "3–5 yrs", "Bachelor's", "Manage cost planning, procurement, and contract administration for NTONARCH Engineering projects.", ["Quantity surveying qualification and experience", "Bill of quantities preparation", "Contract administration (JCT, FIDIC)", "Procurement and tender management", "Cost management software proficiency"]],
    ["Project Manager", "4–6 yrs", "Bachelor's / Master's", "Lead end-to-end delivery of NTONARCH Engineering projects — from planning through commissioning — on time and budget.", ["Construction project management experience", "PMP or PRINCE2 certification preferred", "Stakeholder and client management", "Risk and issue management", "Project management tools proficiency"]],
    ["HSE Officer", "2–4 yrs", "Bachelor's / NEBOSH", "Enforce health, safety, and environmental compliance across NTONARCH Engineering's construction sites.", ["NEBOSH or IOSH certification", "Site HSE inspection and audit experience", "Incident investigation and reporting", "Safety induction delivery", "Construction site risk assessment"]],
    ["Surveyor / Land Surveyor", "2–4 yrs", "Bachelor's / Certification", "Conduct land and topographic surveys for NTONARCH Engineering's project planning and documentation.", ["Licensed surveyor or equivalent qualification", "Total station and GPS equipment operation", "Survey data processing software", "Site coordination with engineering teams", "Technical report preparation"]],
  ],
  "NTONARCH EVENTS": [
    ["Event Project Manager", "3–5 yrs", "Bachelor's", "Lead end-to-end planning and execution of NTONARCH's live and hybrid events, managing timelines, budgets, and on-site teams.", ["Proven event project management experience", "Budget and vendor management skills", "Strong leadership and team coordination", "Project management tools (Asana, Trello)", "Ability to work under pressure on event day"]],
    ["Day-of Event Manager", "3–5 yrs", "Bachelor's", "Own the on-site experience on event day — from vendor arrivals to guest experience — ensuring everything runs to plan.", ["Strong on-ground event management track record", "Vendor and staff coordination", "Problem-solving under pressure", "Professionalism with VIP guests", "Health and safety compliance"]],
    ["Wedding Planner", "2–4 yrs", "Bachelor's / Certification", "Plan and execute memorable wedding celebrations for NTONARCH's premium events clientele.", ["Wedding planning portfolio", "Vendor sourcing and management", "Client expectation management", "Budget tracking and cost control", "Creative attention to detail"]],
    ["Creative Director", "5–7 yrs", "Bachelor's", "Set the creative vision and aesthetic direction for NTONARCH events, leading designers and experiential specialists.", ["Senior creative leadership experience", "Strong design and visual identity skills", "Experience directing large-scale event aesthetics", "Ability to inspire and manage creatives", "Portfolio of standout event concepts"]],
    ["Set Designer", "3–5 yrs", "Bachelor's", "Design and oversee construction of stunning event sets, stages, and visual installations for NTONARCH events.", ["Set design and fabrication experience", "AutoCAD / SketchUp proficiency", "Vendor and prop management", "On-site installation supervision", "Strong visual and spatial creativity"]],
    ["Lighting Designer", "2–4 yrs", "Bachelor's / Certification", "Create atmospheric lighting designs that elevate event mood across concerts, galas, and corporate events.", ["Event lighting design experience", "Lighting console operation (GrandMA, Chamsys)", "Collaboration with AV teams", "Stage and architectural lighting knowledge", "Ability to work within event timelines"]],
    ["Audio-Visual Technician", "2–4 yrs", "Associate / Certification", "Operate and maintain AV equipment ensuring crystal-clear audio and visuals from setup to breakdown.", ["AV equipment setup and operation", "Sound mixing and microphone management", "Projector and LED screen setup", "Troubleshooting during live events", "Physical ability for equipment handling"]],
    ["Live Streaming Engineer", "2–4 yrs", "Bachelor's", "Set up, manage, and troubleshoot live streaming infrastructure ensuring high-quality broadcasts.", ["Live streaming setup and operation experience", "OBS / vMix / Wirecast proficiency", "Network and bandwidth management", "Camera switching and production skills", "Fast problem-solving under live conditions"]],
    ["Videographer", "2–4 yrs", "Bachelor's", "Capture compelling event footage — highlights to full productions — that tells the NTONARCH event story.", ["Professional event videography portfolio", "Camera operation (DSLR / mirrorless / cinema)", "Multi-camera filming", "Basic on-site editing for same-day reels", "Collaboration with editors and directors"]],
    ["Photographer", "2–4 yrs", "Bachelor's / Certification", "Document NTONARCH events with professional photography capturing candid moments and formal shots.", ["Event photography portfolio", "Adobe Lightroom proficiency", "Portrait and candid photography skills", "Fast turnaround delivery of edited images", "Discreet and professional on-site presence"]],
    ["Drone Operator", "1–3 yrs", "Drone Pilot Certification", "Capture breathtaking aerial footage and photographs of NTONARCH events and properties.", ["Certified drone pilot licence (local authority)", "Event aerial cinematography experience", "Safe and compliant drone operations", "Collaboration with videography team", "Basic post-processing of aerial footage"]],
    ["Logistics Coordinator", "2–4 yrs", "Bachelor's", "Manage all operational logistics from equipment transport to supplier coordination for smooth event delivery.", ["Event logistics and supply chain experience", "Transport and warehousing coordination", "Vendor scheduling and tracking", "Attention to detail in operations", "Logistics tracking tools proficiency"]],
    ["Venue Manager", "3–5 yrs", "Bachelor's", "Oversee venue operations, staff, and facilities ensuring every NTONARCH event space is ready and exceptional.", ["Venue or facilities management experience", "Health and safety compliance knowledge", "Staff and contractor management", "Client-facing professionalism", "Problem-solving on event day"]],
    ["Guest Experience Manager", "3–5 yrs", "Bachelor's", "Design and deliver exceptional attendee experiences from registration through to post-event follow-up.", ["Guest relations or hospitality management", "Complaint resolution skills", "Team management and briefing", "Process design for attendee journeys", "High emotional intelligence and professionalism"]],
    ["VIP Liaison Officer", "2–4 yrs", "Bachelor's", "Provide white-glove service to NTONARCH VIP guests and clients, handling all special requests with discretion.", ["VIP or hospitality guest management experience", "High professionalism and discretion", "Protocol and etiquette knowledge", "Multilingual skills a strong advantage", "Calm and composed under pressure"]],
    ["Catering Coordinator", "2–4 yrs", "Bachelor's / Certification", "Manage all food and beverage logistics for events, coordinating caterers, menus, and service.", ["Event catering coordination experience", "Food safety and hygiene certification", "Menu planning and dietary management", "Vendor and kitchen team coordination", "Budget management for F&B"]],
    ["Registration Specialist", "1–3 yrs", "Associate / Bachelor's", "Manage attendee check-in, registration technology, and accreditation for smooth event entry.", ["Event registration or front-desk experience", "Event check-in tools (Cvent, Eventbrite)", "Calm under crowd pressure", "Data entry and reporting", "Friendly and professional guest interaction"]],
  ],
  "NTONARCH PROPERTIES": [
    ["Architect", "3–7 yrs", "Bachelor's / Master's", "Lead architectural design for NTONARCH's residential and commercial developments from concept to completion.", ["Licensed architect or equivalent qualification", "AutoCAD / Revit / ArchiCAD proficiency", "Project design and documentation experience", "Building codes and regulatory knowledge", "Collaboration with engineers and contractors"]],
    ["Site Supervisor", "4–6 yrs", "Bachelor's", "Supervise daily construction activities on NTONARCH property sites, ensuring quality, safety, and schedule adherence.", ["On-site construction supervision experience", "Health and safety management (IOSH / NEBOSH preferred)", "Subcontractor management", "Quality control and snag management", "Daily reporting and documentation"]],
    ["Property Manager", "3–5 yrs", "Bachelor's", "Manage NTONARCH's portfolio of residential and commercial properties, handling tenants, maintenance, and finances.", ["Property management experience", "Landlord and tenant law knowledge", "Maintenance coordination", "Financial reporting and rent collection", "Strong communication with tenants and owners"]],
    ["Facility Manager", "3–5 yrs", "Bachelor's", "Oversee building operations, maintenance programmes, and vendor management for NTONARCH's managed properties.", ["Facilities management experience", "Planned and reactive maintenance management", "Health and safety compliance", "Contractor and SLA management", "Building management systems knowledge"]],
    ["Maintenance Technician", "2–4 yrs", "Technical Diploma", "Carry out hands-on maintenance, repairs, and routine servicing across NTONARCH's property portfolio.", ["Multi-trade skills (electrical, plumbing, carpentry)", "Preventive maintenance experience", "Fault diagnosis and repair", "Health and safety awareness", "Physical fitness for on-site work"]],
    ["Interior Designer", "3–5 yrs", "Bachelor's", "Create stunning interior design concepts and oversee fit-out execution for NTONARCH's premium spaces.", ["Interior design portfolio and qualification", "AutoCAD / SketchUp / 3ds Max proficiency", "Materials, finishes, and furniture sourcing", "Client presentation skills", "Project site supervision experience"]],
    ["Quantity Surveyor", "3–5 yrs", "Bachelor's", "Prepare cost estimates, manage procurement, and control budgets across NTONARCH's construction projects.", ["Quantity surveying qualification and experience", "Bill of quantities preparation", "Contract administration", "Procurement and tender management", "Cost management software proficiency"]],
    ["Leasing Officer", "2–4 yrs", "Bachelor's", "Market and lease NTONARCH properties to qualified tenants, managing viewings, negotiations, and documentation.", ["Property leasing and sales experience", "Negotiation and closing skills", "Knowledge of property law and lease agreements", "Property marketing and listing management", "Strong interpersonal skills"]],
    ["Smart Home Systems Specialist", "2–4 yrs", "Bachelor's / Certification", "Install, configure, and support smart home and building automation systems across NTONARCH's properties.", ["Smart home / building automation installation experience", "Knowledge of KNX, Crestron, Savant, or similar", "Electrical and network installation skills", "Client training and support", "Troubleshooting and system integration"]],
    ["Sales Executive", "2–4 yrs", "Bachelor's", "Drive property sales for NTONARCH, converting enquiries into completions through expert product knowledge.", ["Property or high-value B2C sales experience", "CRM software proficiency", "Target-driven with strong closing ability", "Property market awareness", "Excellent presentation and client communication"]],
  ],
  "NTONARCH WASTE": [
    ["Waste Truck Driver", "2+ yrs", "High School + CDL", "Operate waste collection vehicles on assigned routes safely and efficiently, meeting daily collection targets.", ["Valid commercial driver's licence (CDL / HGV)", "Clean driving record", "Route navigation skills", "Vehicle pre-trip inspection knowledge", "Physical fitness for on-ground operations"]],
    ["Waste Collector / Loader", "1+ yrs", "High School", "Collect and load waste from residences and businesses, working as part of an efficient collection crew.", ["Previous waste collection or manual labour experience", "Physical fitness and stamina", "Teamwork and communication", "Health and safety awareness", "Punctuality and reliability"]],
    ["Helper / Truck Mate", "Entry Level", "High School", "Support truck drivers and collection crews in day-to-day waste collection operations.", ["Willingness to perform physical outdoor work", "Reliability and punctuality", "Teamwork and following instructions", "Basic health and safety awareness", "No prior experience required — training provided"]],
    ["Waste Sorter / Recycling Line Worker", "Entry Level", "Basic Education", "Sort and segregate materials at NTONARCH recycling facilities identifying recyclables and hazardous materials.", ["Ability to follow sorting instructions", "Attention to detail on the sorting line", "Physical stamina for standing shifts", "Basic understanding of recyclable materials", "No prior experience required — training provided"]],
    ["Facility Manager", "5–7 yrs", "Bachelor's", "Manage all operations at NTONARCH's waste processing facility overseeing staff, maintenance, compliance, and efficiency.", ["Waste or industrial facility management experience", "Health and safety management (NEBOSH / IOSH preferred)", "Staff and contractor management", "Regulatory and environmental compliance", "Budget and performance reporting"]],
    ["Fleet Manager", "4–6 yrs", "Bachelor's", "Manage NTONARCH's fleet of waste collection vehicles — maintenance schedules, compliance, and driver management.", ["Fleet management experience", "Vehicle maintenance and compliance knowledge", "Driver scheduling and performance management", "Fleet management software proficiency", "Budget management for fleet operations"]],
    ["Maintenance Technician", "3–5 yrs", "Technical Diploma", "Service and repair NTONARCH's waste processing machinery and vehicles, minimising downtime.", ["Mechanical and electrical maintenance skills", "Experience maintaining heavy machinery or vehicles", "Preventive maintenance programmes", "Fault diagnosis and repair", "Health and safety compliance"]],
    ["Environmental Engineer", "3–5 yrs", "Bachelor's", "Ensure NTONARCH's waste operations comply with environmental regulations and lead sustainability initiatives.", ["Environmental engineering degree", "Regulatory compliance and reporting", "Environmental impact assessments", "Waste management systems knowledge", "Stakeholder and regulatory authority engagement"]],
    ["Operations Manager", "5–7 yrs", "Bachelor's", "Oversee the full day-to-day operations of NTONARCH's waste management services ensuring performance and compliance.", ["Senior operations management experience", "Waste or utilities sector knowledge preferred", "Staff and contractor management", "KPI monitoring and performance reporting", "Strong leadership and decision-making"]],
    ["Logistics Coordinator", "3–5 yrs", "Bachelor's", "Plan and optimise waste collection routes, schedules, and vehicle deployment across NTONARCH's operations.", ["Transport and logistics coordination experience", "Route optimisation software knowledge", "Fleet scheduling and tracking", "Data reporting and analysis", "Coordination with field teams and drivers"]],
    ["IoT Engineer", "3–5 yrs", "Bachelor's", "Deploy and manage IoT sensors on NTONARCH smart bins and vehicles for real-time waste monitoring.", ["IoT device deployment and management", "Embedded systems or sensor programming", "Network connectivity (4G / LoRa / NB-IoT)", "Data collection and cloud integration", "On-site installation capability"]],
    ["Security Guard", "1+ yrs", "High School + Security Licence", "Protect NTONARCH's waste facilities, assets, and staff through professional on-site security operations.", ["Valid security licence or certification", "On-site security experience", "Incident reporting and response", "Access control management", "Professional conduct and vigilance"]],
    ["Weighbridge Assistant", "1+ yrs", "High School", "Operate NTONARCH's weighbridge, recording vehicle and waste weights accurately for billing and reporting.", ["Weighbridge or data entry experience", "Accuracy and attention to detail", "Basic computer skills for data recording", "Communication with drivers and dispatch", "Reliability and punctuality"]],
  ],
  "NTONARCH FOUNDATION": [
    ["Field Officer", "2–4 yrs", "Bachelor's", "Work directly in communities implementing NTONARCH Foundation's social development programmes on the ground.", ["Community development or NGO field experience", "Excellent community relationship-building", "Field data collection and reporting", "Ability to work in rural or underserved settings", "Resilience and adaptability in the field"]],
    ["Education Specialist", "3–5 yrs", "Bachelor's / Master's", "Design and deliver educational programmes that improve literacy, skills, and opportunity for vulnerable communities.", ["Education programme design and delivery", "Curriculum development experience", "Facilitation and training skills", "M&E for education programmes", "Experience working with children or youth"]],
    ["Agricultural Specialist", "3–5 yrs", "Bachelor's", "Train smallholder farmers and support NTONARCH Foundation's food security and livelihood programmes.", ["Agricultural extension or development experience", "Practical farming knowledge", "Farmer training and demonstration skills", "Agribusiness and value chain understanding", "Experience working with rural communities"]],
    ["Health Coordinator", "3–5 yrs", "Bachelor's", "Coordinate community health outreach, education, and healthcare provider partnerships for NTONARCH Foundation.", ["Public health or community health experience", "Health programme coordination", "Community sensitisation and mobilisation", "Partnership management with health agencies", "First aid certification preferred"]],
    ["Youth & Women Empowerment Trainer", "2–4 yrs", "Bachelor's", "Facilitate skills training, mentorship, and empowerment workshops for youth and women in NTONARCH Foundation's communities.", ["Youth development or women's empowerment facilitation", "Training and workshop delivery skills", "Emotional intelligence and empathy", "Community trust-building experience", "Documentation and reporting of programme outcomes"]],
    ["Community Mobiliser", "1–3 yrs", "High School / Bachelor's", "Engage and organise community members to participate in NTONARCH Foundation's outreach and development programmes.", ["Community mobilisation or outreach experience", "Excellent interpersonal and communication skills", "Knowledge of local culture and languages", "Ability to work in the field daily", "Report writing and attendance tracking"]],
  ],
};

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (Brazzaville)","Congo (DRC)","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"
];

const NATIONALITIES = [
  "Afghan","Albanian","Algerian","Andorran","Angolan","Antiguan","Argentine","Armenian","Australian","Austrian","Azerbaijani","Bahamian","Bahraini","Bangladeshi","Barbadian","Belarusian","Belgian","Belizean","Beninese","Bhutanese","Bolivian","Bosnian","Botswanan","Brazilian","Bruneian","Bulgarian","Burkinabe","Burundian","Cabo Verdean","Cambodian","Cameroonian","Canadian","Central African","Chadian","Chilean","Chinese","Colombian","Comorian","Congolese","Costa Rican","Croatian","Cuban","Cypriot","Czech","Danish","Djiboutian","Dominican","Ecuadorian","Egyptian","Emirati","Equatorial Guinean","Eritrean","Estonian","Eswatini","Ethiopian","Fijian","Finnish","French","Gabonese","Gambian","Georgian","German","Ghanaian","Greek","Grenadian","Guatemalan","Guinean","Guyanese","Haitian","Honduran","Hungarian","Icelandic","Indian","Indonesian","Iranian","Iraqi","Irish","Israeli","Italian","Ivorian","Jamaican","Japanese","Jordanian","Kazakhstani","Kenyan","Kiribati","Kuwaiti","Kyrgyz","Laotian","Latvian","Lebanese","Lesothan","Liberian","Libyan","Liechtensteiner","Lithuanian","Luxembourger","Malagasy","Malawian","Malaysian","Maldivian","Malian","Maltese","Marshallese","Mauritanian","Mauritian","Mexican","Micronesian","Moldovan","Monégasque","Mongolian","Montenegrin","Moroccan","Mozambican","Myanmarese","Namibian","Nauruan","Nepali","Dutch","New Zealander","Nicaraguan","Nigerien","Nigerian","North Korean","North Macedonian","Norwegian","Omani","Pakistani","Palauan","Panamanian","Papua New Guinean","Paraguayan","Peruvian","Filipino","Polish","Portuguese","Qatari","Romanian","Russian","Rwandan","Kittitian","Saint Lucian","Vincentian","Samoan","San Marinese","São Tomean","Saudi Arabian","Senegalese","Serbian","Seychellois","Sierra Leonean","Singaporean","Slovak","Slovenian","Solomon Islander","Somali","South African","South Korean","South Sudanese","Spanish","Sri Lankan","Sudanese","Surinamese","Swedish","Swiss","Syrian","Taiwanese","Tajik","Tanzanian","Thai","Timorese","Togolese","Tongan","Trinidadian","Tunisian","Turkish","Turkmen","Tuvaluan","Ugandan","Ukrainian","British","American","Uruguayan","Uzbek","Vanuatuan","Vatican","Venezuelan","Vietnamese","Yemeni","Zambian","Zimbabwean"
].sort();

const divisions = Object.keys(POSITIONS);
const selectOptions = {
  gender: ["Male", "Female", "Prefer not to say"],
  continent: ["Africa", "Asia", "Europe", "North America", "South America", "Australia / Oceania", "Antarctica"],
  kinRel: ["Parent", "Sibling", "Spouse / Partner", "Child", "Friend", "Other"],
  avail: ["Immediately", "Within 2 weeks", "Within 1 month", "Within 2 months", "Other (specify in cover letter)"],
  empType: ["Full-Time", "Part-Time", "Contract", "Casual / Seasonal"],
  education: ["Basic Education / Primary", "Secondary / High School", "Diploma / HND / OND", "Technical / Vocational Certification", "Associate Degree", "Bachelor's Degree", "Postgraduate Diploma", "Master's Degree", "PhD / Doctorate", "Professional Licence / Certification"],
  experience: ["No experience (Entry Level)", "Less than 1 year", "1–3 years", "3–5 years", "5–8 years", "8–12 years", "12+ years (Senior)"],
  physicalFit: ["Yes, fully fit", "Yes, with minor limitations (describe in comments)", "No"],
  driverLic: ["Yes — Car (Class B)", "Yes — Heavy Vehicle / CDL", "Yes — Motorcycle", "No"],
};

const sections = [
  {
    title: "Personal Information", icon: UserRound,
    fields: [
      ["firstName","First Name","text","e.g. John",true],["lastName","Last Name","text","e.g. Adeyemi",true],
      ["dob","Date of Birth","date","",true],["gender","Gender","select","",true],
      ["nationality","Nationality","select","",true],["continent","Continent","select","",true],
      ["country","Country of Residence","select","",true],["stateRegion","State / Region","text","e.g. Lagos, Nairobi County, Texas…",true],
      ["address","Physical Address","textarea","Street, City, Postal Code",true],
    ],
  },
  {
    title: "Contact Information", icon: Mail,
    fields: [
      ["email","Email Address","email","you@email.com",true],["phone","Phone (with country code)","tel","+234 800 000 0000",true],
      ["linkedin","LinkedIn","url","https://linkedin.com/in/…"],["facebook","Facebook","url","https://facebook.com/…"],
      ["twitter","X (Twitter)","text","@yourhandle"],["github","GitHub","url","https://github.com/…"],
      ["portfolio_url","Portfolio / Website","url","https://…"],
    ],
  },
  {
    title: "Next of Kin Details", icon: Heart,
    fields: [
      ["kinName","Full Name","text","e.g. Jane Adeyemi",true],["kinRel","Relationship","select","",true],
      ["kinPhone","Phone Number","tel","+234 800 000 0000",true],["kinEmail","Email Address","email","kin@email.com"],
      ["kinAddress","Address","textarea","Next of kin's address",true],
    ],
  },
  {
    title: "Position Details", icon: BriefcaseBusiness,
    fields: [
      ["formDivision","Division","select","",true],["formPosition","Position Applied For","select","",true],
      ["avail","When can you start?","select","",true],["empType","Employment Type","select","",true],
      ["workLocation","Preferred Work Location / City","text","e.g. Lagos, Abuja, Accra — where you are willing to work on-ground",true],
    ],
  },
  {
    title: "Professional Background", icon: GraduationCap,
    fields: [
      ["education","Highest Education Level","select","",true],["experience","Years of Experience","select","",true],
      ["fieldStudy","Field of Study / Trade","text","e.g. Civil Engineering, Event Management, Agriculture…",true],
      ["institution","Institution / School / Training Centre","text","e.g. University of Lagos…",true],
      ["skills","Key Skills & Competencies","textarea","Core skills, trade qualifications, physical capabilities, tools or equipment you can operate…",true],
      ["prevExp","Summary of Previous Experience","textarea","Describe your last 1–2 roles, on-ground tasks, and key responsibilities…",true],
      ["certs","Licences / Certifications","text","e.g. CDL, IOSH Safety, First Aid, Drone Pilot…"],
      ["languages","Languages Spoken","text","e.g. English (Fluent), Hausa, Yoruba…"],
      ["physicalFit","Physically fit for on-ground work?","select","",true],
      ["driverLic","Do you have a valid driver's licence?","select",""],
    ],
  },
  {
    title: "Required Documents", icon: IdCard,
    fields: [
      ["idDoc","Government-Issued ID (PDF or image, max 5MB)","file","",true],
      ["cvLink","CV / Resumé Link (optional)","url","https://drive.google.com/… or https://dropbox.com/…"],
    ],
  },
  {
    title: "Additional Information", icon: Info,
    fields: [
      ["motivation","Why do you want to join NTONARCH?","textarea","Tell us what drives you and why this on-ground role is right for you…",true],
      ["comments","Any additional comments?","textarea","Health conditions, shift preferences, or anything else…"],
    ],
  },
];

const heardOptions = ["Facebook","X (Twitter)","Instagram","TikTok","A Friend","LinkedIn","Google Search","Other"];

function Field({ field, value, onChange, divisionValue, error }) {
  const [id, label, type, placeholder, required] = field;
  const options = id === "nationality" ? NATIONALITIES
    : id === "country" ? COUNTRIES
    : id === "formDivision" ? divisions
    : id === "formPosition" ? (divisionValue ? POSITIONS[divisionValue].map((job) => job[0]) : [])
    : selectOptions[id] || [];

  const common = "w-full rounded-xl border border-white/10 bg-[#151e1a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/15";
  const labelText = (
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-white/80">
      {label} {required && <span className="text-[#ff6b00]">*</span>}
    </label>
  );

  return (
    <div className={type === "textarea" ? "md:col-span-2" : ""}>
      {labelText}
      {type === "select" ? (
        <select
          id={id}
          name={id}
          required={required}
          value={value || ""}
          onChange={onChange}
          className={common}
        >
          <option value="">{id === "formPosition" && !divisionValue ? "Select a division first…" : "Select…"}</option>
          {options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          required={required}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          rows={id === "prevExp" || id === "motivation" ? 4 : 3}
          className={`${common} resize-y`}
        />
      ) : type === "file" ? (
        <input
          id={id}
          name={id}
          type="file"
          required={required}
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={onChange}
          className={`${common} file:mr-3 file:rounded-lg file:border-0 file:bg-[#ff6b00]/15 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-[#ff9b54]`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          className={common}
        />
      )}
      {id === "idDoc" && <p className="mt-2 text-xs leading-relaxed text-white/40">Accepted formats: PDF, JPG, JPEG or PNG. Maximum file size: 5MB.</p>}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default function OngroundCareers({ onSubmit }) {
  const formRef = useRef(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [form, setForm] = useState({});
  const [selected, setSelected] = useState(null);
  const [heard, setHeard] = useState("");
  const [consents, setConsents] = useState({ chkBg: false, chkData: false, chkAcc: false });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState("");

  const totalJobs = Object.values(POSITIONS).reduce((sum, jobs) => sum + jobs.length, 0);

  const filteredPositions = useMemo(() => {
    const query = search.trim().toLowerCase();
    return Object.entries(POSITIONS)
      .filter(([division]) => !filter || division === filter)
      .map(([division, jobs]) => ({
        division,
        jobs: jobs.filter((job) => !query || job[0].toLowerCase().includes(query)),
      }))
      .filter((group) => group.jobs.length > 0);
  }, [search, filter]);

  const updateField = (id, value) => {
    setForm((current) => ({
      ...current,
      [id]: value,
      ...(id === "formDivision" ? { formPosition: "" } : {}),
    }));
    setErrors((current) => ({ ...current, [id]: "" }));
  };

  const selectPosition = (division, job) => {
    setSelected({ division, title: job[0] });
    setForm((current) => ({ ...current, formDivision: division, formPosition: job[0] }));
    setNotice("");
    document.getElementById("applySection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setNotice("");

    const nextErrors = {};
    const requiredFields = sections.flatMap((section) =>
      section.fields.filter((field) => field[4]).map((field) => field[0])
    );

    requiredFields.forEach((id) => {
      if (id === "idDoc") {
        const file = form.idDoc?.[0];
        if (!file) nextErrors.idDoc = "Please upload a government-issued ID.";
        else if (file.size > 5 * 1024 * 1024) nextErrors.idDoc = "The file must not exceed 5MB.";
        else if (!["application/pdf", "image/jpeg", "image/png"].includes(file.type)) nextErrors.idDoc = "Upload a PDF, JPG, JPEG or PNG file.";
      } else if (!String(form[id] || "").trim()) {
        nextErrors[id] = "This field is required.";
      }
    });

    if (!heard) nextErrors.heard = "Please select how you heard about us.";
    if (!consents.chkBg) nextErrors.chkBg = "Required.";
    if (!consents.chkData) nextErrors.chkData = "Required.";
    if (!consents.chkAcc) nextErrors.chkAcc = "Required.";

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      const firstInvalid = formRef.current?.querySelector('[aria-invalid="true"]');
      const firstErrorId = Object.keys(nextErrors)[0];
      document.getElementById(firstErrorId)?.scrollIntoView({ behavior: "smooth", block: "center" });
      if (firstInvalid) firstInvalid.focus({ preventScroll: true });
      return;
    }

    if (typeof onSubmit !== "function") {
      setNotice("Your application is complete, but a submission service has not been connected yet. Please connect an API or Formspree endpoint to receive applications.");
      return;
    }

    setSubmitting(true);
    try {
      const payload = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value instanceof FileList) {
          if (value[0]) payload.append(key, value[0]);
        } else if (value !== undefined && value !== null) {
          payload.append(key, value);
        }
      });
      payload.append("heard", heard);
      Object.entries(consents).forEach(([key, value]) => payload.append(key, String(value)));
      await onSubmit(payload);
      setNotice("Your application has been submitted successfully.");
      setForm({});
      setHeard("");
      setConsents({ chkBg: false, chkData: false, chkAcc: false });
      setSelected(null);
      formRef.current?.reset();
    } catch (error) {
      setNotice(error?.message || "We couldn't submit your application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const sectionIcon = (Icon) => <Icon size={17} className="text-[#ff8a32]" />;

  return (
    <main className="min-h-screen bg-[#101714] text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,107,0,0.13),transparent_42%),linear-gradient(135deg,#101714_0%,#121e19_55%,#101714_100%)]" />
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:px-12">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#ff6b00]/25 bg-[#ff6b00]/10 px-4 py-2 text-xs font-semibold tracking-wide text-[#ff9b54]">
            <span className="h-2 w-2 rounded-full bg-[#ff6b00] shadow-[0_0_12px_#ff6b00]" />
            Now Hiring — On-Ground Positions
          </div>
          <div className="max-w-3xl">
            <h1 className="font-['Syne',sans-serif] text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Show up.
              <span className="mt-2 block text-[#ff7a1a]">Make it happen.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Join NTONARCH on the ground. Hands-on roles across all 9 divisions — delivering real impact where it counts.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            {[
              [Building2, "On-site roles"],
              [HardHat, "Hands-on work"],
              [Users, "Team environment"],
              [Layers3, "9 divisions"],
            ].map(([Icon, label]) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white/70">
                <Icon size={15} className="text-[#ff8a32]" /> {label}
              </span>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-7 text-sm text-white/45">
            <span><strong className="mr-2 text-white">{totalJobs}</strong> open roles</span>
            <span><strong className="mr-2 text-white">9</strong> business divisions</span>
            <span><strong className="mr-2 text-white">On-site</strong> opportunities</span>
          </div>
        </div>
      </section>

      {/* Positions */}
      <section id="positions" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff8a32]">Find your role</p>
            <h2 className="font-['Syne',sans-serif] text-3xl font-bold tracking-tight sm:text-4xl">Open On-Ground Positions</h2>
            <p className="mt-3 text-sm leading-6 text-white/50">Browse all roles. Click any card to auto-fill your application below.</p>
          </div>
          <span className="w-fit rounded-full border border-white/10 px-4 py-2 text-xs text-white/50">{totalJobs} positions available</span>
        </div>

        <div className="mb-8 grid gap-3 md:grid-cols-[1fr_260px]">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/35" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by job title…"
              className="w-full rounded-xl border border-white/10 bg-[#151e1a] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#ff6b00]"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-xl border border-white/10 bg-[#151e1a] px-4 py-3.5 text-sm text-white outline-none focus:border-[#ff6b00]"
          >
            <option value="">All Divisions</option>
            {divisions.map((division) => <option key={division}>{division}</option>)}
          </select>
        </div>

        {filteredPositions.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/15 px-6 py-16 text-center">
            <Search size={28} className="mx-auto mb-4 text-white/25" />
            <p className="font-semibold">No positions match your search.</p>
            <p className="mt-2 text-sm text-white/40">Try another job title or division.</p>
            <button onClick={() => { setSearch(""); setFilter(""); }} className="mt-5 text-sm font-semibold text-[#ff8a32]">Clear filters</button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredPositions.map(({ division, jobs }) => (
              <div key={division}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-6 w-1 rounded-full bg-[#ff6b00]" />
                  <h3 className="font-['Syne',sans-serif] text-lg font-bold">{division}</h3>
                  <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-white/45">{jobs.length}</span>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {jobs.map((job) => {
                    const isSelected = selected?.division === division && selected?.title === job[0];
                    return (
                      <button
                        key={`${division}-${job[0]}`}
                        type="button"
                        onClick={() => selectPosition(division, job)}
                        className={`group flex h-full flex-col rounded-2xl border p-5 text-left transition duration-200 hover:-translate-y-1 hover:border-[#ff6b00]/50 hover:bg-[#18231d] ${isSelected ? "border-[#ff6b00]/60 bg-[#ff6b00]/[0.06]" : "border-white/[0.08] bg-[#141d18]"}`}
                      >
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <span className="rounded-full bg-[#ff6b00]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#ff9b54]">
                            {division.replace("NTONARCH ", "")}
                          </span>
                          {isSelected && <CheckCircle2 size={17} className="shrink-0 text-[#ff8a32]" />}
                        </div>
                        <h4 className="font-['Syne',sans-serif] text-lg font-bold leading-snug text-white transition group-hover:text-[#ff9b54]">{job[0]}</h4>
                        <p className="mt-3 flex-1 text-sm leading-6 text-white/50">{job[3]}</p>
                        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/[0.07] pt-4 text-xs text-white/45">
                          <span className="inline-flex items-center gap-1.5"><BriefcaseBusiness size={13} />{job[1]}</span>
                          <span className="inline-flex items-center gap-1.5"><GraduationCap size={14} />{job[2]}</span>
                          <span className="inline-flex items-center gap-1.5"><Building2 size={13} />On-Ground</span>
                        </div>
                        <div className="mt-5">
                          <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-white/65">Key Requirements</p>
                          <ul className="space-y-1.5">
                            {job[4].map((qual) => (
                              <li key={qual} className="flex gap-2 text-xs leading-5 text-white/45">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#ff8a32]" />{qual}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4 text-sm font-semibold text-[#ff9b54]">
                          <span>{isSelected ? "Selected position" : "Click to apply"}</span>
                          <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Application form */}
      <section id="applySection" className="scroll-mt-8 border-t border-white/[0.06] bg-[#0c120f] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff8a32]">Take the next step</p>
            <h2 className="font-['Syne',sans-serif] text-3xl font-bold tracking-tight sm:text-4xl">Apply for On-Ground Position</h2>
            <p className="mt-3 text-sm leading-6 text-white/50">Fill in all required fields. We'll be in touch within 5 business days.</p>
          </div>

          {selected && (
            <div className="mb-7 flex items-start gap-3 rounded-xl border border-[#ff6b00]/25 bg-[#ff6b00]/[0.08] p-4">
              <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#ff8a32]" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-white/50">Applying for</p>
                <p className="mt-1 text-sm font-semibold text-white">{selected.title} <span className="text-[#ff9b54]">— {selected.division}</span></p>
              </div>
              <button type="button" onClick={() => setSelected(null)} aria-label="Clear selected position" className="text-white/40 transition hover:text-white"><X size={17} /></button>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className="rounded-2xl border border-white/[0.08] bg-[#141d18] p-5 sm:p-7">
                  <div className="mb-6 flex items-center gap-3 border-b border-white/[0.07] pb-4">
                    {sectionIcon(Icon)}
                    <h3 className="font-['Syne',sans-serif] text-lg font-bold">{section.title}</h3>
                  </div>
                  <div className="grid gap-x-5 gap-y-5 md:grid-cols-2">
                    {section.fields.map((field) => (
                      <Field
                        key={field[0]}
                        field={field}
                        value={form[field[0]]}
                        divisionValue={form.formDivision}
                        error={errors[field[0]]}
                        onChange={(e) => updateField(field[0], field[0] === "idDoc" ? e.target.files : e.target.value)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Referral source */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#141d18] p-5 sm:p-7">
              <div className="mb-5 flex items-center gap-3 border-b border-white/[0.07] pb-4">
                <Globe2 size={17} className="text-[#ff8a32]" />
                <h3 className="font-['Syne',sans-serif] text-lg font-bold">How did you hear about us? <span className="text-[#ff6b00]">*</span></h3>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {heardOptions.map((option) => (
                  <label key={option} className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-3 py-3 text-sm transition ${heard === option ? "border-[#ff6b00]/60 bg-[#ff6b00]/10 text-white" : "border-white/10 bg-white/[0.02] text-white/55 hover:border-white/20"}`}>
                    <input type="radio" name="heard" value={option} checked={heard === option} onChange={() => { setHeard(option); setErrors((current) => ({ ...current, heard: "" })); }} className="accent-[#ff6b00]" />
                    {option}
                  </label>
                ))}
              </div>
              {errors.heard && <p className="mt-2 text-xs text-red-400">{errors.heard}</p>}
            </div>

            {/* Consent */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#141d18] p-5 sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <CheckCircle2 size={17} className="text-[#ff8a32]" />
                <h3 className="font-['Syne',sans-serif] text-lg font-bold">Declaration & Consent</h3>
              </div>
              <div className="space-y-4">
                {[
                  ["chkBg","I authorise NTONARCH to conduct background checks as part of the hiring process."],
                  ["chkData","I consent to the processing of my personal data in accordance with GDPR and applicable data protection laws."],
                  ["chkAcc","I confirm that all information provided in this application is accurate and complete."],
                ].map(([id, label]) => (
                  <div key={id}>
                    <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-white/65">
                      <input
                        type="checkbox"
                        checked={consents[id]}
                        onChange={(e) => {
                          setConsents((current) => ({ ...current, [id]: e.target.checked }));
                          setErrors((current) => ({ ...current, [id]: "" }));
                        }}
                        className="mt-1 h-4 w-4 shrink-0 accent-[#ff6b00]"
                      />
                      {label} <span className="text-[#ff6b00]">*</span>
                    </label>
                    {errors[id] && <p className="ml-7 mt-1 text-xs text-red-400">{errors[id]}</p>}
                  </div>
                ))}
              </div>
            </div>

            {notice && (
              <div className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${notice.includes("successfully") ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-300" : "border-amber-500/25 bg-amber-500/10 text-amber-200"}`}>
                <Info size={18} className="mt-0.5 shrink-0" />
                {notice}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#ff6b00] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#ff6b00]/10 transition hover:bg-[#e85f00] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? <LoaderCircle size={18} className="animate-spin" /> : <Send size={17} />}
              {submitting ? "Submitting application…" : "Submit Application"}
            </button>
            <p className="text-center text-xs leading-5 text-white/35">
              By submitting, you confirm that the information provided is accurate and that you agree to the declarations above.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
