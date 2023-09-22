## OVERVIEW
* In order to keep this challenge anonymous as possible, I have removed any icons, images, and company naming. 
*   For this challenge, **no data persistence is required**; refreshing the page should reset the recipe selection.

#### Acceptance Criteria

*   The **selected** property determines the recipe's selection, **0 means not selected**, and any integer above 0 is the **number of times** the recipe is **selected**.
*   A customer can **add** a recipe to their box **as many times** as they want, as long as they **don't exceed** the maximum number of **allowed recipes** per box or the recipe's **selection limit.**
*   When the **selection limit** of a recipe is reached, the **add button** should be **disabled** for that recipe
*   When the **maximum** number of allowed recipes in a box is **reached**, the **add button** for all recipes should be **disabled**.
*   When the **minimum** number of selected recipes for that box is **reached**, the copy of all the **add buttons** for the non-selected recipes **changes** from "Add" to "Add Extra Meal".


### Price Calculation & Price Summary

During the selection of recipes, we have to communicate to customers the price of their selection. For this task, you'll implement the price calculation functionality and the price summary user interface.


#### Acceptance Criteria

*   The **price summary** should include the price for **every selected recipe on your box**, the number of **times it is selected**, the **shipping price**, and the **total price**.
*   Some of our recipes with top-quality ingredients have an extra charge; the total price for a recipe is the base recipe price plus the extra charge by the number of times the recipe is selected: `Total Recipe Price = (Base Recipe Price + Extra Charge) * Selected Times`.
*   The **total price** is the **sum** of all the **selected recipes' total price** plus the **shipping price.**
*   The price summary **user interface** should follow the specification of the provided **designs**.


## COMPONENTS

To speed up the time it takes you to solve these tasks we have provided several components that will help you style and structure the user interface.

These components are based on the styled-system specification and rendered using styled-components.


### Box

The Box component serves as a wrapper component for layout related needs. Use Box to set values such as display, width, height, and more. In practice, this component is used as a wrapper around other components to achieve Box Model related styling.

This component uses the following functions from the styled-system: background, border, color, flexbox, layout, position, shadow, and space.

Reference table for styled-system: [https://github.com/styled-system/styled-system/blob/master/docs/table.md](https://github.com/styled-system/styled-system/blob/master/docs/table.md)

We recommend to use long-hand properties, for example:

```js
// Do
<Box borderTopWidth="sm" borderTopColor="border" borderTopStyle="solid" />
// Don't
<Box borderTop="1px solid" borderColor="border" />
```

### Flex

The Flex component behaves the same as the Box component except that it has display: flex set by default.


### List

The List component renders a ul element with list-style-type: none set by default.

This component uses the following functions from styled-system: layout, space.

Reference table for styled-system: [https://github.com/styled-system/styled-system/blob/master/docs/table.md](https://github.com/styled-system/styled-system/blob/master/docs/table.md)


### ListItem

The ListItem component renders a li element, and it's recommended to be used as the children of the List component.


### Text

The Text component is a wrapper component that will apply typography styles to the text inside. It renders a div element as default, but using the ["as" polyphormic property from the styled-components specification](https://styled-components.com/docs/api#as-polymorphic-prop) can render any text element, such as p, h1, span, etc.


### Button

The Button component can use two different variants; primary and secondary, that can be manipulated through the variant property.

This component uses the following functions from styled-system: layout, space.

Reference table for styled-system: [https://github.com/styled-system/styled-system/blob/master/docs/table.md](https://github.com/styled-system/styled-system/blob/master/docs/table.md)


### Grid

Our grid is implemented through the styled-bootstrap-grid [https://github.com/dragma/styled-bootstrap-grid](https://github.com/dragma/styled-bootstrap-grid)
