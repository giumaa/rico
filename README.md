<div align="center">

<img src="https://raw.githubusercontent.com/giumaa/rico/main/assets/icon.png" width="96" alt="Rico">

# ريكو · Rico

**مساعد ذكي يحكي ليبي ويخدم على جهازك بدون إنترنت.**

An offline assistant that speaks Libyan Arabic and runs entirely on your own device.

</div>

## ريكو شنو؟

ريكو مساعد ذكي يفهمك بلهجتك. يجاوبك، يعاونك في الكتابة والترجمة والأسئلة اليومية، ويقدر يقرا الصور اللي ترفقها. كل شي يخدم **على جهازك** من غير إنترنت، ومن غير حساب.

- يحكي بالليبي افتراضياً، وبالإنجليزي والفصحى لما تطلب.
- يفهم الصور (صورة، لقطة شاشة، ورقة مكتوبة).
- بدون تسجيل دخول، وبدون إعلانات، وبدون تتبع.
- ثيم فاتح وغامق، وخطوط عربية مريحة للعين.

## التنزيل

| النظام | الملف |
|---|---|
| ويندوز 10/11 (x64) | [Rico-Setup-0.4.0-x64.exe](https://github.com/giumaa/rico/releases/download/v0.4.0/Rico-Setup-0.4.0-x64.exe) |
| ماك (Apple Silicon: M1 وما فوق) | [Rico-0.4.0-mac-arm64.dmg](https://github.com/giumaa/rico/releases/download/v0.4.0/Rico-0.4.0-mac-arm64.dmg) |
| ماك (Intel) | [Rico-0.4.0-mac-x64.dmg](https://github.com/giumaa/rico/releases/download/v0.4.0/Rico-0.4.0-mac-x64.dmg) |
| لينكس | [AppImage](https://github.com/giumaa/rico/releases/download/v0.4.0/Rico-0.4.0-linux-x86_64.AppImage) · [deb](https://github.com/giumaa/rico/releases/download/v0.4.0/rico_0.4.0_amd64.deb) |
| أندرويد 8.0+ (arm64) | [Rico-Android-0.2.0-arm64-v8a.apk](https://github.com/giumaa/rico/releases/download/android-v0.2.0/Rico-Android-0.2.0-arm64-v8a.apk) |

كل إصدار يجي معاه ملف `SHA256SUMS.txt` باش تتأكد إن الملف سليم. كل الإصدارات: [Releases](https://github.com/giumaa/rico/releases).

## النماذج

عند أول تشغيل تختار النموذج المناسب لجهازك، ويتحمّل مرة وحدة (الاتصال الوحيد بالإنترنت).

| النموذج | الحجم تقريباً | الرام المناسبة | مناسب لـ |
|---|---|---|---|
| ريكو ميني · Rico Mini | 2 GB | 4 GB | التلفونات والأجهزة القديمة، أسئلة سريعة وكتابة قصيرة |
| ريكو لايت · Rico Lite | 3.5 GB | 8 GB | أغلب الأجهزة، الأسئلة اليومية والكتابة والترجمة |
| ريكو · Rico | 7.6 GB | 16 GB | أفضل توازن بين الجودة والسرعة |
| ريكو ماكس · Rico Max | 18 GB | 32 GB أو أكثر | أعلى جودة |

على الأندرويد متوفر ريكو ميني وريكو لايت.

## الخصوصية

- ما يتبعتش أي شي لأي جهة: لا إحصائيات، لا تقارير أعطال، لا فحص تحديثات.
- محادثاتك وصورك وإعداداتك تبقى على جهازك بس.
- الاتصال الوحيد بالإنترنت هو تحميل ملف النموذج لما تضغط «تحميل» بنفسك.

## التثبيت

- **ويندوز:** إذا ظهرت شاشة SmartScreen اضغط **More info** ثم **Run anyway**.
- **ماك:** اسحب Rico إلى Applications، وإذا قال إن التطبيق «تالف» أو ما يفتحش شغّل مرة وحدة في Terminal:
  ```
  xattr -dr com.apple.quarantine /Applications/Rico.app
  ```
- **لينكس:** `chmod +x Rico-*.AppImage` ثم شغّله، أو ثبّت ملف `.deb`.
- **أندرويد:** نزّل ملف APK وافتحه، وفعّل «التثبيت من مصادر غير معروفة» (Install unknown apps) للمتصفح أو لمدير الملفات اللي فتحته منه.

---

## English

**Rico** is an offline AI assistant that speaks Libyan Arabic (and English / Modern Standard Arabic on request) and understands images. It runs entirely on your device: no account, no telemetry, and the only network use is the model download you start yourself.

Downloads are listed in the table above (Windows, macOS, Linux, Android). Pick a model by your RAM: Mini 4 GB, Lite 8 GB, Rico 16 GB, Max 32 GB or more.
Windows SmartScreen: *More info* then *Run anyway*. macOS: `xattr -dr com.apple.quarantine /Applications/Rico.app`. Android: allow *Install unknown apps*.

## License

Rico app © Juma Abouras. Third-party licenses are included in the app and in [LICENSES.txt](https://github.com/giumaa/rico/releases/download/models-v1/LICENSES.txt).
