/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('index')
})

/** /about /services /projects /contact /faqs /blog   */
Route.get('/about', async ({ view }) => {
  return view.render('about')
})

Route.get('/services', async ({ view }) => {
  return view.render('services/service')
})

Route.get('/projects', async ({ view }) => {
  return view.render('projects/project')
})

Route.get('/contact', async ({ view }) => {
  return view.render('contact')
})

Route.get('/faq', async ({ view }) => {
  return view.render('faqs')
})

Route.get('/blog', async ({ view }) => {
  return view.render('blog/blog')
})

