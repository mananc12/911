let hospitalsData = [
  {
    "Name": "Max Super Speciality Hospital, Saket",
    "Address": "1 2, Press Enclave Marg, Saket Institutional Area, Saket, New Delhi, Delhi 110017",
    "Lat": 28.5277928,
    "Lng": 77.211414,
    "Area": "SOUTH_DELHI",
    "Type": "PRIVATE",
    "Beds": 500,
    "Specialties": ["Cardiology", "Neurology", "Oncology"]
  },
  {
    "Name": "Max Super Speciality Hospital, Shalimar Bagh",
    "Address": "FC 50, Max Wali Rd, C and D Block, Shalimar Place Site, Shalimar Bagh, New Delhi, Delhi 110088",
    "Lat": 28.7276905,
    "Lng": 77.1526506,
    "Area": "NORTH_DELHI",
    "Type": "PRIVATE",
    "Beds": 400,
    "Specialties": ["Orthopedics", "Gastroenterology", "Urology"]
  },
  {
    "Name": "Max Multi Speciality Centre, Panchsheel Park",
    "Address": "N 110, Block N, Panchsheel Park North, Panchsheel Park, New Delhi, Delhi 110017",
    "Lat": 28.543454,
    "Lng": 77.2144232,
    "Area": "SOUTH_DELHI",
    "Type": "PRIVATE",
    "Beds": 300,
    "Specialties": ["ENT", "Dermatology", "Ophthalmology"]
  },
  {
    "Name": "BLK-Max Super Speciality Hospital, Delhi",
    "Address": "Pusa Rd, Radha Soami Satsang, Rajendra Place, New Delhi, Delhi 110005",
    "Lat": 28.6429608,
    "Lng": 77.1806168,
    "Area": "CENTRAL_DELHI",
    "Type": "PRIVATE",
    "Beds": 600,
    "Specialties": ["Cardiac Surgery", "Nephrology", "Endocrinology"]
  },
  {
    "Name": "Max Multi Speciality Centre, Noida",
    "Address": "A364, A Block, Pocket A, Sector 19, Noida, Uttar Pradesh 201301",
    "Lat": 28.5767599,
    "Lng": 77.3231094,
    "Area": "NOIDA",
    "Type": "PRIVATE",
    "Beds": 250,
    "Specialties": ["Gynecology", "Pediatrics", "Dentistry"]
  },
  {
    "Name": "Max Super Speciality Hospital, Patparganj",
    "Address": "108A, IP Ext, I.P.Extension, Patparganj, Delhi, 110092",
    "Lat": 28.6329328,
    "Lng": 77.3089793,
    "Area": "EAST_DELHI",
    "Type": "PRIVATE",
    "Beds": 350,
    "Specialties": ["Pulmonology", "Psychiatry", "Rheumatology"]
  },
  {
    "Name": "Max Hospital, Gurgaon",
    "Address": "B Block, Sushant Lok 1, Near Huda City Centre MF Husain Marg Near Huda City Centre Metro Station, Sector 43, Gurugram, Haryana 122002",
    "Lat": 28.4502152,
    "Lng": 77.0609485,
    "Area": "GURGAON",
    "Type": "PRIVATE",
    "Beds": 550,
    "Specialties": ["Oncology", "Neurosurgery", "Dermatology"]
  },
    {
      "Name": "Max Super Speciality Hospital, Vaishali",
      "Address": "W-3, Ashok Marg, near Radisson Blu Hotel, Sector-1, Vaishali, Ghaziabad, Uttar Pradesh 201012",
      "Lat": 28.6342681,
      "Lng": 77.3330497,
      "Area": "EAST_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Max Institute of Cancer Care, Lajpat Nagar",
      "Address": "1st floor, 110024, Ring Rd, Vikram Vihar, Lajpat Nagar IV, Lajpat Nagar, New Delhi, Delhi 110024",
      "Lat": 28.5651378,
      "Lng": 77.2368784,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Indraprastha Apollo Hospitals",
      "Address": "Sarita Vihar,Delhi Mathura Road, New Delhi – 110076 (India)",
      "Lat": 28.5319249,
      "Lng": 77.2869755,
      "Area": "SOUTH_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Apollo Hospitals, Noida",
      "Address": "E 2, Sector 26 (Adjacent to Club 26), Noida – 201 301, Uttar Pradesh",
      "Lat": 28.5793962,
      "Lng": 77.334436,
      "Area": "NOIDA",
      "Type": "PRIVATE"
    },
    {
      "Name": "Artemis Hospital",
      "Address": "Sector 51, Gurugram, Haryana - 122001",
      "Lat": 28.4320397,
      "Lng": 77.0686159,
      "Area": "GURGAON",
      "Type": "PRIVATE"
    },
    {
      "Name": "Fortis Cancer Institute, Defence Colony",
      "Address": "E13 Ground Floor, Defence Colony, New Delhi, Delhi 110024",
      "Lat": 28.5625674,
      "Lng": 77.158872,
      "Area": "SOUTH_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Fortis Hospital – Greater Noida",
      "Address": "Block D, Industrial Area, Surajpur Site 4, Greater Noida, Uttar Pradesh – 201310",
      "Lat": 28.4498118,
      "Lng": 77.5311297,
      "Area": "NOIDA",
      "Type": "PRIVATE"
    },
    {
      "Name": "Fortis Escorts Heart Institute, Okhla Road",
      "Address": "Okhla Road, New Delhi, Delhi 110025",
      "Lat": 28.5610738,
      "Lng": 77.2824684,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Fortis Memorial Research Institute, Gurugram",
      "Address": "Sector - 44, Opposite HUDA City Centre, Gurugram, Haryana 122002",
      "Lat": 28.458172,
      "Lng": 77.072604,
      "Area": "GURGAON",
      "Type": "PRIVATE"
    },
    {
      "Name": "Fortis Flt. Lt. Rajan Dhall Hospital, Vasant Kunj",
      "Address": "Sector B, Pocket 1, Aruna Asaf Ali Marg,Vasant Kunj, New Delhi - 110070",
      "Lat": 28.526928,
      "Lng": 77.1614962,
      "Area": "SOUTH_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Fortis Hospital, Shalimar Bagh",
      "Address": "Fortis Hospital, A Block, Shalimar Bagh, New Delhi, Delhi 110088",
      "Lat": 28.705282,
      "Lng": 77.169626,
      "Area": "NORTH_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Fortis Hospital, Noida",
      "Address": "B-22, Sector 62, Gautam Buddh Nagar, Noida, Uttar Pradesh 201301",
      "Lat": 28.6188495,
      "Lng": 77.3724023,
      "Area": "NOIDA",
      "Type": "PRIVATE"
    },
    {
      "Name": "Fortis Escorts Hospital, Faridabad",
      "Address": "Neelam Bata Road, Opp. Neelam Cinema, Faridabad, Haryana 121001",
      "Lat": 28.39193,
      "Lng": 77.30543,
      "Area": "FARIDABAD",
      "Type": "PRIVATE"
    },
    {
      "Name": "Fortis La Femme, Greater Kailash",
      "Address": "S - 549, Greater Kailash - II, New Delhi, Delhi 110048",
      "Lat": 28.5291996,
      "Lng": 77.2439242,
      "Area": "SOUTH_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Fortis C-DOC, Chirag Enclave",
      "Address": "B-16 Chirag Enclave, New Delhi -110048",
      "Lat": 28.5469785,
      "Lng": 77.2495323,
      "Area": "SOUTH_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Sir Ganga Ram Hospital",
      "Address": "Sir Ganga Ram Hospital Marg, Old Rajinder Nagar, New Rajinder Nagar, New Delhi, Delhi 110060",
      "Lat": 28.6402321,
      "Lng": 77.1889135,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Medanta Gurgaon",
      "Address": "CH Baktawar Singh Road, Sector 38, Gurugram, Haryana 122001",
      "Lat": 28.4397092,
      "Lng": 77.0425925,
      "Area": "GURGAON",
      "Type": "PRIVATE"
    },
    {
      "Name": "Medanta DLF",
      "Address": "Building No. 10C, Upper Ground Floor, DLF Cyber City, Phase II, Gurugram, Haryana 122002",
      "Lat": 28.4876667,
      "Lng": 77.0881034,
      "Area": "GURGAON",
      "Type": "PRIVATE"
    },
    {
      "Name": "Medanta defence colony",
      "Address": "E – 18, Defence Colony, New Delhi, Delhi 110024",
      "Lat": 28.5733536,
      "Lng": 77.2326497,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Medanta Medicentre",
      "Address": "Indira Gandhi International Airport, New Delhi, Delhi 110037",
      "Lat": 28.5561624,
      "Lng": 77.0999578,
      "Area": "WEST_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Medanta Moolchand",
      "Address": "Medanta-Moolchand Heart Centre Moolchand Medcity, South Delhi Lajpat Nagar III, Near Moolchand Metro Station, New Delhi 110 024",
      "Lat": 28.5674276,
      "Lng": 77.2397968,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Medanta IT Park",
      "Address": "Plot No.- 743 P, Islampur Village Sector -38 Gurugram, Haryana 122018",
      "Lat": 28.4354839,
      "Lng": 77.037736,
      "Area": "GURGAON",
      "Type": "PRIVATE"
    },
    {
      "Name": "SCI international hospital",
      "Address": "M-4, M -Block, Landmark: M Block Market, Greater Kailash Part 1, Delhi",
      "Lat": 28.5367074,
      "Lng": 77.2446858,
      "Area": "SOUTH_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Manipal Hospital",
      "Address": "Palam Vihar Colony, Sector 6, Near MTNL Office, Dwarka Sector 6, Delhi",
      "Lat": 28.5945391,
      "Lng": 77.0693951,
      "Area": "WEST_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "St Stephens Hospital",
      "Address": "St. Stephen's Hospital\nNear kashmiri Gate\nTis Hazari, Delhi",
      "Lat": 28.6667971,
      "Lng": 77.2146145,
      "Area": "NORTH_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Apollo Spectra",
      "Address": "66A, 2, New Rohtak Rd, near Liberty Cinema, Block 67, Karol Bagh, New Delhi, Delhi 110005",
      "Lat": 28.6583665,
      "Lng": 77.1936439,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Apollo Spectra Hospitals",
      "Address": "R-2, Near, Nehru Place Flyover, Pocket 40/203 Nehru Enclave, Chittaranjan, Nehru Place, New Delhi, Delhi 110019",
      "Lat": 28.5458485,
      "Lng": 77.2499101,
      "Area": "SOUTH_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Apollo Spectra Hospitals",
      "Address": "13, Kailash Rd, Sant Nagar, East of Kailash, New Delhi, Delhi 110065",
      "Lat": 28.5543013,
      "Lng": 77.2489548,
      "Area": "SOUTH_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Amrita Hospital, Faridabad",
      "Address": "Mata Amritanandamayi Marg, RPS City, Sector 88, Faridabad, Haryana 121002",
      "Lat": 28.4296934,
      "Lng": 77.3560774,
      "Area": "FARIDABAD",
      "Type": "PRIVATE"
    },
    {
      "Name": "Maharaja Agrasen Hospital",
      "Address": "Plot No 1, Main Road, Dwarka Sector 1, Delhi - 110075, Near Bharat Petrol Pump & Palam Flyover",
      "Lat": 28.5296824,
      "Lng": 77.0673063,
      "Area": "WEST_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Silverstreak Multispeciality Hospital",
      "Address": "Sector 90 Road, Gurgaon Sector 87, Gurgaon - 122505, Opposite Cng Pump",
      "Lat": 28.3938503,
      "Lng": 76.9336042,
      "Area": "GURGAON",
      "Type": "PRIVATE"
    },
    {
      "Name": "Pristyn Care",
      "Address": "Plot 448, 1st Floor, Dwarka, Sector 19, New Delhi, Delhi 110075",
      "Lat": 28.586014,
      "Lng": 77.049157,
      "Area": "WEST_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Columbia Asia, Palam Vihar",
      "Address": "Columbia Asia Hospital, Block F, Gol Chakkar, Near Ansal Plaza Mall, Palam Vihar, Gurugram, Haryana 122017",
      "Lat": 28.5114567,
      "Lng": 77.0419641,
      "Area": "GURGAON",
      "Type": "PRIVATE"
    },
    {
      "Name": "Moolchand Medicity",
      "Address": "Moolchand Medicity,\nLajpat Nagar -III,\nNear Moolchand Metro Station,\nNew Delhi 110024",
      "Lat": 28.564012,
      "Lng": 77.234245,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "GB Pant Hospital",
      "Address": "1, Jawaharlal Nehru Marg, New Delhi, Delhi 110002, India",
      "Lat": 28.639301,
      "Lng": 77.2338941,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Dr. Ram Manohar Lohia Hospital, New Delhi",
      "Address": "Baba Kharak Singh Marg, Connaught Place, New Delhi - 110001.",
      "Lat": 28.6293132,
      "Lng": 77.2118176,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Lok Nayak Jai Prakash Narayan Hospital",
      "Address": "2, Near Delhi Gate,\nJawaharlal Nehru Marg,\nNew Delhi, Delhi 110002",
      "Lat": 28.6411903,
      "Lng": 77.2405826,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Batra Hospital & Medical Research Centre",
      "Address": "1, Tughlakabad Institutional Area, Mehrauli Badarpur Road, Near Saket Metro Station, Tuglakabad, Delhi",
      "Lat": 28.5121156,
      "Lng": 77.245398,
      "Area": "SOUTH_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Dharamshila Narayana Superspeciality Hospital",
      "Address": "Metro Station, Dharamshila marg, Vasundhara Enclave Near Ashok Nagar, Dallupura, New Delhi, Delhi 110096, New Ashok Nagar Metro Station, Vasundhra Enclave, Delhi",
      "Lat": 28.58916,
      "Lng": 77.30214,
      "Area": "EAST_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Medeor Hospital",
      "Address": "B-33- 34., Near Katwaria Sarai, Qutab Institutional Area, Delhi",
      "Lat": 28.5419572,
      "Lng": 77.1876479,
      "Area": "SOUTH_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Jaypee Hospital",
      "Address": "Jaypee Hospital Rd, Goberdhanpur, Sector 128, Noida, Uttar Pradesh 201304",
      "Lat": 28.5158732,
      "Lng": 77.3713351,
      "Area": "NOIDA",
      "Type": "PRIVATE"
    },
    {
      "Name": "Aakash Healthcare, Dwarka, New Delhi",
      "Address": "",
      "Lat": 28.63576,
      "Lng": 77.22445,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Asian Institute of Medical Sciences, Faridabad",
      "Address": "",
      "Lat": 28.4259429,
      "Lng": 77.3000225,
      "Area": "FARIDABAD",
      "Type": "PRIVATE"
    },
    {
      "Name": "Cloudnine Hospital, Sector 47, Gurgaon",
      "Address": "",
      "Lat": 28.4601,
      "Lng": 77.02635,
      "Area": "GURGAON",
      "Type": "PRIVATE"
    },
    {
      "Name": "Dharamshila Narayana Superspeciality Hospital, New Delhi",
      "Address": "",
      "Lat": 28.6024541,
      "Lng": 77.3141628,
      "Area": "EAST_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Medeor Hospital, Qutab, New Delhi",
      "Address": "",
      "Lat": 28.63576,
      "Lng": 77.22445,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Metro Hospital and Cancer Institute, Preet Vihar, New Delhi",
      "Address": "",
      "Lat": 28.63576,
      "Lng": 77.22445,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Metro Hospital and Multispeciality Institute, Sector 11, Noida, Noida",
      "Address": "",
      "Lat": 28.58,
      "Lng": 77.33,
      "Area": "NOIDA",
      "Type": "PRIVATE"
    },
    {
      "Name": "Metro Hospital Park Group, Palam Vihar, Gurgaon",
      "Address": "",
      "Lat": 28.4601,
      "Lng": 77.02635,
      "Area": "GURGAON",
      "Type": "PRIVATE"
    },
    {
      "Name": "Metro Hospitals and Heart Institute, Lajpat Nagar, New Delhi",
      "Address": "",
      "Lat": 28.63576,
      "Lng": 77.22445,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Metro Hospitals and Heart Institute, Sector 12, Noida",
      "Address": "",
      "Lat": 28.58,
      "Lng": 77.33,
      "Area": "NOIDA",
      "Type": "PRIVATE"
    },
    {
      "Name": "Narayana Superspeciality Hospital, Gurugram, Gurgaon",
      "Address": "",
      "Lat": 28.4601,
      "Lng": 77.02635,
      "Area": "GURGAON",
      "Type": "PRIVATE"
    },
    {
      "Name": "Paras Hospital, Gurgaon",
      "Address": "",
      "Lat": 28.4509257,
      "Lng": 77.0876091,
      "Area": "GURGAON",
      "Type": "PRIVATE"
    },
    {
      "Name": "Primus Super Speciality Hospital, New Delhi",
      "Address": "",
      "Lat": 28.63576,
      "Lng": 77.22445,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Pushpawati Singhania Hospital and Research Institute, Delhi, New Delhi",
      "Address": "",
      "Lat": 28.63576,
      "Lng": 77.22445,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Radiant Aesthetics Clinic, New Delhi",
      "Address": "",
      "Lat": 28.63576,
      "Lng": 77.22445,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Rajiv Gandhi Cancer Hospitals, New Delhi",
      "Address": "",
      "Lat": 28.63576,
      "Lng": 77.22445,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "RG Hospital, Faridabad",
      "Address": "",
      "Lat": 28.3879595,
      "Lng": 77.3059771,
      "Area": "FARIDABAD",
      "Type": "PRIVATE"
    },
    {
      "Name": "RG Hospital, Gagan Vihar, New Delhi",
      "Address": "",
      "Lat": 28.63576,
      "Lng": 77.22445,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "RG Hospital, Rajouri Garden, New Delhi",
      "Address": "",
      "Lat": 28.63576,
      "Lng": 77.22445,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "Sarvodaya Hospital and Research Center, Ghaziabad",
      "Address": "",
      "Lat": 28.66249,
      "Lng": 77.43777,
      "Area": "GHAZIABAD",
      "Type": "PRIVATE"
    },
    {
      "Name": "Sarvodaya Hospital and Research Centre, Faridabad",
      "Address": "",
      "Lat": 28.4222263,
      "Lng": 77.3167697,
      "Area": "FARIDABAD",
      "Type": "PRIVATE"
    },
    {
      "Name": "Sitaram Bhartia Institute of Science and Research, New Delhi",
      "Address": "",
      "Lat": 28.63576,
      "Lng": 77.22445,
      "Area": "CENTRAL_DELHI",
      "Type": "PRIVATE"
    },
    {
      "Name": "W Pratiksha Hospital, Gurgaon",
      "Address": "",
      "Lat": 28.4601,
      "Lng": 77.02635,
      "Area": "GURGAON",
      "Type": "PRIVATE"
    },
    {
      "Name": "AIIMS",
      "Address": "Sri Aurobindo Marg, Ansari Nagar, Ansari Nagar East, New Delhi, Delhi 110029",
      "Lat": 28.5650983,
      "Lng": 77.2077142,
      "Area": "CENTRAL_DELHI",
      "Type": "PUBLIC"
    },
    {
      "Name": "Janakpuri Super Speciality Hospital",
      "Address": "C2B, Janakpuri Lal Sai Mandir Marg Opposite Dussehra ground, New Delhi, Delhi 110058",
      "Lat": 28.621914,
      "Lng": 77.088193,
      "Area": "WEST_DELHI",
      "Type": "PUBLIC"
    },
    {
      "Name": "Dr Bhimrao Ambedkar Multispeciality Hospital",
      "Address": "H8GQ+J7J, Maharaja Agrasen Marg, near Delhi Public School, Indergarhi, Sector 30, Noida, Uttar Pradesh 201303",
      "Lat": 28.5773787,
      "Lng": 77.3373514,
      "Area": "NOIDA",
      "Type": "PUBLIC"
    },
    {
      "Name": "RAJIV GANDHI SUPER SPECIALITY HOSPITAL",
      "Address": "Taharpur Rd, Taharpur, Taharpur Village, Dilshad Garden, New Delhi, Delhi 110093",
      "Lat": 28.6863775,
      "Lng": 77.3185851,
      "Area": "EAST_DELHI",
      "Type": "PUBLIC"
    },
    {
      "Name": "Poornima Sethi Multi Speciality Hospital",
      "Address": "G7W5+388, Dd Block, Kalkaji Road, Kalkaji, near Nehru Place Sub Post Office, New Delhi, Delhi 110019",
      "Lat": 28.5497427,
      "Lng": 77.2555677,
      "Area": "SOUTH_DELHI",
      "Type": "PUBLIC"
    },
    {
      "Name": "District Government Multi Speciality Hospital",
      "Address": "Sector 39A, Sector 39, Noida, Uttar Pradesh 201303",
      "Lat": 28.5720533,
      "Lng": 77.3568485,
      "Area": "NOIDA",
      "Type": "PUBLIC"
    },
    {
      "Name": "Safdarjung Hospital",
      "Address": "Ansari Nagar East, near to AIIMS Metro Station, New Delhi, Delhi 110029",
      "Lat": 28.5668275,
      "Lng": 77.2081202,
      "Area": "CENTRAL_DELHI",
      "Type": "PUBLIC"
    },
    {
      "Name": "Maulana Azad Medical College (MAMC)",
      "Address": "2, Bahadur Shah Zafar Marg, near Delhi Gate, Maulana Azad Medical College Campus, Balmiki Basti, New Delhi, Delhi 110002",
      "Lat": 28.6357833,
      "Lng": 77.2400213,
      "Area": "CENTRAL_DELHI",
      "Type": "PUBLIC"
    },
    {
      "Name": "Employees State Insurance Corporation Hospital",
      "Address": "Okhla Phase 1 Dsidc Sheds, Ma Anandmayee Marg, Okhla Industrial Estate, New Delhi, Delhi 110020",
      "Lat": 28.5227517,
      "Lng": 77.2758706,
      "Area": "SOUTH_DELHI",
      "Type": "PUBLIC"
    },
    {
      "Name": "Dr. Ram Manohar Lohia Hospital",
      "Address": "Baba Kharak Singh Rd, near Gurudwara Bangla Sahib, Ram Manohar Lohia Hospital, Type III, Connaught Place, New Delhi, Delhi 110001",
      "Lat": 28.6246432,
      "Lng": 77.2015376,
      "Area": "CENTRAL_DELHI",
      "Type": "PUBLIC"
    }
];

const getHospitalsData = () => {
  return hospitalsData;
};

module.exports = getHospitalsData;

