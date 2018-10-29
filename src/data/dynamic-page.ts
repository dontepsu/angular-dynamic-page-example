export interface IDynamicPageProps {
  [propName: string]: any;
}

export interface IDynamicPageMeta {
  title: string;
}

export interface IDynamicPageItem {
  props: IDynamicPageProps;
  component: string;
}

export interface IDynamicPageData {
  uri: string;
  meta: IDynamicPageMeta;
  items: IDynamicPageItem[];
}

export const DYNAMIC_PAGES: IDynamicPageData[] = [
  {
    uri: '/campaign',
    meta: { title: 'Campaign site' },
    items: [
      { component: 'banner', props: { title: 'Awesome Campaign', text: 'Some banner text', image: '/assets/business.jpeg'  } },
      { component: 'text-content', props: { content: '<h2>Markdown or HTML?</h2><p>Well <strong>you</strong> choose!</p>' } }
    ]
  }
];
