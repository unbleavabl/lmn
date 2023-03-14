export type Item = {
  name: string
  icon: string
  hotspot: {
    top: number
    left: number
  }
  description: string
  types: Array<{
    name: string
    image: string
    options: Array<{
      name: string
      description: string
      image: string
    }>
  }>
}

export const info: Item[] = [
  {
    name: 'roof',
    icon: 'images/roof.svg',
    hotspot: {
      top: 20,
      left: 86,
    },
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat.',
    types: [
      {
        name: 'roof type 1',
        image: 'images/roof/type1/image',
        options: [
          {
            name: 'roof type 1 option 1',
            description: 'roof type 1 option 1 description',
            image: 'images/roof/type1/option1.image',
          },
        ],
      },
    ],
  },
  {
    name: 'plumbing',
    icon: 'images/plumbing.svg',
    hotspot: {
      top: 24,
      left: 63,
    },
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat.',
    types: [
      {
        name: 'plumbing type 1',
        image: 'plumbing/type1/image',
        options: [
          {
            name: 'plumbing type 1 option 1',
            description: 'plumbing type 1 option 1 description',
            image: 'plumbing/type1/option1.image',
          },
        ],
      },
    ],
  },
  {
    name: 'insulation',
    icon: 'images/homeicon-01-01.svg',
    hotspot: {
      top: 20,
      left: 101,
    },
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat.',
    types: [
      {
        name: 'insulation type 1',
        image: 'insulation/type1/image',
        options: [
          {
            name: 'insulation type 1 option 1',
            description: 'insulation type 1 option 1 description',
            image: 'insulation/type1/option1.image',
          },
        ],
      },
    ],
  },
  {
    name: 'doors',
    icon: 'images/homeicon-01-01.svg',
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat.',
    hotspot: {
      top: 50,
      left: 58,
    },
    types: [
      {
        name: 'doors type 1',
        image: 'doors/type1/image',
        options: [
          {
            name: 'doors type 1 option 1',
            description: 'doors type 1 option 1 description',
            image: 'doors/type1/option1.image',
          },
        ],
      },
    ],
  },
  {
    name: 'windows',
    icon: 'images/windows.svg',
    hotspot: {
      top: 46,
      left: 101,
    },
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat.',
    types: [
      {
        name: 'windows type 1',
        image: 'images/windows/type1/window1.jpeg',
        options: [
          {
            name: 'windows type 1 option 1',
            description: 'windows type 1 option 1 description',
            image: 'images/windows/type1/window1.jpeg',
          },
          {
            name: 'windows type 1 option 2',
            description: 'windows type 1 option 2 description',
            image: 'images/windows/type1/window1.jpeg',
          },
          {
            name: 'windows type 1 option 3',
            description: 'windows type 1 option 3 description',
            image: 'images/windows/type1/window1.jpeg',
          },
          {
            name: 'windows type 1 option 4',
            description: 'windows type 5 option 4 description',
            image: 'images/windows/type1/window1.jpeg',
          },
          {
            name: 'windows type 1 option 5',
            description: 'windows type 1 option 5 description',
            image: 'images/windows/type1/window1.jpeg',
          },
          {
            name: 'windows type 1 option 6',
            description: 'windows type 1 option 6 description',
            image: 'images/windows/type1/window1.jpeg',
          },
          {
            name: 'windows type 1 option 7',
            description: 'windows type 1 option 7 description',
            image: 'images/windows/type1/window1.jpeg',
          },
          {
            name: 'windows type 1 option 8',
            description: 'windows type 1 option 8 description',
            image: 'images/windows/type1/window1.jpeg',
          },
          {
            name: 'windows type 1 option 9',
            description: 'windows type 1 option 9 description',
            image: 'images/windows/type1/window1.jpeg',
          },
        ],
      },
      {
        name: 'windows type 2',
        image: 'images/windows/type1/window1.jpeg',
        options: [
          {
            name: 'windows type 2 option 1',
            description: 'windows type 2 option 1 description',
            image: 'images/windows/type1/window1.jpeg',
          },
          {
            name: 'windows type 2 option 2',
            description: 'windows type 2 option 2 description',
            image: 'images/windows/type1/window1.jpeg',
          },
          {
            name: 'windows type 2 option 3',
            description: 'windows type 2 option 3 description',
            image: 'images/windows/type1/window1.jpeg',
          },
          {
            name: 'windows type 2 option 4',
            description: 'windows type 5 option 4 description',
            image: 'images/windows/type1/window1.jpeg',
          },
          {
            name: 'windows type 2 option 5',
            description: 'windows type 2 option 5 description',
            image: 'images/windows/type1/window1.jpeg',
          },
          {
            name: 'windows type 2 option 6',
            description: 'windows type 2 option 6 description',
            image: 'images/windows/type1/window1.jpeg',
          },
          {
            name: 'windows type 2 option 7',
            description: 'windows type 2 option 7 description',
            image: 'images/windows/type1/window1.jpeg',
          },
          {
            name: 'windows type 2 option 8',
            description: 'windows type 2 option 8 description',
            image: 'images/windows/type1/window1.jpeg',
          },
          {
            name: 'windows type 2 option 9',
            description: 'windows type 2 option 9 description',
            image: 'images/windows/type1/window1.jpeg',
          },
        ],
      },
    ],
  },
  {
    name: 'garage',
    icon: 'images/garage.svg',
    hotspot: {
      top: 48,
      left: 135,
    },
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat.',
    types: [
      {
        name: 'garage type 1',
        image: 'garage/type1/image',
        options: [
          {
            name: 'garage type 1 option 1',
            description: 'garage type 1 option 1 description',
            image: 'garage/type1/option1.image',
          },
        ],
      },
    ],
  },
  {
    name: 'gazebo',
    icon: 'images/gazebo.svg',
    hotspot: {
      top: 52,
      left: 160,
    },
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat.',
    types: [
      {
        name: 'gazebo type 1',
        image: 'gazebo/type1/image',
        options: [
          {
            name: 'gazebo type 1 option 1',
            description: 'gazebo type 1 option 1 description',
            image: 'gazebo/type1/option1.image',
          },
        ],
      },
    ],
  },
  {
    name: 'pool',
    icon: 'images/pool.svg',
    hotspot: {
      top: 54,
      left: 14,
    },
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat.',
    types: [
      {
        name: 'pool type 1',
        image: 'pool/type1/image',
        options: [
          {
            name: 'pool type 1 option 1',
            description: 'pool type 1 option 1 description',
            image: 'pool/type1/option1.image',
          },
        ],
      },
    ],
  },
  {
    name: 'fencing',
    icon: 'images/fencing.svg',
    hotspot: {
      top: 49,
      left: 24,
    },
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat.',
    types: [
      {
        name: 'fencing type 1',
        image: 'fencing/type1/image',
        options: [
          {
            name: 'fencing type 1 option 1',
            description: 'fencing type 1 option 1 description',
            image: 'fencing/type1/option1.image',
          },
        ],
      },
    ],
  },
]
