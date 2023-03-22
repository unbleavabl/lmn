export type Option = {
  name: string
  description: string
  image: string
}

export type Types = {
  name: string
  image: string
  options: Array<Option>
}

export type Item = {
  name: string
  icon: string
  image: string
  hotspot: {
    top: number
    left: number
  }
  description: string
  typeTitle?: string
  types?: Array<Types>
}

export type Info = {
  [key: string]: {
    image: string
    data: Item[]
  }
}

export const info: Info = {
  exterior: {
    image: 'images/MainHome.png',
    data: [
      {
        name: 'roof',
        icon: 'images/roof.svg',
        hotspot: {
          top: 20,
          left: 86,
        },
        description:
          'We chose laminated shingles to provide a more natural and deeper look than that offered by a conventional 3-tab shingle. Laminated shingles have a manufacturer-specifed lifespan of 30 years, while 3-tab shingles have a manufacturer-specifed lifespan of 25 years. ',
        image: 'images/roofs/laminated-shingle-wide.jpeg',
        typeTitle: 'Roof types and elements',
        types: [
          {
            name: 'Roof types',
            image: 'images/roofs/types/gable.jpg',
            options: [
              {
                name: 'Gable',
                description:
                  'Two roof sections sloping in opposite directions and placed such that the highest, horizontal edges meet to form the roof ridge',
                image: 'images/roofs/types/gable.jpg',
              },
              {
                name: 'Flat',
                description:
                  'A flat roof is a roof which is almost level in contrast to the many types of sloped roofs.',
                image: 'images/roofs/types/flat.jpg',
              },
              {
                name: 'Saltbox',
                description:
                  'A saltbox roof is an asymmetrical gable-style roof. The front side is usually short with a slight slope, while the back side is long.',
                image: 'images/roofs/types/saltbox.jpg',
              },
              {
                name: 'Mansard',
                description:
                  'A  mansard roof is a type of roof having two slopes on every side, the lower slope being considerably steeper than the upper.',
                image: 'images/roofs/types/mansard.jpg',
              },
              {
                name: 'Gambrel',
                description:
                  'A gambrel or gambrel roof is a usually symmetrical two-sided roof with two slopes on each side. The upper slope is positioned at a shallow angle, while the lower slope is steep.',
                image: 'images/roofs/types/gambrel.jpg',
              },
            ],
          },
          {
            name: 'Roof cladding',
            image: 'images/roofs/cladding/asphalt-shingle.jpg',
            options: [
              {
                name: 'Asphalt shingle',
                description:
                  'Asphalt shingles (also called composition shingles) are the most common roofing material used today. The shingles consist of asphalt-impregnated felt paper or glass fiber mats, coated with a layer of asphalt and covered with granular material. Asphalt shingles are occasionally installed over a single layer of wood shingles or slate shingles.  However, the new shingles will perform better and last longer if the old roofing materials are removed.',
                image: 'images/roofs/cladding/asphalt-shingle.jpg',
              },
              {
                name: 'Metal Roofing',
                description:
                  'A metal roof is a roofing system featuring metal pieces or tiles exhibiting corrosion resistance, impermeability to water, and long life. It is a component of the building envelope. The metal pieces may be a covering on a structural, non-waterproof roof, or they could be self-supporting sheets',
                image: 'images/roofs/cladding/metal.png',
              },
              {
                name: 'Laminated shingles',
                description:
                  'Laminated shingle is a stronger, denser version of a 3-tab asphalt shingle. It has multiple layers, uses a thicker and heavier fiberglass base mat, and the surface contains ceramic-coated minerals encased in water-resistant, high-quality asphalt. These shingles are created by bonding two asphalt shingles together, giving them a distinct three-dimensional appearance. Laminates are generally heavier in weight, and allow for greater design flexibility. 3-tab asphalt shingles are made of asphalt, are flat and have a single tab shape and size. Laminate shingles, or “laminated architectural” shingles, are made of a more refined asphalt, have a heavier base mat and multiple material layers.',
                image: 'images/roofs/cladding/laminated-shingle.jpeg',
              },
            ],
          },
          {
            name: 'Roof vent',
            image: 'images/roofs/vents/turtle.jpg',
            options: [
              {
                name: 'Turtle vent',
                description:
                  "Turtle vents are also called box vents or louvers. They are spaced evenly across your roof and installed close to the roof's ridges. This type of vent is extremely easy to install or add to an existing system. If your roof's ventilation isn't up to par, adding turtle vents could solve the problem.",
                image: 'images/roofs/vents/turtle.jpg',
              },
              {
                name: 'Furnace vent',
                description:
                  'A natural vent pipe is attached to the furnace and run vertically up through the roof. This allows hot combustion exhaust fumes to rise and exit through the roof on their own, in a natural manner.',
                image: 'images/roofs/vents/furnace.jpg',
              },
              {
                name: 'Power roof vent',
                description:
                  'With balanced motor and blade design, power vents quickly exhaust heat or humidity from any attic. They work on a thermostat, which automatically turns the fan on when cooling is needed. Some models also have an extra feature called a humidistat that monitors the moisture level of the air.',
                image: 'images/roofs/vents/power-roof.jpg',
              },
              {
                name: 'Ridge vent',
                description:
                  "A ridge vent is an air exhaust vent installed on the peak of a roof. When installing this vent, an air slot is first cut in the roof deck at the roof's peak. This air slot is then covered by the ridge vent itself. They work by allowing the heat to escape out of the roof through the convection method. This means as the heat in your attic rises, the hot air is pushed out through the vents. You might also hear static vents called turtle vents or box vents.",
                image: 'images/roofs/vents/ridge.jpg',
              },
              {
                name: 'Turbine vent',
                description:
                  'A turbine vent is a wind-powered exhaust vent that helps to tug unwanted heat and moisture from the attic space. When the wind blows, it spins, pulling air out of the attic. In doing so, it helps to reduce the risk of wood rot, mold, and mildew.',
                image: 'images/roofs/vents/turbine.jpeg',
              },
            ],
          },
          {
            name: 'Gutter',
            image: 'images/roofs/gutter/box.jpg',
            options: [
              {
                name: 'Box gutter',
                description:
                  'A box gutter, internal gutter, parallel gutter, or trough gutter is a rain gutter on a roof usually rectangular in shape; it may be lined with EPDM rubber, metal, asphalt, or roofing felt, and may be concealed behind a parapet or the eaves, or in a roof valley.',
                image: 'images/roofs/gutter/box.jpg',
              },
              {
                name: 'Half round gutter',
                description:
                  'Half-round gutters resemble a tube that has been cut in half. These gutters have a symmetrical U-shape that complements older, historic homes. However, the rounded shape can also be a good match for modern homes that are designed to be less angular than the norm.',
                image: 'images/roofs/gutter/half-round.jpg',
              },
              {
                name: 'K style gutter',
                description:
                  'K-style gutters are rain gutters that feature a flat bottom with a curved edge, similar to a crown molding. The seamless design of K-style gutters allows them to blend in with the roofline of a home or building, making them a popular choice for many homeowners.',
                image: 'images/roofs/gutter/k-style.png',
              },
            ],
          },
        ],
      },
      {
        name: 'door',
        icon: 'images/homeicon-01-01.svg',
        description:
          "We opted for full lite exterior door (slab) as it's enhancing aesthetic of house and helps to pass sufficient sunlight in house.",
        image: 'images/doors/full-lit-exterior-wide.jpg',
        hotspot: {
          top: 50,
          left: 58,
        },
        types: [
          {
            name: 'Full lite exterior door',
            image: 'images/doors/full-lit-exterior-door.jpg',
            options: [
              {
                name: 'Full lite exterior door',
                description:
                  "We opted for full lite exterior door (slab) as it's enhancing aesthetic of house and helps to pass sufcient sunlight in house.",
                image: 'images/doors/full-lit-exterior-door.jpg',
              },
            ],
          },
          {
            name: 'French door',
            image: 'images/doors/french-door.jpg',
            options: [
              {
                name: 'French door',
                description:
                  'A french door is a door of light construction which has glass panes extending for most of its length. They are usually fitted as a pair instead of a single door and french doors are sometimes refered to as French windows',
                image: 'images/doors/french-door.jpg',
              },
            ],
          },
          {
            name: 'Storm door',
            image: 'images/doors/storm-door.jpg',
            options: [
              {
                name: 'Storm door',
                description:
                  'A storm door is a type of door that is installed in front of an exterior access door to protect it from bad weather and allow ventilation. Storm doors generally have interchangeable glass panels and window screen panels to provide visibility and prevent flying insects from entering the home.',
                image: 'images/doors/storm-door.jpg',
              },
            ],
          },
          {
            name: 'Interior door',
            image: 'images/doors/interior-door.jpg',
            options: [
              {
                name: 'Interior door',
                description:
                  'Interior doors are often made of composite or plywood. Conversely, exterior doors tend to be made from materials such as vinyl, fiberglass, wood, and metal. In addition to this, entry doors are more likely to have window panes, which are ideal for looking outside or viewing visitors.',
                image: 'images/doors/interior-door.jpg',
              },
            ],
          },
        ],
      },
      {
        name: 'window',
        icon: 'images/windows.svg',
        hotspot: {
          top: 46,
          left: 101,
        },
        description:
          'We opted for picture window along with double hung side window as it just looks so beautiful and helps with our centralized cooling and heating system.',
        image: 'images/windows/picture-wide.jpg',
        types: [
          {
            name: 'Picture window',
            image: 'images/windows/picture.jpg',
            options: [
              {
                name: 'Picture window',
                description:
                  'A picture window is a single pane window that frames a view outside like a picture. Picture windows are usually larger than regular windows and fixed, meaning they do not open.',
                image: 'images/windows/picture.jpg',
              },
            ],
          },
          {
            name: 'Bay window',
            image: 'images/windows/bay.jpg',
            options: [
              {
                name: 'Bay window',
                description:
                  'A bay window is a window space projecting outward from the main walls of a building and forming a bay in a room',
                image: 'images/windows/bay.jpg',
              },
            ],
          },
          {
            name: 'Double hung window',
            image: 'images/windows/double-hung.jpg',
            options: [
              {
                name: 'Double hung window',
                description:
                  'A double-hung window, also commonly referred to as a double-sash window, is a type of window that has two operable sashes that slide up and down. There are two main operable parts of a double-hung window — the top sash and the bottom sash. They are both able to open to provide ventilation.',
                image: 'images/windows/double-hung.jpg',
              },
            ],
          },
          {
            name: 'Single hung window',
            image: 'images/windows/single-hung.jpg',
            options: [
              {
                name: 'Single hung window',
                description:
                  'A single-hung window, also known as a single-sash window, is a type of window with a lower, operable sash and an upper, fixed sash. This means that the bottom part of the window slides up and down, while the top part remains stationary. Single-hung windows provide ventilation through the bottom sash',
                image: 'images/windows/single-hung.jpg',
              },
            ],
          },
          {
            name: 'Sliding window',
            image: 'images/windows/sliding.jpg',
            options: [
              {
                name: 'Sliding window',
                description:
                  'A sliding window is a window that opens by sliding horizontally along a top and bottom track in the window frame. It is somewhat similar to a double-hung window, just turned on its side.A two panel or two-lite sliding window has one fixed panel of glass, and the other side is a operable sash that slides either left or right to open.',
                image: 'images/windows/sliding.jpg',
              },
            ],
          },
        ],
      },
      {
        name: 'Outdoor',
        icon: 'images/windows.svg',
        hotspot: {
          top: 68,
          left: 28,
        },
        description:
          'Driveways lead from the street to the house or garage and are made with concrete to give an elegant and sturdy look.  We used concrete material for the entrance staircase as well. The color combination was chosen to match with our exterior walls. Also, we opted for a white cedar wooden fence for its rot resistance qualities. It not only defines boundary of the house and keeps animals away from home and looks classy too ! ',
        image: 'images/outdoor/concrete-stairs-wide.png',
        types: [
          {
            name: 'Stairs',
            image: 'images/outdoor/concrete-stairs.png',
            options: [
              {
                name: 'Concrete stairs',
                description:
                  'Concrete Stairs are the ideal method of providing access to basements, upper floors and lofts in both commercial and residential projects. Landing slabs can be cast along with the stair flight or as separate units depending on individual project requirements.',
                image: 'images/outdoor/concrete-stairs.png',
              },
            ],
          },
          {
            name: 'Driveway',
            image: 'images/outdoor/concrete-driveway.jpg',
            options: [
              {
                name: 'Concrete Driveway',
                description:
                  "Concrete driveways also called as cement driveways offer a variety of decorative options which make these driveways unique from other methods of driveway construction.A concrete driveway doesn't just last a little longer than asphalt. On average, it can last 50-60% longer. The secret behind the strength of concrete lies in the science. Concrete is made from a paste made of portland cement and water, and large and small aggregates (rocks).",
                image: 'images/outdoor/concrete-driveway.jpg',
              },
            ],
          },
          {
            name: 'Fence',
            image: 'images/outdoor/wooden-fence.jpg',
            options: [
              {
                name: 'Wooden fence',
                description: '',
                image: 'images/outdoor/wooden-fence.jpg',
              },
            ],
          },
        ],
      },
      {
        name: 'Siding',
        icon: 'images/windows.svg',
        hotspot: {
          top: 50,
          left: 88,
        },
        description:
          'We went for a vinyl siding (which is a plastic exterior siding) for decoration and weatherproofing. It was also pocket friendly and gave us the sturdiness we were looking for.',
        image: 'images/siding/vinyl-wide.jpg',
        types: [
          {
            name: 'Siding',
            image: 'images/siding/vinyl.jpg',
            options: [
              {
                name: 'Vinyl siding',
                description:
                  "Siding is the layer of material placed on the exposed area of a house. It protects your home against harsh weather conditions like snow, rain, strong winds, and other extreme elements. A properly installed siding protects your interior from the cold weather outside during winter. It also retains the heat produced in your home, keeping you warm and comfortable. Vinyl siding is a popular choice among homeowners, and for a variety of reasons. It's relatively inexpensive compared to other siding options, looks great, typically has low maintenance needs, and it's quick and easy to install.",
                image: 'images/siding/vinyl.jpg',
              },
            ],
          },
        ],
      },
      {
        name: 'Light Fixtures',
        icon: 'images/windows.svg',
        hotspot: {
          top: 46,
          left: 120,
        },
        description:
          "These exterior light fixtures are used to illuminate spaces that aren't attached to the house, like the driveway or sidewalk. Post lights are an excellent choice for homes with long driveways or extended outdoor entertaining spaces, like swimming pools.",
        image: 'images/lights/light-fixture-wide.jpeg',
      },
      {
        name: 'Garage',
        icon: 'images/windows.svg',
        hotspot: {
          top: 50,
          left: 137,
        },
        description:
          "We love how an overhead garage door works! It is a door that moves upward to an overhead position when opened. It's usually a series of hinged panels with rollers that move up and down on a metal track.",
        image: 'images/garage/garage-door.jpg',
      },
    ],
  },
  interior: {
    image: 'images/MainInterior.jpg',
    data: [
      {
        name: 'Drywall',
        icon: 'images/homeicon-01-01.svg',
        hotspot: {
          top: 28,
          left: 96,
        },
        description:
          'We chose a drywall which is a type of board. It is easy to install as well as easy to repair incase of damages.',
        image: 'images/drywall/drywall.jpg',
      },
      {
        name: 'Floor',
        icon: 'images/homeicon-01-01.svg',
        hotspot: {
          top: 73,
          left: 144,
        },
        description:
          'We chose to have pre-finished hardwood floor. It gives an amazing natural wood appearance to the floor and life expectancy of this floor material is very high compared to other floor materials. ',
        image: 'images/floor/floor.jpg',
      },
      {
        name: 'Crown Molding',
        icon: 'images/homeicon-01-01.svg',
        hotspot: {
          top: 4,
          left: 41,
        },
        description:
          'We opted for stained crown molding as its giving natural wood edge to the ceiling and it matches with wood floor also it helps to hide rough joints where wall meets the ceiling.',
        image: 'images/molding/crown.jpg',
      },
      {
        name: 'Base Molding',
        icon: 'images/homeicon-01-01.svg',
        hotspot: {
          top: 60,
          left: 33,
        },
        description:
          'We opted for stained base moldings which is applied where the floor and wall meet, forming a visual foundation. It protects the walls from kicks and bumps, furniture and cleaning tools. We chose three-piece members which includes base cap, baseboard and base shoe.',
        image: 'images/molding/base.jpg',
      },
      {
        name: 'Chair Rail Molding',
        icon: 'images/homeicon-01-01.svg',
        hotspot: {
          top: 43,
          left: 38,
        },
        description:
          'We chose to have stained chair molding which is an interior molding usually applied about one third the distance from the floor, paralleling the base molding and encircling the perimeter of a room. used to prevent chairs from marring walls also it is a nice decorative element.',
        image: 'images/molding/chair-rail.jpg',
      },
      {
        name: 'Ceiling Lights',
        icon: 'images/homeicon-01-01.svg',
        hotspot: {
          top: 2,
          left: 110,
        },
        description:
          'We  opted for recessed lighting system in our home, it is cost effective due to its energy saving feature and it looks beautiful.',
        image: 'images/lights/recessed-ceiling.jpg',
      },
    ],
  },
}
