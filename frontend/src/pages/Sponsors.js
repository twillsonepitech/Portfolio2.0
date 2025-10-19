import React from 'react';
import { Heart, Coffee, DollarSign } from 'lucide-react';

const Sponsors = () => {
  const sponsorTiers = [
    {
      name: 'Gold Sponsors',
      icon: '🥇',
      amount: '€500/month',
      benefits: [
        'Logo on homepage',
        'Featured in all project READMEs',
        'Priority support',
        'Monthly 1-on-1 call',
      ],
    },
    {
      name: 'Silver Sponsors',
      icon: '🥈',
      amount: '€250/month',
      benefits: [
        'Logo on sponsors page',
        'Mentioned in project READMEs',
        'Priority issue responses',
      ],
    },
    {
      name: 'Bronze Sponsors',
      icon: '🥉',
      amount: '€100/month',
      benefits: [
        'Name on sponsors page',
        'Sponsor badge on GitHub',
      ],
    },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Sponsors
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          I dedicate a significant amount of my time to open source projects and creating educational content. Your sponsorship helps me continue this work and maintain my projects.
        </p>
      </div>

      {/* Why Sponsor */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Why Sponsor?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900">
            <Heart className="mb-4 text-red-500" size={32} />
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Support Open Source
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Help keep my open source projects maintained, updated, and free for everyone.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900">
            <Coffee className="mb-4 text-amber-600" size={32} />
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Enable Creation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Give me more time to build tools, write content, and share knowledge.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900">
            <DollarSign className="mb-4 text-green-600" size={32} />
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              Sustainable Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Make open source work sustainable and help the ecosystem thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Sponsorship Tiers
        </h2>
        <div className="space-y-4">
          {sponsorTiers.map((tier, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                    <span>{tier.icon}</span>
                    {tier.name}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">
                    {tier.amount}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {tier.benefits.map((benefit, benefitIndex) => (
                  <li
                    key={benefitIndex}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <span className="text-green-500">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Ready to Sponsor?
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Choose your preferred platform to support my work:
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium"
          >
            <Heart size={18} />
            <span>Sponsor on GitHub</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            <Coffee size={18} />
            <span>Buy me a coffee</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            <DollarSign size={18} />
            <span>One-time donation</span>
          </a>
        </div>
      </section>

      {/* Thank You */}
      <section className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-700 dark:text-gray-300 text-center">
          <span className="text-2xl mb-2 block">🙏</span>
          Thank you to all my current sponsors for making this work possible!
        </p>
      </section>

      <footer className="pt-10 pb-6 text-center text-sm text-gray-500 dark:text-gray-500">
        <p>
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-400"
          >
            CC BY-NC-SA 4.0
          </a>{' '}
          2021-PRESENT © Thomas Willson
        </p>
      </footer>
    </div>
  );
};

export default Sponsors;