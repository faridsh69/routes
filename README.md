## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

https://drive.google.com/drive/folders/1FN-rtGUnhI4umCwZPpP6NrsHmhHwUezG

- 0. install next, mui, typescript: yarn create next-app --typescript
- 0. eslint, prettier, husky
- 0. error boundry
- 0. create .env file
- 0. change favicon
- 0. prepare test env
- 1. create a RouteDetails component
- 2. add dropdown for scheduleStrategy
- create enum for scheduleStrategies: Fixed - Semi Flexible - Flexible
- 3. add checkbox for canAddCargo
- 4. add a map for rendering all database records saved in local storage
- 5. create new component StopDetails
- address
-     postal code
-     country
-     city
-     company name
- opening hours
- hasDate
- date
-     date
- hasTime
- time
-     From: select box, each hours,
-     To:
- hasCargoItem
- we have pickup date and arrival date
- piclup date for first one, for others arrival date
- try to call api to get data
- create date formatted input
- create time formatted input, select or ... ?
- try to render hours with minutes as :00
  try to add badge for each of them, for last one create finish flag
  try to add styles
  cargoItem
  Unloading stop: select
  Type: select
  PO number: intiger
  Quantity: intiger
  Total weight: iniger input with kg
  Length: integer input with cm
  Width: integer input with cm
  Height: integer input with cm

* create a line between total weight and length
* create a line for save and cancel

- write test
- add theme
- multi language (for texts also for date input)
