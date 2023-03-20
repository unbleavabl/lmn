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
    description: '',
    types: [
      {
        name: 'Shingle roof',
        image: 'images/roofs/asphalt-shingle-roof.jpg',
        options: [
          {
            name: 'Asphalt shingle roof',
            description: '',
            image: 'images/roofs/asphalt-shingle-roof.jpg',
          },
          {
            name: 'Laminated shingle roof',
            description:
              'We chose laminated shingles to provide a more natural and deeper look than that ofered by a conventional 3-tab shingle.  Laminated shingles have a manufactur- er-specifed lifespan of 30 years, while 3-tab shingles have a manufacturer-specifed lifespan of 25 years.',
            image: 'images/roofs/laminated-shingle-roof.jpeg',
          },
        ],
      },
      {
        name: 'Metal roof',
        image: 'images/roofs/metal-roof.png',
        options: [
          {
            name: 'Metal roof',
            description: '',
            image: 'images/roofs/metal-roof.png',
          },
        ],
      },
      {
        name: 'Slate roof',
        image: 'images/roofs/slate-roof.jpg',
        options: [
          {
            name: 'Slate roof',
            description: '',
            image: 'images/roofs/slate-roof.jpg',
          },
        ],
      },
    ],
  },
  {
    name: 'doors',
    icon: 'images/homeicon-01-01.svg',
    description: '',
    hotspot: {
      top: 50,
      left: 58,
    },
    types: [
      {
        name: 'French door',
        image: 'images/doors/french-door.jpg',
        options: [
          {
            name: 'French door',
            description: '',
            image: 'images/doors/french-door.jpg',
          },
        ],
      },
      {
        name: 'Exterior doors',
        image: 'images/doors/full-lit-exterior-door.jpg',
        options: [
          {
            name: 'Full lit exterior door',
            description:
              "We opted for full lite exterior door (slab) as it's enhancing aesthetic of house and helps to pass sufcient sunlight in house.",
            image: 'images/doors/full-lit-exterior-door.jpg',
          },
          {
            name: 'Patio door',
            description: '',
            image: 'images/doors/patio-door.jpg',
          },
          {
            name: 'Storme door',
            description: '',
            image: 'images/doors/storme-door.jpg',
          },
        ],
      },
      {
        name: 'Interior door',
        image: 'images/doors/interior-door.jpg',
        options: [
          {
            name: 'Interior door',
            description: '',
            image: 'images/doors/interior-door.jpg',
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
    description: '',
    types: [
      {
        name: 'Bay window',
        image: 'images/windows/bay-window.jpg',
        options: [
          {
            name: 'Bay window',
            description:
              'We always wanted to have a Bay window. Just love how it projects outward from the main walls of a building and form a bay or extension. We have three or more distinct windows with openable sashes on the sides, and usually a fxed front section.',
            image: 'images/windows/bay-window.jpg',
          },
        ],
      },
      {
        name: 'Double hung window',
        image: 'images/windows/double-hung-window.jpg',
        options: [
          {
            name: 'Double hung window',
            description: '',
            image: 'images/windows/double-hung-window.jpg',
          },
        ],
      },
      {
        name: 'Picture window',
        image: 'images/windows/picture-window.jpg',
        options: [
          {
            name: 'Picture window',
            description:
              'We opted for picture window along with double hung side window as it just looks so beautiful and helps with our centralized cooling and heating system.',
            image: 'images/windows/picture-window.jpg',
          },
          {
            name: 'Picture windows',
            description: '',
            image: 'images/windows/picture-windows.jpg',
          },
        ],
      },
      {
        name: 'Single hung window',
        image: 'images/windows/single-hung-window.jpg',
        options: [
          {
            name: 'Single hung window',
            description: '',
            image: 'images/windows/single-hung-window.jpg',
          },
        ],
      },
      {
        name: 'Sliding window',
        image: 'images/windows/sliding-window.jpg',
        options: [
          {
            name: 'Sliding window',
            description: '',
            image: 'images/windows/sliding-window.jpg',
          },
        ],
      },
    ],
  },
  {
    name: 'vents',
    icon: 'images/homeicon-01-01.svg',
    hotspot: {
      top: 20,
      left: 56,
    },
    description: '',
    types: [
      {
        name: 'Furnace vent',
        image: 'images/vents/furnace-vent.jpg',
        options: [
          {
            name: 'Furnace vent',
            description: '',
            image: 'images/vents/furnace-vent.jpg',
          },
        ],
      },
      {
        name: 'Pipe Jack',
        image: 'images/vents/pipejack.jpg',
        options: [
          {
            name: 'Pipe Jack',
            description:
              "Plastic pipe jack is used to pass sewer gases from houses, we opted for plastic pipe jack because it's cost efective. ",
            image: 'images/vents/pipejack.jpg',
          },
        ],
      },
      {
        name: 'Power roof vent',
        image: 'images/vents/power-roof-vent.jpg',
        options: [
          {
            name: 'Power roof vent',
            description: '',
            image: 'images/vents/power-roof-vent.jpg',
          },
        ],
      },
      {
        name: 'Ridge vent',
        image: 'images/vents/ridge-vent.jpg',
        options: [
          {
            name: 'Ridge vent',
            description:
              'Installed at the peak of a sloped roof, the ridge vent allows damp, warm air to escape from the attic. A properly installed ridge vent increases energy efciency and prolongs the life of your roof',
            image: 'images/vents/ridge-vent.jpg',
          },
        ],
      },
      {
        name: 'Turbine vent',
        image: 'images/vents/turbine-vent.jpeg',
        options: [
          {
            name: 'Turbine vent',
            description: '',
            image: 'images/vents/turbine-vent.jpeg',
          },
        ],
      },
      {
        name: 'Turtle vent',
        image: 'images/vents/turtle-vent.jpg',
        options: [
          {
            name: 'Turtle vent',
            description:
              'We used Turtle vent for kitchen and bathrooms because it was pocket-friendly.',
            image: 'images/vents/turtle-vent.jpg',
          },
        ],
      },
    ],
  },
]
