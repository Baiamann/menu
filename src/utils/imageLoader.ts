const imageUrls = {
  // Закуски
  'chef-salad': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
  'cold-snacks': 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606',
  'khachapuri': 'https://images.unsplash.com/photo-1628840042765-356cda07504e',
  'eggplant-nuts': 'https://images.unsplash.com/photo-1662487034141-85a8dd877df9',
  'dolma': 'https://images.unsplash.com/photo-1622973536968-3ead9e780960',
  'cheese-plate': 'https://images.unsplash.com/photo-1452195100486-9cc805987862',
  'vegetable-plate': 'https://images.unsplash.com/photo-1540420773420-3366772f4999',
  'bread-basket': 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73',

  // Супы
  'shurpa': 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
  'lagman': 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1',
  'meatball-soup': 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83',
  'kharcho': 'https://images.unsplash.com/photo-1604152135912-04a022e23696',
  'solyanka': 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a',
  'borscht': 'https://images.unsplash.com/photo-1614777986387-015c2a89b696',
  'mushroom-soup': 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
  'pumpkin-soup': 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a',

  // Основные блюда
  'plov': 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15',
  'shashlik': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
  'manty': 'https://images.unsplash.com/photo-1541014741259-de529411b96a',
  'samsa': 'https://images.unsplash.com/photo-1628840042765-356cda07504e',
  'beshbarmak': 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15',
  'kuyrdak': 'https://images.unsplash.com/photo-1559847844-5315695dadae',

  // Напитки
  'green-tea': 'https://images.unsplash.com/photo-1556881286-fc6915169721',
  'black-tea': 'https://images.unsplash.com/photo-1544787219-7f47ccb76574',
  'ayran': 'https://images.unsplash.com/photo-1523671662883-14d56b47df79',
  'compote': 'https://images.unsplash.com/photo-1497534446932-c925b458314e',
  'mors': 'https://images.unsplash.com/photo-1560508180-03f285f67ded',
  'kvas': 'https://images.unsplash.com/photo-1551024739-78e9d60c45ca',
  'lemonade': 'https://images.unsplash.com/photo-1523671662883-14d56b47df79',
  'juice': 'https://images.unsplash.com/photo-1546514714-df0ccc50d7bf',

  // Десерты
  'chak-chak': 'https://images.unsplash.com/photo-1587314168485-3236d6710814',
  'halva': 'https://images.unsplash.com/photo-1515037893149-de7f840978e2',
  'baklava': 'https://images.unsplash.com/photo-1519676867240-f03562e64548',
  'sherbet': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb',
  'kurabie': 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
  'honey-cake': 'https://images.unsplash.com/photo-1464347744102-11db6282f854',
  'fruit-salad': 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7',
  'ice-cream': 'https://images.unsplash.com/photo-1488900128323-21503983a07e'
};

export const getImageUrl = (name: string) => {
  const baseUrl = imageUrls[name as keyof typeof imageUrls];
  // Добавляем параметры для оптимизации изображения
  return `${baseUrl}?auto=format,compress&q=80&fit=crop&w=800&h=600`;
};

export default imageUrls; 