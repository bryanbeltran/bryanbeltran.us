const resumeData = {
  name: 'Bryan Beltrán',
  title: 'Software Engineer II',
  summary:
    'Backend engineer focused on scalable internal tools and platform integrations that support high-volume customer care operations. Experienced in AWS event-driven architectures, backend observability, and infrastructure-as-code. Focused on clean abstractions, resilient systems, and removing friction for developers. Open to remote roles and well-versed in collaborating across distributed engineering teams.',
  skills: {
    'Languages & Frameworks': ['PHP', 'Python', 'JavaScript (Node.js, TypeScript)', 'Java'],
    'Cloud & Infra': ['AWS (Lambda, SQS, SNS, S3)', 'Terraform', 'Jenkins'],
    'APIs & Tooling': ['REST', 'GraphQL', 'Postman', 'Git'],
    Databases: ['MySQL', 'Microsoft SQL Server', 'Oracle SQL'],
    'Monitoring & CI/CD': ['Splunk', 'Azure Pipelines', 'Vercel', 'JIRA'],
  },
  experience: [
    {
      title: 'Software Engineer II',
      company: 'Chewy',
      location: 'Hybrid – Twin Cities, MN (Distributed Team)',
      date: 'Jan 2022 – Present',
      bullets: [
        'Built and maintained PHP backend services powering CRM integrations and support workflows across a large-scale customer support platform.',
        'Refactored appointment and task sync between upstream scheduling system and CRM to be modular and extensible, improving reliability across veterinary workflows.',
        'Automated closure of shipped and canceled order cases using AWS SNS, SQS, and Lambda, reducing agent load and saving an estimated $480K annually in manual labor.',
        'Implemented traffic mitigation logic to detect and reroute bot-originated chats, reducing load on live agent queues.',
        'Engineered scalable fixes across backend systems to resolve routing, ingestion, and order processing failures (e.g., integer overflow, failed fax events).',
        'Migrated observability dashboards and alerts from on-prem to cloud-based Splunk; added queue volume threshold alerts using historical data.',
        'Partnered with cross-functional stakeholders to prioritize and deliver incident automation strategies, aligning technical fixes with customer experience goals.',
        'Conduct code reviews and support onboarding of newer engineers by sharing backend system context and development best practices.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Calabrio, Inc.',
      location: 'Hybrid – Minneapolis, MN',
      date: 'Apr 2020 – Jan 2022',
      bullets: [
        'Built backend tooling to automate tenant provisioning and IAM configuration in a multi-tenant CRM SaaS platform.',
        'Developed reusable Java libraries to validate authentication and service interactions, ensuring tenant isolation and security across shared infrastructure.',
        'Participated in pilot of behavior-driven specifications (Cucumber) to clarify backend logic and improve alignment between engineering and product teams.',
      ],
    },
    {
      title: 'QA Automation Engineer',
      company: 'Quality Bicycle Products',
      location: 'Bloomington, MN',
      date: 'Jun 2019 – Mar 2020',
      bullets: [
        'Maintained and extended Java libraries built on Page Object Model patterns to support stability of ecommerce and fulfillment platforms.',
        'Owned and configured Jenkins pipelines, integrating gate logic and failure thresholds to improve CI reliability and reduce bad deploys.',
        'Collaborated with backend engineers to identify integration points and improve release consistency across systems.',
      ],
    },
    {
      title: 'Software QA Intern',
      company: 'Quality Bicycle Products',
      location: 'Bloomington, MN',
      date: 'Jun 2018 – Jun 2019',
      bullets: [
        'Supported release delivery by assisting with CI job setup, Jenkins maintenance, and deployment readiness checks.',
        'Helped implement shared pipeline steps that formalized deploy conditions and improved feedback loops for engineers.',
        'Contributed reusable scripts and utilities that accelerated team workflows and reduced manual effort.',
      ],
    },
  ],
  projects: [
    {
      name: 'SeedStarter',
      description:
        'Hyperlocal garden planner based on USDA zones and frost dates. Uses shapefile matching and frontend geolocation (TypeScript, turf.js).',
    },
    {
      name: 'Mitten Index',
      description:
        'Cold weather comfort scoring algorithm using live weather data and heuristic factors (Node.js, weather APIs).',
    },
    {
      name: 'Timebox',
      description:
        'Minimalist social writing app built with Supabase, Next.js, Tailwind, and shadcn/ui (TypeScript, Prisma).',
    },
  ],
  education: {
    degree: 'B.S. Computer Information Technology, Minor in Spanish',
    school: 'Minnesota State University, Mankato',
    location: 'Mankato, MN',
    date: 'May 2019',
  },
}

export default resumeData
