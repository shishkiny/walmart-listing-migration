export function Footer() {
  return (
    <footer className="relative">
      <div className="bg-bg-surface/80 border-b-0 rounded-t-3xl backdrop-blur-[20px] p-12 mx-4 md:p-14 md:mx-2">
        <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto md:grid-cols-3">
          {/* Brand + Social */}
          <div className="flex flex-col gap-6">
            <div className="text-sm text-text leading-relaxed">
              © 2026 24.online — UAE
            </div>
            <div className="flex gap-4 items-center">
              <a
                href="https://instagram.com/24.online.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 text-muted2 transition-colors hover:text-gold"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@24.online"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 text-muted2 transition-colors hover:text-gold"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <rect x="2" y="4" width="20" height="16" rx="4" />
                  <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@24.online.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 text-muted2 transition-colors hover:text-gold"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/24-online"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 text-muted2 transition-colors hover:text-gold"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://discord.gg/8zeSTBxV3m"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 text-muted2 transition-colors hover:text-gold"
                aria-label="Discord"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-bold text-text mb-5">Company</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li>
                <a
                  href="https://24.online/about"
                  className="text-sm text-muted2 transition-colors hover:text-gold no-underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/8zeSTBxV3m"
                  className="text-sm text-muted2 transition-colors hover:text-gold no-underline"
                >
                  Community in Discord
                </a>
              </li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h4 className="text-base font-bold text-text mb-5">Policy</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li>
                <a
                  href="https://24.online/docs/terms.pdf"
                  className="text-sm text-muted2 transition-colors hover:text-gold no-underline"
                >
                  Terms of service
                </a>
              </li>
              <li>
                <a
                  href="https://24.online/docs/privacy.pdf"
                  className="text-sm text-muted2 transition-colors hover:text-gold no-underline"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-surface">
      <div className="container-wide py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-wm-blue to-wm-blue-light flex items-center justify-center">
                <span className="text-white font-bold text-sm font-grotesk">
                  24
                </span>
              </div>
              <span className="font-grotesk font-bold text-lg text-text">
                24.online
              </span>
            </div>
            <p className="text-sm text-muted2 leading-relaxed max-w-xs">
              AI-powered e-commerce automation. Built for enterprise. Free for
              Walmart sellers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Company
            </h4>
            <div className="space-y-2.5">
              <a
                href="https://24.online/about"
                className="block text-sm text-muted2 hover:text-text transition-colors no-underline"
              >
                About
              </a>
              <a
                href="https://discord.gg/8zeSTBxV3m"
                className="block text-sm text-muted2 hover:text-text transition-colors no-underline"
              >
                Community
              </a>
              <a
                href="https://24.online/docs/terms.pdf"
                className="block text-sm text-muted2 hover:text-text transition-colors no-underline"
              >
                Terms of Service
              </a>
              <a
                href="https://24.online/docs/privacy.pdf"
                className="block text-sm text-muted2 hover:text-text transition-colors no-underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="space-y-2.5">
              {[
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/company/24-online",
                },
                {
                  name: "YouTube",
                  href: "https://youtube.com/@24.online",
                },
                {
                  name: "Discord",
                  href: "https://discord.gg/8zeSTBxV3m",
                },
                {
                  name: "Instagram",
                  href: "https://instagram.com/24.online.ai",
                },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted2 hover:text-text transition-colors no-underline"
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © 2026 24.online — UAE. All rights reserved.
          </p>
          <p className="text-xs text-muted text-center md:text-right max-w-md">
            Always review and validate generated listings before publishing.
            24.online does not guarantee listing approval by Walmart.
          </p>
        </div>
      </div>
    </footer>
  );
}
