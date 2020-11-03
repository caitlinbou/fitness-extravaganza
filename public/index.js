$(document).ready(() => {
  $(".new-workout").on("click", (event) => {
    window.location.pathname = "/newworkout";
  });

  $(".prior-workout").on("click", (event) => {
    window.location.pathname = "/priorworkouts";
  });

  $(".add").on("click", (event) => {
    // post exercise to db and associate with selected workout
    // data-attr?
  });

  $(".delete-workout").on("click", (event) => {

  });

  $(".update-workout").on("click", (event) => {

  });

  $(".remove-exercise").on("click", (event) => {

  });

  $(".start").on("click", (event) => {
    event.preventDefault();
    window.location.pathname ="/currentworkout"
  });
});
