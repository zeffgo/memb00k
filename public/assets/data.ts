export interface Image {
  path: string;
  name: string;
  metas: {
    description: string;
    year: number;
  }
}

export const data = {
  people: [
    {
      id: 1,
      name: 'David Blank',
      albums: [
        {id: 0, name: 'Album 1', description: 'Test album'}, 
        {id: 0, name: 'Album 1', description: 'Test album'}
      ],
      images: [
        {path: 'assets/images/dblank/1.jpg', name: '1.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/10.jpg', name: '10.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/11.jpg', name: '11.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/12.jpg', name: '12.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/13.jpg', name: '13.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/14.jpg', name: '14.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/15.jpg', name: '15.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/16.jpg', name: '16.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/17.jpg', name: '17.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/18.jpg', name: '18.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/19.jpg', name: '19.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/2.jpg', name: '2.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/20.jpg', name: '20.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/21.jpg', name: '21.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/22.jpg', name: '22.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/23.jpg', name: '23.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/24.jpg', name: '24.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/25.jpg', name: '25.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/26.jpg', name: '26.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/3.jpg', name: '3.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/4.jpg', name: '4.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/5.jpg', name: '5.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/6.jpg', name: '6.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/7.jpg', name: '7.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/8.jpg', name: '8.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images/dblank/9.jpg', name: '9.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},      
      ]
    },
    {
      id: 2,
      name: 'Alexander Sobolevsky',
      albums: [
        {id: 0, name: 'Album 01', description: 'Test album 01'},
      ],
      images: [
        {path: 'assets/images//20210911_172940.jpg', name: '20210911_172940.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//20210911_172956.jpg', name: '20210911_172956.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//20210911_173009.jpg', name: '20210911_173009.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//20210911_173021.jpg', name: '20210911_173021.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//20210911_173033.jpg', name: '20210911_173033.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//20210911_173045.jpg', name: '20210911_173045.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//20210911_173059.jpg', name: '20210911_173059.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//20210911_173112.jpg', name: '20210911_173112.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//20210911_173124.jpg', name: '20210911_173124.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//20210911_173135.jpg', name: '20210911_173135.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//20210911_173144.jpg', name: '20210911_173144.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//20210911_173153.jpg', name: '20210911_173153.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//20210911_173203.jpg', name: '20210911_173203.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//20210911_173211.jpg', name: '20210911_173211.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//20210911_173228.jpg', name: '20210911_173228.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//20210911_173235.jpg', name: '20210911_173235.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//20210911_173333.jpg', name: '20210911_173333.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//original_26541419-0462-4e40-a94a-6c93d19369ce_20210911_173302.jpg', name: 'original_26541419-0462-4e40-a94a-6c93d19369ce_20210911_173302.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//original_536779b3-dd52-4340-8322-ed4d665fce75_20210911_173219.jpg', name: 'original_536779b3-dd52-4340-8322-ed4d665fce75_20210911_173219.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
        {path: 'assets/images//original_7ddda821-7f4e-441e-8117-c313ce829ae9_20210911_173324.jpg', name: 'original_7ddda821-7f4e-441e-8117-c313ce829ae9_20210911_173324.jpg', metas: {albums: [0, 1], description: 'ljhsdfhjljhdsf', year: 0}},
      ]
    }
  ]
}