import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function LandingPage() {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    els.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 80 + i * 100);
    });
  }, []);

  const users = ["Varun", "Nikhil", "Harish", "Ankush", "Irfan"];

  const features = [
    { icon: "⚡", title: "Instant Transfers", desc: "Send money to any user in one click. Balances sync in real time across all accounts." },
    { icon: "🔒", title: "JWT Auth", desc: "Secure login with hashed passwords. Session tokens keep your account protected." },
    { icon: "📊", title: "Transaction History", desc: "Every rupee tracked. Filter by sent or received with a clean history view." },
    { icon: "📱", title: "QR Payments", desc: "Scan any user's QR code to pay instantly — no searching required." },
  ];

  const stack = ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Tailwind CSS", "Vite"];

  return (
    <div className="min-h-screen bg-[#05091a] text-white overflow-x-hidden" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>

      
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, #10b981 0%, transparent 70%)" }} />
        <div className="absolute top-[40%] right-[-100px] w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #3b82f6 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #10b981 0%, transparent 70%)" }} />
      </div>

     
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-[#05091a] font-black text-xl shadow-lg shadow-emerald-500/30">
            ₹
          </div>
          <span className="font-bold text-lg tracking-tight">Pocket Money</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/40">
          <span className="hover:text-white/70 cursor-pointer transition-colors"></span>
          <span className="hover:text-white/70 cursor-pointer transition-colors"></span>
          <span className="hover:text-white/70 cursor-pointer transition-colors"></span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/signin")}
            className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2 text-sm font-medium bg-emerald-500 text-[#05091a] rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
          >
            Get started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-5xl mx-auto">
        <div className="fade-up inline-flex items-center gap-2 border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-xs px-4 py-2 rounded-full mb-8 tracking-wide">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          Full-stack MERN project · Open source
        </div>

        <h1 className="fade-up text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
          <span className="text-white">Send money.</span><br />
          <span className="text-emerald-400">No friction.</span><br />
          <span className="text-white/25">No delays.</span>
        </h1>

        <p className="fade-up text-white/45 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
          A peer-to-peer wallet built on the MERN stack. Sign up, get a balance, and send money to anyone on the platform.
        </p>

        <div className="fade-up flex flex-wrap gap-4 justify-center mb-20">
          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-4 bg-emerald-500 text-[#05091a] font-bold text-base rounded-2xl hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1"
          >
            Create free account →
          </button>
          <button
            onClick={() => navigate("/signin")}
            className="px-8 py-4 border border-white/12 text-white/70 text-base rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all"
          >
            Sign in instead
          </button>
        </div>

        {/* Dashboard mockup */}
        <div className="fade-up w-full max-w-2xl">
          {/* Outer glow ring */}
          <div className="relative p-[1px] rounded-3xl" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.4) 0%, rgba(255,255,255,0.05) 50%, rgba(16,185,129,0.1) 100%)" }}>
            <div className="bg-[#0b1022] rounded-3xl overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06] bg-[#0d1428]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <div className="flex-1 bg-white/5 rounded-lg px-3 py-1.5 text-xs text-white/20 text-center">
                  pocketmoney.vercel.app/dashboard
                </div>
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>

              {/* App UI */}
              <div className="p-5">
                {/* App header row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-emerald-500 rounded-lg flex items-center justify-center text-[#05091a] font-black text-sm">₹</div>
                    <span className="text-white font-semibold text-sm">Pocket Money</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-xs text-white/30">Your balance</p>
                      <p className="text-sm font-bold text-emerald-400">Rs 3,715.51</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-xs text-blue-300 font-semibold">S</div>
                  </div>
                </div>

                {/* Search bar */}
                <div className="bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-2.5 mb-4 text-xs text-white/25 text-left">
                  Search users...
                </div>

                {/* User rows */}
                <p className="text-xs text-white/25 font-medium mb-2.5 text-left uppercase tracking-widest">Users</p>
                <div className="flex flex-col gap-1.5">
                  {users.map((name, i) => (
                    <div key={name} className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-emerald-500/20 transition-all group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                          style={{
                            background: ["rgba(16,185,129,0.15)", "rgba(59,130,246,0.15)", "rgba(168,85,247,0.15)", "rgba(245,158,11,0.15)", "rgba(239,68,68,0.15)"][i % 5],
                            color: ["#10b981", "#3b82f6", "#a855f7", "#f59e0b", "#ef4444"][i % 5]
                          }}>
                          {name[0]}
                        </div>
                        <span className="text-sm text-white/65">{name}</span>
                      </div>
                      <button className="text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3.5 py-1.5 rounded-lg group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all font-medium">
                        Send Money
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Reflection glow */}
          <div className="mx-auto mt-1 h-12 w-3/4 opacity-20 blur-2xl rounded-full bg-emerald-500" />
        </div>
      </section>

      {/* Stats bar */}
      <div className="relative z-10 border-y border-white/[0.06] bg-white/[0.02] py-8 mb-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-white/[0.06]">
          {[
            { val: "< 1s", label: "Transfer speed" },
            { val: "MERN", label: "Full stack" },
            { val: "100%", label: "Open source" },
          ].map((s) => (
            <div key={s.label} className="text-center px-6 py-2">
              <p className="text-2xl md:text-3xl font-black text-emerald-400 mb-1">{s.val}</p>
              <p className="text-xs text-white/30 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="relative z-10 px-6 py-20 max-w-5xl mx-auto">
        <p className="text-center text-xs tracking-widest text-emerald-500/70 uppercase mb-3">What it does</p>
        <h2 className="text-center text-4xl font-black text-white mb-14">Built like a real product</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div key={f.title}
              className="relative group bg-[#0b1022] border border-white/[0.07] rounded-2xl p-6 hover:border-emerald-500/30 transition-all hover:-translate-y-1 cursor-default overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(ellipse at top left, rgba(16,185,129,0.07) 0%, transparent 60%)" }} />
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl mb-5">
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{f.title}</h3>
              <p className="text-white/35 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 px-6 py-16 max-w-2xl mx-auto">
        <p className="text-center text-xs tracking-widest text-emerald-500/70 uppercase mb-3">Flow</p>
        <h2 className="text-center text-4xl font-black text-white mb-14">Up in 3 steps</h2>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[19px] top-10 bottom-10 w-px bg-gradient-to-b from-emerald-500/40 via-emerald-500/20 to-transparent" />

          {[
            { n: "01", title: "Create your account", desc: "Register with name, email and password. A wallet is created automatically with a random starting balance — ready to use." },
            { n: "02", title: "Find someone to pay", desc: "Search any registered user by name from the dashboard. Your full contact list is always visible." },
            { n: "03", title: "Send & track", desc: "Enter an amount, hit send. Both balances update instantly and the transaction is logged with timestamp." },
          ].map((s) => (
            <div key={s.n} className="flex gap-6 mb-10 last:mb-0">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 min-w-[40px] rounded-full bg-[#0b1022] border border-emerald-500/40 flex items-center justify-center text-xs font-black text-emerald-400 shadow-lg shadow-emerald-500/10">
                  {s.n}
                </div>
              </div>
              <div className="pt-2">
                <h4 className="text-white font-bold text-base mb-2">{s.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="relative z-10 px-6 py-16 text-center border-t border-white/[0.06]">
        <p className="text-xs tracking-widest text-emerald-500/70 uppercase mb-3">Stack</p>
        <h2 className="text-3xl font-black text-white mb-10">Technologies used</h2>
        <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto mb-16">
          {stack.map((t) => (
            <span key={t}
              className="bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500/30 hover:bg-emerald-500/5 text-white/50 hover:text-emerald-300 text-sm px-5 py-2.5 rounded-xl transition-all cursor-default">
              {t}
            </span>
          ))}
        </div>

        {/* Final CTA */}
        <div className="relative inline-block">
          <div className="absolute inset-0 rounded-3xl blur-3xl opacity-30 bg-emerald-500" />
          <div className="relative bg-[#0b1022] border border-emerald-500/25 rounded-3xl px-10 py-12 max-w-xl mx-auto">
            <p className="text-4xl font-black text-white mb-3">Try it yourself</p>
            <p className="text-white/35 text-sm mb-8 leading-relaxed">
              Sign up with any name and email — you'll get a wallet with a random balance and can immediately start sending.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => navigate("/signup")}
                className="px-8 py-3.5 bg-emerald-500 text-[#05091a] font-bold rounded-xl hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/30 hover:-translate-y-0.5"
              >
                Create account →
              </button>
              <button
                onClick={() => navigate("/signin")}
                className="px-8 py-3.5 border border-white/15 text-white/60 rounded-xl hover:bg-white/5 transition-all"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 flex flex-wrap items-center justify-between gap-4 px-8 py-6 border-t border-white/[0.06] mt-8">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-emerald-500 rounded-lg flex items-center justify-center text-[#05091a] font-black text-sm">₹</div>
          <span className="text-white/30 text-xs">© 2026 Pocket Money · Samarth Shirahatti</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-white/20 text-xs hover:text-emerald-400 transition-colors">GitHub</a>
          <a href="#" className="text-white/20 text-xs hover:text-emerald-400 transition-colors">LinkedIn</a>
        </div>
      </footer>

    </div>
  );
}