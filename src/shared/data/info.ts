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
        name: 'Roof Surface & Components',
        icon: 'images/roof.svg',
        hotspot: {
          top: 20,
          left: 89,
        },
        description:
          'The roof consists of shingles, underlayment, vents, flashing, and sometimes additional accessories',
        image: 'images/roofs/roof-surface-and-components.jpg',
        typeTitle: 'Roof types and elements',
        types: [
          {
            name: 'Roof cladding',
            image: 'images/roofs/cladding/asphalt-shingle.jpg',
            options: [
              {
                name: 'Metal cladding',
                description:
                  'Metal Roofing panels can be constructed of aluminum, zinzalume, copper, galvanized steel, or stainless steel.  Metal roofs are lighter weight, longer lasting, but susceptible to hail and wind damage',
                image: 'images/roofs/cladding/metal.jpg',
              },
              {
                name: 'Laminated / Architectural Shingle',
                description:
                  'A laminated shingle is a type of roofing material that consists of several layers of different materials, such as fiberglass, asphalt, paper, and granules, that are glued or coated together. Laminated shingles are also called dimensional or architectural shingles because they have a varied size and shape that can create different patterns and hide imperfections on the roof. Laminated shingles are stronger, denser, and more fire-resistant than traditional 3-tab shingles',
                image: 'images/roofs/cladding/laminated-shingle.jpeg',
              },
              {
                name: '3 Tab Shingle',
                description:
                  'A 3-tab shingle is another type of asphalt shingle distinguished by three uniform cutouts or tabs made along the lower edge of the shingles.  They are more cost effective than laminate or architectural shingles and provide a nice uniform look',
                image: 'images/roofs/cladding/3-tab-shingle.jpg',
              },
              {
                name: 'Ridge cap',
                description:
                  'Coverings that cap the ridges and hips of a roof surface where facets meet. They are the highest points of the roof and are sold as a separate product or cut from 3-tab shingles depending on the roof type. Ridge cap generally matches the roof surface type, so look for the correct material',
                image: 'images/roofs/cladding/ridge-shingle.png',
              },
              {
                name: 'Clay tile roofing',
                description:
                  'Ceramic tiles made of clay or shale with a long lifespan and resistance to weather. These tyles typically interlock in a mission or barrel pattern for a wavy appearance but can also be flat. Tiles are held in place with nails and mortar',
                image: 'images/roofs/cladding/clay-tile.jpg',
              },
              {
                name: 'Slate roofing',
                description:
                  'Slate is a natural tile that can last for up to 100 years and is very resistant to wind, hail, and fire. Synthetic slate roofs made of asphalt, aluminum, or plastic resins are more common than the actual stone',
                image: 'images/roofs/cladding/slate-tile.jpg',
              },
              {
                name: 'Wood shakes',
                description:
                  'Roof surface that is made from split pieces of wood, usually 18”-24” long, 6”-10” wide, and 1/2” think. Exposures from various shakes will vary. Felt is installed under the shakes. Wood shake can last anywhere from 15-50 years depending on climate and maintenance. Wood shakes are subject to deterioration like any exterior wood product',
                image: 'images/roofs/cladding/wood-shake.jpg',
              },
              {
                name: 'Wood Shingles',
                description:
                  'Roof surface made from cut pieces of wood with a 5” – 10” exposure. Unlike shakes, these shingles are the same dimensions and have a more uniform appearance. Wood shingles can last from 15-50 years depending on climate and maintenance. Wood shingles are subject to deterioration like any exterior wood product',
                image: 'images/roofs/cladding/wood-shingle.jpg',
              },
              {
                name: 'Modified Bitumen Roofing',
                description:
                  'This roof surface is a combination of asphalt, rubber, plastic, and fiberglass that creates a very sturdy and flexible material to apply to low-slope and flat roof surfaces. Typically, it is rolled in place and adhered to the roll next to it using hot tar. Mod Bit is resistant to damage and can be repaired depending on the size and location of the damage',
                image: 'images/roofs/cladding/modified-bitumen.jpg',
              },
              {
                name: 'Rolled Roofing',
                description:
                  'An asphalt material that comes in rolls and is applied on low-slope or flat roof surfaces. This material is typically installed over felt and overlaps the roll below it. The asphalt material is the same as that used in 3-tab shingles and it has a similar life expectancy',
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
                  'A vent that spins when the wind blows and draws warm air out of the attic. These vents are made from aluminum or galvanized steel and may be painted on site or come with a factory paint finish. Turbine vents are susceptible to hail damage',
                image: 'images/roofs/vents/turbine.jpeg',
              },
              {
                name: 'Furnace vent',
                description:
                  'A vent that allows heat from an appliance exhaust to escape through the roof. These vents typically have a pipe and storm collar and a cap component. The top is called a rain cap and can be replaced separately. Typically sized as up to 5”, 6”, and 8”',
                image: 'images/roofs/vents/furnace.jpg',
              },
              {
                name: 'Power Attic vent',
                description:
                  'A motorized vent with a thermostat that turns on a fan to pull air out of the attic. The power vent itself is under the dome cover and is typically not damaged. The vent cover can be replaced and is made of metal or plastic. May also be powered by an attached solar panel',
                image: 'images/roofs/vents/power-roof.jpg',
              },
              {
                name: 'Turtle vent',
                description:
                  'A square shaped vent resembling a turtle’s shell that allows hot air to escape the attic. Also called a box vent. They are typically made of aluminum, but also may be made be constructed from plastic or galvanized steel',
                image: 'images/roofs/vents/turtle.jpg',
              },
              {
                name: 'Ridge vent',
                description:
                  "A vent installed on the ridges and hips of a roof to allow air to escape. As the ridges are at the roof's highest points, the warm air rises out through the vent. The most common styles are aluminum or shingle-over style. The shingle-over style is a plastic cap installed on the ridge with ridge cap shingles installed through the top of the vent",
                image: 'images/roofs/vents/ridge.jpg',
              },
              {
                name: 'Pipe Jack Flashing',
                description:
                  'Pre-formed collar (metal or plastic) that fits over a plumbing exhaust pipe on the roof. The collar will have a rubber gasket that grips the pipe to prevent water from entering. Lead pipe jacks will be formed around the pipe itself for a waterproof seal',
                image: 'images/roofs/vents/pipejack.jpg',
              },
              {
                name: 'Split Boot Flashing',
                description:
                  'A split-boot flashing is split at one end to allow it to be size correctly to the pipe it will flash. The boot is cut to the point that it is tight against the pipe and then glued together using a rubber adhesive. Commonly installed around electrical mastheads to the entire apparatus does not have to be removed to replace the flashing component',
                image: 'images/roofs/vents/splitboot.jpg',
              },
              {
                name: 'Gable Attic Vent',
                description:
                  'Gable attic vents allow air to flow through the attic instead of just up an out. These vents are installed in the middle of the gable portion of an elevation and are typically made of the same material as the siding. The vents typically have a mesh backing to prevent rodents and bugs from entering the attic space',
                image: 'images/roofs/vents/gable.jpg',
              },
            ],
          },
          {
            name: 'Roof Under lay',
            image: 'images/roofs/underlay/15-pound-felt.jpg',
            options: [
              {
                name: 'Felt paper',
                description:
                  'Felt paper is a waterproof membrane installed under the shingles. The membrane comes in rolls of felt paper that has been soaked in asphalt and comes in different weights (thickness) of 15 or 30 pounds. It is susceptible to drying out in the sun and is not tear resistant',
                image: 'images/roofs/underlay/15-pound-felt.jpg',
              },
              {
                name: 'Synthetic felt',
                description:
                  'Synthetic felt is a polymer-based waterproof material that is also tear and impact resistant. It is more expensive than felt paper but provides a more durable waterproofing surface',
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
                  'A metal gutter that may be lined with a rubber or plastic membrane. This is typically seen on flat roof systems or in commercial applications',
                image: 'images/roofs/gutter/box.jpg',
              },
              {
                name: 'Aluminium gutter',
                description:
                  'These are standard residential gutters that are sized up to 5” or 6”. Gutters are typically formed on site for the entire length of the elevation (seamless). Check to ensure gutters are not installed through drip edge when considering detach and reset operations. May also be made from galvanized steel',
                image: 'images/roofs/gutter/k-style.png',
              },
              {
                name: 'Half round gutter',
                description:
                  'An uncommon U-shaped gutter with a circular downspout system made of metal or sometimes copper. Generally seen in custom or high-end homes or in commercial applications',
                image: 'images/roofs/gutter/half-round.jpg',
              },
              {
                name: 'Gutter guard',
                description:
                  'A barrier that goes over the gutters to prevent granules, leaves, and other debris from entering the gutters and keep them free of debris. It comes in a variety of qualities from simple cut pieces of mesh metal to one-piece seamless gutter systems',
                image: 'images/roofs/gutter/gutterguard.jpg',
              },
              {
                name: 'Downspout',
                description:
                  'A hollow tube that extends perpendicular to the gutters and carries the water down to the ground and away from the home. Downspouts are typically 1” smaller than the gutters that drain to them. Downspouts are susceptible to damage from hail as well as many mechanical hazards like lawn equipment',
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
                  'Fascia faces away from the house and is a trim piece that “connects” the roof to the elevations. It protects the rafters and interior components of the roof from the elements. If gutters are installed, the fascia would be behind them',
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
                  'The soffit connects the edge of the roof to the exterior wall of a house and protects rafters and interior roof components from the elements. The soffit will also aid in ventilation by being perforated or having soffit vents installed to allow air to flow into the attic',
                image: 'images/roofs/soffit/soffit.jpg',
              },
            ],
          },
          {
            name: 'Satellite Dish',
            image: 'images/roofs/satellite/satellite-dish.jpg',
            options: [
              {
                name: 'Satellite Dish',
                description:
                  'Personal satellite dishes may be used for Internet access or for television reception. Satellite dishes that are in an area needing repair will need to be detached and reset. Homeowners typically do not own the equipment',
                image: 'images/roofs/satellite/satellite-dish.jpg',
              },
            ],
          },
          {
            name: 'Skylight',
            image: 'images/roofs/skylight/skylight.jpg',
            options: [
              {
                name: 'Skylight',
                description:
                  'Windows installed in the roof to provide light and ventilation into the home. Skylights are prone to leaks and the flashing and cladding are susceptible to hail damage. May be flat or domed and made of glass or plastic and come in various sizes',
                image: 'images/roofs/skylight/skylight.jpg',
              },
            ],
          },
        ],
      },
      {
        name: 'door',
        icon: 'images/homeicon-01-01.svg',
        description:
          'Exterior doors are typically wood, fiberglass, or metal. Non-wood exterior doors will be insulated to protect the interior from the elements. Doors come in many grades and styles',
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
                  'We opted for a full lite upgraded exterior door with two side-lites and overhead transom, as it enhances the overall aesthetic of the house and helps to pass sufficient sunlight into the house',
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
                  'A French door is usually a higher end door assembly which includes double full lite doors can be used on the exterior or the interior and on the exterior, it is usually used in place of a sliding patio door',
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
                  'A storm door is a type of door that is installed in front of an exterior door to protect it from bad weather and allow ventilation.  Storm doors generally have interchangeable glass panels and window screen panels to provide visibility and prevent insects from entering the home',
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
                  'Interior doors are used on the inside of the dwelling to access different interiors rooms as opposed to exterior doors which access the exterior of the structure. Interior doors are often made of composite plywood, wood veneers, or solid wood',
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
          'Windows are used to let light and air into the dwelling. Typical materials are vinyl, aluminum, and wood.  There are many different styles of window',
        image: 'images/windows/picture-wide.jpg',
        types: [
          {
            name: 'Picture window',
            image: 'images/windows/picture.jpg',
            options: [
              {
                name: 'Picture window',
                description:
                  'A picture window is usually a single sash window that frames the view like a picture.  They are usually larger than regular windows and fixed in place',
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
                  'A bay window is a multi-panel window that projects outward beyond the external wall of a building. This outward projection forms a bay or interior recess and is supported by a sill height wall. Bay windows are typically rectangular or polygonal, and the most common internal angles are 90°, 135° and 150°',
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
                  'A double hung window, also commonly referred to as a double sash window, is a type of window that has two operable sashes that slide up and down.  There are two main operable parts of a double hung window the top sash and the bottom sash that can both slide open',
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
                  'A single hung window, also known as a single sash window, is a type of window with a lower operable sash and an upper fixed sash.  This means that the bottom part of the window slides up and down, while the top part remains stationary.  Single hung windows provide ventilation through the lower sash',
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
                  'A sliding window is a window that opens by sliding horizontally along a top and bottom track in the window frame.  It is somewhat similar to a double hung window, just turned on its side.  A two panel or two lite sliding window has one fixed panel of glass or sash and the other side is operable that slides either left or right to open',
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
                  'Pre-manufactured vertical or horizontal cover that extends over a window or door to offer shade and shelter from rain, wind or snow. most often made of aluminum, steel, or canvas.  Be aware that rigid style awnings may have additional accessories like colored stripes and side panels added',
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
                  'The window wrap is a material that is custom bent and fitted to wrap around the exterior trim and sill of a window frame, it is often factory finished painted aluminum.  It is used to protect the window and exterior trim from weathering and deterioration, but it is susceptible to hail damage',
                image: 'images/window-components/window-wrap.jpg',
              },
            ],
          },
          {
            name: 'Vinyl Glazing Bead',
            image: 'images/window-components/glazing-bead.jpg',
            options: [
              {
                name: 'Vinyl Glazing Bead',
                description:
                  'Vinyl glazing bead is the vinyl strip around the window frame that holds the glass package into the window frame',
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
                  "Shutters are used to control the amount of sunlight that enters a room, to provide privacy, security, and to protect against weather or unwanted intrusion.  Shutters protect against damage, and also enhance a structure's appearance.   shutters may be functional or purely decorative",
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
                  'Window screens primarily maintain the view and airflow of windows while protecting against insects from flying or crawling inside the house',
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
          'Driveways lead from the street to the house or garage and are typically made of concrete. This provides a solid surface to drive onto and provides a aesthetically pleasing appearance. We used concrete for the entrance staircase as well. We chose a cedar fence for its rot resistant qualities. It not only defines the property boundaries but looks nice as well',
        image: 'images/outdoor/concrete-drive-wide.jpg',
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
            image: 'images/outdoor/concrete-stairs.jpg',
            options: [
              {
                name: 'Concrete Staircase',
                description:
                  'Concrete stairs are typically found on the exterior of the dwelling. They are used as entrance stairs to the main level or for access to the basement level',
                image: 'images/outdoor/concrete-stairs.jpg',
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
                  'Board fencing is constructed using a center section (panel) wade with wood slats mounted to 2x4 rails. These panels are then attached to wood or metal post typically installed 8’ on center. If damage is only to the paint or stain, it can be power washed and refinished for a proper repair. If unstained, no repair is necessary',
                image: 'images/outdoor/fence/board.jpg',
              },
              {
                name: 'Shadow box fence',
                description:
                  'Shadow Box fencing is constructed using 3 rails with the wood slats equally spaced to both sides. This is sometimes referred to as a good neighbor fence. This style fence allows good airflow while maintaining privacy. If damage is only to the paint or stain, it can be power washed and refinished for a proper repair. If unstained, no repair is necessary',
                image: 'images/outdoor/fence/shadow-box.jpg',
              },
              {
                name: 'Picket fence',
                description:
                  "Picket fences are distinguished by their evenly spaced vertical boards, the pickets, attached to horizontal rails.  Similar to the board fence the Picket Fence is constructed using Posts, Rails, but instead of using unspaced boards it uses decorative pickets evenly spaced. Usually 3-4' high but can be 5-6' high. If damage is only to the paint or stain, it can be power washed and refinished for a proper repair. If unstained, no repair is necessary",
                image: 'images/outdoor/fence/picket.jpg',
              },
              {
                name: 'Split rail fence',
                description:
                  "Usually Constructed of Cedar hand split posts and rails for a rustic look.  2 rails fence is usually 3' high, 3 rails 4' high.  vertical posts placed in the ground, having holes (mortises) in each side into which the roughly pointed ends of split rails are placed.  Be aware that sometimes these fences have an additional wire mesh or welded wire mesh installed in order to keep small animals or pets from going through them. May also be called a “ranch” fence",
                image: 'images/outdoor/fence/split-rail.jpg',
              },
              {
                name: 'Vinyl fence',
                description:
                  "Fence created from vinyl or PVC plastic can be used to mimic most styles of wood fencing.  Can range from 3' to 8' tall",
                image: 'images/outdoor/fence/vinyl.jpg',
              },
              {
                name: 'Chainlink fence',
                description:
                  'Constructed of galvanized posts set in concrete on 8’ or 10’ centers.  Line posts are 1 5/8” diameter, end, corner, and gate posts are 2” diameter, top rail is 1 3/8” diameter.  Chain-link fabric or wire mesh is then attached to the post and rail frame. Galvanized and Vinyl coated fabric is available in the following heights, 3’, 3 ½’, 4’, 5’, 6’',
                image: 'images/outdoor/fence/chain-link.jpg',
              },
              {
                name: 'Wrought iron fence',
                description:
                  'Constructed of iron welded together to create sections wrought iron fences can be simple (FEN#) or ornate (FEN#+) in design.  Does not provide privacy as other fences styles do but does provide additional security.  Repairs and replacements are usually expensive as they are custom built and finished onsite',
                image: 'images/outdoor/fence/wrought-iron.jpg',
              },
              {
                name: 'Aluminium fence',
                description:
                  'Constructed of aluminum fence panel, posts set in concrete, usually 3’-4’ in height with 2” x 2” posts 6’ on center',
                image: 'images/outdoor/fence/aluminium.jpg',
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
          'The exteriors of American homes can consist of a variety of materials and components. Vinyl, Fiber Cement, wood, and brick veneers are most common',
        image: 'images/siding-wrap-components/siding/vinyl-wide.jpg',
        types: [
          {
            name: 'Siding',
            image: 'images/siding-wrap-components/siding/vinyl.jpg',
            options: [
              {
                name: 'Vinyl siding',
                description:
                  'Vinyl siding is a plastic used to cover and protect the exterior of a dwelling. Its various designs can imitate wood siding, board and batten or shakes. This is a common and cost-effective alternative to wood, aluminum or fiber cement materials',
                image: 'images/siding-wrap-components/siding/vinyl.jpg',
              },
              {
                name: 'Aluminium siding',
                description:
                  'Aluminum siding is a material used to cover and protect the exterior of a building. It comes in a variety of prefinished colors from the manufacturer.  The texture of the siding is made to imitate wood grain',
                image: 'images/siding-wrap-components/siding/aluminium.jpg',
              },
              {
                name: 'Wood siding',
                description:
                  'Wood siding is a natural material used to cover and protect the exterior of a dwelling. Depending on the style of wood siding it can be oriented in either a horizontal or vertical direction. If damage is only to the paint or stain, it can be power washed and refinished for a proper repair',
                image: 'images/siding-wrap-components/siding/wooden.jpg',
              },
              {
                name: 'Stucco siding',
                description:
                  'Stucco is a cement-based material that offers solid and impact resistant protection to the exterior of the dwelling. Hard-coat stucco is very resistant to storm damage, but synthetic stucco boards may be susceptible to impacts from hail or flying debris. Synthetic stucco can be repairs be replacing the board',
                image: 'images/siding-wrap-components/siding/stucco.jpg',
              },
              {
                name: 'Brick Veneer',
                description:
                  'Brick siding or Brick Veneer is a freestanding material that is installed on the exterior of the framed wall. It is attached to the framing by brick ties that prevent them from falling over. Traditionally, brick veneers do not structurally support the roof and are purely aesthetic',
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
                  'House wraps prevent moisture that gets behind the siding from damaging the framing. It also is used to prevent drafts caused by wind entering through cracks or openings in the siding',
                image: 'images/siding-wrap-components/wrap/house.webp',
              },
              {
                name: 'Foil Vapor Barrier',
                description:
                  'Foil Vapor Barriers prevent moisture that gets behind the siding from damaging the framing. It also is used to prevent drafts caused by wind entering through cracks or openings in the siding. Foil Vapor Barriers also provides limited insulating effects',
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
                  'Inside corner posts are used on the inside corners where 2 adjacent walls meet. It covers the cut ends of the siding and provides better aesthetics. It is available in either metal or vinyl depending on the siding being used',
                image:
                  'images/siding-wrap-components/siding-components/inside-corner-post.jpg',
              },
              {
                name: 'Outside corner post',
                description:
                  'Outside corner posts are used on the outside corners where 2 adjacent walls meet. It covers the cut ends of the siding and provides better aesthetics. It is available in either metal or vinyl depending on the siding being use',
                image:
                  'images/siding-wrap-components/siding-components/outside-corner-post.jpg',
              },
              {
                name: 'J trim',
                description:
                  'J-Trim is used to cover the cut ends of the siding around doors and windows. It is used to help control water runoff around these openings. It is available in either metal or vinyl depending on the siding being used. May also be called J-channel',
                image:
                  'images/siding-wrap-components/siding-components/j-trim.jpg',
              },
              {
                name: 'Dryer Vent Cover',
                description:
                  'A dryer vent cover prevents animals from crawling into the vent tube while also allowing the dryer to properly vent to the outside',
                image:
                  'images/siding-wrap-components/siding-components/dryer-vent-cover.jpg',
              },
            ],
          },
          {
            name: 'Air Conditioner (A/C) Condenser',
            image: 'images/outdoor-structures/condenser.jpg',
            options: [
              {
                name: 'Air Conditioner (A/C) Condenser',
                description:
                  "Thin metal slats that run along the outline of your exterior AC unit. The purpose of the condenser fins is to move warm air away from the air conditioner while it's running",
                image: 'images/outdoor-structures/condenser.jpg',
              },
            ],
          },
          {
            name: 'Exterior Light Fixtures',
            image: 'images/lights/light-fixture-wide.jpeg',
            options: [
              {
                name: 'Exterior Light Fixtures',
                description:
                  'Exterior light fixtures are used to illuminate exterior areas around the property. Typically found near an entrance/exit of the dwelling or Other Structures',
                image: 'images/lights/light-fixture-wide.jpeg',
              },
            ],
          },
        ],
      },
      {
        name: 'Other Structures',
        icon: 'images/windows.svg',
        hotspot: {
          top: 50,
          left: 137,
        },
        description:
          'An “Other Structure” is detached from the main Dwelling, Other Structures may include but are not limited to detached garages that house automobiles, sheds that house lawn or garden equipment, green houses or fencing of all types. A deck is NOT an “other structure” unless it is freestanding (Not physically attached to the Dwelling)',
        image: 'images/outdoor-structures/garage-door.jpg',
        types: [
          {
            name: 'Garage',
            image: 'images/outdoor-structures/garage.jpg',
            options: [
              {
                name: 'Garage',
                description:
                  'A structure used to store automobiles, motorcycles or to accommodate any large/small storage needs. A garage will typically have a large door for access, but multiple smaller doors are common as well. Garages are typically built with the same construction material and techniques as the main dwelling for aesthetic purposes. A garage can be standalone (other structure) or share a common wall with the dwelling',
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
                  'Smaller standalone structures made of prefinished metal panels with little to no internal framework. Typically has a small sliding door for access. Used to store lawn and garden tools or smaller personal items. They are sold in predetermined sizes and can be fastened to a concrete slab or a wood frame base',
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
                  'Smaller standalone structures made of plastic/vinyl panels with no internal framework. Used to store lawn and garden tools or smaller personal items. They are sold in predetermined sizes and can be fastened to a concrete slab or a wood frame base',
                image: 'images/outdoor-structures/vinyl-shed.jpg',
              },
            ],
          },
          {
            name: 'Car port',
            image: 'images/outdoor-structures/carport.png',
            options: [
              {
                name: 'Car port',
                description:
                  'A freestanding structure typically made of light gauge steel or aluminum. It is used to protect automobiles, boats or any other large item from the elements. Generally open sided with exposed framework. As a freestanding structure it can be found anywhere on the property',
                image: 'images/outdoor-structures/carport.png',
              },
            ],
          },
          {
            name: 'Deck or Decking',
            image: 'images/outdoor-structures/back-yard-deck.jpg',
            options: [
              {
                name: 'Deck or Decking',
                description:
                  'A deck can be located anywhere on the house depending on layout but typically found on the back elevation. A deck can only be considered an “Other Structure” if it is not physically attached to the dwelling. If it is physically attached, it is part of the dwelling and would be coverage A. The most common material used for decks is wood but composite materials are becoming more mainstream',
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
                  'A small, open-sided structure used for a variety of activities. Usually a Square/rectangle (4 sided) or octagon (8 sided). Gazeboes may have vinyl, metal, wood, or asphalt coverings. The structure is typically made of wood or metal',
                image: 'images/outdoor-structures/gazebo.jpg',
              },
            ],
          },
          {
            name: 'Porch/Patio',
            image: 'images/outdoor-structures/patio-cover.jpg',
            options: [
              {
                name: 'Porch/Patio',
                description:
                  'An outdoor area typically attached to the dwelling. Can be completely open or screened in. Commonly poured concrete but dirt, loose gravel, and mosaic tiles are all flooring options. If not attached to dwelling would be considered a gazebo',
                image: 'images/outdoor-structures/patio-cover.jpg',
              },
            ],
          },
          {
            name: 'Pole-Barn',
            image: 'images/outdoor-structures/polebarn.jpg',
            options: [
              {
                name: 'Pole-Barn',
                description:
                  'Metal or wood framed structures used as workshops or storage for large machinery or large quantities of personal property. Not pre-fabricated, repairs will typically be to siding and roof like the dwelling structure',
                image: 'images/outdoor-structures/polebarn.jpg',
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
