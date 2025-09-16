// Static data for homepage to eliminate database queries and improve performance

export interface ServiceData {
  id: string
  title: string
  slug: string
}

export interface ServiceAreaData {
  id: string
  title: string
  slug: string
}

export const homepageServices: ServiceData[] = [
  {
    id: '1',
    title: 'Tree Removal',
    slug: 'tree-removal',
  },
  {
    id: '2',
    title: 'Tree Trimming',
    slug: 'tree-trimming',
  },
  {
    id: '3',
    title: 'Emergency Tree Damage',
    slug: 'emergency-tree-damage',
  },
  {
    id: '4',
    title: 'Storm Clean Up',
    slug: 'storm-clean-up',
  },
  {
    id: '5',
    title: 'Municipal Tree Service',
    slug: 'municipal-tree-service',
  },
  {
    id: '6',
    title: 'Professional Land Clearing Services',
    slug: 'professional-land-clearing-services',
  },
]

export const homepageServiceAreas: ServiceAreaData[] = [
  {
    id: '1',
    title: 'Kaysville',
    slug: 'service-areas-kaysville-ut-tree-service',
  },
  {
    id: '2',
    title: 'Layton',
    slug: 'service-areas-layton-ut-tree-service',
  },
  {
    id: '3',
    title: 'Bountiful',
    slug: 'service-areas-bountiful-ut-tree-service',
  },
  {
    id: '4',
    title: 'Centerville',
    slug: 'service-areas-centerville-ut-tree-service',
  },
  {
    id: '5',
    title: 'Clearfield',
    slug: 'service-areas-clearfield-ut-tree-service',
  },
  {
    id: '6',
    title: 'Farmington',
    slug: 'service-areas-farmington-ut-tree-service',
  },
  {
    id: '7',
    title: 'North Ogden',
    slug: 'service-areas-north-ogden-ut-tree-service',
  },
  {
    id: '8',
    title: 'North Salt Lake',
    slug: 'service-areas-north-salt-lake-ut-tree-service',
  },
  {
    id: '9',
    title: 'Ogden',
    slug: 'service-areas-ogden-ut-tree-service',
  },
  {
    id: '10',
    title: 'Riverdale',
    slug: 'service-areas-riverdale-ut-tree-service',
  },
  {
    id: '11',
    title: 'Roy',
    slug: 'service-areas-roy-ut-tree-service',
  },
  {
    id: '12',
    title: 'South Weber',
    slug: 'service-areas-south-weber-ut-tree-service',
  },
]

// Service image mapping for optimization
export const serviceImages: { [key: string]: string } = {
  'tree-removal': '91521393324329d774d759f0d6e984de27d05cf5.jpg',
  'tree-trimming': '0429526e5171a025d4e084e303157911cde378f0.jpg',
  'emergency-tree-damage': '8fbc39738ff1ee4ba34f327cb5ffaa34024b11eb.jpg',
  'storm-clean-up': 'ce7b1b3d28de8121894f693f49d99deacc0fdfd9.jpg',
  'municipal-tree-service': '3360c69ff26cc8732183a7edd60e6ee6f293b9ee.jpg',
  'professional-land-clearing-services': '654766ab01c63fc2cf45c8c5bdc851dcff4ceff2.jpg',
}

export const defaultServiceImage = '6044a2199980b071066c9787705eaf1fd5e11a3e.png'
