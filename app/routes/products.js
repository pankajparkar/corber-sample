import Route from '@ember/routing/route';

export default Route.extend({
  // Declare the function bellow, its simply getting all products (that will come from rails)
  model() {
    return [
        {name: 'Pankaj'},
        {name: 'Saurabh'},
        {name: 'Harsh'},
    ];
  }
});