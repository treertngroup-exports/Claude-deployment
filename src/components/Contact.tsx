import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Trash2,
  PlusCircle,
} from "lucide-react";

import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import Flag from "react-world-flags";


// Minimal phone dial mapping. Add more codes as needed.
const phoneCodes: any = {
  // extend this mapping if you want complete coverage
  AF: "93", // Afghanistan
  AL: "355", // Albania
  DZ: "213", // Algeria
  AS: "1", // American Samoa
  AD: "376", // Andorra
  AO: "244", // Angola
  AI: "1", // Anguilla
  AQ: "672", // Antarctica
  AG: "1", // Antigua and Barbuda
  AR: "54", // Argentina
  AM: "374", // Armenia
  AW: "297", // Aruba
  AU: "61", // Australia
  AT: "43", // Austria
  AZ: "994", // Azerbaijan
  BS: "1", // Bahamas
  BH: "973", // Bahrain
  BD: "880", // Bangladesh
  BB: "1", // Barbados
  BY: "375", // Belarus
  BE: "32", // Belgium
  BZ: "501", // Belize
  BJ: "229", // Benin
  BM: "1", // Bermuda
  BT: "975", // Bhutan
  BO: "591", // Bolivia
  BQ: "599", // Bonaire, Sint Eustatius and Saba
  BA: "387", // Bosnia and Herzegovina
  BW: "267", // Botswana
  BR: "55", // Brazil
  IO: "246", // British Indian Ocean Territory
  BN: "673", // Brunei Darussalam
  BG: "359", // Bulgaria
  BF: "226", // Burkina Faso
  BI: "257", // Burundi
  KH: "855", // Cambodia
  CM: "237", // Cameroon
  CA: "1", // Canada
  CV: "238", // Cape Verde
  KY: "345", // Cayman Islands
  CF: "236", // Central African Republic
  TD: "235", // Chad
  CL: "56", // Chile
  CN: "86", // China
  CX: "61", // Christmas Island
  CC: "61", // Cocos (Keeling) Islands
  CO: "57", // Colombia
  KM: "269", // Comoros
  CG: "242", // Congo
  CD: "243", // Congo (Democratic Republic of the)
  CK: "682", // Cook Islands
  CR: "506", // Costa Rica
  CI: "225", // Cote d'Ivoire
  HR: "385", // Croatia
  CU: "53", // Cuba
  CY: "357", // Cyprus
  CZ: "420", // Czech Republic
  DK: "45", // Denmark
  DJ: "253", // Djibouti
  DM: "1", // Dominica
  DO: "1", // Dominican Republic
  EC: "593", // Ecuador
  EG: "20", // Egypt
  SV: "503", // El Salvador
  GQ: "240", // Equatorial Guinea
  ER: "291", // Eritrea
  EE: "372", // Estonia
  ET: "251", // Ethiopia
  FK: "500", // Falkland Islands
  FO: "298", // Faroe Islands
  FJ: "679", // Fiji
  FI: "358", // Finland
  FR: "33", // France
  GF: "594", // French Guiana
  PF: "689", // French Polynesia
  TF: "262", // French Southern Territories
  GA: "241", // Gabon
  GM: "220", // Gambia
  GE: "995", // Georgia
  DE: "49", // Germany
  GH: "233", // Ghana
  GI: "350", // Gibraltar
  GR: "30", // Greece
  GL: "299", // Greenland
  GD: "1", // Grenada
  GU: "1", // Guam
  GT: "502", // Guatemala
  GN: "224", // Guinea
  GW: "245", // Guinea-Bissau
  GY: "592", // Guyana
  HT: "509", // Haiti
  HN: "504", // Honduras
  HK: "852", // Hong Kong
  HU: "36", // Hungary
  IS: "354", // Iceland
  IN: "91", // India
  ID: "62", // Indonesia
  IR: "98", // Iran
  IQ: "964", // Iraq
  IE: "353", // Ireland
  IL: "972", // Israel
  IT: "39", // Italy
  JM: "1", // Jamaica
  JP: "81", // Japan
  JO: "962", // Jordan
  KZ: "7", // Kazakhstan
  KE: "254", // Kenya
  KI: "686", // Kiribati
  KW: "965", // Kuwait
  KG: "996", // Kyrgyzstan
  LA: "856", // Laos
  LV: "371", // Latvia
  LB: "961", // Lebanon
  LS: "266", // Lesotho
  LR: "231", // Liberia
  LY: "218", // Libya
  LI: "423", // Liechtenstein
  LT: "370", // Lithuania
  LU: "352", // Luxembourg
  MO: "853", // Macao
  MK: "389", // Macedonia
  MG: "261", // Madagascar
  MW: "265", // Malawi
  MY: "60", // Malaysia
  MV: "960", // Maldives
  ML: "223", // Mali
  MT: "356", // Malta
  MH: "692", // Marshall Islands
  MQ: "596", // Martinique
  MR: "222", // Mauritania
  MU: "230", // Mauritius
  YT: "262", // Mayotte
  MX: "52", // Mexico
  FM: "691", // Micronesia
  MD: "373", // Moldova
  MC: "377", // Monaco
  MN: "976", // Mongolia
  ME: "382", // Montenegro
  MS: "1", // Montserrat
  MA: "212", // Morocco
  MZ: "258", // Mozambique
  MM: "95", // Myanmar
  NA: "264", // Namibia
  NR: "674", // Nauru
  NP: "977", // Nepal
  NL: "31", // Netherlands
  NC: "687", // New Caledonia
  NZ: "64", // New Zealand
  NI: "505", // Nicaragua
  NE: "227", // Niger
  NG: "234", // Nigeria
  NU: "683", // Niue
  KP: "850", // North Korea
  MP: "1", // Northern Mariana Islands
  NO: "47", // Norway
  OM: "968", // Oman
  PK: "92", // Pakistan
  PW: "680", // Palau
  PA: "507", // Panama
  PG: "675", // Papua New Guinea
  PY: "595", // Paraguay
  PE: "51", // Peru
  PH: "63", // Philippines
  PL: "48", // Poland
  PT: "351", // Portugal
  PR: "1", // Puerto Rico
  QA: "974", // Qatar
  RO: "40", // Romania
  RU: "7", // Russia
  RW: "250", // Rwanda
  RE: "262", // Réunion
  KN: "1", // Saint Kitts and Nevis
  LC: "1", // Saint Lucia
  PM: "508", // Saint Pierre and Miquelon
  VC: "1", // Saint Vincent and the Grenadines
  WS: "685", // Samoa
  SM: "378", // San Marino
  ST: "239", // São Tomé and Príncipe
  SA: "966", // Saudi Arabia
  SN: "221", // Senegal
  RS: "381", // Serbia
  SC: "248", // Seychelles
  SL: "232", // Sierra Leone
  SG: "65", // Singapore
  SX: "1", // Sint Maarten
  SK: "421", // Slovakia
  SI: "386", // Slovenia
  SB: "677", // Solomon Islands
  SO: "252", // Somalia
  ZA: "27", // South Africa
  KR: "82", // South Korea
  SS: "211", // South Sudan
  ES: "34", // Spain
  LK: "94", // Sri Lanka
  SD: "249", // Sudan
  SR: "597", // Suriname
  SJ: "47", // Svalbard and Jan Mayen
  SZ: "268", // Swaziland
  SE: "46", // Sweden
  CH: "41", // Switzerland
  SY: "963", // Syria
  TW: "886", // Taiwan
  TJ: "992", // Tajikistan
  TZ: "255", // Tanzania
  TH: "66", // Thailand
  TL: "670", // Timor-Leste
  TG: "228", // Togo
  TK: "690", // Tokelau
  TO: "676", // Tonga
  TT: "1", // Trinidad and Tobago
  TN: "216", // Tunisia
  TR: "90", // Turkey
  TM: "993", // Turkmenistan
  TC: "1", // Turks and Caicos Islands
  TV: "688", // Tuvalu
  UG: "256", // Uganda
  UA: "380", // Ukraine
  AE: "971", // United Arab Emirates
  GB: "44", // United Kingdom
  US: "1", // United States
  UY: "598", // Uruguay
  UZ: "998", // Uzbekistan
  VU: "678", // Vanuatu
  VE: "58", // Venezuela
  VN: "84", // Vietnam
  WF: "681", // Wallis and Futuna
  YE: "967", // Yemen
  ZM: "260", // Zambia

};

const Contact = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    nationality: "", // ISO2 e.g. "IN"
    phone: "",
    cargoType: "air",
    port: "",
    products: [
      // default single empty row
      { product: "", quantity: "", unit: "ton" },
    ],
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Port lists
  const airPorts = ["JFK (New York)", "DXB (Dubai)", "SIN (Singapore)", "LAX (Los Angeles)"];
  const seaPorts = ["Shanghai Port", "Singapore Port", "Rotterdam Port", "Nhava Sheva (India)"];

  // Nationality options (shortened here — replace/extend with full list if needed)
  const nationalityOptions = [
    // ...add the rest of your country list
    { value: "AF", label: "Afghanistan" },
    { value: "AL", label: "Albania" },
    { value: "DZ", label: "Algeria" },
    { value: "AS", label: "American Samoa" },
    { value: "AD", label: "Andorra" },
    { value: "AO", label: "Angola" },
    { value: "AI", label: "Anguilla" },
    { value: "AQ", label: "Antarctica" },
    { value: "AG", label: "Antigua and Barbuda" },
    { value: "AR", label: "Argentina" },
    { value: "AM", label: "Armenia" },
    { value: "AW", label: "Aruba" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "AZ", label: "Azerbaijan" },
    { value: "BS", label: "Bahamas" },
    { value: "BH", label: "Bahrain" },
    { value: "BD", label: "Bangladesh" },
    { value: "BB", label: "Barbados" },
    { value: "BY", label: "Belarus" },
    { value: "BE", label: "Belgium" },
    { value: "BZ", label: "Belize" },
    { value: "BJ", label: "Benin" },
    { value: "BM", label: "Bermuda" },
    { value: "BT", label: "Bhutan" },
    { value: "BO", label: "Bolivia" },
    { value: "BQ", label: "Bonaire, Sint Eustatius and Saba" },
    { value: "BA", label: "Bosnia and Herzegovina" },
    { value: "BW", label: "Botswana" },
    { value: "BR", label: "Brazil" },
    { value: "IO", label: "British Indian Ocean Territory" },
    { value: "BN", label: "Brunei Darussalam" },
    { value: "BG", label: "Bulgaria" },
    { value: "BF", label: "Burkina Faso" },
    { value: "BI", label: "Burundi" },
    { value: "KH", label: "Cambodia" },
    { value: "CM", label: "Cameroon" },
    { value: "CA", label: "Canada" },
    { value: "CV", label: "Cape Verde" },
    { value: "KY", label: "Cayman Islands" },
    { value: "CF", label: "Central African Republic" },
    { value: "TD", label: "Chad" },
    { value: "CL", label: "Chile" },
    { value: "CN", label: "China" },
    { value: "CX", label: "Christmas Island" },
    { value: "CC", label: "Cocos (Keeling) Islands" },
    { value: "CO", label: "Colombia" },
    { value: "KM", label: "Comoros" },
    { value: "CG", label: "Congo" },
    { value: "CD", label: "Congo (Democratic Republic of the)" },
    { value: "CK", label: "Cook Islands" },
    { value: "CR", label: "Costa Rica" },
    { value: "CI", label: "Cote d'Ivoire" },
    { value: "HR", label: "Croatia" },
    { value: "CU", label: "Cuba" },
    { value: "CY", label: "Cyprus" },
    { value: "CZ", label: "Czech Republic" },
    { value: "DK", label: "Denmark" },
    { value: "DJ", label: "Djibouti" },
    { value: "DM", label: "Dominica" },
    { value: "DO", label: "Dominican Republic" },
    { value: "EC", label: "Ecuador" },
    { value: "EG", label: "Egypt" },
    { value: "SV", label: "El Salvador" },
    { value: "GQ", label: "Equatorial Guinea" },
    { value: "ER", label: "Eritrea" },
    { value: "EE", label: "Estonia" },
    { value: "ET", label: "Ethiopia" },
    { value: "FK", label: "Falkland Islands" },
    { value: "FO", label: "Faroe Islands" },
    { value: "FJ", label: "Fiji" },
    { value: "FI", label: "Finland" },
    { value: "FR", label: "France" },
    { value: "GF", label: "French Guiana" },
    { value: "PF", label: "French Polynesia" },
    { value: "TF", label: "French Southern Territories" },
    { value: "GA", label: "Gabon" },
    { value: "GM", label: "Gambia" },
    { value: "GE", label: "Georgia" },
    { value: "DE", label: "Germany" },
    { value: "GH", label: "Ghana" },
    { value: "GI", label: "Gibraltar" },
    { value: "GR", label: "Greece" },
    { value: "GL", label: "Greenland" },
    { value: "GD", label: "Grenada" },
    { value: "GU", label: "Guam" },
    { value: "GT", label: "Guatemala" },
    { value: "GN", label: "Guinea" },
    { value: "GW", label: "Guinea-Bissau" },
    { value: "GY", label: "Guyana" },
    { value: "HT", label: "Haiti" },
    { value: "HN", label: "Honduras" },
    { value: "HK", label: "Hong Kong" },
    { value: "HU", label: "Hungary" },
    { value: "IS", label: "Iceland" },
    { value: "IN", label: "India" },
    { value: "ID", label: "Indonesia" },
    { value: "IR", label: "Iran" },
    { value: "IQ", label: "Iraq" },
    { value: "IE", label: "Ireland" },
    { value: "IL", label: "Israel" },
    { value: "IT", label: "Italy" },
    { value: "JM", label: "Jamaica" },
    { value: "JP", label: "Japan" },
    { value: "JO", label: "Jordan" },
    { value: "KZ", label: "Kazakhstan" },
    { value: "KE", label: "Kenya" },
    { value: "KI", label: "Kiribati" },
    { value: "KW", label: "Kuwait" },
    { value: "KG", label: "Kyrgyzstan" },
    { value: "LA", label: "Laos" },
    { value: "LV", label: "Latvia" },
    { value: "LB", label: "Lebanon" },
    { value: "LS", label: "Lesotho" },
    { value: "LR", label: "Liberia" },
    { value: "LY", label: "Libya" },
    { value: "LI", label: "Liechtenstein" },
    { value: "LT", label: "Lithuania" },
    { value: "LU", label: "Luxembourg" },
    { value: "MO", label: "Macao" },
    { value: "MK", label: "Macedonia" },
    { value: "MG", label: "Madagascar" },
    { value: "MW", label: "Malawi" },
    { value: "MY", label: "Malaysia" },
    { value: "MV", label: "Maldives" },
    { value: "ML", label: "Mali" },
    { value: "MT", label: "Malta" },
    { value: "MH", label: "Marshall Islands" },
    { value: "MQ", label: "Martinique" },
    { value: "MR", label: "Mauritania" },
    { value: "MU", label: "Mauritius" },
    { value: "YT", label: "Mayotte" },
    { value: "MX", label: "Mexico" },
    { value: "FM", label: "Micronesia" },
    { value: "MD", label: "Moldova" },
    { value: "MC", label: "Monaco" },
    { value: "MN", label: "Mongolia" },
    { value: "ME", label: "Montenegro" },
    { value: "MS", label: "Montserrat" },
    { value: "MA", label: "Morocco" },
    { value: "MZ", label: "Mozambique" },
    { value: "MM", label: "Myanmar" },
    { value: "NA", label: "Namibia" },
    { value: "NR", label: "Nauru" },
    { value: "NP", label: "Nepal" },
    { value: "NL", label: "Netherlands" },
    { value: "NC", label: "New Caledonia" },
    { value: "NZ", label: "New Zealand" },
    { value: "NI", label: "Nicaragua" },
    { value: "NE", label: "Niger" },
    { value: "NG", label: "Nigeria" },
    { value: "NU", label: "Niue" },
    { value: "KP", label: "North Korea" },
    { value: "MP", label: "Northern Mariana Islands" },
    { value: "NO", label: "Norway" },
    { value: "OM", label: "Oman" },
    { value: "PK", label: "Pakistan" },
    { value: "PW", label: "Palau" },
    { value: "PA", label: "Panama" },
    { value: "PG", label: "Papua New Guinea" },
    { value: "PY", label: "Paraguay" },
    { value: "PE", label: "Peru" },
    { value: "PH", label: "Philippines" },
    { value: "PL", label: "Poland" },
    { value: "PT", label: "Portugal" },
    { value: "PR", label: "Puerto Rico" },
    { value: "QA", label: "Qatar" },
    { value: "RO", label: "Romania" },
    { value: "RU", label: "Russia" },
    { value: "RW", label: "Rwanda" },
    { value: "RE", label: "Réunion" },
    { value: "KN", label: "Saint Kitts and Nevis" },
    { value: "LC", label: "Saint Lucia" },
    { value: "PM", label: "Saint Pierre and Miquelon" },
    { value: "VC", label: "Saint Vincent and the Grenadines" },
    { value: "WS", label: "Samoa" },
    { value: "SM", label: "San Marino" },
    { value: "ST", label: "São Tomé and Príncipe" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "SN", label: "Senegal" },
    { value: "RS", label: "Serbia" },
    { value: "SC", label: "Seychelles" },
    { value: "SL", label: "Sierra Leone" },
    { value: "SG", label: "Singapore" },
    { value: "SX", label: "Sint Maarten" },
    { value: "SK", label: "Slovakia" },
    { value: "SI", label: "Slovenia" },
    { value: "SB", label: "Solomon Islands" },
    { value: "SO", label: "Somalia" },
    { value: "ZA", label: "South Africa" },
    { value: "KR", label: "South Korea" },
    { value: "SS", label: "South Sudan" },
    { value: "ES", label: "Spain" },
    { value: "LK", label: "Sri Lanka" },
    { value: "SD", label: "Sudan" },
    { value: "SR", label: "Suriname" },
    { value: "SJ", label: "Svalbard and Jan Mayen" },
    { value: "SZ", label: "Swaziland" },
    { value: "SE", label: "Sweden" },
    { value: "CH", label: "Switzerland" },
    { value: "SY", label: "Syria" },
    { value: "TW", label: "Taiwan" },
    { value: "TJ", label: "Tajikistan" },
    { value: "TZ", label: "Tanzania" },
    { value: "TH", label: "Thailand" },
    { value: "TL", label: "Timor-Leste" },
    { value: "TG", label: "Togo" },
    { value: "TK", label: "Tokelau" },
    { value: "TO", label: "Tonga" },
    { value: "TT", label: "Trinidad and Tobago" },
    { value: "TN", label: "Tunisia" },
    { value: "TR", label: "Turkey" },
    { value: "TM", label: "Turkmenistan" },
    { value: "TC", label: "Turks and Caicos Islands" },
    { value: "TV", label: "Tuvalu" },
    { value: "UG", label: "Uganda" },
    { value: "UA", label: "Ukraine" },
    { value: "AE", label: "United Arab Emirates" },
    { value: "GB", label: "United Kingdom" },
    { value: "US", label: "United States" },
    { value: "UY", label: "Uruguay" },
    { value: "UZ", label: "Uzbekistan" },
    { value: "VU", label: "Vanuatu" },
    { value: "VE", label: "Venezuela" },
    { value: "VN", label: "Vietnam" },
    { value: "WF", label: "Wallis and Futuna" },
    { value: "YE", label: "Yemen" },
    { value: "ZM", label: "Zambia" },
    { value: "ZW", label: "Zimbabwe" }
  ];

  // When nationality changes, optionally set phone to the country's dial code (if available).
  useEffect(() => {
    const iso = formData.nationality;
    if (iso) {
      const dial = phoneCodes[iso];
      if (dial) {
        // Only replace phone if it's empty or starts with + (so we don't overwrite deliberate values)
        // Here we set to +<dial> if phone is empty or just a previous dial-only value.
        if (!formData.phone || /^\+\d*$/.test(formData.phone)) {
          setFormData((prev: any) => ({ ...prev, phone: `+${dial}` }));
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.nationality]);

  // --- Product list helpers ---
  const addProductRow = () => {
    setFormData((prev: any) => ({
      ...prev,
      products: [...prev.products, { product: "", quantity: "", unit: "ton" }],
    }));
  };

  const removeProductRow = (index: number) => {
    setFormData((prev: any) => {
      const products = [...prev.products];
      products.splice(index, 1);
      return {
        ...prev,
        products: products.length ? products : [{ product: "", quantity: "", unit: "ton" }],
      };
    });
  };

  const updateProductRow = (index: number, key: string, value: any) => {
    setFormData((prev: any) => {
      const products = [...prev.products];
      products[index] = { ...products[index], [key]: value };
      return { ...prev, products };
    });
  };

  // Validation
  const validate = () => {
    const tempErrors: any = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) tempErrors.email = "Valid email is required";
    if (!formData.nationality) tempErrors.nationality = "Nationality is required";
    if (!formData.phone || formData.phone.length < 8) tempErrors.phone = "Valid phone number required";
    if (!formData.port) tempErrors.port = "Please select a port";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    // Products validation: at least one valid product row, each needs name and numeric quantity > 0
    const productsErrors: any[] = [];
    formData.products.forEach((row: any, idx: number) => {
      const rowErr: any = {};
      if (!row.product || !row.product.trim()) rowErr.product = "Product name required";
      if (row.quantity === "" || row.quantity === null || isNaN(Number(row.quantity))) {
        rowErr.quantity = "Enter numeric quantity";
      } else if (Number(row.quantity) <= 0) {
        rowErr.quantity = "Quantity must be greater than 0";
      }
      if (!row.unit || (row.unit !== "ton" && row.unit !== "kg")) {
        rowErr.unit = "Select unit";
      }
      productsErrors.push(rowErr);
    });

    // If any product row has errors, include them
    const anyProductErrors = productsErrors.some((r) => Object.keys(r).length > 0);
    if (anyProductErrors) tempErrors.products = productsErrors;

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
  e.preventDefault();

  if (!validate()) return;

  setIsSubmitting(true);

  const GOOGLE_SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbwlIbQuPa8Y2-I1tCtZ1ZS-D0bYKIZ6G1s2R1oB9F3NJsOl2X4EOqnW7kfZ-mH76Pby8A/exec";

try {
  await fetch(GOOGLE_SHEET_WEBHOOK, {
    method: "POST",
    mode: "no-cors", // IMPORTANT
    body: JSON.stringify(formData), // MUST NOT set Content-Type
  });

  // You cannot read response (opaque), but request reaches Google.
  setSubmitMessage("Thank you! We have received your details.");

  // Reset form
  setFormData({
    name: "",
    email: "",
    nationality: "",
    phone: "",
    cargoType: "air",
    port: "",
    products: [{ product: "", quantity: "", unit: "ton" }],
    message: "",
  });

  setErrors({});
} catch (error) {
  console.error(error);
  setSubmitMessage("Failed to send. Please try again.");
}

setIsSubmitting(false);

setTimeout(() => setSubmitMessage(""), 6000);
  };

  // Contact Info (unchanged)
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      label: "Phone",
      values: [
        { text: "+91 84389 06166", link: "tel:+91 84389 06166" },
      ],
    },
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      label: "Email",
      value: "treertngroup@gmail.com",
      link: "mailto:treertngroup@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      label: "Address",
      value: "Treert & Group, Thelungupalayam, Coimbatore, Tamil Nadu - 641653",
      link: "https://maps.app.goo.gl/Wbr2GnhbjuRfbSby6",
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      label: "Operating Hours",
      value: "Monday – Sunday • 8:00 AM – 5:30 PM",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Request a Quote</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to work together? Let’s discuss your export requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            {/* Name */}
            <div>
              <label className="block font-semibold mb-1">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-1">Your Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="john@company.com"
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            </div>

            {/* Nationality */}
            <div>
              <label className="block font-semibold mb-1">Your Nationality</label>
              <Select
                options={nationalityOptions}
                value={nationalityOptions.find((n) => n.value === formData.nationality)}
                onChange={(opt: any) => setFormData({ ...formData, nationality: opt?.value || "" })}
                formatOptionLabel={(country: any) => (
                  <div className="flex items-center gap-2">
                    <Flag code={country.value} style={{ width: 25, height: 18 }} />
                    {country.label}
                  </div>
                )}
              />
              {errors.nationality && <p className="text-red-600 text-sm">{errors.nationality}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold mb-1">Contact Number</label>
              <PhoneInput
                country={(formData.nationality || "IN").toLowerCase()}
                value={formData.phone}
                onChange={(phone: any) => setFormData({ ...formData, phone })}
                inputClass="w-full px-4 py-3 border-2 border-gray-400 rounded-lg"
              />
              {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
            </div>

            {/* Cargo Type */}
            <div>
              <label className="block font-semibold mb-1">Cargo Type</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="air"
                    checked={formData.cargoType === "air"}
                    onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                    className="mr-2"
                  />
                  Air Cargo
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="sea"
                    checked={formData.cargoType === "sea"}
                    onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                    className="mr-2"
                  />
                  Sea Cargo
                </label>
              </div>
            </div>

            {/* Port */}
            <div>
              <label className="block font-semibold mb-1">Port</label>
              <Select
                options={(formData.cargoType === "air" ? airPorts : seaPorts).map((p) => ({
                  value: p,
                  label: p,
                }))}
                onChange={(opt: any) => setFormData({ ...formData, port: opt?.value })}
                placeholder="Type to search..."
                isSearchable
              />
              {errors.port && <p className="text-red-600 text-sm">{errors.port}</p>}
            </div>

            {/* Products Section */}
            <div>
              <label className="block font-semibold mb-3">Products to Export</label>
            
              {/* DESKTOP TABLE (hidden on mobile) */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="text-left px-4 py-2 text-sm text-gray-600">Product</th>
                      <th className="text-left px-4 py-2 text-sm text-gray-600">Quantity</th>
                      <th className="text-left px-4 py-2 text-sm text-gray-600">Unit</th>
                      <th className="px-4 py-2 text-sm text-gray-600 text-center">Action</th>
                    </tr>
                  </thead>
            
                  <tbody>
                    formData.products.map((row, _idx) => (

                    {/*{formData.products.map((row: any, idx: number) => (*/}
                      <tr key={idx} className="border-t">
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            value={row.product}
                            onChange={(e) => updateProductRow(idx, "product", e.target.value)}
                            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg"
                            placeholder="e.g., Onion"
                          />
                        </td>
            
                        <td className="px-4 py-3 w-40">
                          <input
                            type="number"
                            value={row.quantity}
                            onChange={(e) => updateProductRow(idx, "quantity", e.target.value)}
                            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg"
                            placeholder="e.g., 2"
                          />
                        </td>
            
                        <td className="px-4 py-3 w-36">
                          <div className="flex gap-3 items-center">
                            <label className="flex items-center gap-1">
                              <input
                                type="radio"
                                name={`unit-${idx}`}
                                value="ton"
                                checked={row.unit === "ton"}
                                onChange={(e) => updateProductRow(idx, "unit", e.target.value)}
                              />
                              Ton
                            </label>
                            <label className="flex items-center gap-1">
                              <input
                                type="radio"
                                name={`unit-${idx}`}
                                value="kg"
                                checked={row.unit === "kg"}
                                onChange={(e) => updateProductRow(idx, "unit", e.target.value)}
                              />
                              Kg
                            </label>
                          </div>
                        </td>
            
                        <td className="px-4 py-3 text-center">
                          <button
                            type="button"
                            onClick={() => removeProductRow(idx)}
                            className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 flex items-center gap-1 justify-center"
                          >
                            <Trash2 className="w-4 h-4" /> Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            
              {/* MOBILE LAYOUT (shown only on mobile) */}
              <div className="sm:hidden space-y-4">
                {formData.products.map((row: any, idx: number) => (
                  <div key={idx} className="p-4 border rounded-xl shadow-sm bg-white space-y-3">
            
                    {/* Product */}
                    <div>
                      <label className="text-sm font-semibold">Product</label>
                      <input
                        type="text"
                        value={row.product}
                        onChange={(e) => updateProductRow(idx, "product", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border-2 border-gray-300 rounded-lg"
                        placeholder="e.g., Onion"
                      />
                    </div>
            
                    {/* Quantity */}
                    <div>
                      <label className="text-sm font-semibold">Quantity</label>
                      <input
                        type="number"
                        value={row.quantity}
                        onChange={(e) => updateProductRow(idx, "quantity", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border-2 border-gray-300 rounded-lg"
                        placeholder="e.g., 2"
                      />
                    </div>
            
                    {/* Unit */}
                    <div>
                      <label className="text-sm font-semibold">Unit</label>
                      <div className="flex gap-6 mt-1">
                        <label className="flex items-center gap-1">
                          <input
                            type="radio"
                            name={`unit-mobile-${idx}`}
                            value="ton"
                            checked={row.unit === "ton"}
                            onChange={(e) => updateProductRow(idx, "unit", e.target.value)}
                          />
                          Ton
                        </label>
                        <label className="flex items-center gap-1">
                          <input
                            type="radio"
                            name={`unit-mobile-${idx}`}
                            value="kg"
                            checked={row.unit === "kg"}
                            onChange={(e) => updateProductRow(idx, "unit", e.target.value)}
                          />
                          Kg
                        </label>
                      </div>
                    </div>
            
                    {/* Remove button */}
                    <button
                      type="button"
                      onClick={() => removeProductRow(idx)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                    >
                      <Trash2 className="w-4 h-4" /> Remove Product
                    </button>
                  </div>
                ))}
              </div>
            
              {/* Add Product Button */}
              <div className="mt-4">
                <button
                  type="button"
                  onClick={addProductRow}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100"
                >
                  <PlusCircle className="w-4 h-4" />
                  Add Product
                </button>
              </div>
            </div>


            {/* Message */}
            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg resize-none"
                rows={4}
                placeholder="Tell us about your requirements..."
              />
              {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Sending..." : <>Send Message <Send size={20} /></>}
            </button>

            {submitMessage && <p className="text-green-600 text-center font-medium mt-2">{submitMessage}</p>}
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-lg">{info.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">{info.label}</p>

                    {Array.isArray(info.values) ? (
                      info.values.map((val: any, i: number) => (
                        <a key={i} href={val.link} className="block text-gray-900 hover:text-green-600">
                          {val.text}
                        </a>
                      ))
                    ) : info.link ? (
                      <a href={info.link} className="text-gray-900 hover:text-green-600">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15656.495082513109!2d77.0725775!3d11.1784707!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fbbdafa2f80b%3A0xb600e88053228edf!2s53JG%2BMV%2C%20Telungupalayam%2C%20Tamil%20Nadu%20641653!5e0!3m2!1sen!2sin!4v1762776056938!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Treert Exports Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+918438906166"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition transform hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Contact;
