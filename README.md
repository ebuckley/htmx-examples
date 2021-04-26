#lighting talk on htmx and html over the wire

Matt asked me to give a lightning talk about something, and I wasn't immediately sure what I would cover, htmx is a pretty nifty tool I recently came across, and I decided that this would be a good place to start for the talk. The project here is the result of the talk, and I hope to include a few examples for you to follow along with.

htmx is a tool for building web applications with a minimal amount of front end javascript. It is a productive choice for solo projects, and a good way to keep focus on the important backend logic.

HTML over the wire is a current trend coming out of the rails camp. DHH, has been on the record in a few places promoting this approach, and it has been used in produciton with the hey email service. It is not what I would call 'sexy' technology, but instead it is a solidification of some observed patterns in web application development since the early 2000's.

It is an alternative to building out a lot of components and wiring them up to state frameworks and then de/serializing data in and out of a JSON api. Plain old html is sent over the wire instead, and the browser renders it as necessary. The htmx framework is in my opinion a good place to start with this pattern, and it fits in to just about any backend you can imagine.

Projects that use this approach have a much smaller bundle, and will work very well on older cell phone devices. Instead of having any complex business logic or rendering logic in the frontend, all of this is offloaded to the server. In one way, this is a better approach to providing a service, you can't gaurgntee what kind of end device is running your code, and it is very hard to provide an experience that works well on bottom end android's through to the latest and greatest devices.

You do not need to give up highly dynamic components when using an html over the wire approach. Instead, when you bring some javascript to a page, you can focus only on the parts where javascript shines, be that some glue to wire animations or a fancy chart or some rendered canvas interactivity.

As this talk is at a javsacript meetup, I thought I would build out some small examples to show off how you can build web apps, and just focus on the back end.


## Example 1: a simple form in htmx

We have a simple form here which submits to the `/message/` endpoint, and then targets it's ocntent to another div to append the output

## Example 2: routing just the part you want.

We have 'boosted' the page so that the routing will update just the content and not the full body.

## Example 3:

On the homepage, we lazy load the latest messages in to a component.

## Example 4: integrating a js framework/library



# TODO

What I need to do to prep for chch.js

- do an example of integrating a js framework/library
- do other routes for example of 'boosting links'
- nice to have: experiment with websockets.
- nice to have: styles of the whole thing, she's looking pretty prutal right now!!
