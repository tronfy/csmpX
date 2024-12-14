import crafttweaker.api.loot.modifier.CommonLootModifiers;
import stdlib.List;

loot.modifiers.removeByModId("endrem");
loot.modifiers.removeByModId("scalinghealth");

for modifierName in loot.modifiers.getAllNames() {
    print(modifierName);
}
