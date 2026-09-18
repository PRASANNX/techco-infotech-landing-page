'use client';

import { Serif, Reveal } from './ui';

const groups = [
  {
    label: 'Frontend & Backend',
    items: ['React.js', 'Next.js', 'Express.js', 'REST APIs / GraphQL', 'MongoDB'],
  },
  {
    label: 'CMS & Marketing Tools',
    items: ['WordPress / WooCommerce', 'Shopify', 'Meta Business Suite', 'React Native', 'Firebase'],
  },
  {
    label: 'AI & Cloud',
    items: ['OpenAI APIs (GPT-4, DALL\u00b7E)', 'Langchain', 'Python for ML', 'Custom GPT Tools', 'AWS (EC2, S3)'],
  },
];

export default function TechStack() {
  return (
    <section className="section-pad bg-white">
      <div className="container-marklab">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="section-label">Technologies</span>
          <h2 className="h2 mt-5">
            Our tech <Serif>ecosystem</Serif>
          </h2>
          <p className="text-body mt-4">
            Modern, scalable, and high-performing technologies for seamless digital experiences.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 mt-12 lg:mt-14">
          {groups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.1} className="h-full">
              <div className="card p-7 h-full flex flex-col">
                <p className="section-label mb-5">{group.label}</p>
                <div className="flex flex-wrap gap-2.5 content-start">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-[#edf2ff] text-[#0b0d21] text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
