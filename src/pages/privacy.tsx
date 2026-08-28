import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";

export default function PrivacyPage() {
  return (
    <>
      <SEO 
        title="Privacy Policy - Maison Caldor"
        description="Privacy policy and data protection information for Maison Caldor"
      />
      <Navigation />
      <main className="min-h-screen py-24">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-serif font-light mb-6 text-foreground">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: December 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>Name, email address, phone number, and shipping address when you make a reservation</li>
                <li>Payment information processed through secure payment processors</li>
                <li>Communication history with our team</li>
                <li>Browsing behavior on our website (pages visited, time spent, referring URLs)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>Process and fulfill your watch reservations</li>
                <li>Communicate about your orders and inquiries</li>
                <li>Provide customer support</li>
                <li>Send shipping updates and delivery notifications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. We may share information with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>Shipping carriers to deliver your purchases</li>
                <li>Payment processors to handle transactions securely</li>
                <li>Service providers who assist with website hosting and email delivery</li>
                <li>Law enforcement when required by legal obligation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">4. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyze website traffic. You can control cookie settings through your browser.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We may use Google Analytics and similar services to understand how visitors use our site. These services collect anonymous usage data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have rights to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, contact us at support@maisoncaldor.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">8. International Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in the United States or other countries where our service providers operate. We take appropriate measures to ensure your data is protected according to this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">10. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4 text-foreground">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about this Privacy Policy or our data practices, contact us at support@maisoncaldor.com or +1 (646) 244-0064.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}