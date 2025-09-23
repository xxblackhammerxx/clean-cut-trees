// Redirect configuration for site migration
// This handles old URL patterns to new URL structure

const redirects = [
  // Blog post redirects - date-based URLs to simple slugs
  {
    source: '/2017/08/22/winter-maintenance-best-kept-secret-for-healthy-trees',
    destination: '/blog/winter-maintenance-best-kept-secret-for-healthy-trees',
    permanent: true,
  },
  {
    source: '/2021/03/25/tree-removal-permit-in-ogden-ut-city-of-ogden-tree-ordinance',
    destination: '/blog/tree-removal-permit-in-ogden-ut-city-of-ogden-tree-ordinance',
    permanent: true,
  },
  {
    source: '/2021/06/17/3-reasons-why-tree-removal-in-utah-should-be-left-to-the-professionals',
    destination: '/blog/3-reasons-why-tree-removal-in-utah-should-be-left-to-the-professionals',
    permanent: true,
  },
  {
    source: '/2021/07/02/5-important-reasons-for-tree-pruning',
    destination: '/blog/5-important-reasons-for-tree-pruning',
    permanent: true,
  },
  {
    source: '/2021/07/29/7-tree-planting-tips-to-ensuring-lasting-growth',
    destination: '/blog/7-tree-planting-tips-to-ensuring-lasting-growth',
    permanent: true,
  },
  {
    source: '/2021/07/31/what-to-do-when-tree-storm-damage-wreaks-havoc',
    destination: '/blog/what-to-do-when-tree-storm-damage-wreaks-havoc',
    permanent: true,
  },
  {
    source: '/2021/08/11/everything-you-should-know-about-hiring-a-tree-removal-service',
    destination: '/blog/everything-you-should-know-about-hiring-a-tree-removal-service',
    permanent: true,
  },
  {
    source: '/2021/09/14/what-does-a-municipal-tree-service-do',
    destination: '/blog/what-does-a-municipal-tree-service-do',
    permanent: true,
  },
  {
    source: '/2021/10/07/5-benefits-of-contracting-tree-planting-professionals-in-utah',
    destination: '/blog/5-benefits-of-contracting-tree-planting-professionals-in-utah',
    permanent: true,
  },
  {
    source: '/2021/11/04/how-to-tell-when-its-time-to-remove-a-tree',
    destination: '/blog/how-to-tell-when-its-time-to-remove-a-tree',
    permanent: true,
  },
  {
    source: '/2022/02/28/tree-emergency',
    destination: '/blog/tree-emergency',
    permanent: true,
  },
  {
    source: '/2022/03/25/trees-most-likely-fall-strong-wind-storm',
    destination: '/blog/trees-most-likely-fall-strong-wind-storm',
    permanent: true,
  },
  {
    source: '/2022/04/23/how-do-trees-regulate-climate',
    destination: '/blog/how-do-trees-regulate-climate',
    permanent: true,
  },
  {
    source: '/2022/05/17/prevent-trees-from-dying-during-drought',
    destination: '/blog/prevent-trees-from-dying-during-drought',
    permanent: true,
  },
  {
    source: '/2022/06/23/does-cutting-down-trees-increase-property-value',
    destination: '/blog/does-cutting-down-trees-increase-property-value',
    permanent: true,
  },
  {
    source: '/2022/07/23/storm-preparedness-trees',
    destination: '/blog/storm-preparedness-trees',
    permanent: true,
  },
  {
    source: '/2022/08/23/tree-rot',
    destination: '/blog/tree-rot',
    permanent: true,
  },
  {
    source: '/2022/09/23/tree-cleanup-after-storm',
    destination: '/blog/tree-cleanup-after-storm',
    permanent: true,
  },
  {
    source: '/2023/03/12/moths-utah',
    destination: '/blog/moths-utah',
    permanent: true,
  },
  {
    source: '/2023/04/12/questions-ask-tree-removal-service',
    destination: '/blog/questions-ask-tree-removal-service',
    permanent: true,
  },
  {
    source: '/2023/05/12/tree-only-has-branches-one-side',
    destination: '/blog/tree-only-has-branches-one-side',
    permanent: true,
  },
  {
    source: '/2023/06/12/kill-poison-ivy-on-tree',
    destination: '/blog/kill-poison-ivy-on-tree',
    permanent: true,
  },
  {
    source: '/2023/07/12/why-tree-not-growing-leaves',
    destination: '/blog/why-tree-not-growing-leaves',
    permanent: true,
  },
  {
    source: '/2023/08/12/damaged-tree-roots-grow-back',
    destination: '/blog/damaged-tree-roots-grow-back',
    permanent: true,
  },
  {
    source: '/2023/09/12/planting-non-native-trees',
    destination: '/blog/planting-non-native-trees',
    permanent: true,
  },
  {
    source: '/2023/10/12/make-tree-fall-certain-way',
    destination: '/blog/make-tree-fall-certain-way',
    permanent: true,
  },
  {
    source: '/2023/11/12/how-to-save-underwatered-tree',
    destination: '/blog/how-to-save-underwatered-tree',
    permanent: true,
  },
  {
    source: '/2023/12/12/which-tree-roots-damage-foundations',
    destination: '/blog/which-tree-roots-damage-foundations',
    permanent: true,
  },
  {
    source: '/2024/01/12/tree-boring-insects',
    destination: '/blog/tree-boring-insects',
    permanent: true,
  },
  {
    source: '/2024/03/12/how-to-fix-girdling-tree-roots',
    destination: '/blog/how-to-fix-girdling-tree-roots',
    permanent: true,
  },
  {
    source: '/2024/04/12/deep-root-fertilization',
    destination: '/blog/deep-root-fertilization',
    permanent: true,
  },
  {
    source: '/2024/05/12/how-far-can-tree-lean-before-it-falls',
    destination: '/blog/how-far-can-tree-lean-before-it-falls',
    permanent: true,
  },
  {
    source: '/2024/06/12/half-of-tree-is-dead',
    destination: '/blog/half-of-tree-is-dead',
    permanent: true,
  },
  {
    source: '/2024/07/12/what-are-the-signs-of-ash-tree-disease',
    destination: '/blog/what-are-the-signs-of-ash-tree-disease',
    permanent: true,
  },
  {
    source: '/2024/08/12/how-to-remove-big-tree-roots-from-the-ground',
    destination: '/blog/how-to-remove-big-tree-roots-from-the-ground',
    permanent: true,
  },
  {
    source: '/2024/09/12/benefits-of-trimming-trees',
    destination: '/blog/benefits-of-trimming-trees',
    permanent: true,
  },
  {
    source: '/2024/10/11/tree-trimming-seasonal',
    destination: '/blog/tree-trimming-seasonal',
    permanent: true,
  },
  {
    source: '/2024/11/12/how-to-tell-if-a-tree-is-dead-or-dormant',
    destination: '/blog/how-to-tell-if-a-tree-is-dead-or-dormant',
    permanent: true,
  },
  {
    source: '/2024/12/12/how-to-clear-overgrown-land',
    destination: '/blog/how-to-clear-overgrown-land',
    permanent: true,
  },
  {
    source: '/2025/01/12/how-to-cut-down-a-tree-near-a-house',
    destination: '/blog/how-to-cut-down-a-tree-near-a-house',
    permanent: true,
  },
  {
    source: '/2025/02/12/tree-preservation-effective-methods',
    destination: '/blog/tree-preservation-effective-methods',
    permanent: true,
  },
  {
    source: '/2025/03/11/does-clearing-land-increase-property-value',
    destination: '/blog/does-clearing-land-increase-property-value',
    permanent: true,
  },
  {
    source: '/2025/04/11/tree-trimming-vs-tree-pruning',
    destination: '/blog/tree-trimming-vs-tree-pruning',
    permanent: true,
  },
  {
    source: '/2025/05/11/why-are-curved-trees-dangerous',
    destination: '/blog/why-are-curved-trees-dangerous',
    permanent: true,
  },
  {
    source: '/2025/06/11/how-to-choose-a-tree-service',
    destination: '/blog/how-to-choose-a-tree-service',
    permanent: true,
  },
  {
    source: '/2025/07/11/should-tree-branches-hang-over-roof',
    destination: '/blog/should-tree-branches-hang-over-roof',
    permanent: true,
  },
  {
    source: '/2025/08/11/how-long-does-it-take-to-remove-a-tree',
    destination: '/blog/how-long-does-it-take-to-remove-a-tree',
    permanent: true,
  },

  // Remove trailing slashes and redirect to clean URLs
  {
    source: '/about-us/',
    destination: '/about-us',
    permanent: true,
  },
  {
    source: '/contact-us/',
    destination: '/contact-us',
    permanent: true,
  },
  {
    source: '/services/',
    destination: '/services',
    permanent: true,
  },
  {
    source: '/service-areas/',
    destination: '/service-areas',
    permanent: true,
  },
  {
    source: '/blog/',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/faq/',
    destination: '/faq',
    permanent: true,
  },
  {
    source: '/privacy-policy/',
    destination: '/privacy-policy',
    permanent: true,
  },
  {
    source: '/testimonials/',
    destination: '/testimonials',
    permanent: true,
  },
  {
    source: '/photo-gallery/',
    destination: '/photo-gallery',
    permanent: true,
  },
  {
    source: '/real-salt-lake-partnership/',
    destination: '/real-salt-lake-partnership',
    permanent: true,
  },
  {
    source: '/referrals/',
    destination: '/referrals',
    permanent: true,
  },
  {
    source: '/free-wood-chips/',
    destination: '/free-wood-chips',
    permanent: true,
  },
  {
    source: '/news-media/',
    destination: '/news-media',
    permanent: true,
  },

  // Service area URLs - ensure consistency
  {
    source: '/service-areas/bountiful-ut-tree-service/',
    destination: '/service-areas/bountiful-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/centerville-ut-tree-service/',
    destination: '/service-areas/centerville-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/clearfield-ut-tree-service/',
    destination: '/service-areas/clearfield-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/clinton-ut-tree-service/',
    destination: '/service-areas/clinton-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/davis-county-ut-tree-service/',
    destination: '/service-areas/davis-county-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/eden-ut-tree-service/',
    destination: '/service-areas/eden-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/farmington-ut-tree-service/',
    destination: '/service-areas/farmington-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/farr-west-ut-tree-service/',
    destination: '/service-areas/farr-west-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/hooper-ut-tree-service/',
    destination: '/service-areas/hooper-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/kaysville-ut-tree-service/',
    destination: '/service-areas/kaysville-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/layton-ut-tree-service/',
    destination: '/service-areas/layton-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/north-ogden-ut-tree-service/',
    destination: '/service-areas/north-ogden-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/north-salt-lake-ut-tree-service/',
    destination: '/service-areas/north-salt-lake-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/plain-city-ut-tree-service/',
    destination: '/service-areas/plain-city-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/pleasant-view-ut-tree-service/',
    destination: '/service-areas/pleasant-view-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/riverdale-ut-tree-service/',
    destination: '/service-areas/riverdale-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/roy-ut-tree-service/',
    destination: '/service-areas/roy-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/salt-lake-county-ut-tree-service/',
    destination: '/service-areas/salt-lake-county-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/south-weber-ut-tree-service/',
    destination: '/service-areas/south-weber-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/syracuse-ut-tree-service/',
    destination: '/service-areas/syracuse-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/weber-county-ut-tree-service/',
    destination: '/service-areas/weber-county-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/west-haven-ut-tree-service/',
    destination: '/service-areas/west-haven-ut-tree-service',
    permanent: true,
  },

  // Service URLs - ensure consistency
  {
    source: '/services/emergency-tree-damage/',
    destination: '/services/emergency-tree-damage',
    permanent: true,
  },
  {
    source: '/services/municipal-tree-service/',
    destination: '/services/municipal-tree-service',
    permanent: true,
  },
  {
    source: '/services/professional-land-clearing-services/',
    destination: '/services/professional-land-clearing-services',
    permanent: true,
  },
  {
    source: '/services/storm-clean-up/',
    destination: '/services/storm-clean-up',
    permanent: true,
  },
  {
    source: '/services/tree-removal/',
    destination: '/services/tree-removal',
    permanent: true,
  },
  {
    source: '/services/tree-trimming/',
    destination: '/services/tree-trimming',
    permanent: true,
  },

  // Legacy pages that should redirect to appropriate sections
  {
    source: '/demo',
    destination: '/',
    permanent: true,
  },
  {
    source: '/demo/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/sample-page',
    destination: '/',
    permanent: true,
  },
  {
    source: '/sample-page/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/sitemap',
    destination: '/',
    permanent: true,
  },
  {
    source: '/sitemap/',
    destination: '/',
    permanent: true,
  },
  {
    source: '/thank-you',
    destination: '/contact-us',
    permanent: true,
  },
  {
    source: '/thank-you/',
    destination: '/contact-us',
    permanent: true,
  },
]

export default redirects
