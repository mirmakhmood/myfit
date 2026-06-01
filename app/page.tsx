function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="32" height="32" rx="8" className="fill-emerald-500" />
      <path
        d="M9 16.5c0-2.5 2-4.5 4.5-4.5 1.8 0 3.3 1 4 2.5.7-1.5 2.2-2.5 4-2.5 2.5 0 4.5 2 4.5 4.5 0 4-4.5 7.5-8.5 10-4-2.5-8.5-6-8.5-10z"
        className="fill-white"
      />
    </svg>
  );
}

const nav = [
  { href: "#imkoniyatlar", label: "Imkoniyatlar" },
  { href: "#hamkorlar", label: "Hamkorlar" },
  { href: "#tariflar", label: "Tariflar" },
  { href: "#faq", label: "Savollar" },
];

const features = [
  {
    title: "Bitta obuna",
    body: "Har bir joy uchun alohida to‘lov emas — barcha hamkorlar bitta reja ostida.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
  {
    title: "Ilova orqali bron",
    body: "Joyni tanlang, vaqtni belgilang va QR bilan zalga kiring — qog‘ozsiz.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
      />
    ),
  },
  {
    title: "Minglab mashg‘ulotlar",
    body: "Yoga, kardio, suzish, raqs va boshqa yo‘nalishlarni bir joyda sinab ko‘ring.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.68"
      />
    ),
  },
  {
    title: "Moslashuvchan rejalar",
    body: "Oyiga bir necha tashrif yoki cheksiz variant — o‘zingizga mosini tanlang.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
];

const steps = [
  { n: "01", title: "Ilovani yuklang", body: "iOS yoki Android — bir daqiqada ro‘yxatdan o‘ting." },
  { n: "02", title: "Joy va vaqtni tanlang", body: "Xaritada yaqin studiyalarni filtrlab bron qiling." },
  { n: "03", title: "Mashq qiling", body: "QR kod bilan kirish va faol hayot — shunchaki." },
];

const categories = [
  "Fitnes zallari",
  "Yoga va pilates",
  "Basseyn",
  "Krossfit",
  "Raqs",
  "Boks / MMA",
];

const faq = [
  {
    q: "Obunani istalgan vaqtda bekor qilish mumkinmi?",
    a: "Ha, akkaunt sozlamalaridan obunani boshqarishingiz va keyingi to‘lovni to‘xtatishingiz mumkin.",
  },
  {
    q: "Bronni bekor qilsam, limit qaytariladimi?",
    a: "Hamkor qoidalariga qarab farq qiladi; ilovada har bir joy uchun bekor qilish muddatini ko‘rasiz.",
  },
  {
    q: "Oilaviy rejalar bormi?",
    a: "Tez orada oila uchun maxsus paketlar — yangiliklarni ilovada kuzatib boring.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <LogoMark className="size-9 shrink-0" />
            <span className="text-lg">OneFit</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-600 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-emerald-600"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#ilova"
              className="hidden rounded-full border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:border-stone-300 hover:bg-white sm:inline-flex"
            >
              Ilovani yuklash
            </a>
            <a
              href="#tariflar"
              className="inline-flex rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-500/25 transition hover:bg-emerald-600"
            >
              Boshlash
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-stone-200/60 bg-linear-to-b from-white via-stone-50 to-stone-50">
          <div
            className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-lime-300/25 blur-3xl"
            aria-hidden
          />

          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
            <div className="relative z-10">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Yangi hamkorlar har hafta
              </p>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-stone-900 sm:text-5xl lg:text-[3.25rem]">
                Bitta obuna —{" "}
                <span className="bg-linear-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">
                  cheksiz imkoniyat
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-600">
                Shahringizdagi fitnes zallari, studiyalar va basseynlarga bitta ilova orqali
                qulay kirish. Mashg‘ulotni tanlang, bron qiling va har kuni yangi tajriba oching.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#tariflar"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-stone-900 px-8 text-sm font-semibold text-white transition hover:bg-stone-800"
                >
                  Tariflarni ko‘rish
                </a>
                <a
                  href="#imkoniyatlar"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-stone-300 bg-white px-6 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
                >
                  Qanday ishlaydi
                </a>
              </div>
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-stone-200/80 pt-10 sm:max-w-md">
                <div>
                  <dt className="text-2xl font-bold tabular-nums text-stone-900">500+</dt>
                  <dd className="text-sm text-stone-500">Hamkor joylar</dd>
                </div>
                <div>
                  <dt className="text-2xl font-bold tabular-nums text-stone-900">40k+</dt>
                  <dd className="text-sm text-stone-500">Faol foydalanuvchi</dd>
                </div>
                <div>
                  <dt className="text-2xl font-bold tabular-nums text-stone-900">4.8</dt>
                  <dd className="text-sm text-stone-500">Ilova reytingi</dd>
                </div>
              </dl>
            </div>

            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="animate-float-soft relative w-full max-w-[320px]">
                <div className="absolute inset-0 -z-10 scale-105 rounded-[2.5rem] bg-linear-to-br from-emerald-400/30 to-lime-300/40 blur-2xl" />
                <div className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-stone-900 shadow-2xl shadow-stone-900/20">
                  <div className="flex items-center justify-between border-b border-stone-700 px-5 py-4">
                    <span className="text-xs font-medium text-stone-400">Bugun</span>
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <span key={i} className="size-1 rounded-full bg-stone-600" />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3 p-5">
                    {["Yoga Flow · 18:30", "Pool lane · 07:00", "HIIT Studio · 12:15"].map(
                      (row) => (
                        <div
                          key={row}
                          className="flex items-center justify-between rounded-2xl bg-stone-800/90 px-4 py-3.5"
                        >
                          <span className="text-sm font-medium text-stone-100">{row}</span>
                          <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                            Bron
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="border-t border-stone-700 bg-stone-800/50 px-5 py-4">
                    <p className="text-center text-xs text-stone-500">Keyingi tashrif — 14 daqiqa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="imkoniyatlar" className="border-b border-stone-200/60 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                Nima uchun OneFit?
              </h2>
              <p className="mt-4 text-lg text-stone-600">
                Mashg‘ulotlarni rejalashtirish va yangi joylarni kashf etish uchun soddalashtirilgan
                tajriba.
              </p>
            </div>
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <li
                  key={f.title}
                  className="group rounded-2xl border border-stone-200 bg-stone-50/50 p-6 transition hover:border-emerald-200 hover:bg-white hover:shadow-lg hover:shadow-emerald-500/5"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-emerald-500/10 p-3 text-emerald-600">
                    <svg
                      className="size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden
                    >
                      {f.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-stone-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="hamkorlar" className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-stone-500">
              Ishonchli zanjirlar va studiyalar
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70 grayscale sm:gap-x-14">
              {["Pulse Gym", "AquaLine", "Zen Yoga", "UrbanFit", "Studio 12", "CrossTown"].map(
                (name) => (
                  <span
                    key={name}
                    className="text-lg font-bold tracking-tight text-stone-400 sm:text-xl"
                  >
                    {name}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200/60 bg-stone-900 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Uch qadam — tayyor
            </h2>
            <ol className="mt-16 grid gap-10 md:grid-cols-3">
              {steps.map((s) => (
                <li key={s.n} className="relative text-center md:text-left">
                  <span className="font-mono text-sm font-bold text-emerald-400">{s.n}</span>
                  <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Yo‘nalishlar
            </h2>
            <p className="mt-3 max-w-xl text-stone-600">
              Qiziqishingiz o‘zgarganda ham obunangiz bilan sinab ko‘rishingiz mumkin.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="tariflar" className="border-t border-stone-200/60 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                O‘zingizga mos tarif
              </h2>
              <p className="mt-4 text-lg text-stone-600">
                Boshlang va birinchi haftada eng yaqin joylarni bepul sinab ko‘ring.
              </p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {[
                {
                  name: "Start",
                  price: "199 000",
                  desc: "Oyiga 4 tashrif — yangi boshlovchilar uchun.",
                  highlight: false,
                },
                {
                  name: "Plus",
                  price: "349 000",
                  desc: "Oyiga 12 tashrif — mashg‘ulot rejangiz barqaror bo‘lsa.",
                  highlight: true,
                },
                {
                  name: "Max",
                  price: "499 000",
                  desc: "Kunlik kirish imkoniyati — maksimal erkinlik.",
                  highlight: false,
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-3xl border p-8 ${
                    plan.highlight
                      ? "border-emerald-500 bg-linear-to-b from-emerald-50 to-white shadow-xl shadow-emerald-500/10 ring-2 ring-emerald-500/20"
                      : "border-stone-200 bg-stone-50/30"
                  }`}
                >
                  {plan.highlight ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">
                      Mashhur
                    </span>
                  ) : null}
                  <h3 className="text-lg font-semibold text-stone-900">{plan.name}</h3>
                  <p className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight text-stone-900">
                      {plan.price}
                    </span>
                    <span className="text-stone-500">so‘m / oy</span>
                  </p>
                  <p className="mt-4 flex-1 text-sm text-stone-600">{plan.desc}</p>
                  <a
                    href="#ilova"
                    className={`mt-8 inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition ${
                      plan.highlight
                        ? "bg-emerald-500 text-white hover:bg-emerald-600"
                        : "border border-stone-300 bg-white text-stone-900 hover:bg-stone-50"
                    }`}
                  >
                    Tanlash
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-stone-500">
              Ko‘rsatilgan narxlar namunaviy; haqiqiy tariflar ilovada yangilanadi.
            </p>
          </div>
        </section>

        <section id="faq" className="border-t border-stone-200/60 bg-stone-50 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900">
              Tez-tez beriladigan savollar
            </h2>
            <ul className="mt-12 space-y-4">
              {faq.map((item) => (
                <li
                  key={item.q}
                  className="rounded-2xl border border-stone-200 bg-white px-6 py-5 shadow-sm"
                >
                  <p className="font-semibold text-stone-900">{item.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.a}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="ilova"
          className="border-t border-stone-200/60 bg-linear-to-br from-emerald-600 to-emerald-800 py-20 text-white sm:py-24"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ilovani yuklang</h2>
              <p className="mt-4 text-lg text-emerald-100">
                Bron, eslatmalar va shaxsiy tavsiyalar — hammasi cho‘ntakda.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-end">
              <a
                href="#"
                className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
              >
                App Store
              </a>
              <a
                href="#"
                className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-xl border-2 border-white/40 bg-white/10 px-6 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
              >
                Google Play
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2">
            <LogoMark className="size-8" />
            <span className="font-semibold">OneFit</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-stone-600">
            <a href="#" className="hover:text-stone-900">
              Maxfiylik
            </a>
            <a href="#" className="hover:text-stone-900">
              Oferta
            </a>
            <a href="#" className="hover:text-stone-900">
              Bog‘lanish
            </a>
          </nav>
          <p className="text-center text-xs text-stone-500 sm:text-right">
            © {new Date().getFullYear()} OneFit. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </footer>
    </div>
  );
}
