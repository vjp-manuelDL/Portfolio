import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative w-[160px] h-[52px]">
              <Image src="/logo_noBG.png" alt="Inocisa" fill sizes="160px" className="object-contain" priority />
            </div>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0084ff] transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 pb-24">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0084ff] mb-3">
            Información Legal
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">{title}</h1>
          <p className="text-slate-500 text-sm">Última actualización: {lastUpdated}</p>
          <div className="mt-6 h-px bg-gradient-to-r from-[#60B1FF] via-[#0084ff] to-transparent" />
        </div>

        <div className="prose prose-slate max-w-none
          prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-lg prose-h3:mt-7 prose-h3:mb-3
          prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
          prose-li:text-slate-600 prose-li:leading-relaxed
          prose-a:text-[#0084ff] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-slate-800
        ">
          {children}
        </div>
      </main>

      {/* Footer mínimo */}
      <footer className="border-t border-slate-100 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Inocisa Infraestructuras e Ingeniería, S.L.</p>
          <div className="flex gap-6">
            <Link href="/aviso-legal"  className="hover:text-[#0084ff] transition-colors">Aviso Legal</Link>
            <Link href="/privacidad"   className="hover:text-[#0084ff] transition-colors">Privacidad</Link>
            <Link href="/cookies"      className="hover:text-[#0084ff] transition-colors">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
