// import house images
import House1 from "../assets/img/houses/house1.png";
import House2 from "../assets/img/houses/house2.png";
import House3 from "../assets/img/houses/house3.png";
import House4 from "../assets/img/houses/house4.png";
import House5 from "../assets/img/houses/house5.png";
import House6 from "../assets/img/houses/house6.png";
import House7 from "../assets/img/houses/house7.png";
import House8 from "../assets/img/houses/house8.png";
import House9 from "../assets/img/houses/house9.png";
import House10 from "../assets/img/houses/house10.png";
import House11 from "../assets/img/houses/house11.png";
import House12 from "../assets/img/houses/house12.png";
// import house large images
import House1Lg from "../assets/img/houses/house1lg.png";
import House2Lg from "../assets/img/houses/house2lg.png";
import House3Lg from "../assets/img/houses/house3lg.png";
import House4Lg from "../assets/img/houses/house4lg.png";
import House5Lg from "../assets/img/houses/house5lg.png";
import House6Lg from "../assets/img/houses/house6lg.png";
import House7Lg from "../assets/img/houses/house7lg.png";
import House8Lg from "../assets/img/houses/house8lg.png";
import House9Lg from "../assets/img/houses/house9lg.png";
import House10Lg from "../assets/img/houses/house10lg.png";
import House11Lg from "../assets/img/houses/house11lg.png";
import House12Lg from "../assets/img/houses/house12lg.png";

// import apartments images
import Apartment1 from "../assets/img/apartments/a1.png";
import Apartment2 from "../assets/img/apartments/a2.png";
import Apartment3 from "../assets/img/apartments/a3.png";
import Apartment4 from "../assets/img/apartments/a4.png";
import Apartment5 from "../assets/img/apartments/a5.png";
import Apartment6 from "../assets/img/apartments/a6.png";
// import apartments large images
import Apartment1Lg from "../assets/img/apartments/a1lg.png";
import Apartment2Lg from "../assets/img/apartments/a2lg.png";
import Apartment3Lg from "../assets/img/apartments/a3lg.png";
import Apartment4Lg from "../assets/img/apartments/a4lg.png";
import Apartment5Lg from "../assets/img/apartments/a5lg.png";
import Apartment6Lg from "../assets/img/apartments/a6lg.png";

// import agents images
import Agent1 from "../assets/img/agents/agent1.png";
import Agent2 from "../assets/img/agents/agent2.png";
import Agent3 from "../assets/img/agents/agent3.png";
import Agent4 from "../assets/img/agents/agent4.png";
import Agent5 from "../assets/img/agents/agent5.png";
import Agent6 from "../assets/img/agents/agent6.png";
import Agent7 from "../assets/img/agents/agent7.png";
import Agent8 from "../assets/img/agents/agent8.png";
import Agent9 from "../assets/img/agents/agent9.png";
import Agent10 from "../assets/img/agents/agent10.png";
import Agent11 from "../assets/img/agents/agent11.png";
import Agent12 from "../assets/img/agents/agent12.png";

export const housesData = [
  {
    id: 1,
    type: "ویلایی",
    name: "آپارتمان ویلایی 400 متر تک واحدی ",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",

    image: House1,
    imageLg: House1Lg,
    country: "کرج",
    address: "خیابان وهابی پلاک 3 ",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200",
    year: "2016",
    price: "110000",
    agent: {
      image: Agent1,
      name: "علی محمدی",
      phone: "0123 456 78910",
    },
  },
  {
    id: 2,
    type: "ویلایی",
    name: " 340 متر چهار خواب اقدسیه ",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: House2,
    imageLg: House2Lg,
    country: "تهران",
    address: "خیابان زیتون کارمندی کوچه مهران یک پلاک3",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200",
    year: "2016",
    price: "140000",
    agent: {
      image: Agent2,
      name: "علی محمدی",
      phone: "0123 456 78910",
    },
  },
  {
    id: 3,
    type: "ویلایی",
    name: "واحد مبله نقلی تک خواب با دسترسی عالی",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: House3,
    imageLg: House3Lg,
    country: "تبریز",
    address: "خیابان وهابی پلاک 3 ",

    bedrooms: "6",
    bathrooms: "3",
    surface: "4200",
    year: "2016",
    price: "170000",
    agent: {
      image: Agent3,
      name: "علی محمدی",
      phone: "0123 456 78910",
    },
  },
  {
    id: 4,
    type: "ویلایی",
    name: "آپارتمان دو خواب شیک با وان و بیلیارد",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: House4,
    imageLg: House4Lg,
    country: "اهواز",
    address: "خیابان زیتون کارمندی کوچه مهران یک پلاک3",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200",
    year: "2016",
    price: "200000",
    agent: {
      image: Agent4,
      name: "ساناز ابراهیمی",
      phone: "0123 456 78910",
    },
  },
  {
    id: 5,
    type: "ویلایی",
    name: "واحد یک خوابه تراس‌دار همراه با آسانسور",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: House5,
    imageLg: House5Lg,
    country: "اصفهان",
    address: "خیابان زیتون کارمندی کوچه مهران یک پلاک3",
    bedrooms: "5",
    bathrooms: "3",
    surface: "4200",
    year: "2015",
    price: "210000",
    agent: {
      image: Agent5,
      name: "علی حکیمی",
      phone: "0123 456 78910",
    },
  },
  {
    id: 6,
    type: "ویلایی",
    name: "واحد مبله شیک دوخواب در پاسداران",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: House6,
    imageLg: House6Lg,
    country: "کرج",
    address: "خیابان زیتون کارمندی کوچه مهران یک پلاک3",
    bedrooms: "6",
    bathrooms: "3",
    surface: "6200",
    year: "2014",
    price: "220000",
    agent: {
      image: Agent6,
      name: "ایمان ساعد نژاد",
      phone: "0123 456 78910",
    },
  },
  {
    id: 7,
    type: "آپارتمان",
    name: "آپارتمان دو خواب شیک با وان و بیلیارد",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: "تبریز",
    address: "خیابان زیتون کارمندی کوچه مهران یک پلاک3",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1200",
    year: "2012",
    price: "20000",
    agent: {
      image: Agent7,
      name: "کرمی",
      phone: "0123 456 78910",
    },
  },
  {
    id: 8,
    type: "آپارتمان",
    name: "آپارتمان دو خواب شیک با وان و بیلیارد",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: "تهران",
    address: "خیابان زیتون کارمندی کوچه مهران یک پلاک3",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000",
    year: "2011",
    price: "30000",
    agent: {
      image: Agent8,
      name: "اسمی زاده",
      phone: "0123 456 78910",
    },
  },
  {
    id: 9,
    type: "آپارتمان",
    name: "آپارتمان دو خواب شیک با وان و بیلیارد",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: "مشهد",
    address: "خیابان زیتون کارمندی کوچه مهران یک پلاک3",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1100",
    year: "2011",
    price: "40000",
    agent: {
      image: Agent9,
      name: "یوسف زاده",
      phone: "0123 456 78910",
    },
  },
  {
    id: 10,
    type: "ویلایی",
    name: "آپارتمان دو خواب شیک با وان و بیلیارد",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: House7,
    imageLg: House7Lg,
    country: "اهواز",
    address: "خیابان زیتون کارمندی کوچه مهران یک پلاک3",
    bedrooms: "5",
    bathrooms: "3",
    surface: "3200",
    year: "2015",
    price: "117000",
    agent: {
      image: Agent10,
      name: "محمدی نسب",
      phone: "0123 456 78910",
    },
  },
  {
    id: 11,
    type: "ویلایی",
    name: "آپارتمان دو خواب شیک با وان و بیلیارد",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: House8,
    imageLg: House8Lg,
    country: "شیراز",
    address: "خیابان زیتون کارمندی کوچه مهران یک پلاک3",
    bedrooms: "7",
    bathrooms: "2",
    surface: "2200",
    year: "2019",
    price: "145000",
    agent: {
      image: Agent11,
      name: "مریم بروجردی",
      phone: "0123 456 78910",
    },
  },
  {
    id: 12,
    type: "ویلایی",
    name: "آپارتمان دوخوابه-پاسداران 120 متری",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: House9,
    imageLg: House9Lg,
    country: "تهران",
    address: "خیابان زیتون کارمندی کوچه مهران یک پلاک3",
    bedrooms: "4",
    bathrooms: "4",
    surface: "4600",
    year: "2015",
    price: "139000",
    agent: {
      image: Agent12,
      name: "یوسفی",
      phone: "0123 456 78910",
    },
  },
  {
    id: 13,
    type: "ویلایی",
    name: "سوئیت مبله در غرب تهران",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: House10,
    imageLg: House10Lg,
    country: "کرج",
    address: "خیابان زیتون کارمندی کوچه مهران یک پلاک3",
    bedrooms: "5",
    bathrooms: "2",
    surface: "5200",
    year: "2014",
    price: "180000",
    agent: {
      image: Agent1,
      name: "کاظمی",
      phone: "0123 456 78910",
    },
  },
  {
    id: 14,
    type: "ویلایی",
    name: "واحد مبله دوخوابه فول امکانات در مرزداران",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: House11,
    imageLg: House11Lg,
    country: "تهران",
    address: "خیابان زیتون کارمندی کوچه مهران یک پلاک3",
    bedrooms: "5",
    bathrooms: "2",
    surface: "3200",
    year: "2011",
    price: "213000",
    agent: {
      image: Agent2,
      name: "شریفی",
      phone: "0123 456 78910",
    },
  },
  {
    id: 15,
    type: "ویلایی",
    name: "سوئیت مبله در غرب تهران",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: House12,
    imageLg: House12Lg,
    country: "تهران",
    address: "خیابان زیتون کارمندی کوچه مهران یک پلاک3",
    bedrooms: "4",
    bathrooms: "3",
    surface: "5200",
    year: "2013",
    price: "221000",
    agent: {
      image: Agent3,
      name: "ثمین جانیانی",
      phone: "0123 456 78910",
    },
  },
  {
    id: 16,
    type: "آپارتمان",
    name: "سوئیت مبله در غرب تهران",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: "اهواز",
    address: "خیابان زیتون کارمندی کوچه مهران یک پلاک3",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1300",
    year: "2011",
    price: "21000",
    agent: {
      image: Agent4,
      name: "ساناز ابراهیمی",
      phone: "0123 456 78910",
    },
  },
  {
    id: 17,
    type: "آپارتمان",
    name: "سوئیت مبله در غرب تهران",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: "شیراز",
    address: "خیابان زیتون کارمندی کوچه مهران یک پلاک3",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000",
    year: "2012",
    price: "32000",
    agent: {
      image: Agent5,
      name: "علی حکیمی",
      phone: "0123 456 78910",
    },
  },
  {
    id: 18,
    type: "آپارتمان",
    name: "سوئیت مبله در غرب تهران",
    description:
      "با توجه به اینکه زیبایی و ظاهر پوست و مراقبت از آن از اهمیت بسزایی برخوردار می‌باشد، فروشگاه زیبایی ما با داشتن به روزترین تجهیزات و کادر پزشکی و پرستاری مجرب و تحصیل کرده، آماده ارائه خدمات مراقبت از پوست شما می‌باشد. ما در فروشگاه زیبایی خود، برای رفاه حال بهتر مشتریان خود به دنبال ارائه خدمات مراقبتی صورت، مو و بدن هستیم تا به شما با ظاهری جذاب و شاداب کمک بیشتری دهیم.",
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: "اصفهان",
    address: "خیابان زیتون کارمندی کوچه مهران یک پلاک3",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1200",
    year: "2010",
    price: "38000",
    agent: {
      image: Agent6,
      name: "ایمان ساعد نژاد",
      phone: "0123 456 78910",
    },
  },
];
