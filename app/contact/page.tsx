"use client";

import { Building2, Mail, MapPin, Phone, Landmark, Send } from "lucide-react";
import { useLanguage } from "../components/LanguageProvider";
import { content } from "../lib/content";

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = content[lang];
  const isAr = lang === "ar";

  const departments = isAr
    ? [
        {
          title: "الاستفسارات العامة",
          email: "info@albadiacement.com",
          phone: "+963 11 9798",
        },
        {
          title: "دائرة علاقات العملاء",
          email: "sales@albadiacement.com",
          phone: "+963 11 9798",
        },
        {
          title: "علاقات المستثمرين",
          email: "investor.relations@albadiacement.com",
          phone: "+963 11 9798",
        },
        {
          title: "إدارة الموارد البشرية",
          email: "careers@albadiacement.com",
          phone: "+963 11 9798",
        },
        {
          title: "إدارة المشتريات",
          email: "procurement@albadiacement.com",
          phone: "+963 11 9798",
        },
        {
          title: "قسم الإعلام",
          email: "communication@albadiacement.com",
          phone: "+963 11 9798",
        },
      ]
    : [
        {
          title: "General Inquiries",
          email: "info@albadiacement.com",
          phone: "+963 11 9798",
        },
        {
          title: "Customer Relations / Sales",
          email: "sales@albadiacement.com",
          phone: "+963 11 9798",
        },
        {
          title: "Investor Relations",
          email: "investor.relations@albadiacement.com",
          phone: "+963 11 9798",
        },
        {
          title: "Human Resources",
          email: "careers@albadiacement.com",
          phone: "+963 11 9798",
        },
        {
          title: "Procurement",
          email: "procurement@albadiacement.com",
          phone: "+963 11 9798",
        },
        {
          title: "Communications",
          email: "communication@albadiacement.com",
          phone: "+963 11 9798",
        },
      ];

  return (
    <main dir={t.dir} className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_25%),linear-gradient(180deg,#020617_0%,#020b2e_45%,#020617_100%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-slate-300 backdrop-blur-sm">
              {isAr ? "اتصل بنا" : "Contact"}
            </div>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              {isAr
                ? "قنوات تواصل مؤسسية تخدم العملاء والشركاء والمستثمرين"
                : "Corporate contact channels for customers, partners, and investors"}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              {isAr
                ? "نرحب باستفساراتكم العامة والتجارية والاستثمارية عبر قنوات تواصل مهنية ومنظمة، بما يضمن سرعة الاستجابة ووضوح الوصول إلى الجهة المناسبة."
                : "We welcome general, commercial, and investor-related inquiries through structured corporate communication channels designed for clarity and responsiveness."}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
              <Building2 className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-white">
              {isAr ? "المكتب الرئيسي" : "Head Office"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {isAr
                ? "يعفور، ريف دمشق، الجمهورية العربية السورية"
                : "Yafour, Damascus Countryside, Syrian Arab Republic"}
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
              <Phone className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-white">
              {isAr ? "الهاتف العام" : "General Phone"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              +963 11 9798
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-white">
              {isAr ? "البريد الإلكتروني" : "Email"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300 break-all">
              info@albadiacement.com
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
              <Landmark className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-white">
              {isAr ? "علاقات المستثمرين" : "Investor Relations"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300 break-all">
              investor.relations@albadiacement.com
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-white md:text-5xl">
                {isAr ? "نموذج التواصل" : "Contact Form"}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                {isAr
                  ? "يمكنكم إرسال استفساراتكم عبر النموذج التالي، وسيتم توجيهها إلى القسم المختص."
                  : "You may submit your inquiry through the form below, and it will be routed to the relevant department."}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  {isAr ? "الاسم الكامل" : "Full Name"}
                </label>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-white/20"
                  placeholder={isAr ? "أدخل الاسم الكامل" : "Enter full name"}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  {isAr ? "البريد الإلكتروني" : "Email Address"}
                </label>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-white/20"
                  placeholder={
                    isAr ? "أدخل البريد الإلكتروني" : "Enter email address"
                  }
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  {isAr ? "الشركة" : "Company"}
                </label>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-white/20"
                  placeholder={isAr ? "اسم الشركة" : "Company name"}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  {isAr ? "القسم" : "Department"}
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none focus:border-white/20">
                  <option>{isAr ? "اختر القسم" : "Select department"}</option>
                  <option>
                    {isAr ? "الاستفسارات العامة" : "General Inquiries"}
                  </option>
                  <option>
                    {isAr
                      ? "دائرة علاقات العملاء"
                      : "Customer Relations / Sales"}
                  </option>
                  <option>
                    {isAr ? "علاقات المستثمرين" : "Investor Relations"}
                  </option>
                  <option>
                    {isAr ? "إدارة الموارد البشرية" : "Human Resources"}
                  </option>
                  <option>{isAr ? "إدارة المشتريات" : "Procurement"}</option>
                  <option>{isAr ? "قسم الإعلام" : "Communications"}</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm text-slate-300">
                {isAr ? "الرسالة" : "Message"}
              </label>
              <textarea
                rows={6}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-white/20"
                placeholder={
                  isAr ? "اكتب رسالتك هنا" : "Write your message here"
                }
              />
            </div>

            <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg">
              {isAr ? "إرسال" : "Send Message"}
              <Send className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-10">
              <h2 className="text-3xl font-semibold text-white">
                {isAr ? "الأقسام" : "Departments"}
              </h2>

              <div className="mt-6 space-y-4">
                {departments.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-slate-900/50 p-5"
                  >
                    <div className="text-lg font-semibold text-white">
                      {item.title}
                    </div>
                    <a
                      href={`mailto:${item.email}`}
                      className="mt-3 block text-sm text-slate-300 break-all hover:text-white"
                    >
                      {item.email}
                    </a>
                    <a
                      href={`tel:${item.phone.replace(/\s+/g, "")}`}
                      className="mt-1 block text-sm text-slate-400 hover:text-slate-200"
                    >
                      {item.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Head Office */}
              <div className="rounded-[24px] overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps?q=Yafour+Damascus+Syria&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                />
                <div className="p-4 text-sm text-slate-400 text-center">
                  {isAr
                    ? "المكتب الرئيسي - يعفور، ريف دمشق"
                    : "Head Office - Yafour, Damascus Countryside"}
                </div>
              </div>

              {/* Plant */}
              <div className="rounded-[24px] overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps?q=Al+Badia+Cement+Plant+Syria&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  loading="lazy"
                />
                <div className="p-4 text-sm text-slate-400 text-center">
                  {isAr
                    ? "المصنع - منطقة أبو الشامات"
                    : "Plant - Abu Al Shamat Area"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
