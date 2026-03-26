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
