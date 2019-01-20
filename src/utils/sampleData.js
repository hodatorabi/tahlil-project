import {PROJECT_SAMPLE_PIC4, PROJECT_SAMPLE_PIC5} from 'src/assets/styles/icons'
import {messages} from 'src/utils/messages'

export const project1 = {
  projectPicture: PROJECT_SAMPLE_PIC4,
  projectName: 'غذارسانی حیوانات',
  charityName: 'پناهگاه وفا',
  projectStartDate: '۱۲ مهر ۱۳۹۷',
  projectEndDate: '۱۲ آذر ',
  projectType: messages.NON_CASH,
  projectDescription: 'این پروژه برای غذارسانی به حیوانات ولگرد مشادهده شده در اطراف باغ‌های هشتگرد است که بسیار ضعیف و رنجور شده‌اند. سرمای هوا باعث شده که این حیوانات حتی از قبل نیز ضعیف‌تر شوند.',
  info: {
    age: '۲۰ تا ۳۰ سال',
    location: 'هشتگرد',
    gender: 'زن - مرد',
    abilities: ['دامپزشکی', 'روحیه گروهی'],
  },
}

export const project2 = {
  projectPicture: PROJECT_SAMPLE_PIC5,
  projectName: 'تامین کمک هزینه دانش‌آموزان',
  charityName: 'خیریه حکمت',
  projectStartDate: '۱ مهر ۱۳۹۷',
  projectEndDate: '۱۰ مهر ۱۳۹۷',
  projectType: messages.CASH,
  projectDescription: 'این پروژه به اهداف تامین کمک هزینه تحصیل کودکان روستای فلان ایجاد شده است. سالانه بین ۱۵ تا ۲۰ هزار دانش‌آموز در پایه‌های ابتدایی ترک تحصیل می‌کنند. فقر، ازدواج زودهنگام، نبود امکانات آموزشی و دلایل گسترده دیگر از مسائلی است که کودکان در حاشیه شهرها را از ادامه تحصیل باز می دارد. پیشتر دولت مخارج اين دانش آموزان را تامین و آن ها را مورد حمايت قرار می داد  ولي الان پنج سال است كه دولت حمايت نمی‌كند و اين دانش آموزان دختر بايد سالی حدود ١/٥ميليون براي خرج خود بپردازند.',
  info: {
    neededAmount: '2000000',
    fundedAmount: '500000',
  },
}