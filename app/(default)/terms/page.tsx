'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'

export default function TermsPage() {
  useEffect(() => {
    // Removed AOS.refresh() to prevent potential scroll issues
  }, [])

  // Set effective date as per the provided text
  const effectiveDate = 'March 28, 2025'

  return (
    <div className="relative min-h-screen bg-black">
      {/* Sparkles Animation */}
      <div className="absolute inset-0 z-[1]">
        <BackgroundSparkles useFixed={false} zIndex={5} />
      </div>

      <div className="relative z-[2] mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl pb-12 text-center md:pb-16"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Terms and Conditions
            </h1>
            <p className="text-xl text-[#1CD4A7]">HD Trade Services Pty Ltd</p>
            <p className="mt-2 text-gray-400">
              Effective Date: {effectiveDate}
            </p>
          </motion.div>

          {/* Terms content */}
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              {/* Intro */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
              >
                <p className="text-gray-300">
                  These Terms and Conditions (“Agreement”) govern the services
                  provided by HD Trade Services PTY LTD (“Company,” “we,” “us,”
                  or “our”) to the client (“you” or “Customer”). By engaging our
                  services, you agree to these terms and conditions in full.
                  Please read this Agreement carefully before proceeding.
                </p>
              </motion.div>

              {/* Section 1 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  1. Scope of Work
                </h2>
                <p className="text-gray-300">
                  HD Trade Services PTY LTD will provide services as detailed in
                  the quotation or written agreement issued prior to
                  commencement. Services will be conducted professionally,
                  promptly, and in compliance with all relevant regulations and
                  standards in Queensland, Australia.
                </p>
              </div>

              {/* Section 2 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  2. Payment Terms
                </h2>

                <div className="space-y-6">
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      2.1 Payment Upon Completion
                    </h3>
                    <p className="text-gray-300">
                      Full payment is due immediately upon completion of work
                      unless agreed otherwise in writing.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      2.2 Late Payment Interest
                    </h3>
                    <p className="text-gray-300">
                      If payment is not received within 7 days of completion,
                      interest will accrue on the overdue amount at a rate of
                      10% per annum, calculated daily until the outstanding
                      amount is paid in full.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      2.3 Recovery Costs
                    </h3>
                    <p className="text-gray-300">
                      The Customer agrees to reimburse all reasonable costs
                      incurred by the Company in recovering unpaid amounts.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      2.4 Hourly Recovery Fee
                    </h3>
                    <p className="text-gray-300">
                      In the event of late payment, the Customer agrees to pay
                      for the Company's time spent on recovery efforts,
                      including but not limited to:
                    </p>
                    <ul className="ml-6 mt-2 list-disc text-gray-300">
                      <li>
                        Administrative efforts, such as drafting letters, making
                        phone calls, and corresponding regarding the debt.
                      </li>
                      <li>
                        Site visits to the property to discuss or collect
                        payment.
                      </li>
                      <li>
                        Coordination with debt collection agencies or legal
                        representatives.
                      </li>
                    </ul>
                    <p className="mt-2 text-gray-300">
                      These efforts will be billed at a rate of $140 per hour,
                      calculated in 15-minute increments. The Customer will
                      receive an itemized statement detailing the time spent and
                      activities performed.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      2.5 Non-Attendance Fee
                    </h3>
                    <p className="text-gray-300">
                      If HD Trade Services PTY LTD attends the Customer's
                      property at the scheduled time and no one is available to
                      provide access to the property or otherwise allow work to
                      proceed, the Customer agrees to pay a non-attendance fee
                      of $123.43. This fee covers the time and costs associated
                      with the failed appointment. Re-attendance at the property
                      will require rescheduling, and an additional call-out fee
                      of $123.43 will apply for each subsequent visit.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      2.6 Deposit Policy
                    </h3>
                    <p className="text-gray-300">
                      For certain services, the Company may require a deposit
                      before commencing work. Deposits are non-refundable unless
                      otherwise stated in the quotation or agreement.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      2.7 Personal Guarantee
                    </h3>
                    <p className="text-gray-300">
                      By accepting an estimate or engaging our services on
                      behalf of a company, trust, or any other entity (the
                      “Entity”), the individual (“you”) personally guarantee the
                      payment of all amounts due under this Agreement. This
                      means that if the Entity fails to make any payment when
                      due, you will be personally responsible for paying the
                      outstanding amount, including any applicable interest and
                      recovery costs, as outlined in this Agreement.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      2.8 Charge for Returned Payments
                    </h3>
                    <p className="text-gray-300">
                      If any payment made by the Customer is returned or
                      dishonored, the Customer agrees to pay a fee of $50 per
                      occurrence, in addition to any bank charges incurred by HD
                      Trade Services PTY LTD.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      2.9 Right to Cease Services
                    </h3>
                    <p className="text-gray-300">
                      In the event of non-payment or late payment, HD Trade
                      Services PTY LTD reserves the right to cease providing
                      services or withdraw previously provided services (if
                      feasible) until all outstanding amounts are paid in full.
                      This includes withholding completion certificates or
                      relevant documentation until the balance is settled.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      2.10 Ownership of Works and Materials
                    </h3>
                    <p className="text-gray-300">
                      All works performed and materials supplied by HD Trade
                      Services PTY LTD remain the property of the Company until
                      the invoice is paid in full by the Customer. The Customer
                      shall not acquire any right, title, or interest in the
                      works or materials until full payment has been received by
                      the Company.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  3. Customer Obligations
                </h2>
                <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                  <p className="text-gray-300">The Customer agrees to:</p>
                  <ul className="ml-6 mt-2 list-disc text-gray-300">
                    <li>
                      Provide safe, unobstructed access to the property for our
                      personnel and equipment.
                    </li>
                    <li>
                      Ensure that someone is available at the property at the
                      scheduled time to provide access and facilitate the work.
                    </li>
                    <li>
                      Disclose any relevant property conditions, hazards, or
                      issues that may affect our services.
                    </li>
                  </ul>
                  <p className="mt-4 text-gray-300">
                    Failure to comply with these obligations may result in
                    delays or additional costs, which the Customer agrees to
                    bear.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  4. Warranties and Liability
                </h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      4.1 Workmanship Warranty
                    </h3>
                    <p className="text-gray-300">
                      The Company provides a 1-year warranty on all workmanship
                      starting from the date of work completion.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      4.2 Warranty Exclusions
                    </h3>
                    <p className="text-gray-300">
                      The warranty is void under the following circumstances:
                    </p>
                    <ul className="ml-6 mt-2 list-disc text-gray-300">
                      <li>Misuse, neglect, or accidental damage.</li>
                      <li>Lack of routine maintenance as specified by us.</li>
                      <li>
                        Unauthorized repairs, modifications, or tampering by
                        third parties.
                      </li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      4.3 Limitation of Liability
                    </h3>
                    <p className="text-gray-300">
                      To the extent permitted by law, HD Trade Services PTY LTD
                      disclaims all liability for indirect, incidental, or
                      consequential damages, including but not limited to loss
                      of business, profits, or opportunities.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      4.4 Australian Consumer Law Compliance
                    </h3>
                    <p className="text-gray-300">
                      Nothing in this Agreement is intended to exclude,
                      restrict, or modify any rights or remedies the Customer
                      may have under the Australian Consumer Law.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      4.5 Force Majeure
                    </h3>
                    <p className="text-gray-300">
                      The Company is not liable for delays or failures caused by
                      events beyond our control, including natural disasters,
                      strikes, or government actions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  5. Confidentiality, Non-Disparagement, and Media Clause
                </h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      5.1 Confidentiality
                    </h3>
                    <p className="text-gray-300">
                      The Customer agrees to maintain the confidentiality of all
                      communications, pricing, and project details shared by the
                      Company. Disclosure to third parties requires prior
                      written consent.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      5.2 Non-Disparagement
                    </h3>
                    <p className="text-gray-300">
                      The Customer agrees not to post, share, or publish any
                      negative, critical, misleading, or defamatory statements,
                      reviews, or comments about the Company, its employees, or
                      its services on any platform, including but not limited to
                      social media, review websites, forums, or other public
                      platforms, without the Company's prior written consent.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      5.3 Prohibition on Indirect Disparagement
                    </h3>
                    <p className="text-gray-300">
                      The Customer agrees not to encourage or engage any third
                      party (e.g., friends, family, or employees) to post
                      negative comments, reviews, or statements about HD Trade
                      Services PTY LTD. Breaches of this clause will be treated
                      as direct breaches by the Customer.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      5.4 Media Clause
                    </h3>
                    <p className="text-gray-300">
                      The Customer agrees not to discuss, publish, or disclose
                      any details related to the services provided by HD Trade
                      Services PTY LTD, including but not limited to job
                      specifics, payments, or disputes, to any media outlet or
                      public forum without prior written consent from the
                      Company. Breaches of this clause will result in the
                      Company seeking legal remedies, including but not limited
                      to injunctive relief and claims for damages.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      5.5 Comment Removal and Costs
                    </h3>
                    <p className="text-gray-300">
                      If the Customer breaches the non-disparagement or media
                      clause, HD Trade Services PTY LTD reserves the right to:
                    </p>
                    <ol className="ml-6 mt-2 list-decimal text-gray-300">
                      <li>
                        Seek legal remedies to compel the removal of such
                        content.
                      </li>
                      <li>
                        Bill the Customer for any costs incurred in addressing
                        and rectifying reputational harm, including legal fees
                        or public relations services.
                      </li>
                    </ol>
                  </div>
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      5.6 Resolution of Concerns
                    </h3>
                    <p className="text-gray-300">
                      Customers must address any dissatisfaction or concerns
                      directly with the Company in writing. The Company will
                      make every reasonable effort to resolve such concerns
                      promptly and fairly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6 (Originally Section 11) */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  6. Lifetime Labour Warranty and Satisfaction Guarantee
                </h2>

                <div className="space-y-6">
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      6.1 Lifetime Labour Warranty – "Fix It or It's Free"
                    </h3>
                    <p className="mb-2 text-gray-300">
                      HD Trade Services PTY LTD ("the Company") warrants that
                      all labour and workmanship performed by its employees
                      shall be free from defects for the lifetime of the work
                      ("Lifetime Labour Warranty"), subject to the terms and
                      exclusions set out below.
                    </p>
                    <p className="mb-2 text-gray-300">
                      In the event that a defect in workmanship is identified
                      and substantiated to the reasonable satisfaction of the
                      Company, and such defect falls within the scope of this
                      Warranty, the Company shall:
                    </p>
                    <ul className="ml-6 mt-2 list-disc text-gray-300">
                      <li>
                        Rectify the defective workmanship at no additional cost
                        to the Customer; or
                      </li>
                      <li>
                        Where the Company is unable to rectify the defect,
                        refund the labour charges originally paid for the
                        defective component of the work—
                        <em>"fix it or it's free."</em>
                      </li>
                    </ul>
                    <p className="mt-4 font-semibold text-gray-300">
                      This Warranty is subject to the following conditions:
                    </p>
                    <ul className="ml-6 mt-2 list-disc text-gray-300">
                      <li>
                        The defect must directly arise from workmanship carried
                        out by the Company.
                      </li>
                      <li>
                        The claim must be made by the original Customer and
                        relate to the original site of service.
                      </li>
                      <li>
                        The defect must not arise from misuse, neglect, fair
                        wear and tear, environmental conditions, unauthorised
                        modifications or repairs, lack of maintenance, or
                        failure of materials or components not supplied by the
                        Company.
                      </li>
                      <li>
                        The Customer must provide written notice of the defect
                        within a reasonable time after it becomes apparent and
                        allow the Company reasonable access to inspect, assess,
                        and remedy the issue.
                      </li>
                    </ul>
                    <p className="mt-4 text-gray-300">
                      This Lifetime Labour Warranty is non-transferable and does
                      not apply where services have been altered, interfered
                      with, or rectified by third parties without prior written
                      consent from the Company.
                    </p>
                    <p className="mt-4 text-gray-300">
                      This Warranty is provided in addition to, and does not
                      exclude, restrict or modify, the Customer's rights under
                      the{' '}
                      <strong>Competition and Consumer Act 2010 (Cth)</strong>{' '}
                      and the <strong>Australian Consumer Law</strong>.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      6.2 Satisfaction Guarantee
                    </h3>
                    <p className="mb-2 text-gray-300">
                      In addition to the above warranty, the Company offers a{' '}
                      <strong>100% Satisfaction Guarantee</strong> on all
                      services performed.
                    </p>
                    <p className="mb-2 text-gray-300">
                      If the Customer is not satisfied with the completed
                      service, they must notify the Company in writing within
                      seven (7) calendar days of the date of completion, clearly
                      stating the grounds for dissatisfaction.
                    </p>
                    <p className="mb-2 text-gray-300">
                      Upon receipt of such notification, the Company will
                      investigate the matter in good faith and, where
                      appropriate, at its sole discretion, provide one or more
                      of the following remedies:
                    </p>
                    <ul className="ml-6 mt-2 list-disc text-gray-300">
                      <li>
                        Re-perform the relevant services at no additional
                        charge;
                      </li>
                      <li>
                        Rectify any aspect of the service that does not meet the
                        agreed standard;
                      </li>
                      <li>
                        Offer a fair and reasonable alternative resolution.
                      </li>
                    </ul>
                    <p className="mt-4 text-gray-300">
                      This Satisfaction Guarantee does not apply to claims based
                      on subjective preferences or outcomes beyond the
                      reasonable control of the Company and must be exercised in
                      good faith.
                    </p>
                    <p className="mt-4 text-gray-300">
                      Nothing in this section is intended to exclude, restrict,
                      or modify any rights, remedies, or consumer guarantees
                      available to the Customer under applicable Australian
                      Consumer Law.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  7. Dispute Resolution
                </h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      7.1 Negotiation in Good Faith
                    </h3>
                    <p className="text-gray-300">
                      Disputes will first be addressed through direct
                      negotiation between both parties.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      7.2 Mediation
                    </h3>
                    <p className="text-gray-300">
                      If negotiations fail, disputes must be submitted to
                      mediation in Queensland, Australia, before pursuing
                      litigation. Both parties will equally share mediation
                      costs unless otherwise agreed.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      7.3 Binding Arbitration
                    </h3>
                    <p className="text-gray-300">
                      In the event of a dispute that cannot be resolved through
                      mediation, the matter will be referred to binding
                      arbitration, conducted in accordance with the laws of
                      Queensland, Australia. The decision of the arbitrator will
                      be final and enforceable in a court of law.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  8. Termination
                </h2>
                <p className="text-gray-300">
                  The Company may terminate this Agreement immediately if:
                </p>
                <ul className="ml-6 mt-2 list-disc text-gray-300">
                  <li>
                    The Customer breaches any of the terms outlined in this
                    Agreement.
                  </li>
                  <li>
                    Payments are overdue, and reasonable attempts to collect
                    have failed.
                  </li>
                </ul>
                <p className="mt-4 text-gray-300">
                  Upon termination, all outstanding amounts become immediately
                  due.
                </p>
              </div>

              {/* Section 9 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  9. Governing Law
                </h2>
                <p className="text-gray-300">
                  This Agreement is governed by and interpreted in accordance
                  with the laws of Queensland, Australia. Any legal proceedings
                  must be initiated within Queensland courts.
                </p>
              </div>

              {/* Section 10 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  10. Severability
                </h2>
                <p className="text-gray-300">
                  If any part of this Agreement is deemed invalid or
                  unenforceable, the remaining provisions will remain in full
                  force and effect.
                </p>
              </div>

              {/* Section 11 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  11. Variation of Terms
                </h2>
                <p className="text-gray-300">
                  The Company reserves the right to update these Terms and
                  Conditions at any time. Customers will be notified of changes
                  before engaging services under the updated terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
