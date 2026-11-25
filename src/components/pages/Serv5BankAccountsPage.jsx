import React, { useState } from 'react';
import {
  Building2,
  Copy,
  Check,
  ShieldCheck,
  Smartphone,
  CreditCard,
  Phone,
  HelpCircle,
  ExternalLink,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Lock,
  Globe2,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import ConnectedRoadmap from '../ui/ConnectedRoadmap';
import HeroAmbientBackground from '../ui/HeroAmbientBackground';

export default function Serv5BankAccountsPage({ lang = 'ar', onOpenConsultation }) {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [copiedKey, setCopiedKey] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const handleCopy = (key, text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    window.setTimeout(() => {
      setCopiedKey(null);
    }, 2200);
  };

  const tabs = [
    { id: 'all', label: isRtl ? 'جميع وسائل الدفع' : 'All Payment Methods', count: 8 },
    { id: 'egypt', label: isRtl ? 'بنوك مصر' : 'Egypt Banks', count: 4 },
    { id: 'gulf', label: isRtl ? 'السعودية والخليج' : 'Saudi & GCC', count: 1 },
    { id: 'instant', label: isRtl ? 'انستاباي والمحافظ' : 'InstaPay & Wallets', count: 3 }
  ];

  const accounts = [
    {
      id: 'nbe',
      category: 'egypt',
      bankName: isRtl ? 'البنك الأهلي المصري' : 'National Bank of Egypt (NBE)',
      bankEn: 'National Bank of Egypt',
      tag: isRtl ? 'الحساب المؤسسي الرئيسي' : 'Primary Corporate Account',
      tagColor: '#15803d',
      brandGradient: 'linear-gradient(135deg, #0b4f35 0%, #166534 100%)',
      accentColor: '#16a34a',
      beneficiary: isRtl ? 'شركة سيرف فايف لخدمات الويب وتقنية المعلومات' : 'SERV5 FOR WEB SERVICES & IT LLC',
      accountNumber: '1463070966453800018',
      iban: 'EG38000201463070966453800018',
      swift: 'NBEGEGCX146',
      branch: isRtl ? 'فرع المنصورة الرئيسي' : 'Mansoura Main Branch',
      currency: isRtl ? 'جنيه مصري / دولار أمريكي' : 'EGP / USD',
      featured: true
    },
    {
      id: 'banque-misr',
      category: 'egypt',
      bankName: isRtl ? 'بنك مصر' : 'Banque Misr',
      bankEn: 'Banque Misr',
      tag: isRtl ? 'حساب جاري مؤسسي' : 'Corporate Current Account',
      tagColor: '#b91c1c',
      brandGradient: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)',
      accentColor: '#dc2626',
      beneficiary: isRtl ? 'شركة سيرف فايف لخدمات الويب' : 'SERV5 FOR WEB SERVICES',
      accountNumber: '3640001000085429',
      iban: 'EG91000203640001000085429',
      swift: 'BMISEGCX364',
      branch: isRtl ? 'فرع الثورة - المنصورة' : 'Al-Thawra Branch - Mansoura',
      currency: isRtl ? 'جنيه مصري' : 'EGP',
      featured: true
    },
    {
      id: 'alrajhi',
      category: 'gulf',
      bankName: isRtl ? 'مصرف الراجحي (المملكة العربية السعودية)' : 'Al Rajhi Bank (Saudi Arabia & GCC)',
      bankEn: 'Al Rajhi Bank',
      tag: isRtl ? 'لعملاء السعودية والخليج' : 'Saudi Arabia & Gulf Clients',
      tagColor: '#1d4ed8',
      brandGradient: 'linear-gradient(135deg, #0f2c59 0%, #1e3a8a 100%)',
      accentColor: '#2563eb',
      beneficiary: isRtl ? 'سيرف فايف للحلول البرمجية' : 'SERV5 Digital Software Solutions',
      accountNumber: '412608010156942',
      iban: 'SA7880000412608010156942',
      swift: 'RJHISARI',
      branch: isRtl ? 'الرياض - الحسابات المؤسسية' : 'Riyadh Corporate Desk',
      currency: isRtl ? 'ريال سعودي (SAR)' : 'SAR (Saudi Riyal)',
      featured: true
    },
    {
      id: 'credit-agricole',
      category: 'egypt',
      bankName: isRtl ? 'بنك كريدي أجريكول مصر' : 'Crédit Agricole Egypt',
      bankEn: 'Crédit Agricole Egypt',
      tag: isRtl ? 'التحويلات والعملات الدولية' : 'Multi-Currency Account',
      tagColor: '#0f766e',
      brandGradient: 'linear-gradient(135deg, #134e4a 0%, #0f766e 100%)',
      accentColor: '#0d9488',
      beneficiary: isRtl ? 'شركة سيرف فايف لخدمات الويب' : 'SERV5 FOR WEB SERVICES',
      accountNumber: '23010100984112',
      iban: 'EG840049023010100984112',
      swift: 'AGRIEGCX',
      branch: isRtl ? 'فرع المنصورة' : 'Mansoura Branch',
      currency: isRtl ? 'EGP / USD / EUR' : 'EGP / USD / EUR',
      featured: false
    },
    {
      id: 'united-bank',
      category: 'egypt',
      bankName: isRtl ? 'المصرف المتحد' : 'The United Bank of Egypt',
      bankEn: 'The United Bank of Egypt',
      tag: isRtl ? 'حساب جاري تجاري' : 'Commercial Account',
      tagColor: '#0284c7',
      brandGradient: 'linear-gradient(135deg, #075985 0%, #0369a1 100%)',
      accentColor: '#0284c7',
      beneficiary: isRtl ? 'سيرف فايف لخدمات الويب' : 'SERV5 FOR WEB SERVICES',
      accountNumber: '10100034298150',
      iban: 'EG560060010100034298150',
      swift: 'UBEGEGCX',
      branch: isRtl ? 'فرع الدلتا - المنصورة' : 'Delta Branch - Mansoura',
      currency: isRtl ? 'جنيه مصري' : 'EGP',
      featured: false
    },
    {
      id: 'instapay',
      category: 'instant',
      bankName: isRtl ? 'شبكة المدفوعات اللحظية (InstaPay)' : 'InstaPay National Instant Payment',
      bankEn: 'InstaPay Egypt (IPA)',
      tag: isRtl ? 'دفع لحظي فوري 24/7' : 'Instant 24/7 Zero Fees',
      tagColor: '#7c3aed',
      brandGradient: 'linear-gradient(135deg, #4c1d95 0%, #6d28d9 100%)',
      accentColor: '#8b5cf6',
      beneficiary: isRtl ? 'معرف الدفع اللحظي لشركة سيرف فايف' : 'SERV5 Official Instant Address (IPA)',
      accountNumber: 'serv5@instapay',
      iban: null,
      swift: null,
      branch: isRtl ? 'رقم الهاتف المسجل: 01288863831' : 'Registered Mobile: +201288863831',
      currency: isRtl ? 'جنيه مصري (لحظي بدون رسوم)' : 'EGP (Instant & Free)',
      featured: true
    },
    {
      id: 'wallets',
      category: 'instant',
      bankName: isRtl ? 'محافظ الهاتف الذكي (كاش)' : 'Smart Mobile Wallets (Cash)',
      bankEn: 'Vodafone / Orange / Etisalat / WE Cash',
      tag: isRtl ? 'فودافون وأورنج واتصالات كاش' : 'Instant Mobile Cash',
      tagColor: '#ea580c',
      brandGradient: 'linear-gradient(135deg, #9a3412 0%, #c2410c 100%)',
      accentColor: '#f97316',
      beneficiary: isRtl ? 'محافظ سيرف فايف المعتمدة' : 'SERV5 Verified Merchant Wallets',
      accountNumber: '01288863831',
      iban: isRtl ? 'رقم احتياطي ثانٍ: 01026026075' : 'Backup Wallet: 01026026075',
      swift: null,
      branch: isRtl ? 'متاح التحويل من أي محفظة أو ماكينة ATM' : 'Accepts transfer from any mobile wallet or ATM',
      currency: isRtl ? 'جنيه مصري' : 'EGP',
      featured: false
    },
    {
      id: 'egypt-post',
      category: 'instant',
      bankName: isRtl ? 'الهيئة القومية للبريد المصري' : 'Egypt Post Authority',
      bankEn: 'Egypt Post Office',
      tag: isRtl ? 'إيداع وحوالات بريدية' : 'Post Office Direct Deposit',
      tagColor: '#047857',
      brandGradient: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
      accentColor: '#10b981',
      beneficiary: isRtl ? 'سيرف فايف لخدمات الويب - حساب جاري فضي' : 'SERV5 FOR WEB SERVICES - Silver Account',
      accountNumber: '0304512000841818',
      iban: null,
      swift: null,
      branch: isRtl ? 'مكتب بريد المنصورة الرئيسي' : 'Mansoura Main Post Office',
      currency: isRtl ? 'جنيه مصري' : 'EGP',
      featured: false
    }
  ];

  const filteredAccounts = activeTab === 'all'
    ? accounts
    : accounts.filter(acc => acc.category === activeTab);

  const whatsappUrl = `https://wa.me/201288863831?text=${encodeURIComponent(
    isRtl
      ? 'السلام عليكم، قمت بالتحويل إلى حساب شركة سيرف فايف، وأود إرسال إيصال السداد لتأكيد مشروعي.'
      : 'Hello, I have made a bank transfer to SERV5 corporate account and would like to send my receipt to confirm the project.'
  )}`;

  return (
    <div className="bank-accounts-page" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* 1. HERO BANNER */}
      <section className="bank-hero-section">
        <HeroAmbientBackground variant="bank" />
        <div className="container">
          <div className="bank-hero-badge">
            <ShieldCheck size={16} />
            <span>{isRtl ? 'منظومة الدفع والتحصيل الرسمية المعتمدة' : 'Official Approved Banking Infrastructure'}</span>
          </div>

          <h1 className="bank-hero-title">
            {isRtl ? (
              <>
                الحسابات البنكية الرسمية{' '}
                <span className="text-gradient-orange-luminous">لشركة سيرف فايف</span>
              </>
            ) : (
              <>
                Official Banking Accounts of{' '}
                <span className="text-gradient-orange-luminous">SERV5 Digital</span>
              </>
            )}
          </h1>

          <p className="bank-hero-desc">
            {isRtl
              ? 'تسهيلاً على عملائنا وشركاء النجاح في مصر، المملكة العربية السعودية، ودول الخليج العربي؛ نوفر حسابات مؤسسية معتمدة ومحافظ دفع لحظية مباشرة تضمن لك سرعة وسلاسة سداد المستحقات والتعاقدات.'
              : 'To streamline payment workflows for our enterprise partners across Egypt, Saudi Arabia, and the GCC, here are our official verified corporate accounts and instant payment bridges.'}
          </p>

          {/* Official Security Verification Notice */}
          <div className="bank-security-notice">
            <div className="security-icon-wrap">
              <Lock size={22} />
            </div>
            <div className="security-text-wrap">
              <strong>{isRtl ? 'تنبيه أمان مصرفي هام للعملاء:' : 'Critical Banking Security Notice:'}</strong>
              <p>
                {isRtl
                  ? 'جميع التحويلات البنكية يجب أن تصدر باسم شركة "سيرف فايف لخدمات الويب" أو ممثليها الرسميين. لا تقم بالتحويل لأي حساب فردي غير معتمد، ويُرجى دائماً إرسال صورة إشعار التحويل عبر الواتساب الرسمي الموثق +20 128 888 63831 لتأكيد استلام الدفعة وإصدار فاتورتك فوراً.'
                  : 'All corporate payments must be credited to "SERV5 FOR WEB SERVICES" approved accounts. Never transfer funds to unauthorized individuals. Always forward your transaction receipt via official WhatsApp +20 128 888 63831 for instant confirmation.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER NAVIGATION TABS */}
      <section className="bank-tabs-section">
        <div className="container">
          <div className="bank-tabs-bar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`bank-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="bank-tab-count">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ACCOUNTS GRID */}
      <section className="bank-cards-section" id="bank-cards-section">
        <div className="container">
          <div className="bank-cards-grid">
            {filteredAccounts.map((account) => {
              const accKey = `${account.id}-acc`;
              const ibanKey = `${account.id}-iban`;
              const swiftKey = `${account.id}-swift`;

              return (
                <div key={account.id} className="bank-account-card">
                  {/* Card Header with Metallic Gradient Accent */}
                  <div className="bank-card-header" style={{ background: account.brandGradient }}>
                    <div className="bank-card-header-top">
                      <div className="bank-badge-pill" style={{ borderColor: `${account.accentColor}80` }}>
                        <Building2 size={13} />
                        <span>{account.tag}</span>
                      </div>
                      <span className="bank-currency-tag">{account.currency}</span>
                    </div>

                    <h3 className="bank-card-title">{account.bankName}</h3>
                    <div className="bank-card-beneficiary">
                      <span className="beneficiary-label">{isRtl ? 'المستفيد:' : 'Beneficiary:'}</span>
                      <strong className="beneficiary-name">{account.beneficiary}</strong>
                    </div>
                  </div>

                  {/* Card Body with Key Payment Details */}
                  <div className="bank-card-body">
                    {/* Account Number */}
                    {account.accountNumber && (
                      <div className="bank-data-row">
                        <div className="data-info">
                          <span className="data-label">{isRtl ? 'رقم الحساب / المحفظة' : 'Account Number / Wallet'}</span>
                          <span className="data-value font-mono font-bold" dir="ltr">{account.accountNumber}</span>
                        </div>
                        <button
                          type="button"
                          className={`btn-copy-data ${copiedKey === accKey ? 'copied' : ''}`}
                          onClick={() => handleCopy(accKey, account.accountNumber)}
                          title={isRtl ? 'نسخ رقم الحساب' : 'Copy account number'}
                        >
                          {copiedKey === accKey ? (
                            <>
                              <Check size={14} />
                              <span>{isRtl ? 'تم النسخ!' : 'Copied!'}</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>{isRtl ? 'نسخ' : 'Copy'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {/* IBAN */}
                    {account.iban && (
                      <div className="bank-data-row">
                        <div className="data-info">
                          <span className="data-label">{isRtl ? 'رقم الآيبان الدولي (IBAN)' : 'International IBAN'}</span>
                          <span className="data-value font-mono font-bold text-xs" dir="ltr">{account.iban}</span>
                        </div>
                        <button
                          type="button"
                          className={`btn-copy-data ${copiedKey === ibanKey ? 'copied' : ''}`}
                          onClick={() => handleCopy(ibanKey, account.iban)}
                          title={isRtl ? 'نسخ الآيبان' : 'Copy IBAN'}
                        >
                          {copiedKey === ibanKey ? (
                            <>
                              <Check size={14} />
                              <span>{isRtl ? 'تم النسخ!' : 'Copied!'}</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>{isRtl ? 'نسخ' : 'Copy'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {/* Swift Code */}
                    {account.swift && (
                      <div className="bank-data-row">
                        <div className="data-info">
                          <span className="data-label">{isRtl ? 'رمز السويفت (SWIFT / BIC)' : 'SWIFT / BIC Code'}</span>
                          <span className="data-value font-mono font-bold" dir="ltr">{account.swift}</span>
                        </div>
                        <button
                          type="button"
                          className={`btn-copy-data ${copiedKey === swiftKey ? 'copied' : ''}`}
                          onClick={() => handleCopy(swiftKey, account.swift)}
                          title={isRtl ? 'نسخ رمز السويفت' : 'Copy Swift'}
                        >
                          {copiedKey === swiftKey ? (
                            <>
                              <Check size={14} />
                              <span>{isRtl ? 'تم النسخ!' : 'Copied!'}</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>{isRtl ? 'نسخ' : 'Copy'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {/* Branch Note */}
                    {account.branch && (
                      <div className="bank-branch-row">
                        <span className="branch-label">{isRtl ? 'الفرع / التفاصيل:' : 'Branch / Details:'}</span>
                        <span className="branch-val">{account.branch}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Quick Action Footer */}
                  <div className="bank-card-footer">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bank-card-whatsapp-btn"
                    >
                      <Phone size={14} />
                      <span>{isRtl ? 'تأكيد السداد عبر هذا الحساب' : 'Confirm Payment via WhatsApp'}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. STEP-BY-STEP PAYMENT PROTOCOL */}
      <section className="bank-steps-section" id="bank-steps-section">
        <div className="container">
          <div className="section-head-center">
            <span className="bank-section-eyebrow">{isRtl ? 'إجراءات السداد' : 'Payment Protocol'}</span>
            <h2 className="bank-section-title">
              {isRtl ? 'كيف تؤكد دفعتك وتبدأ مشروعك في 4 خطوات؟' : 'How to Confirm Payment & Launch in 4 Steps'}
            </h2>
          </div>

          {/* Professional Connected Roadmap Component (React Bits Powered) */}
          <ConnectedRoadmap lang={lang} whatsappUrl={whatsappUrl} />

          {/* Master WhatsApp Action */}
          <div className="bank-master-cta-wrap">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="bank-master-cta-btn"
            >
              <Phone size={19} />
              <span>
                {isRtl
                  ? 'إرسال إشعار السداد إلى واتساب المبيعات الرسمي (+20 128 888 63831)'
                  : 'Submit Transfer Receipt to Official Sales WhatsApp (+20 128 888 63831)'}
              </span>
              <ArrowIcon size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="bank-faq-section" id="bank-faq-section">
        <div className="container">
          <div className="section-head-center">
            <HelpCircle size={24} className="text-blue-500 mb-2 mx-auto" />
            <h2 className="bank-section-title">{isRtl ? 'الأسئلة الشائعة حول الحسابات والتحويلات' : 'Banking & Transfer FAQ'}</h2>
          </div>

          <div className="bank-faq-grid">
            <div className="bank-faq-item">
              <h4>{isRtl ? 'هل الحسابات مسجلة باسم الشركة رسمياً؟' : 'Are accounts registered in SERV5 corporate name?'}</h4>
              <p>{isRtl ? 'نعم، جميع الحسابات البنكية المذكورة هي حسابات شركات ومؤسسات رسمية ومسجلة بالسجل التجاري والبطاقة الضريبية لشركة سيرف فايف.' : 'Yes, all bank accounts listed are verified corporate accounts tied directly to SERV5 Commercial Registration.'}</p>
            </div>
            <div className="bank-faq-item">
              <h4>{isRtl ? 'كم من الوقت يستغرق تأكيد الدفعة؟' : 'How long does payment confirmation take?'}</h4>
              <p>{isRtl ? 'يتم تأكيد التحويلات اللحظية عبر انستاباي ومحافظ الكاش في غضون دقائق، بينما تستغرق التحويلات البنكية بين البنوك المختلفة من ساعتين إلى 24 ساعة عمل.' : 'InstaPay and wallet transfers are confirmed within minutes; interbank ACH takes 2-24 business hours.'}</p>
            </div>
            <div className="bank-faq-item">
              <h4>{isRtl ? 'هل يمكن التحويل بالعملات الأجنبية؟' : 'Can I transfer in international currencies (USD / EUR / SAR)?'}</h4>
              <p>{isRtl ? 'نعم، حساباتنا في البنك الأهلي وكريدي أجريكول والراجحي تقبل الحوالات الدولية بجميع العملات الرئيسية عبر رموز السويفت (SWIFT) والآيبان (IBAN).' : 'Yes, multi-currency accounts accept international wire transfers via standard SWIFT and IBAN protocols.'}</p>
            </div>
            <div className="bank-faq-item">
              <h4>{isRtl ? 'هل يتم إصدار فاتورة ضريبية رسمية؟' : 'Will I receive an official tax invoice?'}</h4>
              <p>{isRtl ? 'بالتأكيد، فور تأكيد الدفعة يتم إصدار فاتورة إلكترونية ضريبية معتمدة ومتوافقة مع المعايير المصرية والسعودية (ZATCA).' : 'Yes, every confirmed payment receives an official compliant electronic invoice.'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
