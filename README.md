# بناء APK (بدون Expo، يعمل بدون إنترنت)

المتطلبات على جهازك: Node.js، وJDK 17 أو أحدث، وAndroid Studio (أو Android SDK).

```bash
npm install
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

ملف الـ APK يطلع في:
`android/app/build/outputs/apk/debug/app-debug.apk`

انسخه للجوال وثبّته (فعّل "التثبيت من مصادر غير معروفة").
أو افتح مجلد `android` في Android Studio واضغط Run.

ملاحظات:
- التطبيق يحفظ البيانات على الجهاز ويشتغل بدون إنترنت.
- زر الطباعة / PDF ما يشتغل داخل تطبيق الأندرويد (WebView)؛ التقارير تنعرض على الشاشة.
- لتغيير التطبيق عدّل `www/index.html` ثم `npx cap sync android` وابنِ من جديد.
