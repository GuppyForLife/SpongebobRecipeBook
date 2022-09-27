const recipes = [
  {
    title: "Triple Gooberberry Sunrise",
    ingredients:
      "1 cup whole milk;15 g non diastatic malt powder;2 cups heavy cream;15 g carrageenan;1 cup sugar;5 large egg yolks;2 oz whiskey;1 vanilla bean pod, sliced and scraped;Ice;Salt;Water;1 cup whole milk;2 bananas, peeled and halved;3 cherries;3 M&Ms;1 licorice string;Chocolate fudge",
    directions:
      "Into a large pot, whisk to combine 1 cup of whole milk and 15 grams of non-diastatic malt powder. Once fully incorporated, add in 2 cups of heavy cream. Stir to combine.;Separately add 15 grams carrageenan to 1 cup of sugar. Whisk to combine.;Once combined, add the carrageenan and sugar mixture to the pot then whisking until dissolved. Bring to a bare simmer;Stir frequently to make sure the milk doesn’t scorch. Kill the heat once bubbles form.;Into a heatproof bowl, goes 5 large egg yolks. Wrap with a damp towel. Whisk together while slowly ladling in the hot milk and cream mixture.;Start slow, then by the 3rd or 4th ladle, the eggs should be tempered and the milk and cream can be added faster.;In total, 1/3 of the milk and cream mixture should be whisked in before adding back into the large pot of hot milk and cream mixture.;Over medium-low heat, bring the mixture up to 185°F and whisk constantly to make sure nothing is scrambling on the bottom of the pot. The mixture is done once it is 185°F or the liquid coats the back of a spoon.;After killing the heat, add in 2 ounces of whiskey plus the sliced and scraped insides of 1 vanilla bean.;Place a smaller bowl into a larger bowl filled with salted ice and water. Pour the custard into the smaller bowl and whisk occasionally for 10 minutes until it reaches 72°F. Cover with plastic wrap and refrigerate for at least 4 hours or until fully chilled.;Once chilled, churn the custard via the preferred churning method of choice. Remember to remove the vanilla pod.;Churn for about 35 minutes or until a consistency of firm soft served. Scrape into a freezer-safe container (optionally press a layer of wax paper to prevent freezer burn) and freeze for at least 4 hours or overnight.;Peel 2 bananas and slicing them in half and repeatedly skewering with toothpicks before placing in the freezer for 1 hour.;In an ice cream bowl goes 3 large scoops of ice cream. Place in the freezer for 15-20 minutes.;Place a generous dollop of cooled fudge on top of the top scoop and top with a slice of the banana then place 1 slice of banana on each side of the middle scoop.;For the face, place three different colored M&M’s on the top scoop along with a small licorice string for the smile.;To finish, place 3 cherries on the skewered end of each banana.",
  },
  {
    title: "Spongebob's Jellyfish Sandwich",
    ingredients:
      "4 Brioche Buns;1 Jar Grape Jelly;1-2 Lbs Ground Beef;1 Tbsp Garlic Powder;1 Tbsp Onion Powder;1 Tbsp Minced Onions;1 Tbsp Salt;1 Tbsp Pepper",
    directions:
      "In a bowl, add in your ground beef and seasonings. Mix well together and set aside.;On medium heat, in a buttered pan, toast all the buns.;Once buns are nice and toasted, spread on a generous amount of Grape Jelly on one side and set aside.;In the same pan, form 4 even sized patties and cook for 2 minutes each on both sides or to your desired meat temperature (for Ground Beef, exceed internal temperature of 165F).;Once patties are done, place on bun and enjoy!",
  },
  {
    title: "Krabby Patty",
    ingredients:
      "1 pound chuck steak;1 pound bone-in short ribs;Salt & pepper to taste;2 tsp MSG;2 Tbsp vegetable oil;2 ounces shredded iceberg lettuce;1 slice yellow American cheese;1 small vidalia onion, sliced thinly;1 beefsteak tomato, sliced thinly;Ketchup to taste;Mustard to taste;1 large dill pickle, sliced thinly;4 sesame seed hamburger buns",
    directions:
      "Trim and cut beef into 1-inch pieces, and spread evenly on a parchment-lined baking sheet. Place in the freezer for 15 minutes, along with the blade of a food processor, until beef is firm. Pulse in the food processor until beef is ground and pebbly. Shape into 4 patties, and season with salt, pepper, and MSG.;Heat vegetable oil in a large cast iron skillet over medium-high heat until barely smoking.  Add patties and reduce heat to medium - cook to desired doneness.;On the burger buns, assemble the burgers in this order: patty, lettuce, cheese, onion, tomato, ketchup, mustard, pickles, top bun.",
  },
  {
    title: "Grandma's Cookies",
    ingredients:
      "2 1/4 cups all-purpose flour;1 1/4 teaspoons baking soda;1 tablespoon salt;3/4 cup butter, softened;1 1/2 cups packed light brown sugar;2 tbsp pineapple juice;2 eggs;1 tablespoon vanilla extract;2 cups chopped semisweet chocolate chips",
    directions:
      "Line two baking sheets with parchment paper.;Sift together the flour, baking soda and salt.;In a mixer fitted with a paddle, cream the butter and sugars until fluffy, 3 minutes.;Add the eggs, one at a time, then the vanilla and pineapple juice.;Add the flour mixture all at once and blend until a dough forms. Fold in the chocolate.;Chill the dough for at least an hour.;Preheat oven to 325.;Roll 2 1/2 -tablespoon lumps of dough into balls, then place on the baking sheet and flatten to 1/2 -inch-thick disks spaced 2 inches apart.;Chill the dough between batches.;Bake about 15 minutes until the edges are golden brown.",
  },
  {
    title: "3-Days Potato Salad",
    ingredients:
      "3/4 pound Yukon Gold potatoes;3/4 pound red potatoes;1 medium sweet potato, peeled;1/2 cup thinly sliced green onions;1/4 cup canola oil;2 to 3 tablespoons white wine vinegar;1 tablespoon Dijon mustard;1 teaspoon salt;1/2 teaspoon celery seed;1/4 teaspoon pepper",
    directions:
      "Place potatoes and sweet potato in a Dutch oven, cover with water. Bring to a boil. Reduce heat, cover and simmer for 15-20 minutes or until tender. Drain and cool. Cut into 1-in. chunks.;Place potato mixture in a grill wok or basket. Grill, uncovered, over medium heat for 8-12 minutes or until browned, stirring frequently. Transfer to a large salad bowl, add onions.;Whisk the oil, vinegar, mustard, salt, celery seed and pepper. Drizzle over potato mixture and toss to coat. Serve warm or at room temperature.",
  },
  {
    title: "Krusty Krab Pizza",
    ingredients:
      "1/2 pound ground beef;1 prebaked 12-inch pizza crust;1/2 cup ketchup;1/4 cup prepared mustard;1-1/2 cups shredded cheddar cheese;2 cups shredded lettuce;1/2 cup chopped dill pickle;1/4 cup chopped onion;1/2 cup mayonnaise;2 to 3 tablespoons dill pickle juice",
    directions:
      "Preheat oven to 425°. In a large skillet, cook beef over medium heat until no longer pink, 3-4 minutes, breaking it into crumbles, drain.;Meanwhile, place crust on an ungreased baking sheet or pizza pan. Mix ketchup and mustard, spread over crust. Add ground beef, bake 5 minutes. Sprinkle with cheese, bake until cheese is bubbly and crust is lightly browned, 8-10 minutes longer.;Top with lettuce, pickle and onion. Whisk mayonnaise and enough pickle juice to reach desired consistency, drizzle over pizza.",
  },
];

const users = [
  {
    username: "Mr. Krabs",
    name: "Eugene Krabs",
    password: "Money$",
    email: "eugene.krabs@bikinibottom.net",
    isAdmin: false,
  },
  {
    username: "Grams",
    name: "Grandma Squarepants",
    password: "PatrickIsMyFavorite",
    email: "grandma.squarepants@bikinibottom.net",
    isAdmin: false,
  },
  {
    username: "IHateItHere",
    name: "Squidward Tentacles",
    password: "SquilliamSucks",
    email: "squidward.tentacles@bikinibottom.net",
    isAdmin: false,
  },
  {
    username: "Tom",
    name: "Tom Smith",
    password: "CHOCOLATE",
    email: "tom.smith@bikinibottom.net",
    isAdmin: false,
  },
  {
    username: "SBobSPants",
    name: "SpongeBob Squarepants",
    password: "JellyFish",
    email: "spongebob.squarepants@bikinibottom.net",
    isAdmin: true,
  },
  {
    username: "WalterTheWaitor",
    name: "Walter Waitor",
    password: "goofyGoobs",
    email: "walter.waitor@bikinibottom.net",
    isAdmin: false,
  },
];

module.exports = {
  recipes,
  users,
};
