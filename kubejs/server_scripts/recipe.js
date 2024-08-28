ServerEvents.recipes(event => {
    event.shaped(
        Item.of("minecraft:stick", 16), [
        'L',
        'L'
    ], {
        L: '#minecraft:logs'
    })
    event.shaped(
        Item.of("minecraft:hopper", 1), [
        'ILI',
        'ILI',
        ' I '
    ], {
        L: '#minecraft:logs',
        I: 'minecraft:iron_ingot'
    })
    event.shaped(
        Item.of('minecraft:string', 4), [
        'W'
    ], {
        W: '#minecraft:wool'
    })

    event.shaped(
        Item.of('#minecraft:wool', 2), [
        'C',
        'C',
        'C'
    ], {
        C: '#minecraft:wool_carpets'
    })

    event.recipes.createMechanicalCrafting('ad_astra:launch_pad', [
        'RSR',
        'SPS',
        'RSR'
    ], {
        S: 'mekanism:block_steel',
        P: 'create:iron_sheet',
        R: 'ad_astra:steel_rod'
    })
    event.recipes.createMechanicalCrafting('ad_astra:tier_1_rocket', [
        '  N  ',
        ' PPP ',
        ' BBB ',
        ' BSB ',
        ' BBB ',
        'FTPTF',
        'F E F'
    ], {
        N: 'ad_astra:rocket_nose_cone',
        B: 'mekanism:block_steel',
        S: '#create:seats',
        F: 'ad_astra:rocket_fin',
        T: 'ad_astra:steel_tank',
        E: 'ad_astra:steel_engine',
        P: 'create:iron_sheet'
    })
    event.recipes.createMechanicalCrafting('ad_astra:tier_2_rocket', [
        '  N  ',
        ' PVP ',
        ' BBB ',
        ' BSB ',
        ' BBB ',
        'FTTTF',
        'F E F'
    ], {
        N: 'ad_astra:rocket_nose_cone',
        B: 'mekanism:block_steel',
        S: '#create:seats',
        F: 'ad_astra:rocket_fin',
        E: 'ad_astra:desh_engine',
        T: 'ad_astra:desh_tank',
        P: 'create:iron_sheet',
        V: 'ad_astra:vent'
    })
    event.recipes.createMechanicalCrafting('ad_astra:tier_3_rocket', [
        '   N   ',
        '  OOO  ',
        '  PVP  ',
        '  BBB  ',
        '  BGB  ',
        '  BSB  ',
        'F BBB F',
        'FRTTTRF',
        'E  E  E'
    ], {
        N: 'ad_astra:rocket_nose_cone',
        O: 'ad_astra:ostrum_plate',
        P: 'create:iron_sheet',
        V: 'ad_astra:vent',
        B: 'mekanism:block_steel',
        E: 'ad_astra:ostrum_engine',
        T: 'ad_astra:ostrum_tank',
        F: 'ad_astra:rocket_fin',
        G: '#forge:glass',
        S: '#create:seats',
        R: 'ad_astra:steel_rod'
    })
    event.recipes.createMechanicalCrafting('ad_astra:tier_4_rocket', [
        '    N    ',
        '   BVB   ',
        '   BGB   ',
        '   BSB   ',
        'F  BBB  F',
        'F  CCC  F',
        'FRRTTTRRF',
        'R   R   R',
        'E   E   E'
    ], {
        N: 'ad_astra:rocket_nose_cone',
        V: 'ad_astra:vent',
        B: 'mekanism:block_steel',
        C: 'ad_astra:calorite_plate',
        E: 'ad_astra:calorite_engine',
        F: 'ad_astra:rocket_fin',
        R: 'ad_astra:steel_rod',
        T: 'ad_astra:calorite_tank',
        S: '#create:seats',
        G: '#forge:glass'
    })

    event.recipes.createSequencedAssembly([
        'create:precision_mechanism'
    ], 'create:golden_sheet', [
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),

        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:gold_nugget']),

        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:iron_nugget']),
        event.recipes.create.pressing('create:incomplete_precision_mechanism', 'create:precision_mechanism')
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(3)

    event.recipes.createSequencedAssembly([
        'easy_villagers:trader'
    ], 'create:iron_sheet', [
        event.recipes.createDeploying('kubejs:incomplete_trader', ['kubejs:incomplete_trader', '#forge:glass']),
        event.recipes.create.pressing('kubejs:incomplete_trader', 'easy_villagers:trader')
    ]).transitionalItem('kubejs:incomplete_trader').loops(4)

    event.recipes.createDeploying('easy_villagers:breeder', ['easy_villagers:trader', 'minecraft:red_bed'])

    event.recipes.createDeploying('easy_villagers:auto_trader', ['easy_villagers:trader', 'minecraft:netherite_ingot'])

    event.recipes.createDeploying('easy_villagers:farmer', ['easy_villagers:trader', 'minecraft:dirt'])

    event.recipes.createDeploying('easy_villagers:converter', ['easy_villagers:trader', 'minecraft:rotten_flesh'])

    event.recipes.createDeploying('easy_villagers:iron_farm', ['easy_villagers:trader', 'minecraft:stone'])

    event.recipes.createDeploying('easy_villagers:incubator', ['easy_villagers:trader', 'minecraft:white_wool'])
    event.recipes.createMixing('ae2:certus_quartz_crystal', [
        'quartz',
        'redstone',
        'glowstone'
    ]).heated()

    event.recipes.create.pressing('create:analog_lever', 'lever')
    event.recipes.createCompacting('minecraft:coal', ['mekanism:block_charcoal'])
    event.recipes.createCompacting('minecraft:diamond', ['minecraft:coal_block'])


    event.remove({ id: 'ad_astra:nasa_workbench/tier_1_rocket' })
    event.remove({ id: 'ad_astra:nasa_workbench/tier_2_rocket' })
    event.remove({ id: 'ad_astra:nasa_workbench/tier_3_rocket' })
    event.remove({ id: 'ad_astra:nasa_workbench/tier_4_rocket' })
    event.remove({ id: 'ad_astra:launch_pad' })
    event.remove({ id: 'create:sequenced_assembly/precision_mechanism' })
    event.remove({ id: 'easy_villagers:trader' })
    event.remove({ id: 'easy_villagers:breeder' })
    event.remove({ id: 'easy_villagers:auto_trader' })
    event.remove({ id: 'easy_villagers:converter' })
    event.remove({ id: 'easy_villagers:farmer' })
    event.remove({ id: 'easy_villagers:incubator' })
    event.remove({ id: 'easy_villagers:iron_farm' })
})
