// const person = {
//   name: function () {
//     console.log(this);
//   },
//   fn: () => {
//     console.log(this);
//   },
// };

// person.name(); //person
// person.fn(); // windows this

// function x() {
//   console.log(this);
//   function y() {
//     console.log(this);
//   }
//   y();
// }
// x();

const obj = {
  name: "Arun",
  printName: function () {
    console.log(this.name);
  },
};

obj.printName();

/* Interviews preparation
*Luck
*Can Control
*our Preparations
-() technical  skill 5/5 days
    - everyone knows
-() communication  skills 0/5 days
    - speak through while you code 
        - practice to speak while you code alone
    -if you can't explain then interview think you don't know the code
    - you don't work alone in the company you want to communicate with others also
    - mocks interviews
- Interview day
    - you should not be hustling at last moment be prepare
    - pen and paper
    - water bottle
    - charger
    - keep your camera on 
    - keep your phone on silent
    
- Confidence comes from preparations
    (not just your technical preparation)

*/
