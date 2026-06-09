const resumeData = {
  name: 'Bryan Beltrán',
  title: 'Software Engineer II',
  summary:
    'Software Engineer focused on scalable tools and platform integrations that support high-volume customer care operations. Experienced in AWS event-driven architectures, backend observability, and infrastructure-as-code. Focused on clean abstractions, resilient systems, and removing friction for developers. Open to remote roles and well-versed in collaborating across distributed engineering teams.',
  skills: {
    'Languages & Frameworks': ['PHP', 'Python', 'JavaScript (Node.js, TypeScript)', 'Java'],
    'Cloud & Infra': ['AWS (Lambda, SQS, SNS, S3, Kinesis, Firehose)', 'Terraform'],
    'APIs & Tooling': ['REST', 'GraphQL', 'Postman', 'Git'],
    Databases: ['MySQL', 'Microsoft SQL Server', 'Oracle SQL'],
    'Monitoring & CI/CD': ['Dynatrace', 'Splunk', 'Vercel', 'Jenkins'],
  },
  experience: [
    {
      title: 'Software Engineer II',
      company: 'Chewy',
      location: 'Hybrid – Twin Cities, MN (Distributed Team)',
      date: 'Jan 2022 – Present',
      bullets: [
        'Owned the design, development, and operation of backend services powering CRM integrations and customer support workflows across a high-volume, mission-critical customer care platform.',
        'Led migration of observability tooling from Splunk to Dynatrace across multiple services, coordinating contractor execution and implementing dashboards, alerting, and monitoring standards, enabling retirement of a $2M annual contract.',
        'Developed and delivered Dynatrace training sessions for engineers and product managers, accelerating adoption of observability best practices across teams.',
        'Designed and built a Chrome extension that streamlines customer care troubleshooting by replacing manual Chrome DevTools-based workflows with automated capture of network logs, console output, screen recordings, and browser metadata, reducing friction in bug reporting and accelerating engineering triage.',
        'Designed and implemented event-driven automation using AWS SNS, SQS, and Lambda to automatically close shipped and canceled order cases, reducing agent workload and saving an estimated $480K annually.',
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
      date: 'Jun 2018 – Mar 2020',
      bullets: [
        'Maintained and extended Java libraries built on Page Object Model patterns to support stability of ecommerce and fulfillment platforms.',
        'Owned and configured Jenkins pipelines, integrating gate logic and failure thresholds to improve CI reliability and reduce bad deploys.',
        'Collaborated with backend engineers to identify integration points and improve release consistency across systems.',
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
