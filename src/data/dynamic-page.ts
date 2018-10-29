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
      {
        component: 'banner',
        props: {
          title: 'Awesome Campaign',
          text: 'Click me to go to sub-campaign',
          image: '/assets/business.jpeg',
          linkUri: '/campaign/sub' }
      },
      {
        component: 'text-content',
        props: {
          content: '<h2>Markdown or HTML?</h2><p>Well <strong>you</strong> choose!</p>'
        }
      }
    ]
  },
  {
    uri: '/campaign/sub',
    meta: { title: 'Sub-Campaign site' },
    items: [
      {
        component: 'text-content',
        props: {
          content: '<h2>This is the Campaign sub page</h2>',
        }
      }
    ]
  }
];
