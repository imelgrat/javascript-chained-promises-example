# Chained promises

The `.then()` and `.catch()` methods always return a promise. So you can chain multiple `.then()` calls together. This makes it very simple to create step-by-step actions, where the value returned from each step is used/transformed by the next one.

In this example, 4 promises are chained, passing the transformed value from one step to the next, until the final value is shown on the page.
