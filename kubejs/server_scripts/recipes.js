ServerEvents.recipes(event => { 

  event.remove({ mod:'endrem'})
  event.remove({ mod:'itemfilters'})
  event.remove({ mod:'ftbquests'})
  event.remove({ mod:'ftbfiltersystem'})

  event.remove({ output:'cataclysm:monstrous_eye'})  //trocando netherite scrap por diamante
  event.shaped(
        Item.of('cataclysm:monstrous_eye', 1),
        [
          'ABA',
          'CDC', 
          'ABA'
        ],
        {
          A: 'minecraft:lava_bucket',
          B: 'minecraft:diamond',  
          C: 'minecraft:blackstone',
          D: 'minecraft:ender_eye'
        }
    )
    
  event.remove({ output:'cataclysm:flame_eye'})  //trocando netherite scrap por diamante e ouro
  event.shaped(
        Item.of('cataclysm:flame_eye', 1),
        [
          'AAA',
          'BCD', 
          'EEE'
        ],
        {
          A: 'minecraft:blaze_powder',
          B: 'minecraft:diamond',  
          C: 'minecraft:ender_eye',
          D: 'minecraft:gold_ingot',
          E: 'minecraft:soul_sand'
        }
    )

  event.recipes.createMixing('endrem:witch_pupil', [
      'minecraft:spider_eye',
      '4x irons_spellbooks:arcane_essence',
      '4x minecraft:glowstone_dust'
  ]).superheated()

  event.recipes.createMixing('endrem:witch_eye', [
      'minecraft:ender_eye',
      'endrem:witch_pupil',
      'minecraft:crying_obsidian'
  ]).superheated()

  event.remove({ output:'createaddition:electrum_amulet'})  //item roubado

  event.remove({ output:'twilightforest:uncrafting_table'}) //item roubado, balanceando a recipe
  event.recipes.createMechanicalCrafting('twilightforest:uncrafting_table',[
    'FEAEF',
    'EBCBE',
    'ACDCA',
    'EBCBE',
    'FEAEF'
  ], {
    A: 'minecraft:nether_star',
    B: 'minecraft:experience_bottle',
    C: 'twilightforest:maze_map_focus',
    D: 'minecraft:crafting_table',
    E: 'minecraft:diamond',
    F: 'minecraft:netherite_ingot'
  })

  event.remove({ output:'botania:flight_tiara'}) //mudando a recipe do item para requirir uma elytra
  event.shaped(
    Item.of('botania:flight_tiara', 1),
    [
      'AAA',
      'BAB', 
      'CDC'
    ],
    {
      A: 'botania:life_essence',
      B: 'botania:elementium_ingot',  
      C: 'botania:ender_air_bottle',
      D: 'minecraft:elytra'
    }
)

  event.remove({ output:'numismatics:bank_terminal'}) //facilitando o craft, tornar mais "early-game friendly"
  event.shaped(
    Item.of('numismatics:bank_terminal', 1),
    [
        ' A ',
        ' B ', 
        ' C '
      ],
      {
        A: 'minecraft:redstone',
        B: 'create:electron_tube',  
        C: 'createdeco:industrial_iron_ingot'
      }
  )

  event.recipes.create.compacting('minecraft:tuff', [Fluid.lava(10), '4x minecraft:cobblestone'],).heated()  //adicionando recipe pro tuff

  event.shapeless(Item.of('createaddition:zinc_sheet', 1), [  //converter zinc sheet de um mod no outro
      'createdeco:zinc_sheet'
    ])
  event.shapeless(Item.of('createdeco:zinc_sheet', 1), [  //converter zinc sheet de um mod no outro
      'createaddition:zinc_sheet'
    ])

  event.recipes.createFilling('minecraft:oxidized_copper', [  //receita para oxidar copper
    'minecraft:copper_block',
  Fluid.of('minecraft:water', 100)])


})