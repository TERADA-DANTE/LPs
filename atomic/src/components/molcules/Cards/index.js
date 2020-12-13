import Card from 'components/atoms/Card/index'

export default function () {
  const items = [
    {
      img: {
        alt: 'arc',
        src:
          'https://cloud.githubusercontent.com/assets/3068563/23199029/55e9d55a-f8aa-11e6-91a2-74b82db3813c.png'
      },
      avatar: {
        src:
          'https://avatars3.githubusercontent.com/u/3068563?s=460&u=aff870adf52257792263f2b806efabdf6a50227e&v=4',
        title: 'Diego Haz',
        description: 'https://github.com/diegohaz/arc'
      }
    },
    {
      img: {
        alt: 'react-atomic-design',
        src:
          'https://user-images.githubusercontent.com/4838076/33235048-d083dca6-d217-11e7-9aea-9a5ef5ae6fe7.png'
      },
      avatar: {
        src:
          'https://avatars0.githubusercontent.com/u/4838076?s=460&u=4a6e83e27f793352a773920255ec23af710dc3aa&v=4',
        title: 'Danilo Woznica',
        description: 'https://github.com/danilowoz/react-atomic-design'
      }
    }
    //   {img:{
    //       alt: ,
    //       src: ,
    //   ,
    //   avatar : {
    //       src : ,
    //       title: ,
    //       description:
    //   }
    // }}
  ]
  return items.map((item, index) => (
    <Card key={index} img={img} avatar={avatar} />
  ))
}
