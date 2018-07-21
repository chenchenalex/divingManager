export const menuItems = [
  { id: 1, name: "Home", url: "/", loginRequired: false },
  { id: 2, name: "Account", url: "/account", loginRequired: true },
  { id: 3, name: "Dashboard", url: "/dashboard", loginRequired: true },
  { id: 4, name: "View Divings", url: "/list", loginRequired: true },
  { id: 5, name: "Gallery", url: "/gallery", loginRequired: false },
  { id: 6, name: "Discover", url: "/discover", loginRequired: false }
];

export const divingHistory = {
  diveById: {
    test1: {
      id: "test1",
      name: "kaotao OW/AOW lesson",
      country: "Thailand",
      depth: 0,
      oxygen: "30",
      feedback: "nothing",
      date: "2017-03-15"
    },
    test2: {
      id: "test2",
      name: "Philipine diving with Eric",
      country: "Philipine",
      depth: 30,
      oxygen: "30",
      feedback: "nothing",
      date: "2018-03-15"
    },
    test3: {
      id: "test3",
      name: "Free diving with sharks",
      country: "Cannes",
      depth: 12,
      oxygen: "30",
      feedback: "nothing",
      date: "2019-05-25"
    },
    test4: {
      id: "test4",
      name: "Blue hold diving, first CAVE DIVE!",
      country: "Mexico",
      depth: 40,
      oxygen: "30",
      feedback: "nothing",
      date: "2020-03-25"
    }
  }
};

export const tableColumnData = [
  {
    id: "name",
    numeric: false,
    label: "Name"
  },
  { id: "country", numeric: false, label: "Country" },
  {
    id: "date",
    numeric: true,
    label: "Date"
  }
];

export const TEST_INITIAL_DATA = {
  name: "VIRGIN Dive with AOW licence",
  country: "Philipine",
  date: "2018-03-15",
  depth: 28
};

export const LOCATION_LIST = [
  { id: "AD", name: "Andorra" },
  { id: "AE", name: "United Arab Emirates" },
  { id: "AF", name: "Afghanistan" },
  { id: "AG", name: "Antigua and Barbuda" },
  { id: "AI", name: "Anguilla" },
  { id: "AL", name: "Albania" },
  { id: "AM", name: "Armenia" },
  { id: "AN", name: "Netherlands Antilles" },
  { id: "AO", name: "Angola" },
  { id: "AQ", name: "Antarctica" },
  { id: "AR", name: "Argentina" },
  { id: "AS", name: "American Samoa" },
  { id: "AT", name: "Austria" },
  { id: "AU", name: "Australia" },
  { id: "AW", name: "Aruba" },
  { id: "AX", name: "Finland" },
  { id: "AZ", name: "Azerbaijan" },
  { id: "BA", name: "Bosnia and Herzegovina" },
  { id: "BB", name: "Barbados" },
  { id: "BD", name: "Bangladesh" },
  { id: "BE", name: "Belgium" },
  { id: "BF", name: "Burkina Faso" },
  { id: "BG", name: "Bulgaria" },
  { id: "BH", name: "Bahrain" },
  { id: "BI", name: "Burundi" },
  { id: "BJ", name: "Benin" },
  { id: "BM", name: "Bermuda" },
  { id: "BN", name: "Brunei Darussalam" },
  { id: "BO", name: "Bolivia" },
  { id: "BR", name: "Brazil" },
  { id: "BS", name: "Bahamas" },
  { id: "BT", name: "Bhutan" },
  { id: "BV", name: "Bouvet Island" },
  { id: "BW", name: "Botswana" },
  { id: "BY", name: "Belarus" },
  { id: "BZ", name: "Belize" },
  { id: "CA", name: "Canada" },
  { id: "CD", name: "The Democratic Republic of The Congo" },
  { id: "CF", name: "Central African Republic" },
  { id: "CG", name: "Congo" },
  { id: "CH", name: "Switzerland" },
  { id: "CI", name: "Cote D'Ivoire" },
  { id: "CK", name: "Cook Islands" },
  { id: "CL", name: "Chile" },
  { id: "CM", name: "Cameroon" },
  { id: "CN", name: "China" },
  { id: "CO", name: "Colombia" },
  { id: "CR", name: "Costa Rica" },
  { id: "CS", name: "Serbia and Montenegro" },
  { id: "CU", name: "Cuba" },
  { id: "CV", name: "Cape Verde" },
  { id: "CY", name: "Cyprus" },
  { id: "CZ", name: "Czech Republic" },
  { id: "DE", name: "Germany" },
  { id: "DJ", name: "Djibouti" },
  { id: "DK", name: "Denmark" },
  { id: "DM", name: "Dominica" },
  { id: "DO", name: "Dominican Republic" },
  { id: "DZ", name: "Algeria" },
  { id: "EC", name: "Ecuador" },
  { id: "EE", name: "Estonia" },
  { id: "EG", name: "Egypt" },
  { id: "ER", name: "Eritrea" },
  { id: "ES", name: "Spain" },
  { id: "ET", name: "Ethiopia" },
  { id: "FI", name: "Finland" },
  { id: "FJ", name: "Fiji" },
  { id: "FK", name: "Falkland Islands (Malvinas)" },
  { id: "FM", name: "Federated States of Micronesia" },
  { id: "FO", name: "Faroe Islands" },
  { id: "FR", name: "France" },
  { id: "GA", name: "Gabon" },
  { id: "GB", name: "United Kingdom of Great Britain and Northern Ireland" },
  { id: "GD", name: "Grenada" },
  { id: "GE", name: "Georgia" },
  { id: "GF", name: "French Guiana" },
  { id: "GG", name: "Guernsey" },
  { id: "GH", name: "Ghana" },
  { id: "GI", name: "Gibraltar" },
  { id: "GL", name: "Greenland" },
  { id: "GM", name: "Gambia" },
  { id: "GN", name: "Guinea" },
  { id: "GP", name: "Guadeloupe" },
  { id: "GQ", name: "Equatorial Guinea" },
  { id: "GR", name: "Greece" },
  { id: "GS", name: "South Georgia and The South Sandwich Islands" },
  { id: "GT", name: "Guatemala" },
  { id: "GU", name: "Guam" },
  { id: "GW", name: "Guinea-Bissau" },
  { id: "GY", name: "Guyana" },
  { id: "HK", name: "Hong Kong" },
  { id: "HN", name: "Honduras" },
  { id: "HR", name: "Croatia" },
  { id: "HT", name: "Haiti" },
  { id: "HU", name: "Hungary" },
  { id: "ID", name: "Indonesia" },
  { id: "IE", name: "Ireland" },
  { id: "IL", name: "Israel" },
  { id: "IM", name: "Isle of Man" },
  { id: "IN", name: "India" },
  { id: "IO", name: "British Indian Ocean Territory" },
  { id: "IQ", name: "Iraq" },
  { id: "IR", name: "Islamic Republic of Iran" },
  { id: "IS", name: "Iceland" },
  { id: "IT", name: "Italy" },
  { id: "JE", name: "Jersey" },
  { id: "JM", name: "Jamaica" },
  { id: "JO", name: "Jordan" },
  { id: "JP", name: "Japan" },
  { id: "KE", name: "Kenya" },
  { id: "KG", name: "Kyrgyzstan" },
  { id: "KH", name: "Cambodia" },
  { id: "KI", name: "Kiribati" },
  { id: "KM", name: "Comoros" },
  { id: "KN", name: "Saint Kitts and Nevis" },
  { id: "KP", name: "Democratic People's Republic of Korea" },
  { id: "KR", name: "Republic of Korea" },
  { id: "KW", name: "Kuwait" },
  { id: "KY", name: "Cayman Islands" },
  { id: "KZ", name: "Kazakhstan" },
  { id: "LA", name: "Lao People's Democratic Republic" },
  { id: "LB", name: "Lebanon" },
  { id: "LC", name: "Saint Lucia" },
  { id: "LI", name: "Liechtenstein" },
  { id: "LK", name: "Sri Lanka" },
  { id: "LR", name: "Liberia" },
  { id: "LS", name: "Lesotho" },
  { id: "LT", name: "Lithuania" },
  { id: "LU", name: "Luxembourg" },
  { id: "LV", name: "Latvia" },
  { id: "LY", name: "Libyan Arab Jamahiriya" },
  { id: "MA", name: "Morocco" },
  { id: "MC", name: "Monaco" },
  { id: "MD", name: "Republic of Moldova" },
  { id: "ME", name: "Montenegro" },
  { id: "MF", name: "Saint Martin" },
  { id: "MG", name: "Madagascar" },
  { id: "MH", name: "Marshall Islands" },
  { id: "MK", name: "The Former Yugoslav Republic of Macedonia" },
  { id: "ML", name: "Mali" },
  { id: "MM", name: "Myanmar" },
  { id: "MN", name: "Mongolia" },
  { id: "MO", name: "Macao" },
  { id: "MP", name: "Northern Mariana Islands" },
  { id: "MQ", name: "Martinique" },
  { id: "MR", name: "Mauritania" },
  { id: "MS", name: "Montserrat" },
  { id: "MT", name: "Malta" },
  { id: "MU", name: "Mauritius" },
  { id: "MV", name: "Maldives" },
  { id: "MW", name: "Malawi" },
  { id: "MX", name: "Mexico" },
  { id: "MY", name: "Malaysia" },
  { id: "MZ", name: "Mozambique" },
  { id: "NA", name: "Namibia" },
  { id: "NC", name: "New Caledonia" },
  { id: "NE", name: "Niger" },
  { id: "NF", name: "Norfolk Island" },
  { id: "NG", name: "Nigeria" },
  { id: "NI", name: "Nicaragua" },
  { id: "NL", name: "Netherlands" },
  { id: "NO", name: "Norway" },
  { id: "NP", name: "Nepal" },
  { id: "NR", name: "Nauru" },
  { id: "NU", name: "Niue" },
  { id: "NZ", name: "New Zealand" },
  { id: "OM", name: "Oman" },
  { id: "PA", name: "Panama" },
  { id: "PE", name: "Peru" },
  { id: "PF", name: "French Polynesia" },
  { id: "PG", name: "Papua New Guinea" },
  { id: "PH", name: "Philippines" },
  { id: "PK", name: "Pakistan" },
  { id: "PL", name: "Poland" },
  { id: "PM", name: "Saint Pierre and Miquelon" },
  { id: "PR", name: "Puerto Rico" },
  { id: "PS", name: "Palestinian Territory, Occupied" },
  { id: "PT", name: "Portugal" },
  { id: "PW", name: "Palau" },
  { id: "PY", name: "Paraguay" },
  { id: "QA", name: "Qatar" },
  { id: "RE", name: "Reunion" },
  { id: "RO", name: "Romania" },
  { id: "RS", name: "Serbia" },
  { id: "RU", name: "Russian Federation" },
  { id: "RW", name: "Rwanda" },
  { id: "SA", name: "Saudi Arabia" },
  { id: "SB", name: "Solomon Islands" },
  { id: "SC", name: "Seychelles" },
  { id: "SD", name: "Sudan" },
  { id: "SE", name: "Sweden" },
  { id: "SG", name: "Singapore" },
  { id: "SI", name: "Slovenia" },
  { id: "SK", name: "Slovakia" },
  { id: "SL", name: "Sierra Leone" },
  { id: "SM", name: "San Marino" },
  { id: "SN", name: "Senegal" },
  { id: "SO", name: "Somalia" },
  { id: "SR", name: "Suriname" },
  { id: "SS", name: "South Sudan" },
  { id: "ST", name: "Sao Tome and Principe" },
  { id: "SV", name: "El Salvador" },
  { id: "SY", name: "Syrian Arab Republic" },
  { id: "SZ", name: "Swaziland" },
  { id: "TC", name: "Turks and Caicos Islands" },
  { id: "TD", name: "Chad" },
  { id: "TF", name: "French Southern Territories" },
  { id: "TG", name: "Togo" },
  { id: "TH", name: "Thailand" },
  { id: "TJ", name: "Tajikistan" },
  { id: "TK", name: "Tokelau" },
  { id: "TL", name: "Timor-Leste" },
  { id: "TM", name: "Turkmenistan" },
  { id: "TN", name: "Tunisia" },
  { id: "TO", name: "Tonga" },
  { id: "TR", name: "Turkey" },
  { id: "TT", name: "Trinidad and Tobago" },
  { id: "TV", name: "Tuvalu" },
  { id: "TW", name: "Taiwan" },
  { id: "TZ", name: "United Republic of Tanzania" },
  { id: "UA", name: "Ukraine" },
  { id: "UG", name: "Uganda" },
  { id: "UM", name: "United States Minor Outlying Islands" },
  { id: "US", name: "United States of America" },
  { id: "UY", name: "Uruguay" },
  { id: "UZ", name: "Uzbekistan" },
  { id: "VA", name: "Holy See (Vatican City State)" },
  { id: "VC", name: "Saint Vincent and The Grenadines" },
  { id: "VE", name: "Venezuela" },
  { id: "VG", name: "Virgin Islands, British" },
  { id: "VI", name: "Virgin Islands, U.S." },
  { id: "VN", name: "Viet Nam" },
  { id: "VU", name: "Vanuatu" },
  { id: "WF", name: "Wallis and Futuna" },
  { id: "WS", name: "Samoa" },
  { id: "YE", name: "Yemen" },
  { id: "YT", name: "Mayotte" },
  { id: "ZA", name: "South Africa" },
  { id: "ZM", name: "Zambia" },
  { id: "ZW", name: "Zimbabwe" }
];
