const chargers = [
  {
    "name": "Tesla Supercharger Delhi",
    "location": [28.6139, 77.2090],
    "poweroutput": 250,
    "stateName": "Delhi",
    "locationName": "India Gate, Rajpath Marg, New Delhi",
    "status": "Active",
    "type": "dc_ccs"
  },
  {
    "name": "EV Point Bangalore",
    "location": [12.9716, 77.5946],
    "poweroutput": 150,
    "stateName": "Karnataka",
    "locationName": "MG Road, Bangalore",
    "status": "Active",
    "type": "ac_level_2"
  },
  {
    "name": "ChargeGrid Mumbai",
    "location": [18.975, 72.8258],
    "poweroutput": 50,
    "stateName": "Maharashtra",
    "locationName": "Mumbai Central, Mumbai",
    "status": "Inactive",
    "type": "ac_level_1"
  },
  {
    "name": "Tata Power Station Pune",
    "location": [18.5204, 73.8567],
    "poweroutput": 120,
    "stateName": "Maharashtra",
    "locationName": "JM Road, Pune",
    "status": "Active",
    "type": "dc_GB/T"
  },
  {
    "name": "Volttic Hitech City",
    "location": [17.385, 78.4867],
    "poweroutput": 60,
    "stateName": "Telangana",
    "locationName": "Hitech City, Hyderabad",
    "status": "Active",
    "type": "ac_level_2"
  },
  {
    "name": "ChargeZone Ahmedabad",
    "location": [23.0225, 72.5714],
    "poweroutput": 100,
    "stateName": "Gujarat",
    "locationName": "SG Highway, Ahmedabad",
    "status": "Inactive",
    "type": "dc_ccs"
  },
  {
    "name": "PlugNgo Chennai",
    "location": [13.0827, 80.2707],
    "poweroutput": 80,
    "stateName": "Tamil Nadu",
    "locationName": "Mount Road, Chennai",
    "status": "Active",
    "type": "ac_level_2"
  },
  {
    "name": "Jio-BP Hub Surat",
    "location": [21.1702, 72.8311],
    "poweroutput": 200,
    "stateName": "Gujarat",
    "locationName": "Varachha Road, Surat",
    "status": "Active",
    "type": "dc_ccs"
  },
  {
    "name": "REConnect EV Jaipur",
    "location": [26.9124, 75.7873],
    "poweroutput": 90,
    "stateName": "Rajasthan",
    "locationName": "MI Road, Jaipur",
    "status": "Inactive",
    "type": "dc_GB/T"
  },
  {
    "name": "Magenta Lucknow",
    "location": [26.8467, 80.9462],
    "poweroutput": 110,
    "stateName": "Uttar Pradesh",
    "locationName": "Hazratganj, Lucknow",
    "status": "Active",
    "type": "dc_ccs"
  },
  {
    "name": "Relux Trichy",
    "location": [10.7905, 78.7047],
    "poweroutput": 75,
    "stateName": "Tamil Nadu",
    "locationName": "Rockfort Road, Tiruchirappalli",
    "status": "Inactive",
    "type": "ac_level_2"
  },
  {
    "name": "Volttic Coimbatore",
    "location": [11.0168, 76.9558],
    "poweroutput": 90,
    "stateName": "Tamil Nadu",
    "locationName": "Race Course, Coimbatore",
    "status": "Active",
    "type": "ac_level_1"
  },
  {
    "name": "ChargeZone Noida",
    "location": [28.5355, 77.3910],
    "poweroutput": 180,
    "stateName": "Uttar Pradesh",
    "locationName": "Sector 62, Noida",
    "status": "Active",
    "type": "dc_ccs"
  },
  {
    "name": "EVgo Chandigarh",
    "location": [30.7333, 76.7794],
    "poweroutput": 130,
    "stateName": "Chandigarh",
    "locationName": "Sector 17, Chandigarh",
    "status": "Active",
    "type": "dc_GB/T"
  },
  {
    "name": "Tata EV Kochi",
    "location": [9.9312, 76.2673],
    "poweroutput": 160,
    "stateName": "Kerala",
    "locationName": "Marine Drive, Kochi",
    "status": "Active",
    "type": "dc_ccs"
  },
  {
    "name": "ChargeGrid Bhubaneswar",
    "location": [20.2961, 85.8245],
    "poweroutput": 120,
    "stateName": "Odisha",
    "locationName": "Janpath Road, Bhubaneswar",
    "status": "Inactive",
    "type": "ac_level_2"
  },
  {
    "name": "Relux Patna",
    "location": [25.5941, 85.1376],
    "poweroutput": 70,
    "stateName": "Bihar",
    "locationName": "Fraser Road, Patna",
    "status": "Active",
    "type": "ac_level_1"
  },
  {
    "name": "Volttic Ranchi",
    "location": [23.3441, 85.3096],
    "poweroutput": 95,
    "stateName": "Jharkhand",
    "locationName": "Main Road, Ranchi",
    "status": "Inactive",
    "type": "dc_ccs"
  },
  {
    "name": "Jio-BP EV Kanpur",
    "location": [26.4499, 80.3319],
    "poweroutput": 140,
    "stateName": "Uttar Pradesh",
    "locationName": "Mall Road, Kanpur",
    "status": "Active",
    "type": "dc_GB/T"
  },
  {
    "name": "Tata EV Bhopal",
    "location": [23.2599, 77.4126],
    "poweroutput": 110,
    "stateName": "Madhya Pradesh",
    "locationName": "New Market, Bhopal",
    "status": "Inactive",
    "type": "ac_level_2"
  },
  {
    "name": "PlugNgo Gwalior",
    "location": [26.2183, 78.1828],
    "poweroutput": 85,
    "stateName": "Madhya Pradesh",
    "locationName": "DD Nagar, Gwalior",
    "status": "Active",
    "type": "ac_level_2"
  },
  {
    "name": "Relux Indore",
    "location": [22.7196, 75.8577],
    "poweroutput": 100,
    "stateName": "Madhya Pradesh",
    "locationName": "Rajwada, Indore",
    "status": "Active",
    "type": "dc_ccs"
  },
  {
    "name": "ChargePoint Nashik",
    "location": [19.9975, 73.7898],
    "poweroutput": 70,
    "stateName": "Maharashtra",
    "locationName": "College Road, Nashik",
    "status": "Inactive",
    "type": "ac_level_1"
  },
  {
    "name": "EV Station Goa",
    "location": [15.2993, 74.1240],
    "poweroutput": 90,
    "stateName": "Goa",
    "locationName": "Panjim Market, Goa",
    "status": "Active",
    "type": "dc_ccs"
  },
  {
    "name": "Tata Power Panipat",
    "location": [29.3909, 76.9635],
    "poweroutput": 60,
    "stateName": "Haryana",
    "locationName": "G.T. Road, Panipat",
    "status": "Inactive",
    "type": "ac_level_2"
  },
  {
    "name": "Magenta EV Ludhiana",
    "location": [30.9000, 75.8573],
    "poweroutput": 100,
    "stateName": "Punjab",
    "locationName": "Ferozepur Road, Ludhiana",
    "status": "Active",
    "type": "dc_GB/T"
  },
  {
    "name": "ChargeZone Amritsar",
    "location": [31.6340, 74.8723],
    "poweroutput": 130,
    "stateName": "Punjab",
    "locationName": "Golden Temple Road, Amritsar",
    "status": "Inactive",
    "type": "dc_ccs"
  },
  {
    "name": "Volttic Meerut",
    "location": [28.9845, 77.7064],
    "poweroutput": 110,
    "stateName": "Uttar Pradesh",
    "locationName": "Abu Lane, Meerut",
    "status": "Active",
    "type": "ac_level_2"
  },
  {
    "name": "PlugNgo Varanasi",
    "location": [25.3176, 82.9739],
    "poweroutput": 150,
    "stateName": "Uttar Pradesh",
    "locationName": "Godowlia, Varanasi",
    "status": "Active",
    "type": "dc_ccs"
  }
]

const connectDB = require("../config/db");
const dotenv = require("dotenv");
dotenv.config();
connectDB(process.env.MONGO_URL);

const Charger = require("../model/chargerModel");
const createChargers = async () => {
  try {
    // Clear existing chargers
    await Charger.deleteMany({});

    // Insert new chargers
    const result = await Charger.insertMany(chargers);
    console.log(`${result.length} chargers created successfully.`);
  } catch (error) {
    console.error("Error creating chargers:", error);
  }
};
createChargers()
  .then(() => {
    console.log("Charger creation process completed.");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error in charger creation process:", error);
    process.exit(1);
  });