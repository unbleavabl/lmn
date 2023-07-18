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
        name: 'roof types',
        icon: 'images/roof.svg',
        hotspot: {
          top: 20,
          left: 82,
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
        ],
      },
      {
        name: 'roof component',
        icon: 'images/roof.svg',
        hotspot: {
          top: 20,
          left: 89,
        },
        description:
          "We opted for metal gutter, rain gutter's main purpose is to funnel water off the roof and away from the home.",
        image: 'images/roofs/laminated-shingle-wide.jpeg',
        typeTitle: 'Roof types and elements',
        types: [
          {
            name: 'Roof cladding',
            image: 'images/roofs/cladding/asphalt-shingle.jpg',
            options: [
              {
                name: 'Metal cladding',
                description:
                  'Metal Roofing panels can be constructed of aluminium, galvanized, Zincalume, copper, and stainless steel. Metal roof is lightweight and water-resistant',
                image: 'images/roofs/cladding/metal.png',
              },
              {
                name: 'Laminated / Architectural Shingle',
                description:
                  'Laminated shingles provide a more natural and deeper look than that offered by a conventional 3-tab shingle. Laminated shingles have a manufacturer-specified lifespan of 30 years, while 3-tab shingles have a manufacturer-specified lifespan of 25 years',
                image: 'images/roofs/cladding/laminated-shingle.jpeg',
              },
              {
                name: '3 Tab Shingle',
                description:
                  'A 3-tab shingle is distinguished by three uniform cut-outs, or tabs, made along the lower edge of the shingles. They are more cost-effective than architectural shingles and provide a nice, uniform look',
                image: '',
              },
              {
                name: 'Ridge shingle',
                description:
                  'Ridge shingles cover the peak of the roof, where two angles meet, and they play a critical role in keeping rain and melting snow from leaking into the house',
                image: 'images/roofs/cladding/ridge-shingle.png',
              },
              {
                name: 'Clay tile roofing',
                description:
                  'Tile roofs are constructed of clay or concrete. It can weigh 650-1840 lbs, which requires stronger roof framing, and also has a lifespan of 50 years',
                image: 'images/roofs/cladding/clay-tile.jpg',
              },
              {
                name: 'Slate tile roofing',
                description:
                  'Slate is natural stone tiles that last for hundreds of years. It resists chipping and cracking and is fireproof compared to other shingles. Also, it has a low maintenance cost',
                image: 'images/roofs/cladding/slate-tile.jpg',
              },
              {
                name: 'Wood shake roofing',
                description:
                  'Wood Shakes are usually made up of western red cedar. They are available in 18” and 24” lengths and widths not less than 3”. Untreated shakes have a lifespan of 15-20 years, and treated shakes have a lifespan of 30 years. The weight of wood shakes is between 200-400 pounds',
                image: 'images/roofs/cladding/wood-shake.jpg',
              },
              {
                name: 'Wood Shingles',
                description:
                  'Wood shingles can be installed using various exposures depending on the length of shingles. Untreated shingles have a lifespan of 15-20 years, and treated shingles have a lifespan of 30 years',
                image: 'images/roofs/cladding/wood-shingle.jpg',
              },
              {
                name: 'Modified Bitumen Roofing',
                description:
                  'Modified bitumen is thought of as the evolutionary cousin of the built-up roofing systems (BUR) that have been used on low-slope roofs for more than 100 years. It is made of asphalt combined with polymerized rubber or plastic, then reinforced with fiberglass to create a rugged-yet-flexible waterproof membrane',
                image: 'images/roofs/cladding/modified-bitumen.jpg',
              },
              {
                name: 'Rolled Roofing',
                description:
                  'Roll roofing is a material roll used for covering the roofs of buildings that feature low-sloped roofs in the Northern regions of the United States, Canada, and a few European nations. The commonly used roll roofing material is asphalt roll roofing. This material is the same as that used in asphalt shingles',
                image: 'images/roofs/cladding/rolled-roofing.jpg',
              },
            ],
          },
          {
            name: 'Roof & other Vents',
            image: 'images/roofs/vents/turtle.jpg',
            options: [
              {
                name: 'Turbine vent',
                description:
                  'A turbine vent is a wind-powered exhaust vent that helps to tug unwanted heat and moisture from the attic space. When the wind blows, it spins, pulling air out of the attic. In doing so, it helps to reduce the risk of wood rot, mold, and mildew',
                image: 'images/roofs/vents/turbine.jpeg',
              },
              {
                name: 'Furnace vent',
                description:
                  'A furnace vent is an important component of the combustion process of a gas furnace. A venting system ensures that the hazardous gases are removed from the heat exchangers and burners at the end of a heating cycle',
                image: 'images/roofs/vents/furnace.jpg',
              },
              {
                name: 'Power roof vent',
                description:
                  'Roof-mount power fans are a type of motor-driven attic exhaust vent that is an important element of the attic ventilation system for each roof. It helps pull air out of the attic, reducing the risk of wood rot, mold, and mildew',
                image: 'images/roofs/vents/power-roof.jpg',
              },
              {
                name: 'Turtle vent',
                description:
                  'Turtle vents are non-mechanical curved vents (like a turtle shell) that allow hot air to escape the attic space',
                image: 'images/roofs/vents/turtle.jpg',
              },
              {
                name: 'Ridge vent',
                description:
                  'Installed at the peak of a sloped roof, the ridge vent allows damp, warm air to escape from the attic. A properly installed ridge vent increases energy efficiency and prolongs the life of your roof',
                image: 'images/roofs/vents/ridge.jpg',
              },
              {
                name: 'Roof Pipe jack',
                description:
                  'A re-formed flange placed over a vent pipe to seal the roof around the vent pipe opening. Made of lead, rubber, or metal',
                image: 'images/roofs/vents/pipejack.jpg',
              },
              {
                name: 'Split boot / Mast head',
                description:
                  'A split boot or masthead is used to take the electrical supply lines inside the house',
                image: '',
              },
              {
                name: 'Gable Vent',
                description:
                  'A gable vent is an opening that allows the flow of air from one part of the gable roof to the other. As opposed to active ventilation, gable vents allow proper air circulation inside the attic. They provide a natural airflow in your home',
                image: 'images/roofs/vents/gable.jpg',
              },
            ],
          },
          {
            name: 'Roof Under lay',
            image: 'images/roofs/underlay/15-pound-felt.jpg',
            options: [
              {
                name: '15 Pound felt',
                description:
                  '15 Pound felt is a roofing paper-like sheet material saturated with asphalt and sold in rolls. Asphalt felt is used as a moisture barrier under roofing, side walls, and flooring',
                image: 'images/roofs/underlay/15-pound-felt.jpg',
              },
              {
                name: 'Synthetic felt',
                description:
                  'Synthetic underlayment is a layer of laminated polypropylene or polyethylene plastic material that goes over the roof deck. Its purpose is to provide an extra layer of protection to the roof system',
                image: 'images/roofs/underlay/synthetic-felt.jpg',
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
                  'It’s a rectangular-shaped gutter. It may be lined with EPDM rubber, metal, asphalt, or roofing felt and may be concealed behind a parapet or the eaves or in a roof valley',
                image: 'images/roofs/gutter/box.jpg',
              },
              {
                name: 'K style gutter',
                description:
                  'K style gutter is a rain gutter that features a flat bottom with a curved edge, similar to crown molding. The seamless design of K style gutters allows them to blend in with the roofing of a house or building, making them a popular choice for many homeowners',
                image: 'images/roofs/gutter/k-style.png',
              },
              {
                name: 'Half round gutter',
                description:
                  'Half-round Gutters resemble a tube that has been cut in half. These gutters have a symmetrical U shape that complements older, historic homes. However, the round shape can be a good match for modern homes that are designed to be less angular than normal',
                image: 'images/roofs/gutter/half-round.jpg',
              },
              {
                name: 'Gutter guard',
                description:
                  'Gutter guards are designed to prevent leaves, pine needles, and other debris from accumulating in your gutters',
                image: '',
              },
              {
                name: 'Down Spout',
                description:
                  'A downspout is a lightweight tube that extends vertically from the gutter trough to the ground and exists to direct excess rainwater away from your home in a controlled manner',
                image: 'images/roofs/gutter/down-spout.png',
              },
            ],
          },
          {
            name: 'Fascia',
            image: 'images/roofs/fascia/fascia.jpg',
            options: [
              {
                name: 'Fascia',
                description:
                  "Technically part of the roof system of your house, but from the ground, it looks like part of the wall. Its purpose is to cover the ends of the rafters, and because that's where water drains off the roof, the gutters are often attached to it",
                image: 'images/roofs/fascia/fascia.jpg',
              },
            ],
          },
          {
            name: 'Soffit',
            image: 'images/roofs/soffit/soffit.jpg',
            options: [
              {
                name: 'Soffit',
                description:
                  'Soffit is used to protect rafters from the elements. Keeping moisture away from the rafters reduces the chance of mold and helps preserve the life of the materials',
                image: 'images/roofs/soffit/soffit.jpg',
              },
            ],
          },
          {
            name: 'Satellite Dish',
            image: '',
            options: [
              {
                name: 'Satellite Dish',
                description:
                  'A parabolic microwave antenna used to transmit and receive satellite signals. On the downlink, the dish collects data or video signals from orbiting satellites and focuses them to where a feed horn collects them and passes the signal on to be amplified and sent to a satellite receiver box',
                image: '',
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
          top: 45,
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
                  'A picture window is a single-pane window that frames the view outside like a picture. They are usually larger than regular windows and fixed, meaning they do not open',
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
                  'A bay window is a space projecting outward from the main walls of a building and forming a bay in a room',
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
                  'A double-hung window, also commonly referred to as a double-sash window, has 2 movable sashes that move up and down',
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
                  'A single-hung window, also known as a single-sash window, is a type of window with a lower operable sash and an upper fixed sash. The bottom part of the window slides up and down, while the top part remains stationary',
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
                  'It is a type of window that opens up by sliding along a top and bottom track in the window frame',
                image: 'images/windows/sliding.jpg',
              },
            ],
          },
        ],
      },
      {
        name: 'window components',
        icon: 'images/windows.svg',
        hotspot: {
          top: 52,
          left: 101,
        },
        description: '',
        image: 'images/window-components/awning.jpg',
        types: [
          {
            name: 'Awning',
            image: 'images/window-components/awning.jpg',
            options: [
              {
                name: 'Awning',
                description:
                  'A pre-manufactured vertical or horizontal fixed panel type, aluminum or steel awning, for doors or windows',
                image: 'images/window-components/awning.jpg',
              },
            ],
          },
          {
            name: 'Window wrap',
            image: 'images/window-components/window-wrap.jpg',
            options: [
              {
                name: 'Window wrap',
                description:
                  'The window wrap is the material that is installed around the outside of windows. Window wrap typically consists of vinyl-coated aluminum that is rolled onto the surface of the window frame',
                image: 'images/window-components/window-wrap.jpg',
              },
            ],
          },
          {
            name: 'Glazing bead',
            image: 'images/window-components/glazing-bead.jpg',
            options: [
              {
                name: 'Glazing bead',
                description:
                  'The glazing bead is a vinyl strip along your window frame that helps block out drafts',
                image: 'images/window-components/glazing-bead.jpg',
              },
            ],
          },
          {
            name: 'Window shutters',
            image: 'images/window-components/window-shutters.jpg',
            options: [
              {
                name: 'Window shutters',
                description:
                  'Window screens primarily maintain the view and airflow of windows while protecting against insects from flying or crawling inside the house',
                image: 'images/window-components/window-shutters.jpg',
              },
            ],
          },
          {
            name: 'Window Screen',
            image: 'images/window-components/window-screen.jpg',
            options: [
              {
                name: 'Window Screen',
                description:
                  'Window screens primarily maintain the view and airflow of windows while protecting against insects from flying or crawling inside the house.',
                image: 'images/window-components/window-screen.jpg',
              },
            ],
          },
        ],
      },
      {
        name: 'Drive way, Stairs & fence',
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
            name: 'Concrete driveway',
            image: 'images/outdoor/concrete-driveway.jpg',
            options: [
              {
                name: 'Concrete Driveway',
                description:
                  "Concrete driveways also called as cement driveways offer a variety of decorative options which make these driveways unique from other methods of driveway construction. A concrete driveway doesn't just last a little longer than asphalt. On average, it can last 50-60% longer. The secret behind the strength of concrete lies in the science. Concrete is made from a paste made of portland cement and water, and large and small aggregates (rocks).",
                image: 'images/outdoor/concrete-driveway.jpg',
              },
            ],
          },
          {
            name: 'Concrete Staircase',
            image: 'images/outdoor/concrete-stairs.png',
            options: [
              {
                name: 'Concrete Staircase',
                description:
                  'Concrete Stairs are the ideal method of providing access to basements, upper floors and lofts in both commercial and residential projects. Landing slabs can be cast along with the stair flight or as separate units depending on individual project requirements.',
                image: 'images/outdoor/concrete-stairs.png',
              },
            ],
          },
          {
            name: 'Fence',
            image: 'images/outdoor/wooden-fence.jpg',
            options: [
              {
                name: 'Board fence',
                description:
                  'Constructed of wood, metal, or concrete posts which are usually installed 8’ in the center 2”x4”x8’ rails run horizontally. Depending on height, there may be 2 or 3 rails per fence section',
                image: 'images/outdoor/fence/board.jpg',
              },
              {
                name: 'Shadow box fence',
                description:
                  'Constructed of 3 rails and the boards are equally spaced and installed on both sides of the fence. Also referred to as a Good Neighbour or Privacy Fence',
                image: 'images/outdoor/fence/shadow-box.jpg',
              },
              {
                name: 'Picket fence',
                description:
                  'Constructed in the same manner as a board fence. Rails, Posts, and Board/Pickets. The boards are equally spaced allows for airflow. Does not provide privacy like a board fence',
                image: 'images/outdoor/fence/picket.jpg',
              },
              {
                name: 'Split rail fence',
                description:
                  'Constructed of cedar hand-split posts and rails for a rustic look. 2 rails high are usually 3’ high, 3 rails 4’, and 4 rails 5’. 2 & 3 rail fences installed with wire mesh. Wire mesh keeps small animals and pets from getting through the fence',
                image: 'images/outdoor/fence/split-rail.jpg',
              },
              {
                name: 'Vinyl fence',
                description:
                  'Constructed of posts that come in a variety of sizes, set in concrete, posts are capped. Fence heights are 4’, 5’, and 6’. Vinyl panels are installed between two vinyl rails. Vinyl fences can be simple or complex in design',
                image: 'images/outdoor/fence/vinyl.jpg',
              },
              {
                name: 'Chainlink fence',
                description:
                  'Constructed of galvanized posts set in concrete on 8’ or 10’ centers. Line posts are 1 5/8” in diameter, end, corner, and gate posts are 2” in diameter. Top rail is 1 3/8” in diameter',
                image: 'images/outdoor/fence/chain-link.jpg',
              },
              {
                name: 'Wrought iron fence',
                description:
                  'Constructed of iron welded together to create sections. Wrought iron fences can be simple or ornate in design. Does not provide privacy as other materials do',
                image: 'images/outdoor/fence/wrought-iron.jpg',
              },
              {
                name: 'Metal fence',
                description:
                  'Constructed of metal or aluminium. Panels come in various heights and lengths. Used around pools, gardens, and communities',
                image: 'images/outdoor/fence/metal.jpg',
              },
            ],
          },
        ],
      },
      {
        name: 'Siding, Wraps & Components',
        icon: 'images/windows.svg',
        hotspot: {
          top: 50,
          left: 88,
        },
        description:
          'We went for a vinyl siding (which is a plastic exterior siding) for decoration and weatherproofing. It was also pocket friendly and gave us the sturdiness we were looking for.',
        image: 'images/siding-wrap-components/siding/vinyl-wide.jpg',
        types: [
          {
            name: 'Siding',
            image: 'images/siding-wrap-components/siding/vinyl.jpg',
            options: [
              {
                name: 'Vinyl siding',
                description:
                  'Vinyl sidings are plastic exterior siding for houses and small apartment buildings. Primarily used for decoration and weatherproofing, imitating wood clapboard, board and batten, or shakes, they are an alternative to other materials such as aluminium or fiber cement siding',
                image: 'images/siding-wrap-components/siding/vinyl.jpg',
              },
              {
                name: 'Metal siding',
                description:
                  'Aluminium siding is made from aluminium coil stock, which is chemically coated to protect the metal and then painted for further protection, as well as aesthetics. After coating, the siding is baked for durability, with enamel often added to create desired textures',
                image: 'images/siding-wrap-components/siding/metal.jpg',
              },
              {
                name: 'Wooden siding',
                description:
                  'Wood siding, or “cladding,” is a natural, attractive material used to cover and protect the exterior of a house. Some sidings are designed for vertical installation in a board-and-batten style. Others, such as shingles, clapboards, or shakes, are installed horizontally',
                image: 'images/siding-wrap-components/siding/wooden.jpg',
              },
              {
                name: 'Stucco siding',
                description:
                  'Stucco sidings are solid, water-shedding, and impact-resistant. They offer rock-hard protection to the sub-wall, but water that gets in is not trapped between the siding and the structure. This makes stucco resistant to rot and fungus and protects the air quality inside the house',
                image: 'images/siding-wrap-components/siding/stucco.jpg',
              },
              {
                name: 'Brick siding',
                description:
                  'Brick siding, also known as brick veneer, is essentially a freestanding brick wall installed on the exterior wood frame. The appearance of brick siding might make a home look like solid brick walls support it. However, brick siding offers no structural properties to homes',
                image: 'images/siding-wrap-components/siding/brick.jpg',
              },
            ],
          },
          {
            name: 'Wraps',
            image: 'images/siding-wrap-components/wrap/house.webp',
            options: [
              {
                name: 'House wrap',
                description:
                  'House wraps prevent moisture, mold, and drafts from entering your home and can act as a strong barrier against moisture or wind. House wrap is especially useful in humid climates that receive a lot of rain because it can prevent damage from water penetration',
                image: 'images/siding-wrap-components/wrap/house.webp',
              },
              {
                name: 'Aluminium foil wrap',
                description:
                  'House wraps prevent moisture, mold, and drafts from entering your home and can act as a strong barrier against moisture or wind. Foil vapor barrier will protect the building structure by blocking moisture from getting inside walls',
                image: 'images/siding-wrap-components/wrap/aluminium-foil.jpg',
              },
            ],
          },
          {
            name: 'Siding Components',
            image:
              'images/siding-wrap-components/siding-components/inside-corner-post.jpg',
            options: [
              {
                name: 'Inside Corner Post',
                description:
                  'An Inside Corner Post is used at the inner corners of a wall, where the siding meets from two adjoining walls',
                image:
                  'images/siding-wrap-components/siding-components/inside-corner-post.jpg',
              },
              {
                name: 'Outside corner post',
                description:
                  'An Outside Corner Post protects corners and has a receiving channel that hides the ends of siding panels for a finished, professional vinyl siding installation',
                image:
                  'images/siding-wrap-components/siding-components/outside-corner-post.jpg',
              },
              {
                name: 'J trim',
                description:
                  'J-Trim is used to cap raw panel edges where run-off is not a problem. Most commonly, it is used to cap the top edges of skirting, the top and sides of doors, the bottom and sides of windows, and in many cases, the top of windows for aesthetics and continuity',
                image:
                  'images/siding-wrap-components/siding-components/j-trim.jpg',
              },
              {
                name: 'Dryer Vent Cover',
                description:
                  'An energy-efficient dryer vent cover blocks animals from coming inside while also reducing lint buildup, thus lowering the chances of developing a clog',
                image:
                  'images/siding-wrap-components/siding-components/dryer-vent-cover.jpg',
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
        name: 'Outdoor Structures',
        icon: 'images/windows.svg',
        hotspot: {
          top: 50,
          left: 137,
        },
        description:
          'This includes Detached Garage, Sheds, decks & other outdoor structures which are not part of the house.',
        image: 'images/outdoor-structures/garage-door.jpg',
        types: [
          {
            name: 'Garage',
            image: 'images/outdoor-structures/garage.jpg',
            options: [
              {
                name: 'Garage',
                description:
                  'A simple roofed structure made of metal used for garder storage, to shelter animals, or as a workshop',
                image: 'images/outdoor-structures/garage.jpg',
              },
            ],
          },
          {
            name: 'Metal Shed',
            image: 'images/outdoor-structures/metal-shed.jpg',
            options: [
              {
                name: 'Metal Shed',
                description:
                  'A simple roofed structure made of metal used for garder storage, to shelter animals, or as a workshop',
                image: 'images/outdoor-structures/metal-shed.jpg',
              },
            ],
          },
          {
            name: 'Vinyl Shed',
            image: 'images/outdoor-structures/vinyl-shed.jpg',
            options: [
              {
                name: 'Vinyl Shed',
                description:
                  'Its a simple roofed structure made of vinyl used for garden storage, to shelter animals, or as a workshop.',
                image: 'images/outdoor-structures/vinyl-shed.jpg',
              },
            ],
          },
          {
            name: 'Car port',
            image: 'images/outdoor-structures/car-port.jpg',
            options: [
              {
                name: 'Car port',
                description:
                  'A shelter for a car consisting of a roof supported on posts, built beside a house',
                image: 'images/outdoor-structures/car-port.jpg',
              },
            ],
          },
          {
            name: 'Back yard deck',
            image: 'images/outdoor-structures/back-yard-deck.jpg',
            options: [
              {
                name: 'Back yard deck',
                description:
                  'A deck is typically located at the back of a house and overlooks the backyard.',
                image: 'images/outdoor-structures/back-yard-deck.jpg',
              },
            ],
          },
          {
            name: 'Gazebo',
            image: 'images/outdoor-structures/gazebo.jpg',
            options: [
              {
                name: 'Gazebo',
                description:
                  'A small building, especially one in the garden of a house, that gives a wide view of the surrounding area',
                image: 'images/outdoor-structures/gazebo.jpg',
              },
            ],
          },
          {
            name: 'Patio & Patio cover',
            image: 'images/outdoor-structures/patio-cover.jpg',
            options: [
              {
                name: 'Patio & Patio cover',
                description:
                  'A patio refers to the paved outdoor area adjoining a house. A patio cover is the structure covering a patio or deck area consisting of a solid or open roof and structural supports, attached to or detached from the primary dwelling',
                image: 'images/outdoor-structures/patio-cover.jpg',
              },
            ],
          },
          {
            name: 'Pool enclosure',
            image: 'images/outdoor-structures/pool-enclosure.webp',
            options: [
              {
                name: 'Pool enclosure',
                description:
                  'A pool enclosure is a structure that surrounds the sides and top of a pool',
                image: 'images/outdoor-structures/pool-enclosure.webp',
              },
            ],
          },
          {
            name: 'Air conditioner fins',
            image: 'images/outdoor-structures/air-conditioner-fins.jpeg',
            options: [
              {
                name: 'Air conditioner fins',
                description:
                  "Thin metal slats that run along the outline of your exterior AC unit. The purpose of the condenser fins is to move warm air away from the air conditioner while it's running",
                image: 'images/outdoor-structures/air-conditioner-fins.jpeg',
              },
            ],
          },
        ],
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
