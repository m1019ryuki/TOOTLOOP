import { useState } from 'react';
import { Users, Target, MapPin, BookOpen, Lightbulb, ArrowRight, Mail, Phone, Star, Zap } from 'lucide-react';

function App() {
  const [tab, setTab] = useState<'about' | 'consultation'>('about');

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => { setTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img src="/S__95297538.jpg" alt="TUTOLOOP" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-tight">TUTOLOOP</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`px-5 py-2.5 rounded-full transition-all duration-300 font-medium text-sm tracking-wide ${
                tab === 'about'
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              当塾について
            </button>
            <button
              onClick={() => { setTab('consultation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`px-5 py-2.5 rounded-full transition-all duration-300 font-medium text-sm tracking-wide ${
                tab === 'consultation'
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              無料相談
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {tab === 'about' ? <AboutContent onGoToConsultation={() => { setTab('consultation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} /> : <ConsultationContent />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/50 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <img src="/S__95297538.jpg" alt="TUTOLOOP" className="w-8 h-8 object-contain" />
                <span className="text-white font-bold tracking-tight">TUTOLOOP</span>
              </div>
              <p className="text-sm text-slate-500 text-center md:text-right">
                豊中市・箕面市・吹田市で、小学生・中学生の思考力を育てます
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800/50 text-center text-sm text-slate-600">
              <p>&copy; 2024 TUTOLOOP. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AboutContent({ onGoToConsultation }: { onGoToConsultation: () => void }) {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient py-28 md:py-40 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-10">
              <div className="relative">
                <img src="/S__95297538.jpg" alt="TUTOLOOP" className="w-28 h-28 object-contain float-animation" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl" />
              </div>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-500/15 text-blue-300 px-5 py-2.5 rounded-full text-sm font-medium mb-10 border border-blue-500/20">
              <MapPin className="w-4 h-4" />
              豊中市・箕面市・吹田市
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
              「解き方」ではなく、
              <br />
              <span className="gradient-text">「考え方」を。</span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100/90 mb-8 font-medium tracking-wide">
              阪大生の思考回路を、その身に刻む。
            </p>
            <p className="text-lg text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed">
              小学生・中学生を対象に、解法の暗記ではなく、
              <br />
              考え抜く力を育てる、新しい学習塾です。
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-full hover:from-blue-400 hover:to-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 text-lg font-semibold"
            >
              無料体験を申し込む
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 指導方針 */}
      <section className="py-24 bg-slate-900 relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-blue-400 font-semibold tracking-widest text-sm uppercase mb-4">Our Philosophy</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                私たちの指導方針
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
              {/* 従来の塾 */}
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 card-hover">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-7 h-7 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-300 mb-2">従来の塾</h3>
                    <p className="text-slate-400 text-lg">
                      解法を詳しく解説
                    </p>
                  </div>
                </div>
                <p className="text-slate-500 leading-relaxed">
                  教材の模範解答を詳しく解説し、暗記させることで、テストの点数向上をめざす
                </p>
              </div>

              {/* 当塾 */}
              <div className="relative bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-8 rounded-2xl border border-blue-500/30 card-hover pulse-glow">
                <div className="absolute top-4 right-4">
                  <Star className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">当塾</h3>
                    <p className="text-blue-200 text-lg font-medium">
                      生徒と一緒に問題を解き、阪大生の「思考の癖・プロセス」を体感させる。
                    </p>
                  </div>
                </div>
                <p className="text-blue-100/80 leading-relaxed">
                  答えにたどり着くまでの「頭の使い方」を身体に覚え込ませることで、一生モノの基礎的思考力を養います。
                </p>
              </div>
            </div>

            {/* 大きなバナー */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-10 md:p-16 rounded-3xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative text-center">
                <div className="flex justify-center mb-8">
                  <img src="/S__95297538.jpg" alt="TUTOLOOP" className="w-20 h-20 object-contain opacity-90" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                  多くの塾は「解説」をしますが、
                  <br />
                  私たちは「思考」を共有します。
                </h3>
                <p className="text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
                  阪大生がどのように問題に向き合い、どう考え、どう答えを導くのか。
                  <br />
                  その全プロセスを隣で体験することで、思考力そのものを鍛えます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ対象 */}
      <section className="py-24 bg-slate-950 relative bg-mesh">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-blue-400 font-semibold tracking-widest text-sm uppercase mb-4">Who It's For</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                このような方におすすめです
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 card-hover group">
                <div className="w-16 h-16 bg-blue-500/15 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500/25 transition-colors">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  本質的な学力を
                  <br />つけたい
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  テクニックではなく、根本的な考える力を身につけさせたい保護者の方
                </p>
              </div>

              <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 card-hover group">
                <div className="w-16 h-16 bg-indigo-500/15 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-500/25 transition-colors">
                  <Users className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  少人数で
                  <br />丁寧に教わりたい
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  大人数の授業ではなく、一人ひとりに寄り添った指導を求める方
                </p>
              </div>

              <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 card-hover group">
                <div className="w-16 h-16 bg-cyan-500/15 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-500/25 transition-colors">
                  <BookOpen className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  思考力を
                  <br />鍛えたい
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  暗記に頼らず、自分の頭で考え抜く習慣を身につけたい生徒
                </p>
              </div>
            </div>

            <div className="mt-10 bg-slate-900/60 p-8 rounded-2xl border border-blue-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">対象地域・学年</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    <span className="text-blue-300 font-medium">地域：</span>豊中市・箕面市・吹田市にお住まいの方
                    <br />
                    <span className="text-blue-300 font-medium">対象：</span>小学生・中学生
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3つの力 */}
      <section className="py-24 bg-slate-900 relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-blue-400 font-semibold tracking-widest text-sm uppercase mb-4">What You Gain</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                得られる3つの力
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="relative w-24 h-24 mx-auto mb-8">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:bg-blue-500/30 transition-colors" />
                  <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  論理的思考力
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  問題を構造的に捉え、筋道を立てて考える力が身につきます
                </p>
              </div>

              <div className="text-center group">
                <div className="relative w-24 h-24 mx-auto mb-8">
                  <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl blur-xl group-hover:bg-indigo-500/30 transition-colors" />
                  <div className="relative w-24 h-24 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  自己解決力
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  わからない問題に出会った時、自分で考え抜く習慣が育ちます
                </p>
              </div>

              <div className="text-center group">
                <div className="relative w-24 h-24 mx-auto mb-8">
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-xl group-hover:bg-cyan-500/30 transition-colors" />
                  <div className="relative w-24 h-24 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  応用力
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  学んだ思考プロセスを、他の科目や場面でも活かせるようになります
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-mesh" />
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 font-semibold tracking-widest text-sm uppercase mb-4">Contact Us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              まずは無料体験から
            </h2>
            <p className="text-xl text-slate-300 mb-14 leading-relaxed">
              阪大生の思考プロセスを体感してください。
              <br />
              お子様の学習に対する姿勢が変わります。
            </p>

            <div className="glass p-10 md:p-14 rounded-3xl max-w-xl mx-auto">
              <h3 className="text-2xl font-bold mb-10">お問い合わせ</h3>
              <div className="space-y-5 text-left">
                <div className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-5 rounded-xl transition-colors border border-white/5">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">お電話でのお問い合わせ</p>
                    <p className="text-xl font-bold text-white">06-XXXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-5 rounded-xl transition-colors border border-white/5">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">メールでのお問い合わせ</p>
                    <p className="text-lg font-medium text-white">info@handai-juku.jp</p>
                  </div>
                </div>
              </div>
              <p className="text-slate-500 mt-8 text-sm">
                受付時間：平日 14:00〜21:00 / 土曜 10:00〜18:00
              </p>
            </div>

            <div className="mt-12">
              <button
                onClick={onGoToConsultation}
                className="group inline-flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors font-medium text-lg"
              >
                無料相談について詳しく見る
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ConsultationContent() {
  return (
    <>
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-10">
              <div className="relative">
                <img src="/S__95297538.jpg" alt="TUTOLOOP" className="w-28 h-28 object-contain float-animation" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl" />
              </div>
            </div>
            <p className="text-blue-400 font-semibold tracking-widest text-sm uppercase mb-4">Free Consultation</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
              無料相談
            </h1>
            <p className="text-xl text-slate-300 mb-14 leading-relaxed max-w-2xl mx-auto">
              お子様の学習についてお気軽にご相談ください。
              <br />
              阪大生講師が丁寧にお答えします。
            </p>

            <div className="glass p-10 md:p-14 rounded-3xl max-w-xl mx-auto">
              <h2 className="text-2xl font-bold mb-10">お問い合わせ</h2>
              <div className="space-y-5 text-left">
                <div className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-5 rounded-xl transition-colors border border-white/5">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">お電話でのお問い合わせ</p>
                    <p className="text-xl font-bold text-white">06-XXXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-5 rounded-xl transition-colors border border-white/5">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">メールでのお問い合わせ</p>
                    <p className="text-lg font-medium text-white">info@handai-juku.jp</p>
                  </div>
                </div>
              </div>
              <p className="text-slate-500 mt-8 text-sm">
                受付時間：平日 14:00〜21:00 / 土曜 10:00〜18:00
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
